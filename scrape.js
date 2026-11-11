
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const BASE_URL = "https://ex-coders.com/html/restin/";
const OUTPUT_DIR = "output";

const PAGES = [
    "index.html",
    "index-2.html",
    "index-3.html",
    "about.html",
    "room.html",
    "room-details.html",
    "service.html",
    "service-details.html",
    "facilitie.html",
    "aminities-details.html",
    "team.html",
    "team-details.html",
    "news.html",
    "news-grid.html",
    "news-details.html",
    "testimonial.html",
    "contact.html",
    "404.html",
];

function download(url, dest) {
    return new Promise((resolve, reject) => {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        const file = fs.createWriteStream(dest);
        const client = url.startsWith("https") ? https : http;
        client.get(url, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                file.close();
                return download(res.headers.location, dest).then(resolve).catch(reject);
            }
            res.pipe(file);
            file.on("finish", () => file.close(resolve));
        }).on("error", (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

function urlToLocalPath(url) {
    if (url.startsWith(BASE_URL)) {
        return path.join(OUTPUT_DIR, url.slice(BASE_URL.length).split("?")[0]);
    }
    if (url.startsWith("https://fonts.gstatic.com/")) {
        return path.join(OUTPUT_DIR, "assets", "fonts", url.split("/").pop().split("?")[0]);
    }
    return null;
}

function rewriteHtml(html, assets) {
    for (const url of assets) {
        const localPath = urlToLocalPath(url);
        if (!localPath) continue;
        const relativePath = path.relative(OUTPUT_DIR, localPath).replace(/\\/g, "/");
        html = html.split(url).join(relativePath);
        if (url.startsWith(BASE_URL)) {
            const urlPath = "/" + url.slice("https://ex-coders.com/".length).split("?")[0];
            html = html.split(urlPath).join(relativePath);
        }
    }
    return html;
}

(async () => {
    const browser = await chromium.launch({ headless: true });
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    const downloadedAssets = new Set();
    const allAssetUrls = new Set();
    const pageContents = {};

    for (const page of PAGES) {
        const url = BASE_URL + page;
        console.log(`Scraping: ${url}`);
        const tab = await browser.newPage();

        tab.on("response", async (response) => {
            const resUrl = response.url();
            const type = response.request().resourceType();
            if (["stylesheet", "image", "font", "script"].includes(type)) {
                allAssetUrls.add(resUrl);
            }
        });

        await tab.goto(url, { waitUntil: "networkidle", timeout: 120000 });
        pageContents[page] = await tab.content();
        await tab.close();
    }

    await browser.close();

    // Download all unique assets
    for (const assetUrl of allAssetUrls) {
        const localPath = urlToLocalPath(assetUrl);
        if (!localPath || downloadedAssets.has(localPath)) continue;
        try {
            await download(assetUrl, localPath);
            downloadedAssets.add(localPath);
            console.log(`Downloaded: ${localPath}`);
        } catch (err) {
            console.warn(`Failed: ${assetUrl} — ${err.message}`);
        }
    }

    // Write all pages with rewritten asset URLs
    for (const [page, html] of Object.entries(pageContents)) {
        const rewritten = rewriteHtml(html, allAssetUrls);
        fs.writeFileSync(path.join(OUTPUT_DIR, page), rewritten);
        console.log(`Saved: output/${page}`);
    }

    fs.writeFileSync("output/assets.json", JSON.stringify([...allAssetUrls].map(url => ({ url })), null, 2));
    console.log("\nDone! Open output/index.html in your browser.");
})();

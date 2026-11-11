const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const OUTPUT_DIR = path.join(__dirname, "output");

const MIME_TYPES = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ico": "image/x-icon",
};

http.createServer((req, res) => {
    let filePath = path.join(OUTPUT_DIR, req.url === "/" ? "index.html" : req.url);

    if (!fs.existsSync(filePath)) {
        filePath = path.join(OUTPUT_DIR, "404.html");
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(fs.readFileSync(filePath));
        return;
    }

    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(fs.readFileSync(filePath));
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

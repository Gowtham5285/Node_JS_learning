const http = require("http")
const url = require("url")
http.createServer((req, res) => {
    const urlPath = url.parse(req.url, true)
    if (urlPath.pathname === "/" && req.method === "GET") {
        res.write(JSON.stringify("I am Default API"))
        res.end()
    }
    else if (urlPath.pathname === "/createUser" && req.method === "POST") {
        let body = ""
        req.on("data", (chunk) => { body += chunk.toString() })
        req.on("end", () => {
            res.setHeader("Content", "application/json")
            res.statusCode = 201
            res.write(body)
            res.end()
        })
    }

}).listen(3000, () => console.log("server started on port 3000"))
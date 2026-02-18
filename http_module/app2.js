const http = require("http")
const server = http.createServer((req, res) => {
    // res.write("Node JS server Response!")
    // res.end("  Hello!")
    if (req.url === "/" && req.method === "GET") {
        res.write("Default API")
    }
    else if (req.url === "/products" && req.method === "GET") {
        res.write("Product Details")
    }
    else if (req.url === "/addProducts" && req.method === "POST") {
        res.statusCode = 201
        res.write("Products Added Sucessfully")
    }
    else if (req.url === "/editProducts" && req.method === "PUT") {
        res.statusCode = 200
        res.write("Products Updated Sucessfully")
    }
    else if (req.url === "/deleteProducts" && req.method === "DELETE") {
        res.statusCode = 200
        res.write("Products Deleted Sucessfully")
    }
    else {
        res.statusCode = 404
        res.write("No API Found")
    }
    res.end()
})
server.listen(8000, () => console.log("Server started at the port 8000"))
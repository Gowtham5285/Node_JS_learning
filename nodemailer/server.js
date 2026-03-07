const express = require("express")
const app = express()
const nodeMailer = require("nodemailer")
const fs =require("fs")
require("dotenv").config()
app.use(express.json())
let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.emailUser,
        pass: process.env.emailPass
    }

})
async function sendEmail(email,feedback) {
    try {
        transporter.sendMail({
            from: "gowthamsaivalluri5285@gmail.com",
            to: email,
            cc:"no@reply.com",
            subject: "Hello User",
            text:feedback,
            attachments:[
                {
                    filename:"hello.txt",
                    content:fs.readFileSync("./hello.txt","utf-8"),
                    contentType:"text"
                }
            ]
        })
        console.log("Mail Sended sucessfully")
    } catch (error) {
        console.log("Some error there",error)
    }
}



app.get("/", (req, res) => {
    res.send("I am Default API")
})

app.post("/feedback", (req, res) => {
    try {

        const { email, feedback } = req.body

        res.status(200).json({
            message: "Feedback received successfully",
            email,
            feedback
        })

        sendEmail(email,feedback)

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        })
    }
})

app.listen(process.env.port, () => { console.log("Server started on port 3000") })
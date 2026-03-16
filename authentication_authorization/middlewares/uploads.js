const multer = require("multer")


const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            cb(null, "fileUploads/")
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + file.originalname)
        }
    }
)

exports.multerUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true)
        } else {
            const err = new Error("File type should be images only like jpg, jpeg, png, avg, web")
            cb(err.message, false)
        }
    },
    limits: { fieldSize: 5 * 1024 * 1024 }
})


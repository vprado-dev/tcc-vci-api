const multer = require("multer");
const path = require("path");
const bcrypt = require("bcrypt");
module.exports = {
    dest: path.resolve(__dirname, "..", "public", "uploads"),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, "..", "public", "uploads"));
        },
        filename: (req, file, cb) => {
            var salt = bcrypt.genSaltSync(10);
            var name = bcrypt.hashSync(file.originalname, salt);
            var ext = file.mimetype.split("/")[1];
            var fileName = `${name}.${ext}`;
            cb(null, fileName.replace("/", ""));
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = ["image/jpeg", "image/jpg", "image/png"];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type"));
        }
    }
};

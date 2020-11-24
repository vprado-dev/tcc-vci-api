const multer = require("multer");
const path = require("path");
const bcrypt = require("bcrypt");
module.exports = {
    dest: path.resolve(__dirname, "..", "public", "uploads"),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            console.log("in destination");
            cb(null, path.resolve(__dirname, "..", "public", "uploads"));
        },
        filename: (req, file, cb) => {
            console.log("in filename");
            var date = new Date();
            var salt = bcrypt.genSaltSync(10);
            var name = bcrypt.hashSync(date + file.originalname, salt);
            var ext = file.mimetype.split("/")[1];
            var fileName = `${name}.${ext}`;
            fileName.replace("\\", "");
            cb(null, fileName.replace("/", ""));
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        console.log("in fileFilter");
        const allowedMimes = ["image/jpeg", "image/jpg", "image/png"];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type"));
        }
    }
};

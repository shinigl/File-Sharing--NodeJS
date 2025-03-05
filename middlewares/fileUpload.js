const multer = require("multer");
const path = require("path");
const {v4:uuidv4} = require("uuid");

const filePath = path.join(__dirname,'../uploadedFile')

const storage = multer.diskStorage({
    destination:filePath,
    filename: (req,file,cb)=>{
        const fileExtension = path.extname(file.originalname);
        const fileName = uuidv4()+fileExtension ;
        cb(null,fileName);

    }
    })
    
    const upload = multer({
        storage:storage 
    })

    module.exports = upload ;
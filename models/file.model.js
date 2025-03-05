const mongoose = require('mongoose');


const fileSchemaObject = {
    originalName:{
        type:String
    },
    modifiedName:{
        type:String
    },
    user:{
        type:String
    },
    size:{
        type:Number
    },
    path:{
        type:String
    }
}

const fileSchema = new mongoose.Schema(fileSchemaObject) //to create schema in db
const fileModel = mongoose.model('fileShare',fileSchemaObject) //to create document/collection in db
module.exports = fileModel ;
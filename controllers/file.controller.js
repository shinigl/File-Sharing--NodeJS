const { log } = require('console');
const fileModel = require('../models/file.model')

const fileUpload = async(req,res,next)=>{
       try{
        
         const fileDetails = {
            originalName: req.file.originalname,
            modifiedName: req.file.filename,
            user: 'Aniket Kumar',
            size: req.file.size,
            path : req.file.path
}
        
         const insertFile = await fileModel.create(fileDetails);
        
           res.json({
            success:true,
            message:'File uploaded successfully',
            fileId : insertFile._id
           });

       }
       catch(err){
         next(err);
       }
}
const fileShare = async(req,res,next)=>{
       try{

        const fileDetails = await fileModel.findById(req.body.fileId)
       
        if(!fileDetails){
            res.status(400).json({
                success: false ,
                message : 'File ID does not exist'
            })
            return ;
        }
           res.json({
            success:true,
            message:'File shared successfully',
            data: `/files/download/${fileDetails._id}`
           });

       }
       catch(err){
         next(err);
       }
}

const downloadFile =async (req, res, next) => {
    try{
        const fileDetails = await fileModel.findById(req.params.id)
       console.log(fileDetails)
       if(!fileDetails){
        return res.status(400).json({ success: false, message: "Invalid URL" });
    
       }
       const filePath = fileDetails.path;
       console.log("Attempting to download:", filePath);

       res.download(filePath,fileDetails.originalName)
     

    }catch(err){
        next(err)
    }
}

const fileController = {
    fileShare,
    fileUpload,
    downloadFile,
}

module.exports = fileController;
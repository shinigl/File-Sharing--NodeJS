const express = require("express");
const router = express.Router();
const fileUpload = require("../middlewares/fileUpload")
const fileController = require('../controllers/file.controller');
const upload = require("../middlewares/fileUpload");

router.post('/api/v1/file/upload',upload.single('file'),fileController.fileUpload)
router.post('/api/v1/file/share',fileController.fileShare)
router.get('/files/download/:id',fileController.downloadFile)

module.exports = router ;
const express = require("express");
const mongoose = require("mongoose");
const fileRoutes = require('./routes/file.route')

const app = express();

app.use(express.json());

mongoose
.connect('mongodb://127.0.0.1:27017/fileshare')
.then(()=>console.log('DB connected successfully'))
.catch((err)=>console.log(`Error connecting DB:`,err))

app.use(fileRoutes);



app.listen(5000,()=>console.log('Server running successfully at port 5000'))
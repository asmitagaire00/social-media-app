//calling all the required packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors= require("cors");
const morgan = require("morgan");
const multer = require("multer");
const path= require("path");

const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require("./routes/posts")


dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser:true},
  )
  .then(()=>console.log('mongoose connected'))
  .catch(e=>console.log(e));

//middleware    
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors())

app.use((req, res, next) => {
  res.header("Cross-Origin-Resource-Policy", "cross-origin")
  next()
})

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)

app.use("/images",express.static(path.join(__dirname, "public/images")))

//storing files to the disk using disk storage engine: multer
const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name)
  }
})

const upload = multer({ storage: multerStorage});
app.post("/api/upload", upload.single("file"), (req,res)=>{
  try{
    return res.status(200).json({message:"File uploaded successfully"})
  }
  catch(err){console.log("error in file uploading", err)}
})

app.listen(8800,()=>{
    console.log("Backend server is running")
})
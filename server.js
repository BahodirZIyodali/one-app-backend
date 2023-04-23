const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const jobRouter =require("./ctrAndRouter/jobs")
const vacanciesRouter =require("./ctrAndRouter/vacancies")
const imagesRouter =require("./ctrAndRouter/images")
const compRouter =require("./ctrAndRouter/componies")

dotenv.config()
const PORT = process.env.PORT || 5001

const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173/"); // Update with the origin that you need to allow
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  // With vanilla Node.js http module
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173/"); // Update with the origin that you need to allow
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end();
  });
  
app.use(express.json())
app.use(jobRouter)
app.use(vacanciesRouter)
app.use(imagesRouter)
app.use(compRouter)





app.listen(PORT, ()=>console.log("Runnning on " + PORT))
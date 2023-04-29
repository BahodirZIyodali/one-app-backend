const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const jobRouter =require("./ctrAndRouter/jobs")
const vacanciesRouter =require("./ctrAndRouter/vacancies")
const compRouter =require("./ctrAndRouter/componies")
const articleRouter =require("./ctrAndRouter/article")
dotenv.config()
const PORT = process.env.PORT || 5001


const app = express()
app.use(function(_, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
   
  });
  
app.use(express.json())
app.use(cors());
app.use(jobRouter)
app.use(vacanciesRouter)
app.use(compRouter)
app.use(articleRouter)



app.listen(PORT, ()=>console.log("Runnning on " + PORT))

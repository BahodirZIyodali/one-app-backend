const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const jobRouter =require("./ctrAndRouter/jobs")
dotenv.config()
const PORT = process.env.PORT || 5001

const app = express()
app.use(express.json())
app.use(cors())

app.use(jobRouter)




app.listen(PORT, ()=>console.log("Runnning on " + PORT))
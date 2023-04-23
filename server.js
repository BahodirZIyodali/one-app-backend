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
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))

app.use(jobRouter)
app.use(vacanciesRouter)
app.use(imagesRouter)
app.use(compRouter)





app.listen(PORT, ()=>console.log("Runnning on " + PORT))
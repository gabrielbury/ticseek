import express from "express"

import * as dotenv from "dotenv"
dotenv.config()

import { aiPlayRouter } from "./router"


const app = express()
app.use(express.json())

app.use(aiPlayRouter)

const port = process.env.PORT || 3000
app.listen(port, () => { console.info(`Server is up and running on port ${port}`) })
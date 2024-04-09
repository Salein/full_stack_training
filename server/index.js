require("dotenv").config()

const express = require("express")

const PORT = process.env.PORT || 8000

const app = express()

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT: ${PORT}`))

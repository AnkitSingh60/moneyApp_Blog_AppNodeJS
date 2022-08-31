const express = require("express");
const app = express();
const connect = require("./config/db")
app.use(express.json());

const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.get("/", (req, res) => {
    res.status(200).send("Server is running...")
})

app.listen(PORT, async function () {
    try {
        await connect();
    } catch (error) {
        console.log('error:', error.message)
    }
    console.log(`listening on port ${PORT}...`);
})
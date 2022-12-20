const express = require('express');
const app = express();
const port = process.env.PORT || 8000
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoose = require('mongoose');
async function main() {
    await mongoose.connect( process.env.MONGODB_URI);
    }

main().catch(err => console.log(err)).then(() => console.log("database is connected"));


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
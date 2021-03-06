const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config()

//app
const app = express()

//db
mongoose.connect(process.env.DATABASE, {
}).then(() => console.log('DB connected'));

//routes
app.get('/', (req, res) => {
    res.send('hello from node updated');
});

const port = process.env.PORT || 8000

app.listen(port, () => {
console.log(`server is running on port ${port}`);
});

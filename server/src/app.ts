import { urlencoded } from "body-parser";

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser,urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})




import { urlencoded } from "body-parser";
const pool = require('./config/db');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser,urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));


const testQuery = async () => {
    try {
      const result = await pool.query('SELECT NOW()');
      console.log('Database Time:', result.rows[0]);
    } catch (err) {
      console.error('Error executing query', err);
    } finally {
      pool.end(); // Close the connection
    }
  };
  
  testQuery();

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})




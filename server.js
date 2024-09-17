const express = require('express')
const mongoose = require('mongoose')
const routes = require('./src/routes')
const securityHeaders = require('./src/middlewares/security.header')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.use(securityHeaders)
app.use(routes)

mongoose.connect('mongodb://localhost:27017/testdb')
.then(()=>{
    console.log('connected to db');
    
})
.catch((error)=>{
  console.log('error connecting db',error);
  
})


const startServer = async () => {
    try {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
      });
    } catch (error) {
      console.error("error in connecting to server ", error);
      process.exit(1);
    }
  };
  
  // Start the app
  startServer();
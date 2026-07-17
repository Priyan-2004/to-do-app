/*backend documentation - this file used to navigate the incomming request to their 
currosponing router handler*/
require("dotenv").config();
const express = require('express')
const cors = require('cors')  // ✨ 1. Import the cors package
const mongoose = require('mongoose')
const app = express()

// set the middleware
app.use(cors())
app.use(express.json())


// connect the backend to the databade
const URI = process.env.MONGO_URI;
mongoose.connect(URI)
    .then(() => console.log('Database is connect to the server'))
    .catch((err) => {
    console.log("Database Connection Error:");
    console.log(err);
});

// activate the route if get request form the api/todos
const todoRouts = require('./routes/todos.js')
app.use('/api/todos', todoRouts)  // if any request we get then trigger the routs.get() and routs.put()

// define the port number 
const PORT  = 5000

// start the server 
app.listen(PORT, () => console.log(`✅Server is running on ${PORT}`))




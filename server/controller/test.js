const express = require('express');
const mongoose = require('mongoose');

//const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas (replace connection string with your actual MongoDB Atlas connection string)
mongoose.connect('mongodb+srv://alokiksingh2:historicsitefinder@historicsiteffnder.eul1kwi.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true                      ,
})
const path = require('path');
const SiteController = require(path.resolve(__dirname, '../controller/SiteController'));

// Use the SiteController module

//const express = require('express');
const app = express();

// Mock request and response objects
const req = {};
const res = {
    json: data => console.log('Response:', data),
    status: code => {
        console.log('Status:', code);
        return res; // Return the response object for chaining
    }
};

// Simulate invoking the getSites controller function
SiteController.getSites(req, res) // Call getSites through SiteController object
    .then(() => console.log('Controller function executed successfully'))
    .catch(error => console.error('Error executing controller function:', error));


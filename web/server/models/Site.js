// Initiate a connection to MongoDB Atlas and insert sample data

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas (replace connection string with your actual MongoDB Atlas connection string)
mongoose.connect('mongodb+srv://alokiksingh2:historicsitefinder@historicsiteffnder.eul1kwi.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB Atlas");
  // Define User schema
  const siteSchema = new mongoose.Schema({
    sitename: { type: String, required: true },
    sitelocation: { type: String, required: true },
    sitedescription: { type: String, required: true },
    site_rating: { type: String, required: true },
  });

  // Create UserModel
  const SiteModel = mongoose.model('Site', siteSchema);
  
  // Sample user data
  const sampleSiteData = {
    sitename: 'Tower of London',
    sitelocation: '123 street, city, state, zip code',
    sitedescription: 'It is the best site in the world.',
    site_rating: '3/5',
  };
  
  // Insert sample data into MongoDB Atlas
  async function insertSampleData() {
    try {
      await SiteModel.create(sampleSiteData);
      console.log('Sample data inserted successfully.');
    } catch (error) {
      console.error('Error inserting sample data:', error);
    }
  }
  
  // Call the function to insert sample data
  insertSampleData();
})
.catch((error) => {
  console.error("Error connecting to MongoDB Atlas:", error);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

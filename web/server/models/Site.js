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
    site_community: { type: String, required: true },
    site_constructiondate: { type: String, required: true },
    site_typology: { type: String, required: true },
    site_OriginalOwner: { type: String, required: true },
    site_masterPlan: { type: String, required: true },
    site_Architect: { type: String, required: true },
    site_ArchitecturalStyle: { type: String, required: true },
    site_era: { type: String, required: true },
    site_currentUse: { type: String, required: true },
    site_Demolished: { type: String, required: true },
    sitedescription: { type: String, required: true },
    site_URL: { type: String, required: true },
  //  site_rating: { type: String, required: true },
  });

  // Create the model using the schema
const SiteModel = mongoose.model('Site', siteSchema);

// Export the model
module.exports = SiteModel;

})
.catch((error) => {
  console.error("Error connecting to MongoDB Atlas:", error);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



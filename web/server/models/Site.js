// Initiate a connection to MongoDB Atlas and insert sample data

const mongoose = require('mongoose');



const siteSchema = new mongoose.Schema({
    sitename: { type: String, required: true },
    sitelocation: { type: String, required: true },
    site_community: { type: String, required: false },
    site_constructiondate: { type: String, required: false },
    site_typology: { type: String, required: false },
    site_OriginalOwner: { type: String, required: false },
    site_masterPlan: { type: String, required: false },
    site_Architect: { type: String, required: false },
    site_ArchitecturalStyle: { type: String, required: false },
    site_era: { type: String, required: false },
    site_currentUse: { type: String, required: false },
    site_Demolished: { type: String, required: false },
    sitedescription: { type: String, required: false },
    site_URL: { type: String, required: false },
    site_rating: [{ type: Number }],
    site_point: {type: String, required:false}
});

  // Create the model using the schema
const SiteModel = mongoose.model('Site', siteSchema);

// Export the model
module.exports = SiteModel;

// .catch((error) => {
//   console.error("Error connecting to MongoDB Atlas:", error);
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



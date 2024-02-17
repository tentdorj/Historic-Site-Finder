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
  // Call the function to import data from CSV
  importDataFromCSV();
})
.catch((error) => {
  console.error("Error connecting to MongoDB Atlas:", error);
});

const fs = require('fs');
const csvParser = require('csv-parser');

const SiteModel = require('../models/Site.js'); // Import SiteModel schema/model


// Hardcoded file path
const filePath = 'web/server/controller/Historic_Resource_20240217.csv';

// Function to import data from CSV file
async function importDataFromCSV() {
  try {
    console.log('Starting to import data from CSV...');
    const data = [];
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', async (row) => {
        try {
          console.log('Processing row:', row);
          // Extract specific columns from the row
          const { NAME, ADDRESS, COMMUNITY, CONSTRUCTION_YR, TYPOLOGY, ORIG_OWNER, MASTER_PLAN_THEME, ARCHITECT, ARCHITECTURE_STYLE, DEVELOPMENT_ERA, CURRENT_USE, DEMOLISHED_DT, SIGNIFICANCE_SUMM, PIC_URL } = row;
          // Create an object with the extracted data
          const siteData = {
            sitename: NAME,
            sitelocation: ADDRESS,
            site_community: COMMUNITY,
            site_constructiondate: CONSTRUCTION_YR,
            site_typology: TYPOLOGY,
            site_OriginalOwner: ORIG_OWNER,
            site_masterPlan: MASTER_PLAN_THEME,
            site_Architect: ARCHITECT,
            site_ArchitecturalStyle: ARCHITECTURE_STYLE,
            site_era: DEVELOPMENT_ERA,
            site_currentUse: CURRENT_USE,
            site_Demolished: DEMOLISHED_DT,
            sitedescription: SIGNIFICANCE_SUMM,
            site_URL: PIC_URL,
          };
          // Insert data into MongoDB
          await SiteModel.create(siteData);
          data.push(siteData); // Optionally push siteData into data array
        } catch (error) {
          console.error('Error processing row:', error);
        }
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
        console.log('Imported data:', data); // Log imported data
      });
    return data;
  } catch (err) {
    console.error('Error importing data from CSV:', err);
    throw err;
  }
}

module.exports = { importDataFromCSV };

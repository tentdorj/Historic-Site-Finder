// importController.js

const fs = require('fs');
const csvParser = require('csv-parser');
const UserModel = require('../models/userModel'); // Import UserModel schema/model

// Function to import data from CSV file
async function importDataFromCSV(filePath) {
  try {
    // Read CSV file
    const csvData = fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', async (row) => {
        // Extract specific columns from the row
        const { name, email, age } = row;

        // Create an object with the extracted data
        const userData = {
          name,
          email,
          age: parseInt(age), // Assuming age is a string in the CSV
        };

        // Insert data into MongoDB
        await UserModel.create(userData);
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
      });

    return csvData;
  } catch (error) {
    console.error('Error importing data from CSV:', error);
    throw error;
  }
}

module.exports = { importDataFromCSV };

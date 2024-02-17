// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://alokiksingh2:<historicsitefinder>@historicsiteffnder.eul1kwi.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });



// const sampleUserData = {
//     userToken: 'abc123',
//     username: 'john_doe'
//   };
  
//   // Insert sample data into MongoDB Atlas
//   async function insertSampleData() {
//     try {
//       await UserModel.create(sampleUserData);
//       console.log('Sample data inserted successfully.');
//     } catch (error) {
//       console.error('Error inserting sample data:', error);
//     }
//   }
  
//   // Call the function to insert sample data
//   insertSampleData();


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
  const userSchema = new mongoose.Schema({
    userToken: { type: String, required: true },
    username: { type: String, required: true },
  });
  // Create UserModel
  const UserModel = mongoose.model('User', userSchema);
  
  // Sample user data
  const sampleUserData = {
    userToken: 'abc123',
    username: 'john_doe'
  };
  
  // Insert sample data into MongoDB Atlas
  async function insertSampleData() {
    try {
      await UserModel.create(sampleUserData);
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

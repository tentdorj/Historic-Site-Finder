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
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    badge: { type: Number, required: true, unique: true },
    comments: [{
      description: { type: String, required: true },
      date: { type: Date, required: true },
      likes: { type: Number, required: true },
    }]
  });
  // Create UserModel
  const UserModel = mongoose.model('User', userSchema);
})
.catch((error) => {
  console.error("Error connecting to MongoDB Atlas:", error);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

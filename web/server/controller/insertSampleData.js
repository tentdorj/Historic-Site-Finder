require('dotenv').config(); // Load MongoDB URI from .env file
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User.js'); // Adjust the path to your User model

const sampleUsers = [
  {
    name: "John Doe",
    username: "johndoe",
    password: "password123",
    badge: 1,
    karmaRating: 100
  },
  {
    name: "Jane Smith",
    username: "janesmith",
    password: "password456",
    badge: 2,
    karmaRating: 150
  },
  {
    name: "Alice Johnson",
    username: "alicejohnson",
    password: "password789",
    badge: 1,
    karmaRating: 200
  }
];

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

const insertSampleData = async () => {
  await User.deleteMany({}); // Optional: Clears the User collection before insertion

  for (const user of sampleUsers) {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    await User.create({ ...user, password: hashedPassword });
  }

  console.log('Sample data inserted successfully.');
  mongoose.disconnect(); // Disconnect from MongoDB once done
};

insertSampleData().catch(console.error);

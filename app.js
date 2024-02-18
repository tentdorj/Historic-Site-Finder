require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
// const authMiddleware = require('./middleware/authMiddleware');

const authRoutes = require('./web/server/controller/UserController');
const commentRoute = require('./web/server/controller/commentController');

const app = express();
app.use(express.json());

//  
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.use('/api', authRoutes);
app.use('/api', commentRoute);



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
// const authMiddleware = require('./middleware/authMiddleware');

const authRoutes = require('./web/server/routes/UserRoute');

const app = express();
app.use(express.json());

//  
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.use('/api', authRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

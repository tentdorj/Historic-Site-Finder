
import express from 'express';
import { 
    login,
    signup,

} from '../controllers/UserController';

const router = express.Router();


router.post('/login', login);
router.post('/signup', signup);



export default router;





// async function hashPassword(password) {
//   const salt = await bcrypt.genSalt(10); // Generate salt
//   const hash = await bcrypt.hash(password, salt); // Generate hash
//   return hash;
// }

// async function comparePassword(plainTextPassword, hashedPassword) {
//     return await bcrypt.compare(plainTextPassword, hashedPassword);
// }

  
// router.post('/login', async (req, res) => {
//     try {
//       const { username, password } = req.body;
//       const user = await User.findOne({ username });
  
//       if (!user) {
//         return res.status(401).json({ message: 'Login failed: User not found' });
//       }
  
//       const isMatch = await comparePassword(password, user.password);
//       if (isMatch) {
//         // Passwords match
//         // Proceed with login logic (e.g., token generation)
//         res.json({ message: 'Login successful' });
//       } else {
//         // Passwords do not match
//         res.status(401).json({ message: 'Login failed: Incorrect password' });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'An error occurred during login' });
//     }
// });
  

module.exports = router;







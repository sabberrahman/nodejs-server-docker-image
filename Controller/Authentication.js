
import User from "../model/User.js"
import bcrypt  from "bcryptjs"
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();


export const registerUser = async (req, res) => {
    try {
        const { first_name, last_name, username, email, password } = req.body;

        
        
        let existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: "Username or email already taken" });
        }

        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        
        const newUser = new User({
            first_name,
            last_name,
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


export const loginUser = async (req, res) => {
    try {
      const { username, password } = req.body;
  
    
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
  
      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
   
      const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
  
      res.status(200).json({
        message: "Login successful",
        token,
        user: { id: user._id, username: user.username, email: user.email }
      });
  
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };


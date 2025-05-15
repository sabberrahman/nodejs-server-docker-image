import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { loginUser, registerUser } from "./Controller/Authentication.js";
import connectToDB from './Controller/ConnectToDB.js';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

connectToDB();


app.get('/', (req, res) => {
  res.send(`Server is running at port ${PORT}`);
});

app.post('/api/auth/register/', async (req, res) => {
  await registerUser(req, res);
});

app.post("/api/auth/login/", async (req,res)=>{
 await  loginUser(req,res)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/personal-finance-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = 5000; // Define the port variable here

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }
  const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
  res.json({ token });
});

app.listen(port, () => { // Use the port variable here
  console.log(`Server is running on port ${port}`);
});*/
/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
 app = express();
const PORT = 5000;


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/personal-finance-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const port = 5000;
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }
  const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
  res.json({ token });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});*/
/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/personal-finance-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }
  const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/
// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/finance_manager", { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({ email: String, password: String });
const User = mongoose.model("User", UserSchema);

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });
  res.json({ message: "Login successful", token });
});

app.listen(5000, () => console.log("Server running on port 5000"));

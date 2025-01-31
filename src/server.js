const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const validator = require('validator');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());
app.use(cors()); 
mongoose
  .connect('mongodb://127.0.0.1:27017/garmentIndustry', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.error('MongoDB connection error:', err));

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  dob: { type: Date, required: true },
});

const Admin = mongoose.model('Admin', adminSchema);
const User = mongoose.model('User', userSchema);

app.post('/admin/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (admin && (await bcrypt.compare(password, admin.password))) {
      res.status(200).json({ message: 'Admin login successful', success: true });
    } else {
      res.status(401).json({ message: 'Invalid email or password', success: false });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', success: false });
  }
});

app.post('/user/signup', async (req, res) => {
  const { name, email, phone, password, dob } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format', success: false });
  }
  if (!validator.isMobilePhone(phone, 'en-IN')) {
    return res.status(400).json({ message: 'Invalid phone number', success: false });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters', success: false });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists', success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, phone, password: hashedPassword, dob });
    await newUser.save();
    res.status(201).json({ message: 'Signup successful', success: true });
  } catch (error) {
    res.status(500).json({ message: 'Server error', success: false });
  }
});

// User Login
app.post('/user/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({ message: 'Login successful', success: true });
    } else {
      res.status(401).json({ message: 'Invalid email or password', success: false });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', success: false });
  }
});

// Seed Admin User (Optional: Run this once to create an admin user)
app.get('/seed-admin', async (req, res) => {
  const adminEmail = 'admin@garment.com';
  const adminPassword = 'admin123';

  try {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    const adminExists = await Admin.findOne({ email: adminEmail });

    if (!adminExists) {
      const newAdmin = new Admin({ email: adminEmail, password: hashedPassword });
      await newAdmin.save();
      res.status(201).json({ message: 'Admin seeded successfully', success: true });
    } else {
      res.status(400).json({ message: 'Admin already exists', success: false });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', success: false });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

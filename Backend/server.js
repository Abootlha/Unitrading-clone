const schema =require('./database/schema.js');
const session = require('express-session');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('./authMiddleware.js');
// const secretKey = "@Talha1234";
const jwt = require('jsonwebtoken');

const app = express();

// middleware
app.use(express.json())

// cors
// const cors=require('cors')
app.use(cors());

app.use(session({
  secret: '@Talha123', // Change this to your actual secret key
  resave: false,
  saveUninitialized: false
}));

// multer -> for files sharing

app.use(cors());
async function connectDB(){
    try {
        await mongoose.connect('mongodb://unitTrading:UnitTrading123@ac-3anvuvs-shard-00-00.i4kxub1.mongodb.net:27017,ac-3anvuvs-shard-00-01.i4kxub1.mongodb.net:27017,ac-3anvuvs-shard-00-02.i4kxub1.mongodb.net:27017/?ssl=true&replicaSet=atlas-ljrxmz-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0', {})
        console.log('Connected to the database.');
    }catch (e) {
        console.log('Error connecting to the database. and the Exception is '+e);
        throw e
     }
};



app.get('/', (req, res) => {
  console.log(req.url)
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
  console.log(req.url)
  if(user.role=="admin"){
    // 
    req.send("this is admin role")
    req.end()
  }else{
    // 
    req.send("this is admin role")

  }
  // res.send('Hello World!');
});


app.get('/courses', requireAuth, (req, res) => {
  // This route requires authentication
  res.send('Courses Page');
});




app.post('/login', async (req, res) => {
  console.log(req.url);
  const { email, password } = req.body;

  try {
      // Check if user exists in the database
      const user = await schema.UserInstance.findOne({ email });

      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      // Check if the password is correct
      if (user.password !== password) {
          return res.status(401).json({ message: "Invalid credentials" });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id, email: user.email }, 'your-secret-key', { expiresIn: '1h' }); // Change 'your-secret-key' to your actual secret key

      // Send token to the client
      res.status(200).json({ message: "Login successful", token });
  } catch (error) {
      console.error("Error logging in:", error);
      return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


app.post('/contact-us', async (req, res) => {
  try {
      const { firstname, lastname, email, subject, message } = req.body;
      const newContactMessage = await schema.ContactUsModel({
          firstname,
          lastname,
          email,
          subject,
          message
      });
      await newContactMessage.save();
      res.status(201).json({ message: 'Contact message created successfully' });
    
  } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
  }
});

// call connectDB
connectDB()
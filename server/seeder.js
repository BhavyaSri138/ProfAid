const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Student = require('./models/Student');
const Professor = require('./models/Professor');
const Admin = require('./models/Admin');

dotenv.config();
connectDB();

const seedData = async () => {
  try {
    // 🧑‍🎓 Sample Student
    await Student.create({
      name: 'Bhavya Sri',
      email: 'bhavyasri@rgukt.ac.in',
      password: 'student123',
      id:'o210138',
      department: 'CSE',
      year: '3rd Year',
    });

    // 👨‍🏫 Sample Professor
    await Professor.create({
      name: 'Dr. Anil Kumar',
      email: 'anilkumar@rgukt.ac.in',
      password: 'professor123',
      department: 'CSE',
      subjects: ['DSA', 'DBMS'],
    });

    // 🧑‍💼 Sample Admin
    await Admin.create({
      name: 'Admin',
      email: 'admin@profaid.com',
      password: 'admin123',
    });

    console.log('✅ Data inserted successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Error inserting data:', error.message);
    process.exit(1);
  }
};

seedData();

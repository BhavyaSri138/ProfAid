const Student = require('../models/Student');
const Professor = require('../models/Professor');
const Admin = require('../models/Admin');

const loginUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let user;

    if (role === 'student') {
      user = await Student.findOne({ email });
    } else if (role === 'professor') {
      user = await Professor.findOne({ email });
    } else if (role === 'admin') {
      user = await Admin.findOne({ email });
    } else {
      return res.status(400).json({ message: 'Invalid role' });
    }

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: role,
    });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};

module.exports = { loginUser };

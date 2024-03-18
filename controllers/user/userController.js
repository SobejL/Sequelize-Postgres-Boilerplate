const User = require('../../models/user')


const createUser = async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    // Create a new user instance
    const newUser = await User.create({
      firstName,
      lastName
    });

    res.status(201).json(newUser); // Respond with the created user
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createUser
};
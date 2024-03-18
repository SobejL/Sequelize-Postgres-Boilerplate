const express = require('express')
const User = require('./models/user')
const sequelize = require('./config')
const router = require('./routes');

const app = express()


// Apply the JSON body parsing middleware to the app
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(router);

port = 3001

// Function to add sample data
async function addSampleData() {
  try {
    // Sync the model with the database (create the table if not exists)
    await User.sync({ force: true });

    // Create some sample users
    await User.bulkCreate([
      { firstName: 'John', lastName: 'Doe' },
      { firstName: 'Jane', lastName: 'Smith' }
    ]);

    console.log('Sample data added successfully.');
  } catch (error) {
    console.error('Error adding sample data:', error);
  }
}

// Function to delete all user data
async function deleteAllUserData() {
  try {
    // Delete all user records from the database
    await User.destroy({
      where: {} // Empty condition to delete all records
    });
    console.log('All user data has been deleted successfully.');
  } catch (error) {
    console.error('Error deleting user data:', error);
  }
}

// // Function to fetch all user data
async function displayAllUserData() {
  try {
    // Fetch all user records from the database
    const allUsers = await User.findAll();

    // Log the retrieved user records
    console.log('All User Data:');
    allUsers.forEach(user => {
      console.log(user.toJSON()); // Print each user's data
    });
  } catch (error) {
    console.error('Error retrieving user data:', error);
  }
}


// Start the server
app.listen(port, async () => {


  try {
    // Authenticate the connection to the database
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

  //   Call the function to display all user data
    await displayAllUserData();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  //  Add sample data
  //   await addSampleData();
  // } catch (error) {
  //   console.error('Unable to connect to the database:', error);
  // }


    //   // Call the function to delete all user data
    //   await deleteAllUserData();
    // } catch (error) {
    //   console.error('Unable to connect to the database:', error);
    // }
  

  //   } catch (error) {
  //   console.error('Unable to connect to the database:', error);
  // }
  console.log(`Server running at ${port}...`);
});

require('dotenv').config({ path: '../.env'});
const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

const users = [
    {
        username: 'Noelle Christian',
        email: 'noelle@gmail.com',
    },
    {
        username: 'Yannah Christian',
        email: 'yannah@gmail.com',
    },
    {
        username: 'Caleb Christian',
        email: 'caleb@gmail.com',
    },
    {
        username: 'Cai Christian',
        email: 'cai@gmail.com',
    },
    {
        username: 'Yehudah Christian',
        email: 'yehudah@gmail.com',
    },
    {
        username: 'Cheniece Christian',
        email: 'cehniece@gmail.com',
    }
  ]

  connection.on('error', (err) => err);

  connection.once('open', async () => {
    console.log('connected to database');
    await User.deleteMany({});
    await Thought.deleteMany({});

    const createdUsers = await User.insertMany(users);


  });
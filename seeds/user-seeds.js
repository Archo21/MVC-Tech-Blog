const { User } = require('../models');

const userData = [{
        username: 'John',
        password: 'okello'
    },
    {
        username: 'James',
        password: 'jemo'
    },
    {
        username: 'Joel',
        password: 'joe'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
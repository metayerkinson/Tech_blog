const { User } = require("../models");

const userData = [
  {
    username: "kinson",
    password: "test1",
  },
  {
    username: "metayer",
    password: "test2",
  },
  {
    username: "ip",
    password: "test3",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

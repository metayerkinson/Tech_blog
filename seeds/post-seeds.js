const { Post } = require('../models');

const postData = [
  {
    title: "Wordpress",
    content: "I like that i can work with wordpress without coding.",
    user_id: 1,
  },
  {
    title: "Why open source contributions is important",
    content: "It allows develop to have a deep knowledge of git",
    user_id: 2,
  },
  {
    title: 'Authentication vs. Authorization',
    content: 'The is a difference where authentication is confirming your own identity whereas authorization means being allowed access to system.',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
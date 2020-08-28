const { Comment } = require('../models');

// seed data for comments here

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;


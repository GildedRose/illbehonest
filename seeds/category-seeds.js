const { Category } = require('../models');

// seed data for category here

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
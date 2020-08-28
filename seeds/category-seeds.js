const { Category } = require('../models');

// seed data for categories here

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
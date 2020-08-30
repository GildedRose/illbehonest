const { Category } = require('../models');

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
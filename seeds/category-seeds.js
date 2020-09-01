const { Category } = require('../models');

const categorydata = [
    {
        category_name: 'random'
    },
    {
        category_name: 'stuff'
    }
]

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
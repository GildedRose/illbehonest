const { Category } = require('../models');

const categorydata = [
    {
        category_name: `tender`
    },
    {
        category_name: `roast`
    }
]

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
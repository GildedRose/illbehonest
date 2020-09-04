const { Category } = require('../models');

const categorydata = [
    {
        id: 1,
        category_name: `tender`
    },
    {
        id: 2,
        category_name: `roast`
    }
]

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
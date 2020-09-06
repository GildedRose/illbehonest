const { Vote } = require('../models');

// seed data for vote here

const votedata = [
    {
        id: 1,
        user_id: 2,
        post_id: 1
    },
    {
        id: 2,
        user_id: 1,
        post_id: 2
    },
    {
        id: 3,
        user_id: 4,
        post_id: 3
    },
    {
        id: 4,
        user_id: 6,
        post_id: 4
    },
    {
        id: 5,
        user_id: 8,
        post_id: 5
    },
    {
        id: 6,
        user_id: 7,
        post_id: 6
    },
    {
        id: 7,
        user_id: 9,
        post_id: 7
    },
    {
        id: 8,
        user_id: 10,
        post_id: 8
    },
    {
        id: 9,
        user_id: 11,
        post_id: 9
    },
    {
        id: 10,
        user_id: 12,
        post_id: 10
    },
    {
        id: 11,
        user_id: 13,
        post_id: 11
    },
    {
        id: 12,
        user_id: 14,
        post_id: 12
    },
    {
        id: 13,
        user_id: 8,
        post_id: 1
    },
    {
        id: 14,
        user_id: 5,
        post_id: 2
    }
];
const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;
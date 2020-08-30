const { Vote } = require('../models');

// seed data for vote here

const seedVotes = () => Vote.bulkCreate(votedata, { returning: true });

module.exports = seedVotes;
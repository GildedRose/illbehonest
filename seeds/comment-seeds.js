const { Comment } = require('../models');

// seed data for comments here
const commentdata = [
    {
      comment_text: `Maybe if you adjusted the aperature you can give it a hazier impression to add to the surrealism?`,
      user_id: 6,
      post_id: 1
    },
    {
      comment_text: `What a nerd. Are you trying to play it that you took THAT with your mambie-pambie telescope? We're not four year olds, dude. And that NAME. It's like you're just mocking us. Try HARDER.`,
      user_id: 6,
      post_id: 2
    },
    {
      comment_text: `You really... didn't just... Pretty sure it's just you. Put the camera down, step away from it and pick a new hobby.`,
      user_id: 3,
      post_id: 3
    },
    {
      comment_text: `Wow. You're right, that deserves a recipe swap. Is there any meat in it though? What sort of sauce is in it? How about for leftovers, still tasty? Or did you finish it all in one sitting?`,
      user_id: 3,
      post_id: 12
    },
    {
      comment_text: `I'd say it looks healthy, seems to be thriving, whatever you're doing, keep it up. Is it supposed to have those spots though?`,
      user_id: 5,
      post_id: 5
    },
    {
      comment_text: `Did you just get a board from Lowes? Ain't looking like it's anything hot. Where are the bells and whistles?`,
      user_id: 2,
      post_id: 4
    },
    {
      comment_text: `You're assuming they can read and you know what happens when you assume.`,
      user_id: 2,
      post_id: 6
    },
    {
      comment_text: `Did you just grab a random piece of some building falling apart to make that, because it like trash.`,
      user_id: 1,
      post_id: 6
    },
    {
      comment_text: `Surprised that camera didn't break when you snapped the picture. If your hand is anything to go by.`,
      user_id: 13,
      post_id: 3
    },
    {
      comment_text: `Did your parents pay for all that college or are you going to be one of those Millenials crying about your debt when you can't land a job?`,
      user_id: 15,
      post_id: 8
    },
    {
      comment_text: `Make sure you invest in a good pair of flats to help you land on your feet when real life smacks you off that pedastle you're standing on.`,
      user_id: 13,
      post_id: 8
    },
    {
      comment_text: `Someone call the police, there's been a murder.`,
      user_id: 14,
      post_id: 11
    },
    
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;


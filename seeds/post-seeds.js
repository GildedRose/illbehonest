const { Post } = require('../models');

// seed data for post here
const postdata = [
    {
      title: 'On Black and White',
      post_url: 'https://images.pexels.com/photos/4903255/pexels-photo-4903255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      post_summary: `I tried to get the lighting just right for this still image. Ansel Adams is my inspiration, can anyone give me some advice without making me feel bad?`,
      user_id: 1,
      category_id: 1
    },
    {
      title: 'Some Days are Matter Days',
      post_url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Dark_matter_map_of_KiDS_survey_region_%28region_G12%29.jpg',
      post_summary: `Are you into physics like I am? I can't get enough of it, really. What do you think of this picture though? I managed to get it with my telescope. Any advice on how to make it look better?`,
      user_id: 3,
      category_id: 2
    },
    {
      title: 'Look Ma, No Hands...err..',
      post_url: 'https://images.pexels.com/photos/3022456/pexels-photo-3022456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      post_summary: `I wanted to get a great image without you seeing the camera, but the hand turned out to be out of focus. Can't quite put my finger on what went wrong.`,
      user_id: 2,
      category_id: 2
    },
    {
      title: 'Whiteboard Wanted',
      post_url: 'https://images.pexels.com/photos/7368/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      post_summary: `Needed more space to layout my grand plans. What do you think of my DIY board?`,
      user_id: 5,
      category_id: 2
    },
    {
      title: 'Too many peonies?',
      post_url: 'https://images.pexels.com/photos/4350801/pexels-photo-4350801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      post_summary: `Haha, it's not a peony. What do you think, am I doing good keeping it alive?`,
      user_id: 11,
      category_id: 1
    },
    {
      title: 'Work on a farm',
      post_url: 'https://images.pexels.com/photos/618955/pexels-photo-618955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      post_summary: `New hires can never seem to figure out where I am when I don't ever leave my little spot. Think this will make it easier to find me? "Here's your sign, stupid," is how I'm hoping it comes off.`,
      user_id: 8,
      category_id: 2
    },
    {
      title: 'Minimalist Life is the Best Life',
      post_url: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      post_summary: `I don't like a lot of clutter in my living space. Got fed up with crap everywhere, tossed stuff out, and I'm left with the bare minimum.`,
      user_id: 2,
      category_id: 1
    },
    {
      title: 'Professional Student',
      post_url: 'https://images.pexels.com/photos/3186386/pexels-photo-3186386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      post_summary: `Finally decided to stop avoiding the adult world and leave my university with two Bachelors degrees, a Masters, and a PhD. I don't know if they've prepared me for the corporate world. I can't be that hard, can it?`,
      user_id: 8,
      category_id: 2
    },
    {
      title: 'Remote Learning',
      post_url: 'https://images.pexels.com/photos/4260475/pexels-photo-4260475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      post_summary: `Maybe COVID is here to stay, maybe it'll be gone in a few more months, but is anyone else loving the extra time with their children? I usually have to commute long hours and barely get home in time to kiss her goodnight. I can't be the only parent thankful for this extra time during the day to sit with my daughter and get these precious moments.`,
      user_id: 9,
      category_id: 1
    },
    {
      title: 'Habitual Mess',
      post_url: 'https://images.pexels.com/photos/5185082/pexels-photo-5185082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      post_summary: `I read about all these blogs onling that encourage you to use sticky notes, arrange your notes a certain way, utilize colorful pens and keep composition journals, but I can't seem to stay organized. Anyone know what I can do to help myself with this or am I a lost cause?`,
      user_id: 1,
      category_id: 1
    },
    {
      title: `Orange you glad they're pancakes`,
      post_url: 'https://images.pexels.com/photos/2777627/pexels-photo-2777627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      post_summary: `Not sure anyone else likes fruit with their pancakes, but I had oranges looking for a purpose. How is it, looking good, right?`,
      user_id: 10,
      category_id: 2
    },
    {
      title: 'Noodle-piece',
      post_url: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      post_summary: `My stirfry noodle masterpiece! Had all these veggies I needed to cook, figured I could combine them with these egg noodles. IT WAS DELISH! Hit me up with feedback, I need to know other people think it's worth sharing the recipe.`,
      user_id: 15,
      category_id: 1
    }
  ];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
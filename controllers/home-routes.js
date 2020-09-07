const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');

// GET post route
router.get('/', (req, res) => {
  console.log(req.session);
  // query set up to return all posts and their nested properties
  Post.findAll({
    attributes: [
      'id',
      'post_url',
      'title',
      'post_summary',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      // pass a single post object into the homepage template
      // console.log(dbPostData[0]);
      /* don't need to  need to serialize data before when you built API routes, because the res.json() method automatically does that */
      // res.render('homepage', dbPostData[0].get({ plain: true }));
      const posts = dbPostData.map(post => post.get({ plain: true }));
      // res.render('homepage', dbPostData[0]);
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET post/id route
router.get('/post/:id', (req, res) => {
  // // hard coded post for test purposes
  // const post = {
  //   id: 1,
  //   post_url: 'https://handlebarsjs.com/guide/',
  //   title: 'Handlebars Docs',
  //   created_at: new Date(),
  //   vote_count: 10,
  //   comments: [{}, {}],
  //   user: {
  //     username: 'test_user'
  //   }
  // };

  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_url',
      'title',
      'post_summary',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });

      // pass data to template
      res.render('homepage', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
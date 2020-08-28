const router = require('express').Router();
const { Post, User, Vote, Comment } = require('../../models');

const sequelize = require('../../config/connection');

// GET /api/users -- this is equivalent of "SELECT * FROM users;"
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    User.findAll({
      attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET /api/users/1 -- this is equivalent of "SELECT * FROM users WHERE id = 1"
router.get('/:id', (req, res) => {
    User.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'post_url', 'created_at']
        },
        // include the Comment model here:
        // {
        //   model: Comment,
        //   attributes: ['id', 'comment_text', 'created_at'],
        //   include: {
        //     model: Post,
        //     attributes: ['title']
        //   }
        // },
        {
          model: Post,
          attributes: ['title'],
          through: Vote,
          as: 'voted_posts'
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// POST /api/users
router.post('/', (req, res) => {
    /* expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    .create inserts data, passing key/value pairs where keys are what is defined in the user model
    and values from 'req.body'

    In SQL it would look like:

    INSERT INTO users
        (username, email, password)
    VALUES
        ("Lernantino", "lernantino@gmail.com", "password1234");*/

    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
        
            res.json(dbUserData);
        });
    })
});

router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

// logout route
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

// PUT /api/users/1
router.put('/:id', (req, res) => {
  /* expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  .update() method combines the parameters for creating data and looking up data,
  
  if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  
  associated SQL syntax would look like the following code:

    UPDATE users
    SET username = "Lernantino", email = "lernantino@gmail.com", password = "newPassword1234"
    WHERE id = 1; */

    User.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
        .then(dbUserData => {
        if (!dbUserData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    /* to delete data, .destroy method is used and provides some type of identifier to indicate where exactly 
    to delete data from the user database table. */
    User.destroy({
        where: {
        id: req.params.id
        }
    })
        .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

module.exports = router;
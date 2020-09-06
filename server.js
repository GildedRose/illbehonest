const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
// Handblebars import and create
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;


// import express-session and sequilize store
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// secret created and directed to the dotenv file
const sess = {
    secret: 'Super secret secret',
    // ENABLE LINE 21, REMOVE LINE 19-20 BEFORE FINAL PUSH TO HEROKU/SUBMISSION
    // secret: process.env.SESS_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: true
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// session with secret created and directed to the dotenv file
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// turn on routes
app.use(routes);

// Handlebars engine / set 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
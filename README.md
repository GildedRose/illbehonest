# I'll Be Honest

## DESCRIPTION
A cutthroat hobbyist social media fullstack web development platform where users can submit posts for two types of audience feedback: "Don't Make Me Cry" or "Roast Me, Baby".


  ## Table of Contents

  * [Features](#features)

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Technologies](#technologies)
  * [Contribution](#contribution)
  * [Questions](#questions) 
  
  ## FEATURES
  
  ### MINIMAL VIABLE PRODUCT (MVP):

  * I'll Be Honest 
    * allow users to create an account for submission purposes
    * allow users to set a category of toastiness on posts for specific types of feedback
    * permit registered users to vote on posts
    * permit registered users to comment on submission posts based on category of toastiness

  * User Login/Logout (authentication will be required)
    * WHEN users LOG IN they see social media posts
    * WHEN users LOG IN they can vote on posts
    * WHEN users LOG IN they can delete posts
    * WHEN users LOG IN they can comment on posts
    * WHEN users LOG OUT they see a GOOD BYE page with the option to log back in

  * Dashboard
    * CREATE NEW account
    * LOG IN / LOG OUT - dependent on session specifics
    * WHEN users LOG IN they can QUERY to sort posts by toastiness level

  * Posts
    * WHEN post is created, CATEGORY is assigned for voting purposes
    * WHEN post is created, COMMENTS are enabled
  
  ### FUTURE UPDATES:

  * Posts
    * users can upload image links to content for roasting
    * users can create content messages per posts to explain included image

  ## Installation

  Initiate a clone or pull of a project's repo onto your local machine, then change directories through terminal to the illbehonest directory. 

  You will need to initiate package dependencies with the following command:

  > npm install 

  The dependencies should automatically install for you, but you will need to configure certain ones to utilize, such as dotenv and MySQL.

  ## Usage

  To set-up Dotenv, please refer to instructions [here](https://www.npmjs.com/package/dotenv).

  Be sure to have a MySQL user set-up. Utilize the following commands afterwards:

  > mysql -u root -p

  This will prompt for a MySQL password associated to you.

  You should see "mysql >" waiting for input.

  > source db/schema.sql;

  This will create the database.

  > show databases;

  This will show a list of your databases, you are specifically looking for "illbehonest_db".

  > quit

  This will exit MySQL.

  Type the following: 

  > npm run seeds

  This command generates the database with the sample seed data from the "seeds" folder if you'd like to see the website fully functional.

  You may start the server in two ways:

  > npm run watch

  or 

  > npm start

  To close the server, navigate out of Insomnia back to the terminal window and execute the following command:

  > CTRL+C

  > Y

  This will end the server connection.

  ## License
  This project is covered by the MIT license.

  ![MIT license badge](https://img.shields.io/badge/license-MIT-brightgreen)
  
  ## Technologies

  1. [Node.js](https://www.npmjs.com/package/node), [Express.js](https://www.npmjs.com/package/express), [Moment.js](https://www.npmjs.com/package/moment)
  2. [Express-Session](https://www.npmjs.com/package/express-session)
  3. [MySQL](https://www.npmjs.com/package/mysql2) & [Sequelize](https://www.npmjs.com/package/sequelize)
  4. [dotenv](https://www.npmjs.com/package/dotenv)
  5. [bcrypt](https://www.npmjs.com/package/bcrypt)
  6. [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
  7. [Sass](https://sass-lang.com/) & [BootStrap](https://getbootstrap.com/)
  8. [Heroku](http://heroku.com/)

  ## Contribution
  Contributor Covenant 2.0 available at https://www.contributor-covenant.org/
  ## Questions

 Visit our GitHubs: [GildedRose](https://github.com/GildedRose), 
 [Devmadia](https://github.com/Devmadia),
 [Ottiemobile](https://github.com/Ottiemobile),
 [ericy98](https://github.com/ericy98),
 [osadenaike](https://github.com/osadenaike)

  If you have any additional questions not answered here or wish to contact me regarding developments, please email us at 
  [thedevmadia@gmail.com](mailto:thedevmadia@gmail.com)




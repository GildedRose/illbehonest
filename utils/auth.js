/* This function will act as a normal request callback function, 
checking for the existence of a session property and using res.redirect() 
if it's not there. If res.session.user_id does exist, it will call next(), 
which could potentially be another middleware function or the final function 
that will render the template. */
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
};
  
module.exports = withAuth;
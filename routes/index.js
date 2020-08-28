const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use((req, res) => {
  res.status(404).end();
});

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
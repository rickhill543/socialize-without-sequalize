//setup express router
const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// api endpoint at /thoughts and /users respectively
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;

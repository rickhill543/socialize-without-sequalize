// equire necessary dependencies
const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  addFriend,
  removeFriend,
  deleteUser
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  // /api/userId/friends/:friendId
router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

module.exports = router;

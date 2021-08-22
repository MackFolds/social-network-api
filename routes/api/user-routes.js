const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    updateUser,
    deleteUser,
    createUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controllers');

router
    .route('/')
    .get(getAllUser)
    .post(createUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/friends/:friendsId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;
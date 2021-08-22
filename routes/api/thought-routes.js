const router = require('express').Router();

const {
    createThought,
    getAllThought,
    getSingleThought,
    deleteThought,
    updateThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controllers');

router
    .route('/')
    .get(getAllThought);

router
    .route('/:userId')
    .post(createThought);
    
router
    .route('/:thoughtId')  
    .get(getSingleThought)
    .put(updateThought);

router
    .route('/:userId/:thoughtId')
    .delete(deleteThought);
    
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;
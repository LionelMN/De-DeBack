const router = require('express').Router();
const { getAll , getOneById, getOneByEmail, create, remove, putOne, getFriends } = require('./users.controller')

router.get('/', getAll);
router.get('/:username', getOneById);
router.get('/email/:email', getOneByEmail);
router.get('/followings/:username', getFriends);
router.post('/', create);
router.delete('/:username',remove);
router.put('/:username', putOne);


module.exports = router;

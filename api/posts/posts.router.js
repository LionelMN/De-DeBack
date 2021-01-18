const router = require('express').Router();
const { getAll, getOneById, create, remove, putOne ,getPostByNeed} = require('./posts.controller')

router.get('/',  getAll);
router.get('/:id',   getOneById);
router.get('/need/:need',getPostByNeed)
router.post('/',    create);
router.delete('/:id',    remove);
router.put('/:id',      putOne);


module.exports = router;
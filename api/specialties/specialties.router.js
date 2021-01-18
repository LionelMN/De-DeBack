const router = require('express').Router();
const { getAll , getOneBySkill, create,getAllByRol,getAllByTypes} = require('./specialties.controller')

router.get('/', getAll);
router.get('/:rol', getAllByRol); //rol
router.get('/skill/:skill',getOneBySkill ); //skills
router.get('/types/:type',getAllByTypes ); // type
router.post('/', create);

module.exports = router;
const specialtiesModel = require("./specialties.model");

module.exports = { getAll, getOneBySkill, create,getAllByRol,getAllByTypes };

function getAll(req, res) {
  return specialtiesModel.find()
    .then(u => res.json(u) )
    .catch(e => res.status(500).json(e) )
}
function getOneBySkill(req, res) {
    const  skillToFind = req.params.skill ;
    return specialtiesModel
        .findOne( { skill : skillToFind } )
        .then(u => res.json(u) )
        .catch(e => res.status(500).json(e) )
}
function getAllByRol(req, res) {
  const  rolToFind = req.params.rol ;
  return specialtiesModel
      .find( { rol : rolToFind } )
      .then(u => res.json(u) )
      .catch(e => res.status(500).json(e) )
}
function getAllByTypes(req, res) {
  const  typeToFind = req.params.type ;
  return specialtiesModel
      .find( { type : typeToFind } )
      .then(u => res.json(u) )
      .catch(e => res.status(500).json(e) )
}

function create(req, res) {
  return specialtiesModel
      .create( req.body )
      .then(u => res.json(u) )
      .catch(e => res.status(500).json(e) )
}



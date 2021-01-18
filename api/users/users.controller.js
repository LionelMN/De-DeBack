const userModel = require("./users.model");

module.exports = { getAll, getOneById, getOneByEmail, create, remove, putOne, getFriends };

function getAll(req, res) {
  return userModel.find()
    .then(u => res.json(u) )
    .catch(e => res.status(500).json(e) )
}
function getOneById(req, res) {
    const  usernameToFind = req.params.username ;
    return userModel
        .findOne( { username : usernameToFind } )
        .populate('posts')
        .then(u => res.json(u) )
        .catch(e => res.status(500).json(e) )
}
function getFriends(req, res) {
    const  usernameToFind = req.params.username ;
    return userModel
        .findOne( { username : usernameToFind }, 'contacts' )
        .populate( {path: 'contacts', populate: {path: 'posts'}})
        .then(u => res.json(u) )
        .catch(e => res.status(500).json(e) )
}
function getOneByEmail(req, res) {
    const  emailToFind = req.params.email ;
    return userModel
        .findOne( { email : emailToFind } )
        .then(u => res.json(u) )
        .catch(e => res.status(500).json(e) )
}
function create(req, res) {
  return userModel
      .create( req.body )
      .then(u => res.json(u) )
      .catch(e => res.status(500).json(e) )
}
function remove(req, res) {
  const { username } = req.params;
  return userModel
      .remove( { username  } )
      .then(u => res.json(u) )
      .catch(e => res.status(500).json(e) )
}
async function putOne(req, res) {
  console.log(req.body);
  console.log(req.params);
  try {
    const { username } = req.params;
    const edited = await userModel.findOne({ username }).updateOne(req.body);
    return res.json(edited);
  } catch (e) {
    return res.status(500).json(e);
  }
}

const userModel = require("../users/users.model");
const postsModel = require("./posts.model");
const mail = require("../mail/dataFormater")

module.exports = { getAll, getOneById, create, remove, putOne,getPostByNeed };

async function getAll(req, res) {
  try {
    const posts = await postsModel.find()
    return res.json(posts);
  } catch (e) {
    return res.status(500).json(e);
  }
}
async function getOneById(req, res) {
  try {
    const { id } = req.params;
    return res.json(await postsModel.findOne( {_id : id}));
  } catch (e) {
    return res.status(500).json(e);
  }
}

async function getPostByNeed(req, res) {
  try {
    const { need } = req.params;
    return res.json(await postsModel.find( { need: need}));
  } catch (e) {
    return res.status(500).json(e);
  }
}

function create(req, res) {
    return userModel.findOne({ username: req.body.owner })
      .then(async userExists => {
          if (userExists) {
            let recivers = []
            userModel.find().select('email -_id').then(e => {
              recivers.push(e)
              console.log(recivers);
            })
            const newPost = await postsModel.create(req.body);
            userExists.posts.push(newPost._id);
            mail.formattingData(newPost._id, recivers)
            return userExists.save()
              .then(userEdited => {
                return res.json(newPost);

              })
          } else {
            return res.status(400).send("That user doesnt exists ");
          }
      })

}
async function remove(req, res) {
  try {
    const { id } = req.params;
    return res.json(await (await postsModel.findOne({_id : id})).deleteOne());
  } catch (e) {
    return res.status(500).json(e);
  }
}
async function putOne(req, res) {
  try {
    const { id } = req.params;
    const edited = await postsModel.findOne({_id : id}).updateOne(req.body);
    return res.json(edited);
  } catch (e) {
    return res.status(500).json(e);
  }
}

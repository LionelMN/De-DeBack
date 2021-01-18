const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require("../users/users.model");

module.exports = { register, signin};

async function register(req, res) {
  let { username, email, password, name, rol, skills} = req.body;
  const newUser = await userModel.create({
    name,
    username,
    email,
    posts: [],
    password: bcrypt.hashSync(password, 10),
    rol,
    skills,
    contacts: [],
    img : "defaultAvatar.png",
    websites: [],
    ubication : "",
    interest:[],
    biography: ""
  });
  delete newUser.password;
  return res.json(newUser);
};


function signin(req, res) {
  const userData = {
    email: req.body.email,
    password: req.body.password
  }
  userModel.findOne({ email: userData.email })
      .then( usuarioDB => {

        // Verifica que exista un usuario con el mail escrita por el usuario.
           if (!usuarioDB) {
              return res.status(400).json({message: "Usuario o contraseña incorrectos"+ userData.email})
           }
          // Valida que la contraseña escrita por el usuario, sea la almacenada en la db
         if (! bcrypt.compareSync(req.body.password, usuarioDB.password)){
            return res.status(400).json({message: "Usuario o contraseña incorrectos" +userData.password});
         }

          // Genera el token de autenticación
          let token = jwt.sign({ usuario: usuarioDB }, "SECRET")
         const dataUser = {
          usuario: usuarioDB,
          token,
         }
          res.json({
            usuario: usuarioDB,
            token,
          })

      })
      .catch(erro =>  {
         return res.status(500).json( erro )
     })
  };

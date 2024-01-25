const bcrypt = require('bcrypt');

const saltRounds = 10;


let controllers = {
    login: function(req,res){
        res.render('login')
    },
    register: function(req,res){
        res.render('register')
    },
    registro: function(req,res){
        console.log(req.body)
    }
}
app.post('/register', upload.single('user_imagen'), (req,res)=>{
    console.log(req.file.user_imagen)
})

module.exports = controllers;
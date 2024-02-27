const bcrypt = require('bcryptjs');
const multer  = require('multer')
const path = require('path');
const fs = require('fs')
const upload = multer({ dest: './public/images/users' })
const saltRounds = 10;
const session = require('express-session')
const cookieParser = require('cookie-parser')
const db = require('../database/models');
const User = db.Users


let controllers = {
    login: function(req,res){
        res.render('login')
    },
    register: function(req,res){
        res.render('register')
    },
    registro: (req,res)=>{
        let remail = req.body.register_email
        let user = false
        if(user){
            res.send('email registrado')
        } else{
            let rname = req.body.register_nombre
            let rsurname = req.body.register_apellido
            let rpassword = req.body.register_password
            let rProfilePic
            if(req.file){
                rProfilePic = `http://localhost:3000/images/users/` + req.file.filename
            } else{
                rProfilePic = `http://localhost:3000/images/users/`
            }
            const hashedPassword = bcrypt.hashSync(rpassword, saltRounds);
            console.log(hashedPassword)

            
            User.create({nombre : rname, apellido : rsurname, password : hashedPassword, email : remail})
            res.redirect('login')
        }
    },
    logearse: async (req,res)=>{
        lemail = req.body.login_email
        lpassword = req.body.login_password
        lremember = req.body.login_rememberpassword
        let user = await User.findOne({where : {email : lemail}})
        if(user){
            if(bcrypt.compareSync(lpassword, user.password)){
                console.log('usuario logeado')
                req.session.userId = user.email
                req.session.firstName = user.firstName
                req.session.lastName = user.lastName
                req.session.isAuth = true
                if(lremember == 'on'){
                    res.cookie('rememberme', user.email, {maxAge: 30 * 24 * 60 * 60 * 1000})
                }
                console.log(req.session)
            }else{
                console.log('contraseña y/o mail incorrecto')
            }
        } else{
            console.log('usuario no encontrado')
        }
        res.redirect('/')
    },
    logout: (req,res)=>{
        req.session.destroy()
        res.redirect('/')
    }

}


module.exports = controllers;
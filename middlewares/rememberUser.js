const fs = require('fs')
const path = require('path')

const pathUsers = path.join(__dirname, '../data/usersdb.json')
let users = JSON.parse(fs.readFileSync(pathUsers, 'utf-8'))

module.exports = (req, res, next) => {
    if(req.cookies.rememberme != undefined && req.session.user == undefined){
        console.log('entra')
        let user = users.find(user=> user.email == req.cookies.rememberme)
        delete user.password
        req.session.userId = user.email
        req.session.isAuth = true
    }
    next()
}
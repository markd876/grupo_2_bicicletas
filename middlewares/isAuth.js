module.exports = (req,res,next) =>{
    if(req.session.isAuth){
        console.log('usuario logeado')
        next()
    }
    else {
        res.redirect('/login')
    }
}
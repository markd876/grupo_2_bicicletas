const db = require('../../database/models')

let controllers = {
    users: async (req,res)=>{
        db.Users.findAll().then((usuarios)=>{
            res.json(usuarios)
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    products: async (req,res)=>{
        db.Products.findAll().then((productos)=>{
            res.json(productos)
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    bicicletas: async (req,res)=>{
        db.Bicicletas.findAll().then((bicicletas)=>{
            res.json(bicicletas)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

}


module.exports = controllers;
let controllers = {
    home: function(req, res) {
        res.render('producto');
    },
    edicion: function(req, res) {
        res.render('edicion');
    },
    crear: function(req, res) {
        res.render('crear');
    }
};

module.exports = controllers;

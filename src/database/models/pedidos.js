module.exports = (sequelize, DataTypes) => {
  const alias = 'pedidos';
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    bicicletasid: {
      type: DataTypes.INTEGER,
    },
    cantidad: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    productsid: {
      type: DataTypes.INTEGER,
    },
    ordenid: {
      type: DataTypes.INTEGER,
    }
  };
  const config = {
    tableName: 'pedidos',
    timestamps: false
  };
  const pedidos = sequelize.define(alias, cols, config);

  pedidos.associate = function (models) {
    pedidos.belongsTo(models.orden, {
      as: 'ordenpedidos',
      foreignKey: 'ordenid'
    });
    pedidos.belongsTo(models.products, {
      as: 'pedidosproducts',
      foreignKey: 'productsid'
    });
    pedidos.belongsTo(models.bicicletas, {
      as: 'pedidosbicicletas',
      foreignKey: 'bicicletasid'
    });
  };
  
  return pedidos;
};

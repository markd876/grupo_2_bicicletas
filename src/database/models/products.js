module.exports = (sequelize, DataTypes) => {
  const alias = 'products';
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
  const config = {
    tableName: 'Products',
    timestamps: false
  };
  const products = sequelize.define(alias, cols, config);

  products.associate = function (models) {
    products.hasOne(models.pedidos, {
      as: 'pedidosproducts',
      foreignKey: 'productsid'
    });
  };

  return products;
};

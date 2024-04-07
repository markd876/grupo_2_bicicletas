module.exports = (sequelize, DataTypes) => {
  const alias = 'bicicletas';
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
    rodado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
  const config = {
    tableName: 'bicicletas',
    timestamps: false,
  };
  const bicicletas = sequelize.define(alias, cols, config);

  bicicletas.associate = function (models) {
    bicicletas.hasOne(models.pedidos, {
      as: 'pedidosbicicletas',
      foreignKey: 'bicicletasid'
    });
  };

  return bicicletas;
};

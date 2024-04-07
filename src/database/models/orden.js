module.exports = (sequelize, DataTypes) => {
  const alias = 'orden';
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(10, 2)
    },
    fecha: {
      type: DataTypes.DATE
    },
  };
  const config = {
    tableName: 'ordens',
    timestamps: true
  };
  const orden = sequelize.define(alias, cols, config);

  orden.associate = function (models) {
    orden.belongsTo(models.User, {
      as: 'ordenuser',
      foreignKey: 'userid'
    });
    orden.hasMany(models.pedidos, {
      as: 'ordenpedidos',
      foreignKey: 'ordenid'
    });
  };

  return orden;
};

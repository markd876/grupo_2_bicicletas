module.exports = (sequelize, DataTypes) => {
  const alias = 'User';
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_image: {
      type: DataTypes.STRING
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  };
  const config = {
    tableName: 'Users',
    timestamps: false
  };
  const User = sequelize.define(alias, cols, config);

  User.associate = function (models) {
    User.hasMany(models.orden, {
      as: 'ordenuser',
      foreignKey: 'userid'
    });
  };

  return User;
};

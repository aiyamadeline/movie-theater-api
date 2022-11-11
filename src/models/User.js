//import our db, Model, DataTypes
const { db, DataTypes } = require('../db/db')
const { Model } = require("sequelize")



class User extends Model {}


User.init({

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db,
    modelName: "User"
})






//Creating a User child class from the Model parent class

// const User = db.define("users", {
//     username: DataTypes.STRING,
//     password: DataTypes.STRING
// });

//exports
module.exports = { User }
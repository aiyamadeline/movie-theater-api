//import our db, Model, DataTypes
const { db, DataTypes } = require('../db/db')
const { Model } = require("sequelize")

class Show extends Model {}

Show.init ({
    title: {
        type: DataTypes.STRING,
    },
    genre: {
        type: DataTypes.ENUM("Comedy", "Drama", "Horror", "Sitcom"),
        
    },
    raiting: {
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.STRING,
    },
}, {
    sequelize: db,
    ModelName: "Show"


})




//Creating a User child class from the Model parent class
// const Show = db.define("shows", {
//     title: DataTypes.STRING,
//     genre: DataTypes.ENUM("Comedy", "Drama", "Horror", "Sitcom"),
//     rating: DataTypes.INTEGER,
//     status: DataTypes.STRING,
// });



//exports
module.exports = { Show }

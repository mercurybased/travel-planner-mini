const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init({
    trip_budget: {
        type:DataTypes.DECIMAL,
        allowNull:false
    },
    traveler_amount: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
}, {
    sequelize
})

module.exports=Trip
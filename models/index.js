const Location = require("./location");
const Traveler = require("./traveler");
const Trip = require("./trip");

Trip.belongsTo(Traveler);
Traveler.hasMany(Trip);

Location.belongsTo(Traveler);
Traveler.hasMany(Location);

Location.belongsTo(Trip);
Trip.hasMany(Location);

module.exports = {
    Location:Location,
    Traveler:Traveler,
    Trip:Trip,
}
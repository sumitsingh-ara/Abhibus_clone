const mongoose = require('mongoose');

const trainDetails = new mongoose.Schema({
    train_number:{type:Number},
    train_name: {type:String},
    source_station: {type:String},
    destination: {type:String},
    seat_availability: {type:Boolean},
    departure_time: {type:String},
    arrival_time: {type:String},
    running_days: {type:Number},
    general: {type:Boolean},
    ladies: {type:Boolean},
    tatkal_seats_available: {type:Number},
    ticket_sleeper_price: {type:Number},
    ticket_ac_price: {type:Number},
    seats_availables: {type:Number}
})

const Trains = mongoose.model('trainsdatas',trainDetails)

module.exports = Trains;

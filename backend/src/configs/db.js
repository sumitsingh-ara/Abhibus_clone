const mongoose = require('mongoose');

const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/trains")
}

module.exports = connect
//mongodb+srv://abhi-bus:abhi-bus@cluster0.6nos1.mongodb.net/abhiBus?retryWrites=true&w=majority
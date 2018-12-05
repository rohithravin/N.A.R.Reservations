var express = require('express');
var path=require('path')
var mongoose=require('mongoose')
var bodyParser=require('body-parser')
var app = express();

var server = app.listen(3000, () => {
 console.log('server is running on port', server.address().port);
});

app.use(express.static(__dirname));
app.use(bodyParser.json())

// Mongoose DB
mongoose.connect('mongodb://localhost/nardb' , (err) => {
   console.log('***CONNECTED TO NAR DATABASE MONGODB***');
})

var ReservationSchema = new mongoose.Schema({
    restaurnatID:{type:Number, required:[true, "restaurnatID is required"]},
    restaurnatAddress:{type:String, required:[true, "restaurnatAddress is required"]},
    restaurnatNumber:{type:Number, required:[true, "restaurnatNumber is required"]},
    name:{type:String, required:[true, "Merchant name is required"]},
    email:{type:String, required:[true, "Email is required"]},
    phone:{type:Number, required:[true, "Phone Number is required"]},
    month:{type:Number, required:[true, "monthis required"]},
    day:{type:Number, required:[true, "day is required"]},
    year:{type:Number, required:[true, "year is required"]},
    time:{type:Number, required:[true, "time is required"]}
}, {timestamps:true})

mongoose.model('Reservation', ReservationSchema)

console.log('***SCHEMA CREATED OR ALREADY THERE***');

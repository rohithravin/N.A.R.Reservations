var express = require('express');
var path=require('path')
var mongoose=require('mongoose')
var bodyParser=require('body-parser')
var nodemailer = require('nodemailer');
var app = express();

var server = app.listen(process.env.PORT || 3000, () => {
 console.log('server is running on port', server.address().port);
});

app.use(express.static(__dirname));
app.use(bodyParser.json())

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'contactnarrestaurant@gmail.com',
    pass: 'nariscool'
  }
});

// Mongoose DB
mongoose.connect('mongodb+srv://rohithravin:4.0Stanford@cluster0-8smdt.mongodb.net/test?retryWrites=true' , (err) => {
   console.log('***CONNECTED TO NAR DATABASE MONGODB***');
})

var ReservationSchema = new mongoose.Schema({
    restaurantID:{type:Number, required:[true, "restaurantID is required"]},
    restaurantAddress:{type:String, required:[true, "restaurantAddress is required"]},
    restaurantNumber:{type:Number, required:[true, "restaurantNumber is required"]},
    name:{type:String, required:[true, "Merchant name is required"]},
    email:{type:String, required:[true, "Email is required"]},
    phone:{type:Number, required:[true, "Phone Number is required"]},
    month:{type:String, required:[true, "monthis required"]},
    day:{type:Number, required:[true, "day is required"]},
    year:{type:Number, required:[true, "year is required"]},
    time:{type:Number, required:[true, "time is required"]}
}, {timestamps:true})

mongoose.model('Reservation', ReservationSchema)
var Reservation = mongoose.model('Reservation')

console.log('***SCHEMA CREATED OR ALREADY THERE***');


app.post('/sendConfirmationEmail', function(request, response){
    var email = request.body['email'];
    var text = request.body['text'];

    var mailOptions = {
      from: 'contactnarrestaurant@gmail.com',
      to: email,
      subject: 'Your Reservation At N. A. R. Is Confirmed!',
      text: text
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        return response.json({success:-1, message:"Error sending email."})

      } else {
        console.log('Email sent: ' + info.response);
        return response.json({success:1, message:"Email Sent!"})
      }
    });
})






app.post('/processResveration', function(request, response){
  var name = request.body['name']
  var email = request.body['email']
  var phone = request.body['phone']
  var month = request.body['month']
  var date = request.body['date']
  var year = request.body['year']
  var time = request.body['time']
  var restaurantID = request.body['restaurantID']
  var restaurantAddress = request.body['restaurantAddress']
  var restaurantNumber = request.body['restaurantNumber']

  console.log('name' , name)
  console.log('restaurantID', restaurantID)
  console.log('day',date)

  Reservation.findOne({name:name, restaurantID:restaurantID}, function(error,hasReservationAlready){
    if(error){
        console.log(error)
        return response.json({success:-1, message:"Server error find name"})
    }
    else{
        if(hasReservationAlready != null){
          return response.json({success:-2, message:"This user already has a reservation as this restaurant location"})
        }
        else{
          Reservation.findOne({restaurantID:restaurantID, time:time, day:date, year:year, month:month}, function(error,reservationTaken){
            if(error){
                console.log(error)
                return response.json({success:-4, message:"Server error find name"})
            }
            else{
              if(reservationTaken != null){
                return response.json({success:-3, message:"Restaurant location already has a reservation at given time"})
              }
              else{
                var newReservation = new Reservation({restaurantID:restaurantID, restaurantAddress:restaurantAddress, restaurantNumber:restaurantNumber,name:name,
                   email:email, phone:phone, month:month, day:date, year:year, time:time})
                   newReservation.save(function(error){
                       if(error){
                         console.log(error)
                           return response.json({success:-5, message:'There was an error saving registration. Check your input again'})
                       }
                       else{
                           var message='Reservation Confirmed!';
                           console.log("message ",message)
                           console.log("reservation", newReservation)
                           return response.json({success:1, message:"Successfully save registration!!", reservation:newReservation})
                       }
                   })
              }
            }
          })
        }
    }
  })
})

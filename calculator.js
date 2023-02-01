const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Allows us to access data input into our form
app.use(bodyParser.urlencoded({extended: true}));
//Creates home route
app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

// app.post("/", function(req, res){
//
// var num1 = Number(req.body.num1);
// var num2 = Number(req.body.num2);
//
// var result = num1 + num2;
//   res.send("The result of calculation is " + result);
// });

//****************************************************
app.post("/", function(req, res){

  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var bmiResult = ((weight / (height*height))*10000);
    res.send("Your BMI is " + bmiResult);
});


//spins up our server = listens on port:3000
app.listen(3000, function(){
  console.log("Server started running on port 3000");
});

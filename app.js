const express = require("express");
const https = require("https");

const app = express();
const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=8e129600d05a9783c82678a5689c521d"

app.get("/", function(req, res){
  https.get(url, function(response){
    console.log(response)
  });

  res.send("Server is up and running")
})


app.listen(3000, function(){
  console.log("Server is running on port 3000");
})
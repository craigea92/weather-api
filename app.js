const express = require("express");
const https = require("https");

const app = express();
const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=8e129600d05a9783c82678a5689c521d&units=metric"

app.get("/", function(req, res){
  
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description
      const weatherIcon = weatherData.weather[0].icon
      const imageURL = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"
      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write("<h1>The temperature in London is " + temp + " degrees Celcius.</h1>")
      res.write("<img src=" + imageURL + ">")
      res.send()
    });
  });
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
})
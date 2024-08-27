const apiKey="6a6947fcc72e3f9ad59a9b5566c8a381";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
    }
    else
    {
     
    

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "clouds"){
     weatherIcon.src ="image/clouds.png";
    }
   else if(data.weather[0].main == "clear"){
     weatherIcon.src ="image/clear.png";
   }
   else if(data.weather[0].main == "rain"){
     weatherIcon.src ="image/rain.png";
   }
   else if(data.weather[0].main == "drizzle"){
     weatherIcon.src ="image/drizzle.png";
   }
   else if(data.weather[0].main == "mist"){
     weatherIcon.src ="image/mist.png";
   }
   document.querySelector(".weather").style.display = "blockd";
   document.querySelector(".erroe").style.display = "none";
}
}





searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})

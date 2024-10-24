const apiKey = "3b94ddb0b338c5bb77b7914503c0cd6a"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
let backImg = document.querySelector(".card");
let d = new Date();

async function checkWeather(city) {
    let response = await fetch(apiUrl+city+ `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".date").innerHTML = d.toLocaleDateString();
    document.querySelector(".time").innerHTML = d.toLocaleTimeString();
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
        backImg.style.backgroundImage = "url('images/CLOUD.jpg')";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
        backImg.style.backgroundImage = "url('images/CLEAR.jpg')";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
        backImg.style.backgroundImage = "url('images/DRIZZLE.jpg')";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
        backImg.style.backgroundImage = "url('images/MIST.jpg')";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
        backImg.style.backgroundImage = "url('images/RAIN.jpg')";
    }
    else if(data.weather[0].main=="Haze"){
        weatherIcon.src="images/haze.png";
        backImg.style.backgroundImage = "url('images/HAZE.jpg')";
    }
    else{
        weatherIcon.src="images/snow.png";
        backImg.style.backgroundImage = "url('images/SNOWFALL.jpg')";
    }
    document.querySelector(".weather").style.display="block";
}

searchBtn.addEventListener('click', ()=> {
    checkWeather(searchBox.value);
});
searchBox.addEventListener('keydown', (event)=> {
    if(event.key === "Enter"){
    checkWeather(searchBox.value);
    };
});




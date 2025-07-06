const apikey = "d5966e5e6f5087192ee773aed77dfbf3"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const searchInput = document.querySelector('.search input')
const searchbtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')


async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`)


    var data = await response.json(); // pasing the json format
    console.log(data);




    if (response.status == 404) {

        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
        alert("COUNTRIES, STATES ,DISSTRICTES,SOME MAJOR CITIES  NAME ARE VALID bro....")

    }
    else {
        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.error').style.display = 'none'

        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + 'Km/h';
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + '°C'
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "partly-cloudy.png"

        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "sun.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "storm.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "snow.png"

        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "weather.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "haze.png"
        }
    }

}
searchbtn.addEventListener('click', function name() {
    checkWeather(searchInput.value)

})



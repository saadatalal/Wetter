
const apikey = "5654698644bba51a4a48d028ead16130";

const cityinput = document.querySelector(".city-input");


const searchBtn = document.querySelector(".search-btn");

const notfound = document.querySelector(".not-found-city");
const searchcity = document.querySelector(".search-city");
const landtxt = document.querySelector(".land-txt");
const wetterinfo = document.querySelector(".wetter-info");
const temptxt = document.querySelector(".temp-txt");
const conditiontxt = document.querySelector(".condition-txt");
const humidityvaluetxt = document.querySelector(".humidity-value-txt");
const windvaluetxt = document.querySelector(".wind-value-txt");

const forecastitemdate = document.querySelectorAll(".forecast-item-date");
const forecastitemtemp = document.querySelectorAll(".forecast-item-temp");
const forecastitemimg = document.querySelectorAll(".forecast-item-img");

const wettersummerimg = document.querySelector(".wetter-summer-img");
const currentdatetxt = document.querySelector(".current-date-txt");


// SEARCH BUTTON
searchBtn.addEventListener("click", function () {

    if (cityinput.value.trim() !== "") {

        updatewetterinfo(cityinput.value);

        cityinput.value = "";
        cityinput.blur();
    }
});


// ENTER
cityinput.addEventListener("keydown", (event) => {

    if (event.key === "Enter" && cityinput.value.trim() !== "") {

        updatewetterinfo(cityinput.value);

        cityinput.value = "";
        cityinput.blur();
    }
});


// API REQUEST
async function getfetchdata(endPoint, city) {

    const APiurl =
        `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apikey}`;

    const response = await fetch(APiurl);

    return response.json();
}


// WEATHER ICON
function getwettericon(id) {

    if (id <= 232) return "thunderstorm.svg";

    if (id <= 321) return "drizzle.svg";

    if (id < 531) return "rain.svg";

    if (id <= 622) return "snow.svg";

    if (id <= 781) return "atmosphere.svg";

    if (id <= 800) return "clear.svg";

    return "clouds.svg";
}


// CURRENT DATE
function getcurrentdata() {

    const cureetDate = new Date();

    const options = {
        weekday: "short",
        day: "2-digit",
        month: "short"
    };

    return cureetDate.toLocaleDateString("en-GB", options);
}


// MAIN WEATHER FUNCTION
async function updatewetterinfo(city) {

    const weatherData = await getfetchdata("weather", city);

    if (weatherData.cod != 200) {

        showDisplaysection(notfound);

        return;
    }


    const {
        name: country,
        main: {
            temp,
            humidity
        },
        weather: [{ id, main }],
        wind: {
            speed
        }
    } = weatherData;


    // CURRENT WEATHER
    landtxt.textContent = country;

    temptxt.textContent =
        Math.round(temp - 273.15) + "℃";

    conditiontxt.textContent = main;

    humidityvaluetxt.textContent =
        humidity + "%";

    windvaluetxt.textContent =
        speed + " M/s";

    wettersummerimg.src =
        `assets/weather/${getwettericon(id)}`;

    currentdatetxt.textContent =
        getcurrentdata();


    // FORECAST
    await updateforecast(city);


    // SHOW WEATHER
    showDisplaysection(wetterinfo);
}


// FORECAST FUNCTION
async function updateforecast(city) {

    const forecastData =
        await getfetchdata("forecast", city);


    const timeTake = "12:00:00";

    let forecastIndex = 0;


    forecastData.list.forEach((forecastWeather) => {

        if (
            forecastWeather.dt_txt.includes(timeTake) &&
            forecastIndex < 4
        ) {

            const date = new Date(forecastWeather.dt_txt);

            const options = {
                day: "2-digit",
                month: "short"
            };


            // DATE
            forecastitemdate[forecastIndex].textContent =
                date.toLocaleDateString("en-GB", options);


            // TEMPERATURE
            forecastitemtemp[forecastIndex].textContent =
                Math.round(
                    forecastWeather.main.temp - 273.15
                ) + " ℃";


            // ICON
            forecastitemimg[forecastIndex].src =
                `assets/weather/${getwettericon(
                    forecastWeather.weather[0].id
                )}`;


            forecastIndex++;
        }
    });
}


// SHOW SECTION
function showDisplaysection(section) {

    [wetterinfo, searchcity, notfound]
        .forEach(section => section.style.display = "none");


    section.style.display = "flex";
}


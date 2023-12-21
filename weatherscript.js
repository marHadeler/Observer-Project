const errorMessage = "ERROR. This place could not be found, check spelling"
const begin = "https://api.openweathermap.org/data/2.5/weather?q=";
const end = "&appid=abd41b0a48d3c90ed014f3841011e455&units=imperial";

async function getUrlContents(city){
    const userCity = await fetch(begin + city + end);
    var cityInfo = await userCity.json();

    console.log(cityInfo);

    document.querySelector(".city-name").innerHTML = cityInfo.name;
    document.querySelector(".temp").innerHTML = Math.round(cityInfo.main.temp) + "°F";
    document.querySelector(".status").innerHTML = cityInfo.weather[0].main;
    document.querySelector(".humidity").innerHTML = cityInfo.main.humidity + "%";
    document.querySelector(".feels-like").innerHTML = cityInfo.main.feels_like + "°F";
    document.querySelector(".wind-speed").innerHTML = cityInfo.wind.speed + " MPH";
    document.querySelector(".pressure").innerHTML = cityInfo.main.pressure + " hPa";
}

getUrlContents("bangkok");
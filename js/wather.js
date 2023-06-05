const keyWeather = "e592fbca3298d245da9670bdc49f5027";
const lat = 44.34;
const lon = 10.99;

const currentweather = async (weather) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyWeather}`;
    const response = await fetch(url);


    const data = await response.json();
}

currentweather();
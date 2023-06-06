const keyWeather = "e592fbca3298d245da9670bdc49f5027";
const lat = 44.34;
const lon = 10.99;

const nameCity = document.getElementById("name");
const coord = document.getElementById("cloud");
const description = document.getElementById("description");

const currentweather = async (weather) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyWeather}`;
    response = await fetch(url);
    data = await response.json();
    console.log(data);
    return data;
}

currentweather()
    .then(response => {
        nameCity.innerText = response.name;
        coord.innerText = response.coord.lat;
        description.innerText = response.weather[0].description;

    })

    .catch(error => console.log(error));

// City = document.getElementById("city");
// state = document.getElementById("country");
// country = document.getElementById("state");


//cityDates = async (city) => {
    // const url2 = `https://api.openweathermap.org/data/2.5/weather?q=city&appid=${keyWeather}`;
    // const  response2 = await fetch(url2);
    // const  data2 = await response2.json();
   // console.log(data2);
   // return data2;


//cityDatos(caracas)
    //.then(response2 => {
       // City.innerText = response[0].name;
       // state.innerText = response2.coord[0].lat;
        //country.innerText = response2.weather[0].description;








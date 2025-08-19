const input = document.querySelector('#inputBox');
const btn = document.querySelector('#btn');


btn.addEventListener("click", () => {
  let inpValue = input.value;

  getWeather(inpValue);
})

async function getWeather(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=df8060fcc2d3b557ddd1c119f440a8a8&units=metric`;

  try {
    let response = await axios.get(url);
    console.log(response.data);

    let realTemp = document.querySelector('#realTemp');
    // let temp = response.data.main.temp;
    realTemp.innerText = response.data.main.temp;
    // console.log(temp);


    let cityName = document.querySelector('#cityName');
    cityName.innerText = response.data.name;



    // let feels_like = response.data.main.feels_like;
    let feels_like = document.querySelector('#feels_like');
    feels_like.innerText = response.data.main.feels_like;
    // console.log(feels_like);


    // let grnd_level = response.data.main.grnd_level;
    let grnd_level = document.querySelector('#grnd_level');
    grnd_level.innerText = response.data.main.grnd_level;
    // console.log(grnd_level);


    // let humidity = response.data.main.humidity
    let humidity = document.querySelector('#humidity');
    humidity.innerText = response.data.main.humidity;
    // console.log(humidity);


    // let pressure = response.data.main.pressure;
    let pressure = document.querySelector('#pressure');
    pressure.innerText = response.data.main.pressure;
    // console.log(pressure);


    // let visibility = response.data.visibility / 1000;
    let visibility = document.querySelector('#visibility');
    visibility.innerText = response.data.visibility / 1000;
    // console.log(visibility);

    // let wind_speed = response.data.wind.speed;
    let wind_speed = document.querySelector('#wind_speed');
    wind_speed.innerText = response.data.wind.speed;
    // console.log(wind_speed);





    let sunrise = response.data.sys.sunrise
    let sunset = response.data.sys.sunset
    let timezone = response.data.timezone // 28800 = UTC+8

    function formatTime(ts) {
      return new Date((ts + timezone) * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
    }

    // console.log('Sunrise:', formatTime(sunrise))
    // console.log('Sunset:', formatTime(sunset))




  } catch(err) {
    console.log("ERROR: ", err);
  }
}

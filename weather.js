//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
var nameDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thrusday',
  'Friday',
  'Saturday',
  'Sunday',
];

var nameMonths = [
  'January',
  'Feburary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

fetch(
  'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1342f8dd595eda677ca40143519800de'
)
  .then((data) => data.json())
  .then((parsedData) => {
    console.log(parsedData);

    const valueOfLocation = parsedData.name;
    document.getElementsByClassName('area')[0].textContent = valueOfLocation;

    const day = new Date(parsedData.dt * 1000);
    document.getElementsByClassName('fixture')[0].textContent =
      nameDays[day.getDay() - 1] + ' ' +day.getDate()+' '+nameMonths[day.getMonth()] +day.getFullYear();
                
    var vol = parsedData.main.temp;
    document.getElementsByClassName('heat')[0].textContent =
      Math.floor(vol - 273) + '\xBA' + 'c';

    const clouds = parsedData.weather[0].main;
    document.getElementsByClassName('state')[0].textContent=clouds;

    const max = parsedData.main.temp_max;
    const mini = parsedData.main.temp_min;

    document.getElementsByClassName('temperature range')[0].textContent =Math.floor(max-273)+'\xBA'+'c' + ' / ' +Math.floor(mini-273) +'\xBA'+'c';
  })

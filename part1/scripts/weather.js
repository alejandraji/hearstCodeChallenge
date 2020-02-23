window.onload = () => {
  const newDiv = document.createElement("div");
  document.body.appendChild(newDiv);
  newDiv.setAttribute("id", "current");
};

const getWeatherData = () => {
  const script = document.createElement("script"),
    url =
      "https://www.sfchronicle.com/external/weather/weather.json?callback=hdnWeatherJsonpCallback";

  script.src = url;
  document.head.appendChild(script);
};

const hdnWeatherJsonpCallback = data => {
  const jsonData = data;
  console.log(jsonData);

  let paloAltoCity = jsonData.cities[9].geoloc.city;
  console.log(paloAltoCity);

  let paloTemp = jsonData.cities[9].current[0].temp;
  console.log("paloTemp:", paloTemp);

  let paloCondition = jsonData.cities[9].current[0].condition;
  console.log("paloAltoCondition:", paloCondition);

  const weeklyData = jsonData.cities[9].weekly;
  console.log("weeklyForecast:", weeklyData);

  const paloAltoWeekly = weeklyData.map(weekTemp => weekTemp.day);
  console.log("Weekly Palo Alto Day:", paloAltoWeekly);

  const paloAltoCondition = weeklyData.map(
    weekCondition => weekCondition.daycondition
  );
  console.log("Weekly Palo Alto Condition:", paloAltoCondition);

  // create variables to hold palo alto current temp + &#8457; and current condition

  // create a variable that stores the weekly weather

  //Render the basic HTML for each day of the "weekly" forecast.
  //For each day, output the name of the day("day") and the condition("condition").
};

const init = () => {
  getWeatherData();
};

init();

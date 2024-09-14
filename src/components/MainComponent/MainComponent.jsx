import {useState } from "react";
import AdditionalWeatherInfo from "../AdditionalWeatherInfo";
import Header from "../Header";
import SunPosition from "../SunPosition";
import DayWeatherForecast from "../weather/DayWeatherForecast";
import WeatherHeroSection from "../weather/WeatherHeroSection";
import WeekWeatherList from "../week_weather/WeekWeatherList";
import { SunWithCloudOnTheSide } from "../../icons";
import AverageWeatherDataList from "../average_weather_data/AverageWeatherDataList";
import days from "../../utils"

function MainComponent({weather_data}) {

  let [current_date, setCurrentDate] = useState(weather_data[0].date)
  
  let weather_for_today_data = weather_data[0]
  let current_day_weather_data = weather_data.find(({date}) => date === current_date)
  let weather_forecast_for_three_day_data = []
  weather_data.forEach((data) => {
    weather_forecast_for_three_day_data.push({
      'highestTemperature' :data.day.maxtemp_c,
      'lowestTempersture': data.day.mintemp_c,
      'day': days[new Date(data.date).getDay()],
      'icon': <SunWithCloudOnTheSide/>, 
      'date': data.date, 
    })
  })

  return (
    <div className="App px-4 lg:px-6 dark:bg-[#1F1F42] bg-[#81BCFF] " >
      <Header />
      <div className="md:w-[80%] md:mx-[auto] lg:mt-[20px] lg:flex lg:justify-center lg:gap-12 lg:items-end xl:justify-center xl:gap-14 ">
        <div className="w-[344px] mx-auto lg:mx-0 lg:w-[420px] ">
          <WeatherHeroSection 
            temperature={weather_for_today_data.day.avgtemp_c}
            highestTemperature={weather_for_today_data.day.maxtemp_c}
            lowestTempersture={weather_for_today_data.day.maxtemp_c}
          />
          <AdditionalWeatherInfo
            humidity={weather_for_today_data.day.avghumidity}
            rainProbability={weather_for_today_data.day.daily_chance_of_rain}
            windSpeed={weather_for_today_data.day.maxwind_kph}
             />
          <DayWeatherForecast 
          dayWeatherData={weather_data[0].hour}
          />
        </div>
        <div className="w-[344px] mx-auto lg:w-[500px] lg:mx-0 lg:mt-[59px]">
          <SunPosition />
          <WeekWeatherList
          weather_forecast_for_three_day_data={weather_forecast_for_three_day_data}
          setCurrentDate = {setCurrentDate}
          current_date = {current_date}
          />
           <AverageWeatherDataList
            dayWeatherData={current_day_weather_data}
          />
        </div>
      </div>
    </div>
  );
}

export default MainComponent;

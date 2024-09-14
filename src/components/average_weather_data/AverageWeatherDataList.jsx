import { Drop, SunRise, Thermometer, Wind, WindWithRain } from "../../icons";
import AverageWetherDataItem from "./AverageWetherDataItem";
import days from "../../utils"

export default function AverageWeatherDataList({dayWeatherData}) {
  let AverageWeatherData = [
    {
      icon: <Thermometer/> ,
      title: "min/max",
      weather_data: `${Math.floor(dayWeatherData.day.mintemp_c)} / ${Math.floor(dayWeatherData.day.maxtemp_c)}`,
      weather_data_symbol:''
    },
    {
      icon: <WindWithRain/> ,
      title: "Cloud",
      weather_data: dayWeatherData.hour[0].cloud,
      weather_data_symbol:'%'
    },
    {
      icon: <Wind/>,
      title: "Haze",
      weather_data: dayWeatherData.day.maxwind_kph,
      weather_data_symbol:'km/h'
    },
    {
      icon: <SunRise/>,
      title: "Sun raise",
      weather_data: dayWeatherData.astro.sunrise,
       weather_data_symbol:''
    },
    {
      icon: <SunRise/>,
      title: "Sun set",
      weather_data: dayWeatherData.astro.sunset,
       weather_data_symbol:''
    },
    {
      icon: <Drop/>,
      title: "Drop",
      weather_data: dayWeatherData.day.avghumidity,
      weather_data_symbol:'%'
    },
  ];
  return (
    <div className={`bg-[#FFFFFF1A] rounded-3xl mb-[30px] lg:mb-0 lg:mt-8`}
    >
      <div className="flex justify-between pt-4 px-4">
        <h1 className="text-base md:text-[17px] lg:text-lg  font-bold  text-white">
          Summary
        </h1>
        <p className="text-base md:text-[17px] lg:text-lg  text-white">
          {days[new Date(dayWeatherData.date).getDay()]}, {dayWeatherData.date.slice(-2)}
        </p>
      </div>
      <div className="flex flex-wrap justify-between px-4 py-6 gap-y-4">
        {AverageWeatherData.map(({ icon, title, weather_data, weather_data_symbol }) => (
          <AverageWetherDataItem
            icon={icon}
            title={title}
            weather_data={weather_data + " " + weather_data_symbol}
            key={title}
          />
        ))}
      </div>
    </div>
  );
}
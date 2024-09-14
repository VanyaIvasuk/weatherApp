import WeekWeatherListItem from "./WeekWeatherListItem";

export default function  WeekWeatherList({
  current_date,
  setCurrentDate, 
  weather_forecast_for_three_day_data
}) {
  
  const onClickHandler = (date) => {
    setCurrentDate(date)
  }

  return (
    <div className="flex justify-between items-center gap-4 mb-[20px] xl:mb-[10px] xl:mt-[10px] ">
      {weather_forecast_for_three_day_data.map(({ icon, lowestTempersture, highestTemperature, betweenTemperatureSlash, day, date}) => (
        <WeekWeatherListItem 
          onClickHandler={onClickHandler}
          icon={icon}
          lowestTempersture={lowestTempersture}
          highestTemperature={highestTemperature}
          betweenTemperatureSlash={betweenTemperatureSlash}
          day={day}
          key={day}
          date={date}
          current_date={current_date}
        />
      ))}
    </div>
  );
}

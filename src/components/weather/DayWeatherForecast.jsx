import DayWeatherItem from "./DayWeatherItem";
import days from "../../utils"

export default function DayWeatherForecast({dayWeatherData}) {
  return (
    <div className="dark:bg-[#1F1F42] bg-[#81BCFF] ">
      <div className=" rounded-3xl mx-auto bg-[#FFFFFF1A] text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-4md:text-[17px] lg:text-[18px] ">
            Today
          </h1>
          <p className="text-4 md:text-[17px] lg:text-[18px] ">
          {days[new Date(dayWeatherData[0].time.split(" ")[0]).getDay()]}, {dayWeatherData[0].time.split(" ")[0].slice(-2)}
          </p>
        </div>
        <div className="flex mt-4 overflow-scroll overflow-y-hidden no-scrollbar gap-x-6">
          {dayWeatherData.map(({ condition, temp_c, time }) => (
            <DayWeatherItem
              icon={condition.icon}
              temperature={temp_c}
              time={time.slice(-5)}
              key={time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

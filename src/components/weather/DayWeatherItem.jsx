export default function DayWeatherItem({ time, temperature, icon }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <p className="text-xs">{time}</p>
      <div className="size-[42px]">
        <img src={icon} alt="weather_icon"/>
      </div>
      <h1 className="text-lg">{temperature}°</h1>
    </div>
  );
}

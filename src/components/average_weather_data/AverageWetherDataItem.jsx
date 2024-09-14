export default function AverageWetherDataItem({ icon, title, weather_data }) {
  return (
    <div className="w-[80px] lg:w-fit  flex flex-col justify-center text-center items-center">
      {icon}
      <h1 className="text-sm  text-white">
        {title}
      </h1>
      <p className="text-md  text-white font-bold">
        {weather_data}
      </p>
    </div>
  );
}

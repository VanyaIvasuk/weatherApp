export default function WeekWeatherListItem({
  icon,
  day,
  highestTemperature,
  lowestTempersture,
  onClickHandler,
  current_date,
  date
}) {
  return (
    <div className={` w-[193px] lg:h-[133px] xl:h-[133px] my-[15px] flex flex-col gap-y-3 text-center items-center  py-[10px] 
      ${date === current_date ? "bg-[#FFFFFF1A] rounded-[30px]" : ""}`}
      onClick={() => onClickHandler(date)}
    >
    <div className="lg:flex xl:flex">
        <div className="lg:my-[19px] xl:my-[19px] lg:mr-[10px] xl:mr-[10px]">
          <p className="text-[20px] font-medium text-white">{day}</p>
          <div className="size-[42px] sm:mx-[auto] md:mx-[auto] sm:my-[5px] md:my-[5px]">{icon}</div>
        </div>
        <div className="lg:my-[30px] xl:my-[30px] ml-[8px]">
        <p className="text-[16px]  text-[#A0A7BA]">{date.slice(5).split("-").join(".")}</p>
          <p className="text-[18px]  font-bold text-white">
            {" "}
            {Math.ceil(lowestTempersture)}° / {Math.ceil(highestTemperature)}°
          </p>
        </div>
    </div>
    </div>
  );
}

import { Drop, Wind, WindWithRain } from "../icons";

export default function AdditionalWeatherInfo({rainProbability, windSpeed, humidity }) {
  return (
    <div className="">
      <div className="w-4/5  h-[36px] flex justify-between items-center bg-[#FFFFFF1A] px-[16px] py-[8px] rounded-[24px] mx-auto mb-6">
        <div className="flex gap-1 items-center ">
          <WindWithRain className="size-5"/>
          <p className="text-base  text-white">
             {rainProbability} %
          </p>
        </div>
        <div className="flex gap-1 items-center ">
          <Drop  className="size-5"/>
          <p className="text-base  text-white">
          {humidity} %
          </p>
        </div>
        <div className="flex gap-1 items-center "> 
          <Wind  className="size-5 "/>
          <p className="text-base text-white">
            {windSpeed} km/h
          </p>
        </div>
      </div>
    </div>
  );
}

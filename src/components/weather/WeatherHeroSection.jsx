import { CloudWithSunBehind } from "../../icons";

export default function WeatherHeroSection({temperature, highestTemperature, lowestTempersture}) {
  return (
    <div className="dark:bg-[#1F1F42] bg-[#81BCFF] pb-5  sm:pb-5 md:pb-7 lg:pb-9 xl:pb-11 text-center flex flex-col items-center mt-14  ">
      <CloudWithSunBehind/>
      <div className="text-white flex flex-col items-center">
       <div className="lg:flex justify-between gap-4 md:flex">
          <h1 className="text-[64px]">
            {Math.floor(temperature)}°
          </h1>
          <div className="mt-[25px]">
            <p className="text-lg pb-3">
              Kyiv
            </p>
            <p className="text-lg">
              Ukraine
            </p>
          </div>
       </div>
        <div className=" flex justify-between w-[104px]  sm:w-[114px] md:w-[134px] lg:w-[164px]  ">
          <p className="text-lg">
            H: {Math.floor(highestTemperature)}°
          </p>
          <p className="text-lg">
            L: {Math.floor(lowestTempersture)}°
          </p>
        </div>
      </div>
    </div>
  );
}

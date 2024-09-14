import React from "react";
import { Long, OnlySun, SunRise } from "../icons";
import { useEffect, useRef, useState } from "react";

export default function SunPosition() {
  const sun_data = {
    sunrise: "05:26 AM",
    sunset: "08:41 PM",
    moonrise: "01:24 AM",
    moonset: "07:29 PM",
    moon_phase: "Waning Crescent",
    moon_illumination: 12,
    is_moon_up: 1,
    is_sun_up: 0,
  };
  let current_time = 16;

  const getTimeFromTimeStr = (time) => {
    let new_time = time.slice(0, -3);
    let hours = new_time.split(":")[0];
    let corrected_hours = hours.startsWith("0") ? hours.slice(1) : hours;

    return +corrected_hours;
  };
  let sunDuration =
    getTimeFromTimeStr(sun_data.sunset) -
    getTimeFromTimeStr(sun_data.sunrise) +
    12;

  let time_difference = current_time - getTimeFromTimeStr(sun_data.sunrise);

  let sun_container = useRef(null);
  const [sunDistance, setSunDistance] = useState(0);
  const [sunHourStepLeft, setHourSunStepLeft] = useState(0);
  const [sunHourStepTop, setHourSunStepTop] = useState(0);

  useEffect(() => {
    if (sun_container.current) {
      setSunDistance(sun_container.current?.clientWidth);
      setHourSunStepLeft(sun_container.current?.clientWidth / sunDuration);
      setHourSunStepTop(sun_container.current?.clientHeight / sunDuration);
    }
  }, []);

  let zenit = getTimeFromTimeStr(sun_data.sunrise) + sunDuration / 2;
  let sun_condition =
    current_time > zenit
      ? sunDuration / 2 - (current_time - zenit)
      : time_difference;
  return (
    <div className="dark:bg-[#1F1F42] bg-[#81BCFF]">
      <div ref={sun_container} className="relative overflow-hidden">
        <Long />
        <div
          className="absolute rounded-full overflow-hidden "
          style={{
            left: `${(time_difference * sunHourStepLeft) - 40}px`, 
            bottom: `${(( sun_condition ) * sunHourStepTop) + 40}px`
          }}  
        >
          <OnlySun />
        </div>
      </div>
      <div className="flex justify-between  w-full mx-auto text-white  text-xs pb-5">
        <div className="w-[51px] ">
          <SunRise className="w-6  mx-auto" />
          <p className="text-[12px] lg:text-[13px]">06:04am</p>
          <p className="text-[12px] lg:text-[13px]">Sun rise</p>
        </div>
        <div className="w-[51px]">
          <SunRise className="w-6 " />
          <p className="text-[12px] lg:text-[13px]">06:04pm</p>
          <p className="text-[12px] lg:text-[13px]">Sun set</p>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import MainComponent from "./components/MainComponent/MainComponent";
import Loader from "./components/Loader";
import axios from "axios"

export default function App(params) {
  let [isLoading, setIsLoading] = useState(true)
  let[weatherData, setWeatherData] = useState([])

  useEffect( () => {
    async function getWeatherData() {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=5d7e23da61c94e88ade65635240108&q=Kyiv&days=3&aqi=no&alerts=no`
      const response = await axios.get(url)
      setWeatherData(response.data.forecast.forecastday)
      setIsLoading(false)
    }
    getWeatherData()
  }, [])
  return(
    <>
    {
      isLoading
      ?
      <Loader/>
      :
      <MainComponent weather_data = {weatherData}/>
    }
    </>
  )
};

import React, { useContext } from "react"
import DataContext from "../../context/data-context"

import CurrentCard from "./CurrentCard"
import Forecast from "./Forecast"

const Main = () => {
  const ctx = useContext(DataContext)

  if (!ctx.data.current) return

  const { uv, wind_kph, pressure_mb, humidity, vis_km, air_quality } =
    ctx.data.current

  return (
    <main className="bg-gray-200 w-3/4 text-black px-10 py-14 dark:bg-neutral-800 dark:text-neutral-200 transition-all">
      <Forecast />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Today's Highlights</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-4">
          <CurrentCard title="UV Index" data={uv} />
          <CurrentCard title="Wind Status" data={`${wind_kph}km/h`} />
          <CurrentCard title="Pressure" data={`${pressure_mb}Mb`} />
          <CurrentCard title="Humidity" data={`${humidity}%`} />
          <CurrentCard title="Visibility" data={`${vis_km}km`} />
          <CurrentCard title="Air Quality" data={Math.floor(air_quality.co)} />
        </div>
      </div>
    </main>
  )
}

export default Main

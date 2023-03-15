import React, { useState, useEffect, useContext } from "react"
import DataContext from "../../context/data-context"
import { fetchForecast } from "../../lib/helpers"

import ForecastCard from "./ForecastCard"

const Forecast = () => {
  const [forecast, setForecast] = useState([])

  const ctx = useContext(DataContext)

  if (!ctx.data.location) return
  const location = ctx.data.location.name

  useEffect(() => {
    fetchForecast(location).then((res) => setForecast(res.forecast.forecastday))
  }, [location])

  if (forecast.length === 0) return

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Forecast</h2>
      <div className="flex items-center justify-between gap-x-4">
        {forecast.map((data, idx) => {
          return <ForecastCard key={idx} data={data} />
        })}
      </div>
    </>
  )
}

export default Forecast

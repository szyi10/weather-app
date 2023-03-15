import React from "react"

const ForecastCard = ({ data }) => {
  if (!data.day) return

  const date = new Date(data.date_epoch * 1000)
  const day = date.getDay()
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div className="bg-white rounded-xl w-[33%] flex flex-col items-center justify-between px-5 py-6 overflow-hidden dark:bg-neutral-900">
      <h3 className="font-semibold whitespace-nowrap">{days[day]}</h3>
      <img src={data.day.condition.icon} className="py-1" />
      <div className="flex text-sm w-full justify-center gap-x-1 font-medium">
        <p>{Math.floor(data.day.maxtemp_c)}°</p>
        <p className="text-gray-500">{Math.floor(data.day.mintemp_c)}°</p>
      </div>
    </div>
  )
}

export default ForecastCard

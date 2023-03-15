import React, { useContext } from "react"
import DataContext from "../../context/data-context"

const SidebarBody = () => {
  const ctx = useContext(DataContext)

  const current = ctx.data.current

  if (!current) return

  const timestamp = ctx.data.location.localtime_epoch
  const time = new Date(timestamp * 1000)
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const dayOfWeek = time.getDay()
  const hour = time.getHours()
  const minute = time.getMinutes()

  return (
    <div className="flex flex-col text-black dark:text-neutral-100">
      <div className="mt-8 flex justify-between items-start">
        <h2 className="text-7xl flex">
          {current.temp_c}
          <span className="text-xl font-medium">°C</span>
        </h2>
        <img src={current.condition.icon} className="w-1/4" />
      </div>
      <div className="flex gap-x-2 text-lg my-6">
        <p>{days[dayOfWeek]},</p>
        <p className="text-neutral-500 dark:text-neutral-400">
          {hour}:{minute}
        </p>
      </div>
    </div>
  )
}

export default SidebarBody

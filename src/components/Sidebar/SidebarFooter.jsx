import React, { useContext } from "react"
import DataContext from "../../context/data-context"

const SidebarFooter = () => {
  const ctx = useContext(DataContext)

  if (!ctx.data.current) return

  let temp = ctx.data.current.temp_c
  let bg

  if (temp <= 5) {
    bg = "bg-gradient-to-r from-cyan-400 to-blue-500"
  } else if (temp >= 5 && temp <= 15) {
    bg = "bg-gradient-to-br from-green-400 to-blue-400"
  } else if (temp >= 15) {
    bg = "bg-gradient-to-br from-pink-500 to-orange-400"
  }

  return (
    <>
      <div className="text-black flex flex-col gap-y-3 mt-5 dark:text-neutral-200">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-neutral-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
            />
          </svg>
          <p className="text-md ml-2">{ctx.data.current.condition.text}</p>
        </div>
      </div>

      <div
        className={`${bg} rounded-xl flex items-center justify-center py-8 mt-12`}
      >
        <h3 className="font-semibold text-lg">{ctx.data.location.name}</h3>
      </div>
    </>
  )
}

export default SidebarFooter

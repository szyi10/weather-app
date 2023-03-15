import React, { useRef, useContext } from "react"
import DataContext from "../../context/data-context"
import { fetchCurrentWeather } from "../../lib/helpers"

const SidebarHeader = () => {
  const searchRef = useRef()
  const ctx = useContext(DataContext)

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    }
  }

  const showPosition = (position) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    fetchCurrentWeather(`${lat}, ${lon}`).then((res) => ctx.setData(res))
  }

  const submitHandler = (e) => {
    e.preventDefault()

    console.log("Searched City: ", searchRef.current.value)

    fetchCurrentWeather(searchRef.current.value).then((res) => ctx.setData(res))
  }

  return (
    <div className="flex gap-x-4 items-center">
      <form
        className="relative text-black dark:text-white"
        onSubmit={submitHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute left-0 top-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          ref={searchRef}
          type="text"
          placeholder="Search for places ..."
          className="bg-transparent outline-none pl-8 pb-2 font-medium transition-all placeholder:text-black border-b border-transparent focus:border-black focus:placeholder:text-neutral-500 dark:placeholder:text-neutral-100 dark:focus:border-neutral-400"
        />
      </form>
      <button
        onClick={getLocation}
        className="bg-neutral-200 p-1 rounded-full text-black transition-colors hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      </button>
    </div>
  )
}

export default SidebarHeader

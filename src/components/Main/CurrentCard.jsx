import React from "react"

const CurrentCard = ({ title, data }) => {
  return (
    <div className="relative bg-white rounded-xl w-[32%] px-5 py-6 aspect-[4/3] dark:bg-neutral-900">
      <h5 className="text-gray-600 font-medium">{title}</h5>
      <h2 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-5xl w-full text-center">
        {data}
      </h2>
    </div>
  )
}

export default CurrentCard

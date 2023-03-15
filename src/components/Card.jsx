import React from "react"

const Card = ({ children }) => {
  return (
    <main className="flex rounded-3xl overflow-hidden w-[1262px]">
      {children}
    </main>
  )
}

export default Card

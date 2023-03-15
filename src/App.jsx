import React, { useEffect, useContext } from "react"
import DataContext from "./context/data-context"
import { fetchCurrentWeather } from "./lib/helpers"

import Card from "./components/Card"
import Main from "./components/Main/Main"
import Sidebar from "./components/Sidebar/Sidebar"
import ThemeButton from "./components/ThemeButton"

const App = () => {
  const ctx = useContext(DataContext)

  useEffect(() => {
    fetchCurrentWeather("Warsaw").then((res) => ctx.setData(res))
  }, [])

  return (
    <>
      <Card>
        <Sidebar />
        <Main />
      </Card>
      <ThemeButton />
    </>
  )
}

export default App

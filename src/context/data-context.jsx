import { useState, createContext } from "react"

const DataContext = createContext({
  data: {},
  setData: () => {},
})

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({})

  const setRecievedData = (data) => {
    setData(data)
  }

  const contextValue = {
    data,
    setData: setRecievedData,
  }

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  )
}

export default DataContext

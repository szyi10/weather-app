const API_KEY = "299ee3675d7245fd8b9101043220507"

export async function fetchCurrentWeather(name) {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${name}&aqi=yes`
  )
  const data = await res.json()

  if (!res.ok) return {}

  return data
}

export async function fetchForecast(name) {
  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${name}&days=3&aqi=no&alerts=no`
  )
  const data = await res.json()

  if (!res.ok) return {}

  return data
}

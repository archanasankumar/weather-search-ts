import { useState } from 'react'
import { Alert, Grid } from '@mui/material'
import { WeatherData } from './types'
import { getWeather } from './services/weatherAPI'
import { SearchBar } from './components/SearchBox'
import { WeatherCard } from './components/WeatherCard'
import LoadingSkeleton from './components/Loading'

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (city: string) => {
    try {
      setIsLoading(true)
      setError('')
      const data = await getWeather(city)
      setWeatherData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setWeatherData(null)
    } finally {
      setIsLoading(false)
    }
  }

  const onRest = () => {
    setWeatherData(null)
    setIsLoading(false)
    setError('')
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} onRest={onRest} />
      <Grid justifyContent={'center'} display={'flex'}>
        {isLoading && <LoadingSkeleton />}
        {weatherData && <WeatherCard data={weatherData} />}
        {error && (
          <Alert variant="filled" severity="error">
            {error}
          </Alert>
        )}
      </Grid>
    </>
  )
}

export default App

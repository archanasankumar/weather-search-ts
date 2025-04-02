import { Card, CardContent, Typography, Grid } from '@mui/material'
import { WeatherData } from '../types'

interface WeatherCardProps {
  data: WeatherData
}

export function WeatherCard({ data }: WeatherCardProps) {
  return (
    <Card sx={{ width: 500, mt: 8 }} variant="outlined">
      <CardContent>
        <Grid container spacing={2} alignItems={'center'}>
          <Grid size={8} display={'flex'}>
            <Typography variant="h4" component="div">
              {data.name}
            </Typography>
          </Grid>
          <Grid size={4} display={'flex'}>
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
              loading="lazy"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Typography variant="h3" component="div">
              {Math.round(data.main.temp)}°C
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary' }} component="div">
              {data.weather[0].main}
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary', display: 'block' }}>
              Feels like: {Math.round(data.main.feels_like)}°C
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary', display: 'block' }}>
              Humidity: {data.main.humidity}%
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary', display: 'block' }}>
              Wind: {data.wind.speed} m/s
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

import { Divider, IconButton, InputBase, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { useState } from 'react'

interface SearchBarProps {
  onRest: () => void
  onSearch: (city: string) => void
}

export function SearchBar({ onSearch, onRest }: SearchBarProps) {
  const [cityName, setCityName] = useState('')

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault()
    if (cityName.trim()) {
      onSearch(cityName)
    }
  }

  return (
    <Paper component="div" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', border: '1px solid grey' }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter city name..."
        value={cityName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCityName(event.target.value)
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault() // Prevent page reload
            handleClick(event) // Call the search function
          }
        }}
        inputProps={{ 'aria-label': 'search weather' }}
      />
      <IconButton
        sx={{ p: '10px' }}
        aria-label="search"
        onClick={() => {
          setCityName('')
          onRest()
        }}
      >
        <HighlightOffIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton sx={{ p: '10px' }} aria-label="search" onClick={handleClick}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

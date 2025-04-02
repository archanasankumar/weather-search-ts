# React Weather Dashboard

A modern weather application built with React and TypeScript, featuring real-time weather data from OpenWeather API.

![App Screenshot](https://github.com/archanasankumar/weather-search-ts/blob/main/screenshot/output.png?raw=true)

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Real-time temperature and conditions
- 💨 Wind speed and humidity data
- 🎨 Clean, responsive design
- ⚡ Loading states and error handling
- 🔄 API integration
- 📱 Mobile-friendly interface

## 🛠️ Tech Stack

- React 19
- TypeScript
- Vite
- MUI
- Axios
- OpenWeather API

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeather API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/archanasankumar/weather-search-ts.git
```

2. Navigate to project directory
```bash
cd weather-search-ts
```

3. Install dependencies
```bash
npm install
```

4. Create `.env` file in root directory
```env
VITE_API_KEY=your_openweather_api_key
VITE_API_URL=https://api.openweathermap.org/data/2.5
```

5. Start the development server
```bash
npm run dev
```

6. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
react-weather-dashboard/
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx
│   │   ├── WeatherCard.tsx
│   │   └── Loading.tsx
│   ├── services/
│   │   └── weatherAPI.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── .env
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Usage

1. Enter a city name in the search bar
2. Press enter or click the search button
3. View current weather conditions including:
   - Temperature
   - Weather condition
   - Feels like temperature
   - Humidity
   - Wind speed

## 🧪 Running App

```bash
npm run dev
```

## 🚀 Deployment

1. Build the project
```bash
npm run build
```

2. Format the app
```bash
npm run format
```

## 🐛 Common Issues & Solutions

### CORS Issues
If you encounter CORS issues, update your `vite.config.ts`:
```typescript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api.openweathermap.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
```

### API Key Security
- Never commit your `.env` file
- Use environment variables
- Consider using a backend proxy for production

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [OpenWeather API](https://openweathermap.org/api) for weather data
- [MUI](https://mui.com/material-ui/getting-started/) for UI Components
- [Vite](https://vitejs.dev/) for the build tool

## 📸 Screenshots

[Add your screenshots here with descriptions]

---

## 💡 Tips for Development

1. Get your API key from [OpenWeather](https://openweathermap.org/api)
2. Use the provided TypeScript interfaces for type safety
3. Handle loading and error states appropriately
4. Test the app with different cities and error scenarios

---
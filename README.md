#  Weather App (React + OpenWeather API)

A modern **Weather Application** built using **React**, **Vite**, and **Tailwind CSS** that allows users to view real-time weather information based on their **current location** or by **searching for a city**.

This project demonstrates clean React architecture, API integration, hooks usage, and responsive UI design.

---

##  Live Features

-  Fetches weather using **current location (Geolocation API)**
-  Search weather by **city name**
-  Displays temperature, weather condition, humidity, and wind speed
-  Dynamic background based on weather condition
-  Loading and error state handling
-  Fully responsive UI
-  Secure API key handling using `.env`

---

##  Tech Stack

- **React (Hooks)**
- **Vite**
- **Tailwind CSS**
- **OpenWeatherMap API**
- **JavaScript (ES6+)**

---

##  Project Structure

```bash
weather-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   └── WeatherCard.jsx
│   ├── hooks/
│   │   └── weatherApi.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md

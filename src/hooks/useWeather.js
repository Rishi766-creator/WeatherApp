export const fetchWeatherByCity = async (city, API_KEY) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!res.ok) throw new Error("City not found");
  return res.json();
};

import { useState, useEffect } from 'react';
import axios from 'axios';

const Meteo = () => {
  const [isRaining, setIsRaining] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'aabad226ab52a9a2f0c635d062936c13';
        const city = 'Andoharanofotsy'; // Ou toute autre ville de votre choix
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response = await axios.get(url);
        const weatherData = response.data;
        setIsRaining(containsRain(weatherData));
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  const containsRain = (data) => {
    if (data && data.weather) {
      return data.weather[0].main.toLowerCase().includes('rain');
    }
    return false;
  };
  console.log(isRaining);
  
  return isRaining;
};

export default Meteo;

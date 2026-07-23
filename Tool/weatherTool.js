export async function weatherTool(city) {
    // Step 1: Get coordinates
    const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );

    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
        return `City "${city}" not found.`;
    }

    const { latitude, longitude } = geoData.results[0];

    // Step 2: Get weather
    const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
    );

    const weatherData = await weatherRes.json();

    const current = weatherData.current;

    return `
City: ${city}
Temperature: ${current.temperature_2m} °C
Humidity: ${current.relative_humidity_2m} %
Wind: ${current.wind_speed_10m} km/h
Weather Code: ${current.weather_code}
`;
}
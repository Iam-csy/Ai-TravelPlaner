export async function weatherTool(city) {

    const api=process.env.weatherApiKey;

    return `
City : ${city}
Temperature : 29°C
Condition : Sunny
Humidity : 58%
Wind : 10 km/h
`;

}
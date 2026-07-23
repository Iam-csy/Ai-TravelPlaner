const HotelTool = async (city) => {

    const apiKey = process.env.HOTEL_API_KEY;

    // 1. Get city coordinates
    const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );

    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
        return "City not found";
    }

    const { latitude, longitude } = geoData.results[0];

    // 2. Get nearby hotels
    const hotelRes = await fetch(
        `https://api.geoapify.com/v2/places?categories=accommodation.hotel&filter=circle:${longitude},${latitude},5000&limit=5&apiKey=${apiKey}`
    );

    const hotelData = await hotelRes.json();

    return hotelData.features.map(hotel => ({
        name: hotel.properties.name || "Unknown Hotel",
        address: hotel.properties.formatted,
    }));
};

export default HotelTool;
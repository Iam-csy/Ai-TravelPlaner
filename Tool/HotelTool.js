

const HotelTool = (city) => {

    const hotelInfo=process.env.HotelApiKey;


    return {

        hotelName:hotelInfo.name,
        price:hotelInfo.price,

    }


  
}

export default HotelTool

 export async function handleSubmit(event) {
    event.preventDefault()

        let date = document.querySelector('.travel-date').value;
        let destination = document.querySelector('.travel-input').value

        Client.clearText();

            let $Date = new Date(date).getTime();
            let $currentDate = new Date().getTime();
        

    if (date !== "" && destination !== "" && $Date > $currentDate) {

        let daysDiff = Math.ceil(((new Date(date) - new Date())/(1000 * 3600 * 24)))


    try {

        // PIXABAY FETCH REQUEST
        let API_KEY_PIXABAY = '18393364-b93a8cbe009d33fa4364578e1'
            let pixabay_res = await fetch(`https://pixabay.com/api/?key=${API_KEY_PIXABAY}&q=${destination}&image_type=photo`)
            let pixabay_data = await pixabay_res.json()
            let destinationImg = pixabay_data.hits.length > 0 ? pixabay_data.hits[0].webformatURL : "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzI1NTQ0MjY&ixlib=rb-1.2.1&q=80&w=1080"


            // GEONAMES FETCH REQUEST
            // const geo_res = await fetch(`http://api.geonames.org/searchJSON?q=${destination}&username=famoochi`)
            // const geo_data = await geo_res.json()
            // const lat = geo_data.geonames[0].lat
            // const long = geo_data.geonames[0].lng
            // const countryName = geo_data.geonames[0].countryName ? geo_data.geonames[0].countryName : "---"
            // const name = geo_data.geonames[0].name

            //using Openweather API
            let API_KEY_OPENWEATHER = 'ae8183305930109bde697b966d0122af'
            const open_res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${API_KEY_OPENWEATHER}`)
            const open_data = await open_res.json()
            const lat = open_data.coord.lat
            const long = open_data.coord.lon
            const countryName = open_data.sys.country
            const name = open_data.name

            // WEATHERBIT FETCH REQUEST
            let API_KEY_WEATHERBIT = '80da14218e3c4dd798f7f1cf19ec2ee8';
            let weather_res = daysDiff > 7 ? await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${destination}&key=${API_KEY_WEATHERBIT}`) : await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=${API_KEY_WEATHERBIT}&include=minutely`);

            const weather_data = await weather_res.json()
            let maxTemp = weather_data.data[0].max_temp !== undefined ? weather_data.data[0].max_temp : '---'
            let minTemp = weather_data.data[0].min_temp !== undefined ? weather_data.data[0].min_temp : '---'
            let temp = weather_data.data[0].temp
            let weatherInfo = weather_data.data[0].weather.description
            let icon = weather_data.data[0].weather.icon
            let dayText = daysDiff > 1 ? "days away" : daysDiff == 1 ? "day away" : "your trip is today.";
            
            let travelDetails = { name, countryName, date, daysDiff, lat, long, maxTemp, minTemp, weatherInfo, icon, destinationImg,temp, dayText} 

    
            
            const getElement = (ele) => document.querySelector(ele);
           


            let destinationName = getElement('.destinationName');
            let destName = getElement('#destName');
            let destCountry = getElement('#destCountry');
            let daysToTravel = getElement('.remainingDays');
            let high = getElement('.high');
            let low = getElement('.low');
            let travelDate = getElement('.date');
            let weatherDetails = getElement('.weatherInfo');
            let imageSrc = getElement('.travelImage') 
            let travelSection = getElement('#travel-section') 
            let travelTemp = getElement('.temp')
            let travelIcon = getElement('.icon')
            let daysText = getElement('#text');

            
            // DISPLAY INFO 
            destinationName.innerHTML = name;
            destName.innerHTML = name;
            destCountry.innerHTML = countryName;
            daysToTravel.innerHTML = daysDiff;
            high.innerHTML = maxTemp;
            low.innerHTML = minTemp;
            travelDate.innerHTML = date;
            weatherDetails.innerHTML = weatherInfo;
            imageSrc.src = destinationImg;
            travelSection.style.display = "block" 
            travelIcon.setAttribute("src", `https://www.weatherbit.io/static/img/icons/${icon}.png`); 
            travelTemp.innerHTML = temp;
            daysText.innerHTML = dayText;
        

            // POST WEATHER DETAILS TO DATABASE
            const options = {
                method: 'POST',
                credentials: 'same-origin',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(travelDetails)
            };
            const db_response = await fetch('http://localhost:1922/weather', options);
            const db_json = await db_response.json();
    
    } catch (error) {
        console.log(error)
    }

    } else {
        alert("Please ensure the destination and travel date are correct")
    }

}










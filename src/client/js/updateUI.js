document.querySelector('.save').addEventListener('click', updateUI)


// Update The UI dynamically
export async function updateUI() {
    try {
        const request = await fetch("http://localhost:1922/weather");
       const allWeatherInfo = await request.json(); 
       document.querySelector('#travel-section').style.display = "none"
       document.querySelector('.output').style.display = "flex" 
        
        
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "travelDetails")
        newDiv.classList.add('target')

        newDiv.innerHTML = `
        <div class="imgContainer">
            <img class="travelImage" src="${allWeatherInfo.destinationImg}" alt="destination picture" >
        </div>
        <div class="travel-info"> 
            <h3>My trip to: <span id="destName">${allWeatherInfo.name}</span> , <span id="destCountry">${allWeatherInfo.countryName}</span>; 
            <br>Departing: <span id="datenow"> ${allWeatherInfo.date}  </span> 
            </h3>
            <div class="SaveRemove">
                <button id="remove" onclick="Client.removeUI(event)">Remove Trip</button>
            </div>


            <div id="icon">
                    <div class="iconTemp">
                        <div><img class="icon" src="https://www.weatherbit.io/static/img/icons/${allWeatherInfo.icon}.png"></div>
                        <p> <span class="temp">${allWeatherInfo.temp}</span>ºc</p>
                    </div>
                    <p><span class="destinationName">${allWeatherInfo.name}</span>, is <span class="remainingDays">${allWeatherInfo.daysDiff}</span> <span id="text">${allWeatherInfo.dayText}</span></p>
            </div>
            
            <p id='weather-p'>Typical weather for then is;</p>
            <p id="weatherInfo"> <span class="weatherInfo">${allWeatherInfo.weatherInfo}</span>.</p>
            <div class="travel-temp-info">
                    <p>Max temp: <span class="high">${allWeatherInfo.maxTemp}</span></p>
                    <p>Min temp: <span class="low">${allWeatherInfo.minTemp}</span></p>
            </div>
            
        </div>  
       `
       document.querySelector('.output').prepend(newDiv)

            
    } catch (err) {
        console.log(err)
    }
}

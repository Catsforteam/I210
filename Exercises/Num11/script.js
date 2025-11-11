const fetchBtn = document.getElementById('fetchBtn');
const weatherDiv = document.getElementById('weather');

fetchBtn.addEventListener("click", () =>{

const appUrl = "https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true";

fetch(appUrl)
.then(response => {
    console.log("response");
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})

.then(data => {
    const weather = data.current_weather;
    const temp = weather.temperature;
    const wind = weather.windspeed;
console.log("data");
    weatherDiv.innerHTML = `
    <p><strong>Location:</strong> Tokyo</p>
    <p><strong>Temperature:</strong> ${temp} C</p>
    <p><strong>Wind Speed:</strong> ${wind} km/h</p>`;
})

.catch(error =>{
    weatherDiv.innerHTML = `
    <p><strong>Error:</strong> ${error.message}</p>`;
    console.log(error);
});

});
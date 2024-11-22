const cityinput = document.querySelector('.cityinput')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    if (cityinput.value != '') {
        const cityName = cityinput.value;
        console.log(cityName);
        cityinput.value = ''
        cityinput.blur()
        getTemp(cityName)
    }

})
cityinput.addEventListener('keydown', (e) => {
    if (e.key == 'Enter' && cityinput.value != '') {
        const cityName = cityinput.value;
        console.log(cityName);
        cityinput.value = ''
        cityinput.blur()
        getTemp(cityName)
    }
})
let cityName = cityinput.value

async function getTemp(cityName) {
    let x = await fetch('http://api.weatherstack.com/current?access_key=6bc40dca2146e1234f4b9b2bb07d7df3&query=' + cityName)
    let data = await x.json()
    console.log(data);
    if(data.success == undefined){
        document.getElementById('sec').style.display='none'
        document.getElementById('Temp2').innerHTML=`<i class="bi bi-geo-alt"></i>` +data.location.name 
        document.getElementById('img').src=data.current.weather_icons
        img.style.display='flex'
        document.getElementById('Temp').innerHTML=data.current.temperature + '°C'
        document.getElementById('myDate').innerHTML=data.location.localtime
        document.getElementById('descriptions').innerHTML=data.current.weather_descriptions
        document.getElementById('humidity').innerHTML=`<i class="bi bi-droplet"></i>`+' '+ 'Humidity' +' '+data.current.humidity + '%'
        document.getElementById('windspeed').innerHTML=`<i class="bi bi-wind"></i>`+' '+ 'Wind speed' +' '+data.current.wind_speed + data.current.wind_degree + '/'+data.current.wind_dir
    }else{
        // console.log(err);
        alert('not found!...'+ 'try again :)')
        
    }
}

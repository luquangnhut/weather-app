const APP_ID='4e2e353e5ad143541080fb20fd3b5c13';
const Default='--';
const searchInput = document.querySelector('#search-input');
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temp = document.querySelector('.temperature');
const feelLike=document.querySelector('.feel-like');

const sunrise = document.querySelector('.sunrise');
const sunset= document.querySelector('.sunset');
const hunidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');

    fetch('https://api.openweathermap.org/data/2.5/weather?q=ho chi minh&appid=4e2e353e5ad143541080fb20fd3b5c13&units=metric&lang=vi')
    .then(async res =>{
        const predata= await res.json();
        console.log('[Search Input]',predata);
        cityName.innerHTML=predata.name||Default;
        weatherState.innerHTML=predata.weather[0].description||Default;
        weatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${predata.weather[0].icon}@2x.png`);
        temp.innerHTML=Math.round(predata.main.temp)||Default;
        sunrise.innerHTML=moment.unix(predata.sys.sunrise).format(`H:mm`)||Default;
        sunset.innerHTML=moment.unix(predata.sys.sunset).format(`H:mm`)||Default;
        hunidity.innerHTML=Math.round(predata.main.humidity)+' %'||Default;
        windSpeed.innerHTML=(predata.wind.speed*3.6).toFixed(2)+' km/h'||Default;
        feelLike.innerHTML='Feels like: '+Math.round(predata.main.feels_like)||Default;
    })


searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
    .then(async res =>{
        const data= await res.json();
        console.log('[Search Input]',data);
        cityName.innerHTML=data.name||Default;
        weatherState.innerHTML=data.weather[0].description||Default;
        weatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        temp.innerHTML=Math.round(data.main.temp)||Default;
        sunrise.innerHTML=moment.unix(data.sys.sunrise).format(`H:mm`)||Default;
        sunset.innerHTML=moment.unix(data.sys.sunset).format(`H:mm`)||Default;
        hunidity.innerHTML=Math.round(data.main.humidity)+' %'||Default;
        windSpeed.innerHTML=(data.wind.speed*3.6).toFixed(2)+' km/h'||Default;
        feelLike.innerHTML='Feels like: '+Math.round(data.main.feels_like)||Default;
        
        
    });
})
class UI{
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feelslike');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.display_location.full;
        this.desc.textContent = weather.weather;
        this.string.textContent = weather.temperature_string;
        this.icon.setAttribute('src', weather.icon_url);
        this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.feelslike_string}`;
        this.dewpoint.textContent = `Dew Point: ${weather.dewpoint_string}`;
        this.wind.textContent = `Wind: ${weather.wind_string}`;
       
        if(weather.weather === 'Overcast'){
            document.body.style.backgroundImage = "url('Pix/Overcasty.jpg')";
        }else if(weather.weather === 'Rain' || 'Light Rain') {
            document.body.style.backgroundImage = "url('Pix/Rainy.jpg')";
        }else if(weather.weather === 'Misty') {
            document.body.style.backgroundImage = "url('Pix/Misty.jpg')";
        }else if(weather.weather === 'Sunny') {
            document.body.style.backgroundImage = "url('Pix/Sunny.jpg')";
        }else if(weather.weather === 'Partly Cloudy') {
            document.body.style.backgroundImage = "url('Pix/Partly Cloudy.jpg')";
        }else if(weather.weather === 'Stormy') {
            document.body.style.backgroundImage = "url('Pix/Stormy.jpg')";
        }else if(weather.weather === 'Snow') {
            document.body.style.backgroundImage = "url('Pix/Snowy.jpg')";
        }else if(weather.weather === 'Cloudy'|| 'Mostly Cloudy') {
            document.body.style.backgroundImage = "url('Pix/Cloudy.jpg')";
        }else if(weather.weather === 'Clear') {
            document.body.style.backgroundImage = "url('Pix/Clear.jpg')";
        }else{
                        
        };
    }
}
  //insantiate Storage
  const store = new Storage();

  //get stored location
  const weatherLocation = store.getLocationData();

  //Init weather object
  const weather = new Weather(weatherLocation.city, weatherLocation.state);
 
 
 //init weather object 
 //const weather = new Weather('Boston', 'MA');

 //insantiate UI
 const ui = new UI();

 
 
 //Get weather on Dom Load
 document.addEventListener('DOMContentLoaded', getWeather);

 //change location events
 document.getElementById('w-change-btn').addEventListener('click', (e) => {
     const city = document.getElementById('city').value;
     const state = document.getElementById('state').value;

     
     weather.changeLocation(city, state);

     //set location in ls
     store.setLocationData(city, state); 


     //get and display weather
     getWeather();

     // Close Modal 
     $('#locModal').modal('hide');
 });


 function getWeather(){
 weather.getWeather()
 .then(results => {
    ui.paint(results);
 })
 .catch(err => console.log(err));
}

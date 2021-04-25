//Şehir veya ülkenin hava durmunu getirmek için kullanılan fonksiyon.
function getWeather(cityName){

    //APİ key'dc4ddadffedec184e639816b148f9ef4'
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=dc4ddadffedec184e639816b148f9ef4&units=metric&lang=tr`
    
    //Axios get isteği oluşturuldu. 
    axios.get(url)
    
    //Api den verileri çekip ekrana yazdırmamızı sağlayan kodumuz.
    .then(function (response) {

        document.getElementById("city").innerText = `${response.data.name} , ${response.data.sys.country}`         
        document.getElementById("temp").innerText = `${Math.round(response.data.main.temp)}°C`
        document.getElementById("desc").innerText = `${response.data.weather[0].description}`
        document.getElementById("minmax").innerText = `${Math.round(response.data.main.temp_min)}°C / ${Math.round(response.data.main.temp_max)}°C`
        console.log(response);
      
    })
    //Hataları ekrana yazdırır.
    .catch(function (error) {
        const messageElement= document.getElementById("message");   
        messageElement.innerText = error;
        messageElement.style.color = "red";
        console.log(error);
        
    })
}

//Butona basıldığında input a girilen ülke veya şehir adını alıp fonksiyonda kullanmamızı sağlar.
window.onload = function(){
    document.getElementById("sendButton").onclick= function(){

        const cityName= document.getElementById("cityTextInput").value;
        getWeather(cityName);
        console.log(cityName);
    }
}


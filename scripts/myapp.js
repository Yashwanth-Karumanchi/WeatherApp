function myapp(city){
    city = city.value;
    let brief = document.getElementById("data");
    let wNow = fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=f38ec57649247d7ea3eaf215dfbb5bd1")
    let forecast = fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=f38ec57649247d7ea3eaf215dfbb5bd1")

    wNow.then((res) => {
        res.json().then((data) => {
            temp_max = Number(data.main.temp_max)-273.15
            temp_min = Number(data.main.temp_min)-273.15
            brief.innerHTML = "Country: "+data.sys.country
                                +"<br>Maximum Temp: "+String(temp_max.toFixed(2))
                                +"<br>Minimum Temp: "+String(temp_min.toFixed(2))+"<br>";
        })
    })

    
    forecast.then((res) => {
        res.json().then((data) => {
            var dates = [];
            var temps = [];
                
            for(let i = 0; i < data.list.length; i+=8){
                dates.push(data.list[i].dt_txt.split(" ")[0]);
                temps.push(Number(Number((data.list[i].main.temp) - 273.15).toFixed(2)));
            }
            console.log(dates[0])
            plot(dates, temps)
        })
    })
}
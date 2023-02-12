async function myapp(city){
    city = city.value;
    let brief = document.getElementById("data");
    let wNow = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=f38ec57649247d7ea3eaf215dfbb5bd1")
    let forecast = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=f38ec57649247d7ea3eaf215dfbb5bd1")

    let data = await wNow.json()
    temp_max = data.main.temp_max-273.15
    temp_min = data.main.temp_min-273.15
    brief.innerHTML = "Country: "+data.sys.country
                    +"<br>Maximum Temp: "+String(temp_max.toFixed(2))
                    +"<br>Minimum Temp: "+String(temp_min.toFixed(2))+"<br>";

    // wNow.then((res) => {
    //     res.json().then((data) => {
    //         temp_max = data.main.temp_max-273.15
    //         temp_min = data.main.temp_min-273.15
    //         brief.innerHTML = "Country: "+data.sys.country
    //                             +"<br>Maximum Temp: "+String(temp_max.toFixed(2))
    //                             +"<br>Minimum Temp: "+String(temp_min.toFixed(2))+"<br>";
    //     })
    // })
    var dates = [];
    var temps = [];
    data = await forecast.json();

    for (let i = 0; i < data.list.length; i+=8){
        dates.push(data.list[i].dt_txt.split(" ")[0]);
        temps.push(data.list[i].main.temp - 273.15.toFixed(2));
    }
    plot(dates, temps)

    
    // forecast.then((res) => {
    //     res.json().then((data) => {
    //         var dates = [];
    //         var temps = [];
                
    //         for(let i = 0; i < data.list.length; i+=8){
    //             dates.push(data.list[i].dt_txt.split(" ")[0]);
    //             temps.push(data.list[i].main.temp - 273.15.toFixed(2));
    //         }
    //         plot(dates, temps)
    //     })
    // })
}
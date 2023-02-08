function plot(dates, temps){
  console.log(dates)
  console.log(temps)

  document.getElementById("chart").innerHTML="<canvas id='myChart'></canvas>"
  var ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dates,
      datasets: [{
        label: 'temp',
        data: temps,
        borderWidth: 1
      }]
    }
  });
}
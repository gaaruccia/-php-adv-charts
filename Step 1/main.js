$( document ).ready(function(){
  var ctx = $("#myChart");
  $.ajax({
   url : "server.php",
   method : 'GET',
   success : function(risultato) {
     var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:  ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
        datasets: [{
            label: '# of Votes',
            data: risultato,
            backgroundColor: [
              'rgba(30, 130, 76, 1)',
              'rgba(82, 40, 204, 1)',
              'rgba(4, 51, 255, 1)',
              'rgba(0, 146, 146, 1)',
              'rgba(0, 249, 0, 1)',
              'rgba(202, 250, 0, 1)',
              'rgba(255, 251, 0, 1)',
              'rgba(255, 199, 0, 1)',
              'rgba(255, 147, 0, 1)',
              'rgba(255, 80, 0, 1)',
              'rgba(255, 38, 0, 1)',
              'rgba(216, 34, 83, 1)'
            ],
            borderColor: [
              'rgba(207, 0, 15, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                  }
              }]
          }
      }
    });
   },
   error : function(err){
     console.error("Errore!");
   }
  });
});

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
              'rgba(30, 130, 76, 1)',
              'rgba(30, 130, 76, 1)',
              'rgba(30, 130, 76, 1)',
              'rgba(30, 130, 76, 1)',
              'rgba(30, 130, 76, 1)',
              'rgba(30, 130, 76, 1)',
              'rgba(30, 130, 76, 1)',
              'rgba(30, 130, 76, 1)',
              'rgba(30, 130, 76, 1)',
              'rgba(30, 130, 76, 1)',
              'rgba(30, 130, 76, 1)'
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

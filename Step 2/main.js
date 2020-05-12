$( document ).ready(function(){
  var ctx = $("#myChart");
  var ctx2 = $("#myChart2")
  moment.locale("it");
  function getMonths(){
    return moment.months();
  };
  $.ajax({
   url : "salesMonths.php",
   method : 'GET',
   success : function(risultato) {
     var myChart = new Chart(ctx, {
    type: risultato.type,
    data: {
        labels: getMonths(),
        datasets: [{
            label: 'Sales',
            data: risultato.data,
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
 $.ajax({
  url : "nameSales.php",
  method : 'GET',
  success : function(risultato) {
    console.log(risultato.name);
    console.log(risultato.sale);
    var myChart = new Chart(ctx2, {
   type: risultato.type,
   data: {
       labels: risultato.listaNomi,
       datasets: [{
           label: 'Sales',
           data: risultato.listaSales,
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
           ],
           borderWidth: 2
       }]
   },
  });
  },
  error : function(err){
    console.error("Errore!");
  }
});
})

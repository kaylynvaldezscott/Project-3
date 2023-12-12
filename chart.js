
function createChart(data) {
    const labels = data.data.map(row => row.label); 
    const values = data.data.map(row => row.value); /
  
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar', 
      data: {
        labels: labels,
        datasets: [{
          label: 'Chart Title',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)', 
          borderWidth: 1
        }]
      },
      options: {
       
      }
    });
  }

  

  
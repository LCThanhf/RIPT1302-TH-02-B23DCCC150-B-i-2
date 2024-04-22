var config = {
    displayModeBar: false
  };
  
  // Scatter Plot
  var scatterData = [{
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter',
    marker: {
      color: 'rgba(255, 99, 132, 0.7)'
    }
  }];
  var scatterLayout = {
    title: 'Scatter Plot',
    showlegend: false,
    margin: { t: 50 },
    xaxis: { fixedrange: true },
    yaxis: { fixedrange: true }
  };
  Plotly.newPlot('scatterPlot', scatterData, scatterLayout, config);
  
  // Line Chart
  var lineData = [{
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter',
    mode: 'lines',
    line: {
      color: 'rgba(54, 162, 235, 0.7)'
    }
  }];
  var lineLayout = {
    title: 'Line Chart',
    showlegend: false,
    margin: { t: 50 },
    xaxis: { fixedrange: true },
    yaxis: { fixedrange: true }
  };
  Plotly.newPlot('lineChart', lineData, lineLayout, config);
  
  // Bar Chart
  var barData = [{
    x: ['A', 'B', 'C', 'D'],
    y: [10, 20, 15, 25],
    type: 'bar',
    marker: {
      color: 'rgba(255, 206, 86, 0.7)'
    }
  }];
  var barLayout = {
    title: 'Bar Chart',
    showlegend: false,
    margin: { t: 50 },
    xaxis: { fixedrange: true },
    yaxis: { fixedrange: true }
  };
  Plotly.newPlot('barChart', barData, barLayout, config);
  
  // Pie Chart
  var pieData = [{
    values: [20, 30, 50],
    labels: ['A', 'B', 'C'],
    type: 'pie',
    marker: {
      colors: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)']
    }
  }];
  var pieLayout = {
    title: 'Pie Chart',
    showlegend: false,
    margin: { t: 50 }
  };
  Plotly.newPlot('pieChart', pieData, pieLayout, config);
  
  // Donut Chart
  var donutData = [{
    values: [20, 30, 50],
    labels: ['A', 'B', 'C'],
    type: 'pie',
    hole: 0.4,
    marker: {
      colors: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)']
    }
  }];
  var donutLayout = {
    title: 'Donut Chart',
    showlegend: false,
    margin: { t: 50 }
  };
  Plotly.newPlot('donutChart', donutData, donutLayout, config);
  
  // Bubble Chart
  var bubbleData = [{
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    marker: {
      size: [20, 30, 40, 50],
      color: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)']
    }
  }];
  var bubbleLayout = {
    title: 'Bubble Chart',
    showlegend: false,
    margin: { t: 50 },
    xaxis: { fixedrange: true },
    yaxis: { fixedrange: true }
  };
  Plotly.newPlot('bubbleChart', bubbleData, bubbleLayout, config);
  
  // Add resize event to window
window.addEventListener('resize', function() {
    Plotly.Plots.resize('donutChart');
    Plotly.Plots.resize('bubbleChart');
    Plotly.Plots.resize('pieChart');
    Plotly.Plots.resize('barChart');
    Plotly.Plots.resize('lineChart');
    Plotly.Plots.resize('scatterPlot');
  });
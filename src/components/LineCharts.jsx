import "chart.js/auto";
import { Chart } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { Line } from "react-chartjs-2";



Chart.register(annotationPlugin);

const LineCharts=({percentile,average})=> {
  
  
  const chartData = {
    labels: [0, "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"],
    datasets: [
      {
        data: [10, 15, 28, 22, 20, 15, 18, 25, 12, 15, 10],
        borderColor: "rgb(200, 214, 229)",
        tension: 0.5,
      },
    ],
  };
  const plugins = {
    legend: {
      display: false,
    },
    annotation: {
      annotations: {
        line1: {
          type: "line",
          borderDash: [5, 5],
          xMin: percentile / 10,
          xMax: percentile / 10,
          borderColor: "rgb(67, 138, 246)",
          borderWidth:3,
        },
        line2: {
          type: "line",
          borderDash: [5, 5],
          xMin: average / 10,
          xMax: average / 10,
          borderColor: "rgb(255, 145, 66)",
          borderWidth: 3,
        },
      },
    },
  };
  const options = {
    plugins: plugins,
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };
  
  return (
    <div className="chart" >
      <h3>Comparison Graph</h3>
   
  
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LineCharts;

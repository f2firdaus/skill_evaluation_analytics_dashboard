import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";


const QuestionAnalysis=({answers}) => {
   
  const chartData = {
    datasets: [
      {
        data: [answers, 15 - answers],
        backgroundColor: ["rgba(67, 138, 246, 1)", "rgba(237, 244, 255, 1)"],
      },
    ],
  };

  return (
    <div className="acontainer">
      <div className="aheader">
        <h3>Question Analysis</h3>
        <p>{answers} / 15</p>
      </div>
      <div className="abody">
      <p>
      <b>You scored {answers} questions correct out of 15.</b>
      {answers <= 10 ? " However, it still needs some improvement." : " Good job!"}
    </p>
        <Doughnut className="doughnut_chart" data={chartData} />
      </div>
    </div>
  );
}

export default QuestionAnalysis;

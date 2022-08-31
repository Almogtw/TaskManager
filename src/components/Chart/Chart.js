import react from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);
  
  let sumValues = 0;
  for (const value of dataPointsValues) {
    sumValues += value;
  }
  console.log(sumValues);
  console.log(totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          sumValue={sumValues}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;

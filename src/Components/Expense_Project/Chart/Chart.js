import React from "react";

import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {
  
  const maxMonthVariable = props.dataPoints.map(dataPoint =>  dataPoint.value );
  const maxDatapoints = Math.max(...maxMonthVariable)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={maxDatapoints}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
};

export default Chart;

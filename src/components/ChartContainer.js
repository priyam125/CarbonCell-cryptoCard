import React from "react";
import AreaChartComponent from "./AreaChartComponent";

const ChartContainer = ({cryptoData}) => {
  return (
    <div className="h-[10rem] flex items-center justify-center p-2">
      <AreaChartComponent chartData={cryptoData} />
    </div>
  );
};

export default ChartContainer;

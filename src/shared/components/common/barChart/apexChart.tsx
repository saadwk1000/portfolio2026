import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { structureBarChart } from "./chartConfig";

interface ApexChartProps {
  series: ApexOptions["series"];
  height?: number;
}

const ApexChart: React.FC<ApexChartProps> = ({
  series,
  height = 350
}) => {
  const options = useMemo<ApexOptions>(() => {
    return structureBarChart;
  }, []);

  return (
    <ReactApexChart
      options={options}
      series={series ?? []}
      type="bar"
      height={height}
    />
  );
};

export default React.memo(ApexChart);
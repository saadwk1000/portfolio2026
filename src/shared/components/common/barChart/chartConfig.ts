import type { ApexOptions } from "apexcharts";

export const structureBarChart: ApexOptions = {
  chart: {
    type: "bar",
    height: 350,
    background: "transparent",
    toolbar: {
      show: false,
    },
  },

  yaxis: {
    labels: {
      style: { colors: ["red", "green", "blue", "brown"] },
    },
  },

  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: "end",
      horizontal: true,
      distributed: true,
    },
  },

  colors: ["red", "green", "blue", "brown"],

  dataLabels: {
    enabled: true,
  },

  xaxis: {
    min: 0,
    max: 100,
    labels: {
      formatter: (val) => `${val}%`,
    },
    tickAmount: 10,
    categories: ["TYPESCRIPT", "SCSS", "HTML", "CSS"],
  },
  legend: {
    show: false,
  },
};

import React, { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface MyChartProps {
  data: ChartData<"bar">;
  options: ChartOptions<"bar">;
  //   width?: number;
  //   height?: number;
}

const MyChart: React.FC<MyChartProps> = ({ data, options }) => {
  return <Bar data={data} options={options} />;
};
export default MyChart;

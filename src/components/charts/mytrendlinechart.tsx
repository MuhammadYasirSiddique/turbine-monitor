// src/components/charts/mytrendlinechart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  ChartData,
  ChartOptions,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  PointElement,
} from "chart.js";
import "chartjs-adapter-date-fns";

// Register necessary components and scales
ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  PointElement
);

interface MyChartProps {
  data: ChartData<"line", { x: number; y: number }[], unknown>;
  options: ChartOptions<"line">;
}

const MyChart: React.FC<MyChartProps> = ({ data, options }) => {
  return <Line data={data} options={options} />;
};

export default MyChart;

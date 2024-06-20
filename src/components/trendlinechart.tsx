"use client";
import React, { useState, useEffect } from "react";
import MyChart from "@/components/charts/mytrendlinechart"; // Adjust the path to your MyChart component
import { ChartData, ChartOptions } from "chart.js";

const TrendlineChart: React.FC = () => {
  const [data, setData] = useState<
    ChartData<"line", { x: number; y: number }[], unknown>
  >({
    datasets: [
      {
        label: "Trendline",
        data: [],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 1,
        fill: false,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate fetching real-time data
      const newData = {
        datasets: [
          {
            ...data.datasets[0],
            data: generateRandomData(),
          },
        ],
      };
      setData(newData);
    }, 3000); // Fetch data every 3 seconds

    return () => clearInterval(interval);
  }, [data]);

  const options: ChartOptions<"line"> = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "second",
          displayFormats: {
            second: "h:mm:ss a",
          },
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Real-Time Trendline Chart",
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const generateRandomData = () => {
    const data = [];
    const now = Date.now();
    const initial = Math.random() * 50;
    for (let i = 0; i < 10; i++) {
      data.push({ x: now - (10 - i) * 1000, y: initial + Math.random() * 10 });
    }
    return data;
  };

  return (
    <div className="w-full h-96 bg-white shadow-lg rounded-lg p-4">
      <MyChart data={data} options={options} />
    </div>
  );
};

export default TrendlineChart;

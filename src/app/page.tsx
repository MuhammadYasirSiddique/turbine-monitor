"use client";
import Sidebar from "@/components/sidebar";
import React from "react";
import MyChart from "@/components/charts/mybarchart";
import { ChartData, ChartOptions } from "chart.js";

const Home: React.FC = () => {
  const data: ChartData<"bar"> = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        label: "Target",
        data: [75, 70, 90, 95, 70, 68, 60, 75, 95, 88],
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Blue color
        borderColor: "rgba(54, 162, 235, 1)", // Blue color
        borderWidth: 1,
      },
      {
        label: "Performance",
        data: [65, 59, 80, 81, 56, 55, 40, 65, 70, 78],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sample Chart",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide gridlines on the x-axis
        },
      },
      y: {
        grid: {
          display: false, // Hide gridlines on the y-axis
        },
      },
    },
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto p-4 bg">
        <h1 className="text-2xl font-bold mb-4">Chart.js with Next.js</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-auto bg-slate-50 shadow-2xl mx-4 lg:mx-8 p-4">
            <div className="overflow-x-auto">
              <MyChart data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

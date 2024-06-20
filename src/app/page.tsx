import Sidebar from "@/components/sidebar";
import React from "react";
import BarChart from "@/components/barchart";
import TrendlineChart from "@/components/trendlinechart";

const Home: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col items-center justify-center space-y-8">
        <div className="w-full  max-w-3xl">
          <BarChart />
        </div>
        <div className="w-full max-w-4xl">
          <TrendlineChart />
        </div>
      </div>
    </div>
  );
};

export default Home;

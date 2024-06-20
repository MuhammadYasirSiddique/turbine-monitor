import Sidebar from "@/components/sidebar";
import React from "react";
import BarChart from "@/components/barchart";
import TrendlineChart from "@/components/trendlinechart";

const Home: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <BarChart />
      <TrendlineChart />
    </div>
  );
};

export default Home;

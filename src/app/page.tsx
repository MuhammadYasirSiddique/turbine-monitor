import Sidebar from "@/components/sidebar";
import React from "react";
// import Content from './content/page'
import BarChart from "./content/page";

const Home = () => {
  const data = [
    {
      name: "John",
      age: 25,
      income: 50000,
    },
    {
      name: "Jane",
      age: 30,
      income: 60000,
    },
    {
      name: "Bob",
      age: 35,
      income: 70000,
    },
  ];
  return (
    <div>
      <div className="flex ">
        <Sidebar />
        <BarChart />{" "}
      </div>
    </div>
  );
};

export default Home;

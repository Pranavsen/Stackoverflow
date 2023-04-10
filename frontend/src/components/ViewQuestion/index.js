import React from "react";
import "../StackOverflow/css/index.css";
import Sidebar from "../StackOverflow/Sidebar";
import MainQuestion from "./MainQuestion";


const Index = () => {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <MainQuestion/>
      </div>
    </div>
  );
};

export default Index;

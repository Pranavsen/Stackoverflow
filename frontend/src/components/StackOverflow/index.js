import React, { useEffect, useState } from "react";
import "./css/index.css";
import Sidebar from "./Sidebar";
import Maincom from "./Maincom";
import axios from "axios";

const Index = () => {

  const [questions, setQuestions] = useState([]);

  useEffect(()=>{
    async function getQuestion(){
      await axios.get("/api/question").then((res)=>{
        // console.log(res.data);
        setQuestions(res.data.reverse());
      })
    }
    getQuestion();
  },[])

  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <Maincom questions={questions}/>
      </div>
    </div>
  );
};

export default Index;

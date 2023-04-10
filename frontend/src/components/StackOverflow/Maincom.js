import React from "react";
import { FilterList } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import AllQuestions from "./AllQuestions";
import './css/Maincom.css'

const Maincom = ({questions}) => {
  return (
      <div className="main">
        <div className="main-container">
          <div className="main-top">
            <h2>All Questions</h2>
            <NavLink to='/add-question'>
              <button>Ask Questions</button>
            </NavLink>
          </div>
          <div className="main-desc">
            <p>{questions.length} Questions</p>
            <div className="main-filter">
              <div className="main-tabs">
                <div className="main-tab">
                  <NavLink>Newest</NavLink>
                </div>
                <div className="main-tab">
                  <NavLink>Active</NavLink>
                </div>
                <div className="main-tab">
                  <NavLink>More</NavLink>
                </div>
              </div>
            
            <div className="main-filter-item">
              <FilterList />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="questions">
        {questions?.map((_q,index) => (
          <div key={index} className="question">
            <AllQuestions data={_q} />
          </div>
        ))}
        </div>
      </div>
      </div>
  );
};

export default Maincom;

import { Avatar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./css/AllQuestions.css";
import ReactHtmlParser from "react-html-parser";

const AllQuestions = ({ data }) => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const min = 1;
  const max = 100;
  const rand = min + Math.random() * (max - min);
  const floor = Math.floor(rand);
  let tags = JSON.parse(data?.tags[0]);
  
  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>{floor}</p>
              <span>Votes</span>
            </div>
            <div className="all-option">
              <p>{data?.answerDetails?.length}</p>
              <span>Answers</span>
            </div>
            <div className="all-option">
              <small>{floor} Views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <NavLink to={`/question?q=${data?._id}`}>{data.title}</NavLink>
          <div
            style={{
              width: "90%",
            }}
          >
            <div>{ReactHtmlParser(truncate(data?.body, 200))}</div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            {tags.map((_tag, index) => (
              <p
                key={index}
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {_tag}
              </p>
            ))}
          </div>

          <div className="author">
            <small>{new Date(data?.created_at).toLocaleString()}</small>
            <div className="author-details">
              <Avatar src={data?.user?.photo} />
              <p>
                {data?.user?.displayName
                  ? data?.user?.displayName
                  : String(data?.user?.email).split("@")[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQuestions;

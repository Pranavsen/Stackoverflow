import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'; //Quill's css important
import { TagsInput } from "react-tag-input-component";
import './Question.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import axios from "axios";

const Question = () => {
  const [tag, setTag] = useState([]);
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const user = useSelector(selectUser)

  const handleQuill = (value) => {
    setBody(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title !== "" && body !== "") {
      setLoading(true)
      const bodyJSON = {
        title: title,
        body: body,
        tag: JSON.stringify(tag),
        user: user,
      };
      await axios
        .post("/api/question", bodyJSON)
        .then((res) => {
          alert("Question added successfully");
          setLoading(false)
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false)
        });
    }
  };




  return (
    <div className="add-question">
      <div className="add-question-container">
        <div className="head-title">
          <h1>Ask a public question</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="title">
                <h3>Title</h3>
                <small>
                  Be specific and imaging you're asking a question to another
                  person
                </small>
                <input value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text" placeholder="Add question title" />
              </div>
            </div>
            <div className="question-option">
            <div className="title">
                <h3>Body</h3>
                <small>
                 Include all the information someone would need to answer your question
                </small>
                <ReactQuill value={body}
                onChange={handleQuill}
                className="react-quill" theme="snow"/>
                </div>
            </div>
            <div className="question-option">
            <div className="title">
              <h3>Tags</h3>
              <small>
                Add up to 5 tags to describe what your question is about
              </small>
              <TagsInput 
                  value={tag}
                  onChange={setTag}
                  name="fruits"
                  placeHolder="press enter to add new tag"
                />
            </div>
          </div>
          </div>
        </div>
        <button disabled={loading} onClick={handleSubmit} 
        className="button">{loading ? 'Adding question...' :  'Add your question'}</button>
      </div>
    </div>
  );
};

export default Question;

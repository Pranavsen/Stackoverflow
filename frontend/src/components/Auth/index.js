import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../firebase";
import './index.css'
import { useNavigate } from "react-router-dom";

const Index = () => {
  
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) =>{
    const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === false) {
      return false;
    } else return true;
  }
  useEffect(() => {
    const auther = localStorage.getItem("user")
    const timer = setTimeout(() => {
      if(auther){
        navigate('/home');
      }else{
        navigate('/')
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  

  const handleSignInGoogle=()=>{
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((res) => {
        setLoading(false);
        localStorage.setItem("user",JSON.stringify(res));
        navigate("/home");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    setError();
    setLoading(true);
    if (email === "" || password === "") {
      setError("Required field is missing");
      setLoading(false);
    } else if (!validateEmail(email)) {
      setError("Email is incorrect");
      setLoading(false);
    }
    else {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          localStorage.setItem("user",JSON.stringify(res));
          navigate("/home");
          setLoading(false);
          // console.log(res.data.token);
        })
        .catch((error) => {
          console.log(error.code);
          setError(error.message);
          setLoading(false);
        });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setLoading(false);
    if (email === "" || password === "" || username === "") {
      setError("Required field is missing.");
      setLoading(false);
    } else if (!validateEmail(email)) {
      setError("Email is incorrect");
      setLoading(false);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          localStorage.setItem("user",JSON.stringify(res));
          navigate("/home");
          setLoading(false);
          // console.log(res.data.token);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
          setLoading(false);
        });
    }
  };


  return (
    <div className="auth">
      <div className="auth-container">
        <p>Login using any of the following services.</p>
        <div className="sign-options">
          <div onClick={handleSignInGoogle} className="single-option">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU" alt="logo" />
            <p>{loading ? "Signing in..." : "Login with Google"}</p>
          </div>
        </div>
        <div className="auth-login">
          <div className="auth-login-container">
            {register ? (
              <>
                <div className="input-field">
                  <p>Username</p>
                  <input type="text" value={username}
                  onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-field">
                  <p>Email</p>
                  <input type="text" value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input type="password" value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button onClick={handleRegister}
                disabled={loading}
                style={{marginTop:"10px"}}>
                {loading ? "Registering..." : "Register"}
                </button>
              </>
            ) : (
              <>
                <div className="input-field">
                  <p>Email</p>
                  <input type="text" value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input type="password" value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button
                  onClick={handleSignIn}
                  disabled={loading}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </>
            )}
            <p onClick={()=> setRegister(!register)} style={{
              marginTop:"10px",
              textAlign:"center",
              color:"#0095ff",
              textDecoration:"underline",
              cursor:"pointer"
          }} >
          {register ? "Login?" : "Register?"}</p>
          </div>
        </div>
        {error !== "" && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Index;

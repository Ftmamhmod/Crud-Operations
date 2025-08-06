import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaAt } from 'react-icons/fa';
import ClipLoader from "react-spinners/ClipLoader";
import { FaArrowRightArrowLeft } from "react-icons/fa6"; // أو أي سهم يعجبك

import './Login.css';
import bebo from '../../assets/images/istockphoto-1420737263-640_adpp_is.mp4';
import TicTacToe from './TicTacToe';

const ACCOUNT = {
  email: "admin@gmail.com",
  password: "123456"
};



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();
  const handleToggle = () => setIsChecked(!isChecked);

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsLoading(true);

    setTimeout(() => {
      if (
        email.trim().toLowerCase() === ACCOUNT.email &&
        password === ACCOUNT.password
      ) {
        localStorage.setItem("userToken", "fake-token-123");
        localStorage.setItem("userEmail", email);
        navigate("/dashboard");
      } else {
        setErrorMsg("Invalid email or password");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* فيديو الخلفية */}
      <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src={bebo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* طبقة التعتيم */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>

      {/* المحتوى */}
      <div className="relative z-20">
        <div className="section">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3 " style={{color: '#FFEBA7'}}>
                    <span>Log In </span>
                    <span >Look 👀</span>
                  </h6>
                  <input className="checkbox" type="checkbox" id="reg-log" checked={isChecked} onChange={handleToggle} />
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3 tw" style={{color: '#FFEBA7'}} >Log In</h4>

                            {errorMsg && <div className="p-2 mb-4 text-sm text-red-800 bg-red-50">{errorMsg}</div>}

                            <form onSubmit={handleLogin}>
                              <div className="form-group">
                                <input
                                  type="email"
                                  name="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="Email"
                                  className="form-style"
                                  required
                                />
                                <FaAt className="input-icon" />
                              </div>

                              <div className="form-group mt-2">
                                <input
                                  type="password"
                                  name="password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  placeholder="Password"
                                  className="form-style"
                                  required
                                />
                                <FaLock className="input-icon" />
                              </div>

                              <button type="submit" className="btn mt-4">
                                {isLoading ? <ClipLoader size={20} color="white" /> : "Login"}
                              </button>
                            </form>

                            <p className="mb-0 mt-4 text-center"><a href="#" className="link">Forgot your password?</a></p>
                          </div>
                        </div>
                      </div>
                      {/* وجهة Sign Up ممكن تضاف لاحقًا */}

                      <div className="card-back">
  <div className="center-wrap">
    <div className="section text-center">
      
      <TicTacToe />
    </div>
  </div>
</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

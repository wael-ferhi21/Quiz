import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { userdispatcher, user } = useUser();

  const handleEmail = (e) => {
    setemail(e.target.value);
  };
  const handlePassword = (e) => {
    setpassword(e.target.value);
  };
  const handleSubmit = () => {
    userdispatcher({
      type: "LOGIN",
      payload: {
        email: email,
        password: password,
      },
    });

    navigate("/");
  };
  return (
    <div className='login'>
      <div className='login__image'>
        {/* <h4>
          " Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus voluptates fugiat officiis nihil non natus dicta eius.
          Nobis magni provident voluptates. Incidunt nam quaerat esse nostrum
          culpa beatae commodi neque! Lorem ipsum dolor sit amet consectetur "
        </h4> */}
        <img src='/assets/index.jpeg' alt='' />
      </div>

      <div className='login__form'>
        {/* <a href='#'>{"< back"}</a> */}
        <div className='form'>
          <h1>login to your account</h1>
          <h4>With your registered email address</h4>

          <div className='email'>
            <h6>Email Address*</h6>
            <input
              type='text'
              className='email__input'
              placeholder='enter email address'
              onChange={handleEmail}
            />
          </div>
          <div className='password'>
            <h6>Password*</h6>
            <input
              type='password'
              className='password__input'
              placeholder='Password'
              onChange={handlePassword}
            />
            <h4
              style={{
                color: "red",
              }}
            >
              {user.error}
            </h4>
          </div>

          <button className='login__button' onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

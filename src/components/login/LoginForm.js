import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ emailErr: "", passErr: "" });

  const navigateTo = useNavigate();

  const sendData = (e) => {
    e.preventDefault();
    // if(error.emailErr===""&&error.passErr===""){
    //   console.log(email,password);
    // }
    if (!email || !password || error.passErr || error.emailErr) {
    } else {
      navigateTo("/");
      console.log("submit success");
    }
  };

  return (
    <div className="w-50 mx-auto">
      <form
        method="POST"
        onSubmit={(e) => {
          sendData(e);
        }}
      >
        <div className="form-group mb-2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
              setError({
                ...error,
                emailErr: e.target.value.length === 0 ? "Invalid Email" : "",
              });
            }}
          />
          <small id="emailHelp" className="form-text text-danger">
            {error.emailErr}
          </small>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
              setError({
                ...error,
                passErr: e.target.value.length === 0 ? "Invalid Password" : "",
              });
            }}
          />
          <small id="passwordHelp" className="form-text text-danger">
            {error.passErr}
          </small>
        </div>
        <div className="form-group form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            name="password"
            style={{ cursor: "pointer" }}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

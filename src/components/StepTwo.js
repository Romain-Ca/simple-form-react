import React from "react";
import Footer from "../components/Footer";

const StepTwo = ({ username, email, password, step, setStep }) => {
  const clickSubmit = (event) => {
    event.preventDefault();
    return setStep(1);
  };
  return (
    <form onSubmit={clickSubmit}>
      <div>
        <h1>Results</h1>

        <div className="button-refresh">
          <div className="recap">
            <p>Name : {username}</p>
            <p>Email : {email}</p>
            <p>Password : {password}</p>
          </div>
          <button type="submit">Edit your information</button>
        </div>
        <Footer />
      </div>
    </form>
  );
};

export default StepTwo;

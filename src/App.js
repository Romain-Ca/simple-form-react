import React, { useState } from "react";
import "./App.css";

// Import components
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  const [errorMessage3, setErrorMessage3] = useState("");
  const [errorMessage4, setErrorMessage4] = useState("");
  const [step, setStep] = useState(1);
  // si step = 1 affiche container
  // si step = 2 affiche le result
  return (
    <>
      {step === 1 && (
        <>
          <h1>Create Account</h1>
          <div className="container">
            <Form
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              confirmation={confirmation}
              setConfirmation={setConfirmation}
              errorMessage1={errorMessage1}
              setErrorMessage1={setErrorMessage1}
              errorMessage2={errorMessage2}
              setErrorMessage2={setErrorMessage2}
              errorMessage3={errorMessage3}
              setErrorMessage3={setErrorMessage3}
              errorMessage4={errorMessage4}
              setErrorMessage4={setErrorMessage4}
              step={step}
              setStep={setStep}
            />
          </div>
          <Footer />
        </>
      )}

      {step === 2 && (
        <div className="create-account">
          <StepTwo
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            setStep={setStep}
            step={step}
          />
        </div>
      )}
    </>
  );
}

export default App;

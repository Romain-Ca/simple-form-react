import React from "react";

const Form = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmation,
  setConfirmation,
  errorMessage1,
  setErrorMessage1,
  errorMessage2,
  setErrorMessage2,
  errorMessage3,
  setErrorMessage3,
  errorMessage4,
  setErrorMessage4,
  step,
  setStep,
}) => {
  // permet de ne pas raffraichir la page lors du submit
  const handleSubmit = (event) => {
    // alert("Submit ok");
    event.preventDefault();
    if (!email) {
      setErrorMessage1(" Email required to register");
    } else if (!username) {
      setErrorMessage2(" Username required to register");
    } else if (password !== confirmation) {
      setErrorMessage3(" Not the same password");
    } else if (!password) {
      setErrorMessage4(" Password required to register");
    }
    if (email && username && password && password === confirmation) {
      return setStep(2);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input
        type="text"
        value={username}
        // onChange est déclenché à chaque modification de l'input
        onChange={(event) => {
          //   console.log(event.target.value);
          setUsername(event.target.value);
        }}
      />
      <div className="span">{errorMessage2}</div>
      <p>Email</p>
      <input
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <div className="span">{errorMessage1}</div>

      <p>Password</p>
      <input
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <div className="span">{errorMessage4}</div>

      <p>Confirm your password</p>
      <input
        type="password"
        value={confirmation}
        onChange={(event) => {
          setConfirmation(event.target.value);
        }}
      />

      <div className="span">{errorMessage3}</div>
      <div>
        <button
          type="submit"
          className={
            //   Pas d'affichage du bouton si tout les champs ne sont pas remplit
            username && email && password && confirmation ? "initial" : "hidden"
          }
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default Form;

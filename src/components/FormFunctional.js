import React, { useState } from "react";

export default function FormFunctional() {
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    console.log("submitting the form");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label>Username: </label>
          <input
            onChange={(e) =>
              setUserInput({ ...userInput, username: e.target.value })
            }
            type="text"
            value={userInput.username}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            onChange={(e) =>
              setUserInput({ ...userInput, email: e.target.value })
            }
            type="email"
            value={userInput.email}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            onChange={(e) =>
              setUserInput({ ...userInput, password: e.target.value })
            }
            type="password"
            value={userInput.password}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

import React, { useState, useEffect } from "react";

export default function GithubUseEffect() {
  const [count, setCount] = useState(0);
  const [userToRetrieve, setUserToRetrieve] = useState("cernanb");
  const [input, setInput] = useState("");
  const [user, setUser] = useState({});
  useEffect(() => {
    // this callback function will run anytime the state of the component changes...if there is no second argument passed to useEffect
    // when passing in an empty array as the second argument to useEffect, we are simulating componentDidMount
    fetch(`https://api.github.com/users/${userToRetrieve}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
    console.log("running useEffect");
  }, []);

  useEffect(() => {
    console.log("fetch something else");
  }, [userToRetrieve]);

  return (
    <div>
      <h1 onClick={() => setCount(count + 1)}>{count}</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setUserToRetrieve(input)}>Get New User</button>
      <h1>Username: {user.login}</h1>
    </div>
  );
}

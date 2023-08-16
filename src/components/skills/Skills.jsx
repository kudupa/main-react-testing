import React, { useEffect, useState } from "react";

const Skills = ({ skills }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoggedIn(true), 1001);
  }, []);
  return (
    <>
      <ul>
        {skills.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn((prevValue) => !prevValue)}>
          Login
        </button>
      )}
    </>
  );
};

export default Skills;

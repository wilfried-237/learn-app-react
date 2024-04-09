// import React from "react";
import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

const ComponentA = () => {
  const [user, setUser] = useState("wilsweb");

  return (
    <div className="box">
      <p>ComponentA</p>
      <span>{user}</span>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
};

export default ComponentA;

import React, { useState } from "react";
import Auto from "./Auto";
import Context from "./Context";
  
const Usecontext = () => {
  //using the state to dynamicallly pass the values to the context
  
  const [authstatus, setauthstatus] = useState(false);
  const login = () => {
    setauthstatus(true);
  };
  return (
    <React.Fragment>
      <Context.Provider value={{ status: authstatus, login: login }}>
        <Auto />
      </Context.Provider>
    </React.Fragment>
  );
};
export default Usecontext;
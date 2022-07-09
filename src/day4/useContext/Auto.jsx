import React, { useContext } from "react";
import Context from "./Context";
  
const Auto = () => {
  const auth = useContext(Context);
  console.log(auth.status);
  return (
    <div>
      <h1>Are you authenticated?</h1>
      {auth.status ? 
<p>Yes you are</p>
 : 
<p>Nopes</p>
}
  
      <button onClick={auth.login}>Click To Login</button>
    </div>
  );
};
export default Auto;
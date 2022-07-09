import React from 'react';
  
// Creating the context object and passing the default values.
const Context = React.createContext({status:null,login:()=>{}});
  
export default Context;
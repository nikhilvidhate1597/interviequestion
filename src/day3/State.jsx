import React, { useState } from 'react';
 
function State() {
  const [click, setClick] = useState(0);
  return (
    <div>
       
<p>You clicked {click} times</p>
 
      <button onClick={() => setClick(click + 1)}>
        Click me
      </button>
    </div>
  );
}
 
export default State;
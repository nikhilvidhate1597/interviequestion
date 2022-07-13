import React from 'react';
  
function Event() {
  function eventHandler(){
    alert('Geeksforgeeks is the best platform to learn coding!');
  }
  
  
  return (
    <div className='App'>
      <h1>Welcome to Geeksforgeeks</h1>
      <button onClick={eventHandler}>Click for alert!</button>
    </div>
  );
}
  
export default Event;
import { useState } from 'react';

function App() {
  const[message, setMessage] = useState (
    "javascript is the best"
  );

  function handleClick() {
    setMessage("set message text");
  }
  return (
    <div>
    <h1>{message}</h1>
    <button onClick = {handleClick}>Update the Message</button>
    </div>
  );

}
export default App;

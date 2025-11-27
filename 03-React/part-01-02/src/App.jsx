import { useState } from "react";
import Greeting from "./Greeting"; 
import People from "./People";

function App() {
  const [count, setCount] = useState(0); // useState hook

  // Event handler function
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 React Basics Demo</h1>

      {/* Props example */}
      <Greeting username="Student" username2="rakan" />

      {/* State and event handling */}
      <p>You clicked the button {count} times.</p>
      <button onClick={handleClick}>Click Me</button>

      <People/>
 
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import './App.css';

function App() {
  const [submitValue, setSubmitValue] = useState(0);

  const handleAdd = () => {
    setSubmitValue(submitValue + 1);
  };

  const handleSubtract = () => {
    setSubmitValue(submitValue - 1);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
        <p>Submit Value: {submitValue}</p>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal m-10"
        type="email"
        placeholder="jane@example.com"
      />
      <button className="btn btn-blue">Test</button>
    </div>
  );
}

export default App;

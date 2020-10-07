import React from "react";
import "./App.css";
import Header from "./components/Header"
import Photo from "./components/Photo"
import Login from "./components/Login"
import Main from "./components/my-nasa-app/Main"

function App() {
  return (
    <div className="App">
      <Header />
      <Photo />
      <Login />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {/* <Main /> */}
    </div>
  );
}

export default App;

import React from "react";
import "./style.css";
import { PopupWidget } from "react-calendly"



const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>To schedule a meeting click button below</p>
      <PopupWidget
        color="#00a2ff"
        text="Schedule a meeting"
        textColor="#ffffff"
        url="https://calendly.com/artur-wozniak"
   />
    </div>
  );
}

export default App

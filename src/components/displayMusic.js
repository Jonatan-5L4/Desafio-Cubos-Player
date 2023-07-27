import { useState } from "react";
import currentMusic from "./functions.js";
import "./style.css";

export default function musicDislpay({ object, setCurrentMusic }) {
  function saveForDisplay(object) {
    setCurrentMusic(object);
  }
  return (
    <>
      <div className="smallContainer">
        <div className="panel" onClick={() => saveForDisplay(object)}>
          <img src={object.cover} />
          <strong>{object.title}</strong>
          <p>{object.description}</p>
        </div>
      </div>
    </>
  );
}

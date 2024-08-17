import React from "react";

export default function Answer({ number }) {
  return (
    <>
      <label>Answer #{number}</label>
      <input type="text" />
      <input type="radio" />
      Correct
    </>
  );
}

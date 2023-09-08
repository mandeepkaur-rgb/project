import React, { useState } from "react";

export default function TextForm(props) {
  //functions//
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert(" converted to uppercase");
  };
  const lower = () => {
    let Text = text.toLowerCase();
    setText(Text)
    props.showAlert(" converted to lowercase");

  };
  const handleOnChange = (event) => {
    console.log("it is on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ Color: props.mode === 'dark' ? 'white' : '#042743' }}>

        <h1>{props.heading}</h1>

        <div class="mb-3">
          <label for="myBox" class="form-label"></label>
          <textarea
            class="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              Color: props.mode === 'dark' ? 'white' : '#042743'
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mb-3 mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mb-3 mx-2" onClick={lower}>
          Convert to LowerCase
        </button>
      </div>

      <hr></hr>
      <div className="container" style={{ Color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Enter your Summery</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}

import React, { useState } from "react";

const TextUtil = (props) => {
  const [text, setText] = useState("");

  const changeUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Great! ", "Text is Changed To Upppercase")
  };
  const changeLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Great! ", "Text is Changed To Lowercase")
  };
  const capitalFirstLetter = () => {
    let words = text.split(" ");
    let uppercaseword = " ";
    words.forEach((element) => {
      uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " ";
    });
    setText(uppercaseword);
    props.showAlert("Great! ", "Every First word has been changed to capital letter")
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges() 
    props.showAlert("Copied to Clipboard!", "success");
}
  const clearText = () => {
    setText("");
    props.showAlert("Great! ", "Text has been cleared")
  };

  

  return (
    <>
    <div style={{height : "40px"}}>
    {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{props.alert.type}</strong>{props.alert.msg}
    </div>}
    </div> 
    <div className="container my-4 ">
        <div className="mb-3">
          <label
            htmlFor="textarea"
            className={`form-label ${
              props.mode === "dark" ? "text-white" : "text-dark"
            }`}
          >
           <h3> Enter the text to analyse below :</h3>
          </label>
          <textarea
            className="form-control"
            id="textarea"
            rows="7"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={changeUpper}>
          Change To UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={changeLower}>
          Change To LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={capitalFirstLetter}>
          Capitalize 
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div
        className={`container my-3 ${
          props.mode === "dark" ? "text-white" : "text-dark"
        }`}
      >
        <h3>Your Text Summary</h3>
        <p>
          {(text.split(" ").filter(elem => elem.length !== 0).length )} Words {text.length} Char
        </p>
        <p>{0.008*text.split("").length} Minute Read</p>
        <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  );
};
export default TextUtil;
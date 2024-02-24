import React, { useState, useEffect } from "react";
import "./AutoCompleteInput.css";

const AutoCompleteInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [matchedSuggestion, setMatchedSuggestion] = useState("");

  useEffect(() => {
    if (inputValue) {
      const match = props.suggestions.find((suggestion) =>
        suggestion.toLowerCase().startsWith(inputValue.toLowerCase())
      );
      setMatchedSuggestion(match || "");
      if (match) {
        setInputValue(match.substring(0, inputValue.length));
      }
    } else {
      setMatchedSuggestion("");
    }
  }, [inputValue, props.suggestions]);

  useEffect(() => {
    setInputValue("");
  }, [props.playerIndex]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || (event.key === "Tab" && matchedSuggestion)) {
      setInputValue(matchedSuggestion);
      props.setPlayerNameInput(matchedSuggestion);
      event.preventDefault();
    }
  };

  return (
    <div style={{ width: "800px" }}>
      <input
        type="text"
        value={matchedSuggestion}
        disabled
        className="Suggestion-Input"
      />
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type your player here..."
        className="User-Input"
      />
    </div>
  );
};

export default AutoCompleteInput;

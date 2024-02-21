import React, { useState, useEffect } from "react";

const AutoCompleteInput = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState("");
  const [matchedSuggestion, setMatchedSuggestion] = useState("");

  useEffect(() => {
    if (inputValue) {
      const match = suggestions.find((suggestion) =>
        suggestion.toLowerCase().startsWith(inputValue.toLowerCase())
      );
      setMatchedSuggestion(match || "");
    } else {
      setMatchedSuggestion("");
    }
  }, [inputValue, suggestions]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && matchedSuggestion) {
      setInputValue(matchedSuggestion);
    }
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Start typing..."
    />
  );
};

export default AutoCompleteInput;

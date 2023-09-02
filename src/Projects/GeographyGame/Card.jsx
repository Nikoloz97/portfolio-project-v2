import React, { useState } from "react";

const Card = (props) => {
  const [correctGuess, setCorrectGuess] = useState(null);

  const handleGuess = (guessedCountry) => {
    if (guessedCountry === "metroDetroit") {
      console.log("Tacos");
      setCorrectGuess(guessedCountry);
    }
  };
  return (
    <div>
      <p>Guess the region:</p>
      <input
        type="text"
        onChange={(e) => handleGuess(e.target.value)}
        placeholder="Type a region name"
      />
    </div>
  );
};

export default Card;

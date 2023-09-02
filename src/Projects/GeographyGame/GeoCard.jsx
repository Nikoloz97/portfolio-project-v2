import React, { useState } from "react";
import { Card, Form, Button } from "semantic-ui-react";

const GeoCard = (props) => {

  const [content, setContent] = useState ({
    prompt: props.Prompt,
    imageUrl: props.ImageUrl,
    answerOptions: props.AnswerOptions,
    questionType: props.QuestionType
  });

  // Either MC or input
  const [questionType, setQuestionType] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(3);
  const [totalCorrect, setTotalCorrect] = useState(0);
  
  const [correctOption, setCorrectOption] = useState("");
  const [guess, setGuess] = useState("");

  const handleGuess = (e) => {
    setGuess(e.target.value);
  };
  
  const handleCardSubmit = (guessedCountry) => {
    if (guessedCountry === correctOption) {
      let incrementedCorrect = totalCorrect + 1
      setTotalCorrect(incrementedCorrect)
    }
  };

  const handleFormSubmit = (guessedCountry) => {
    if (guessedCountry === correctOption) {
      let incrementedCorrect = totalCorrect + 1
      setTotalCorrect(incrementedCorrect)
    }

    //TODO: axios push for GeoGameSession (UserDb)
  };
  
  return (
    <Card>
      <Card.Content>
        <Card.Header>Title Here</Card.Header>

        <Card.Meta>Display Here</Card.Meta>
      </Card.Content>

      <Card.Content>
        {questionNumber === totalQuestions ? (<Form onSubmit={handleFormSubmit}>
) : (<Form onSubmit={handleCardSubmit}>
)}
          {questionType === "MultipleChoice" ? (
            <Form.Field>
              <Button.Group>
                <Button
                  color="blue"
                  onClick={() => handleOptionSelect("Option 1")}
                  active={selectedOption === "Option 1"}
                >
                  Option 1
                </Button>

                <Button
                  color="blue"
                  onClick={() => handleOptionSelect("Option 2")}
                  active={selectedOption === "Option 2"}
                >
                  Option 2
                </Button>

                <Button
                  color="blue"
                  onClick={() => handleOptionSelect("Option 3")}
                  active={selectedOption === "Option 3"}
                >
                  Option 3
                </Button>

                <Button
                  color="blue"
                  onClick={() => handleOptionSelect("Option 4")}
                  active={selectedOption === "Option 4"}
                >
                  Option 4
                </Button>
              </Button.Group>
            </Form.Field>
          ) : (
            <Form.Field>
              <label>User Input</label>
              <input
                placeholder="Enter something..."
                value={inputValue}
                onChange={handleInputChange}
              />
            </Form.Field>

          )}

          {questionNumber === totalQuestions ? (
            <Button type="submit">Submit Guess</Button>
          ) : (
          <Button type="submit">Submit Form</Button>
          )}

        </Form>
      </Card.Content>
    </Card>
  );
};

export default Card;

import React, { useState } from "react";
import { Card, Image, Form, Button } from "semantic-ui-react";

const GeoCard = (props) => {
  const [content, setContent] = useState({
    questionType: props.content.QuestionType,
    title: props.content.Title,
    prompt: props.content.Prompt,
    imageUrl: props.content.ImageUrl,
    answerOptions: props.content.AnswerOptions,
    correctOption: props.content.CorrectOption,
    correctInput: props.content.CorrectInput,
    totalQuestions: props.content.TotalQuestions,
  });

  // Either MC or input
  const [questionType, setQuestionType] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);

  const [userInput, setUserInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelection = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleCardSubmit = (guessedCountry) => {
    if (guessedCountry === props.correctOption) {
      let incrementedCorrect = totalCorrect + 1;
      setTotalCorrect(incrementedCorrect);
    }
  };

  const handleFormSubmit = (guessedCountry) => {
    if (guessedCountry === props.correctOption) {
      let incrementedCorrect = totalCorrect + 1;
      setTotalCorrect(incrementedCorrect);
    }

    //TODO: axios push for GeoGameSession (UserDb)
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>{content.title}</Card.Header>

        <Card.Meta>{content.prompt}</Card.Meta>
        {content.imageUrl === null ? (
          <Card.Meta>
            <Image src={content.imageUrl} />
          </Card.Meta>
        ) : null}
      </Card.Content>

      <Card.Content>
        <Form>
          {questionType === "MultipleChoice" ? (
            <Form.Field>
              <Button.Group>
                <Button
                  color="blue"
                  onClick={() => handleOptionSelection}
                  active={selectedOption === "Option 1"}
                >
                  Option 1
                </Button>

                <Button
                  color="blue"
                  onClick={() => handleOptionSelection}
                  active={selectedOption === "Option 2"}
                >
                  Option 2
                </Button>

                <Button
                  color="blue"
                  onClick={() => handleOptionSelection}
                  active={selectedOption === "Option 3"}
                >
                  Option 3
                </Button>

                <Button
                  color="blue"
                  onClick={() => handleOptionSelection}
                  active={selectedOption === "Option 4"}
                >
                  Option 4
                </Button>
              </Button.Group>
            </Form.Field>
          ) : (
            <Form.Field>
              <input
                placeholder="Enter your answer..."
                value={userInput}
                onChange={handleUserInput}
              />
            </Form.Field>
          )}

          {questionNumber === totalQuestions ? (
            <Button type="submit" onClick={handleFormSubmit}>
              Submit Form
            </Button>
          ) : (
            <Button type="submit" onClick={handleCardSubmit}>
              Submit Guess
            </Button>
          )}
        </Form>
      </Card.Content>
    </Card>
  );
};

export default GeoCard;

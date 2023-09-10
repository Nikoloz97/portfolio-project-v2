import React, { useEffect, useState } from "react";
import { Card, Image, Form, Button } from "semantic-ui-react";

const GeoCard = (props) => {
  const [content, setContent] = useState({});
  const [userInput, setUserInput] = useState("");
  const [chosenOption, setChosenOption] = useState("");
  const [isCorrectScreenShowing, setIsCorrectScreenShowing] = useState(false);
  const [isIncorrectScreenShowing, setIsIncorrectScreenShowing] =
    useState(false);

  const handleCardSubmit = () => {
    if (chosenOption === content.correctOption) {
      setIsCorrectScreenShowing(true);
      props.setTotalCorrect((value) => value + 1);
    } else {
      setIsIncorrectScreenShowing(true);
    }
    props.setCurrentCardIndex((value) => value + 1);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    setContent({
      correctOption: props.content.answer,
      countryName: props.content.countryName,
      imageUrl: props.content.imageUrl,

      // If MC...
      optionOne: props.content.optionOne,
      optionTwo: props.content.optionTwo,
      optionThree: props.content.optionThree,
      optionFour: props.content.optionFour,

      prompt: props.content.prompt,
      questionType: props.content.questionType,
      region: props.content.region,

      // If FR...
      correctInput: props.content.correctInput,

      totalQuestions: props.totalQuestions,
      questionNumber: props.currentCardIndex + 1,
    });
  }, [props.content]);

  useEffect(() => {
    if (chosenOption !== "") {
      console.log("Current chosen option: " + chosenOption);
    }
  }, [chosenOption]);

  useEffect(() => {
    console.log("totalCorrect: " + props.totalCorrect);
  }, [props.totalCorrect]);

  useEffect(() => {
    console.log("Correct Screen Showing? ... " + isCorrectScreenShowing);
  }, [isCorrectScreenShowing]);

  useEffect(() => {
    console.log("Incorrect Screen Showing? ... " + isIncorrectScreenShowing);
  }, [isIncorrectScreenShowing]);

  //TODO: axios push for GeoGameSession (UserDb)

  return (
    <Card>
      <Card.Content>
        <Card.Header>{content.region}</Card.Header>

        <Card.Meta>{content.prompt}</Card.Meta>
        {props.content.imageUrl !== null ? (
          <Card.Meta>
            <Image src={content.imageUrl} />
          </Card.Meta>
        ) : null}
      </Card.Content>

      <Card.Content>
        <Form>
          {props.content.questionType === "Multiple Choice" ? (
            <Form.Field>
              <Button.Group>
                <Button
                  color="blue"
                  active={chosenOption === content.optionOne}
                  onClick={() => setChosenOption(content.optionOne)}
                >
                  {content.optionOne}
                </Button>

                <Button
                  color="blue"
                  active={chosenOption === content.optionTwo}
                  onClick={() => setChosenOption(content.optionTwo)}
                >
                  {content.optionTwo}
                </Button>

                <Button
                  color="blue"
                  active={chosenOption === content.optionThree}
                  onClick={() => setChosenOption(content.optionThree)}
                >
                  {content.optionThree}
                </Button>

                <Button
                  color="blue"
                  active={chosenOption === content.optionFour}
                  onClick={() => setChosenOption(content.optionFour)}
                >
                  {content.optionFour}
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
          <Button type="submit" onClick={handleCardSubmit}>
            Submit
          </Button>
        </Form>
      </Card.Content>
    </Card>
  );
};
export default GeoCard;

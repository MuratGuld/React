// ANALYSIS SECTION
// =================
// We use a React project to work on component basis.
// We use the QuestionList.json file as the data model.
// With the useState structure, we keep our datas in App.js.
// With a random method we pick random questions from our data.
// There are 4 options for each question (1 correct only)
// Our score variable is updated according to the correct or incorrect answer.
// We continue to the next question with the next button.
// At the end of 5 questions, the result screen and score are shown to the user.

import React from "react";
import { useState } from "react";
import "./App.css";
import Result from "./Components/Result";
import Question from "./Components/Question";
import AnswerOptions from "./Components/AnswerOptions";
import NextButton from "./Components/NextButton";
import Score from "./Components/Score";

function App() {
  // We handle if an answer clicked
  const [clicked, setClicked] = useState(false);
  // We choose a random question from QuestionList with a random id
  const [randomQuestion, setRandomQuestion] = useState(0);
  // That shows us the current question number
  const [questionNumber, setQuestionNumber] = useState(1);
  // We keep true and false answer scores
  const [trueScore, setTrueScore] = useState(0);
  const [falseScore, setFalseScore] = useState(0);
  // After 5 question we will display result screen with a showResult variable
  const [showResult, setShowResult] = useState(false);

  // Different options depending on whether the answer is right or wrong
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setTrueScore(trueScore + 1);
    } else {
      setFalseScore(falseScore + 1);
    }
    setClicked(true);
  };

  // We hande next button
  const handleNextQuestion = () => {
    // We change our clicked variable as false when we click next button
    setClicked(false);
    if (questionNumber < 5) {
      setRandomQuestion(Math.floor(Math.random() * 15));
      setQuestionNumber(questionNumber + 1);
    } else {
      // After 5 question we set the showResult true
      setShowResult(true);
    }
  };

  // If showResult is true, we display the result screen (after 5 questions)
  if (showResult) {
    // Result Fragment (After 5 Questions we display at the end)
    return <Result trueScore={trueScore} />;
  } else {
    return (
      // Quiz Fragment (here is showResult false)
      <React.Fragment>
        {/* Question Fragment */}
        <Question
          randomQuestion={randomQuestion}
          questionNumber={questionNumber}
        />
        {/* Answer Options Fragment */}
        <AnswerOptions
          randomQuestion={randomQuestion}
          clicked={clicked}
          handleAnswer={handleAnswer}
        />
        {/* Next Button Fragment */}
        <NextButton clicked={clicked} handleNextQuestion={handleNextQuestion} />
        {/* Score Fragment  */}
        <Score trueScore={trueScore} falseScore={falseScore} />
      </React.Fragment>
    );
  }
}

export default App;

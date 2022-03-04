import QuestionList from "../Service/QuestionList";

export default function Question({ questionNumber , randomQuestion }) {
  return (
    <>
      <div>QUESTION : {questionNumber}</div>
      <div>{QuestionList[randomQuestion].question}</div>
    </>
  );
}

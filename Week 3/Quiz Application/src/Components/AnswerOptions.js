import QuestionList from "../Service/QuestionList";

export default function AnswerOptions({randomQuestion,clicked,handleAnswer}) {
  return (
    <ul>
      {QuestionList[randomQuestion].answerList.map((answerOption, id) => (
        <li key={id}>
          <button
            disabled={clicked}
            className={clicked && (answerOption.isCorrect ? "green" : "red")}
            onClick={() => handleAnswer(answerOption.isCorrect)}
          >
            {answerOption.answer}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function NextButton({ clicked, handleNextQuestion }) {
  return (
    <button disabled={!clicked} onClick={handleNextQuestion}>
      Next
    </button>
  );
}

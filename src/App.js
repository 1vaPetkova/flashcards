import { useState } from "react";
import { questions } from "./Data.js";

function App() {
  return (
    <div className="flashcards">
      {questions.map((q) => (
        <FlashCard question={q} />
      ))}
    </div>
  );
}

function FlashCard({ question }) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={selected ? "selected" : ""}
      onClick={() => setSelected(!selected)}
    >
      {selected ? question.answer : question.question}
    </div>
  );
}

export default App;

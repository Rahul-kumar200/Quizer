import { useEffect, useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import data from "./data";
import Timer from './components/Timer'

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("Rs 0");

  useEffect(()=>{
    if(questionNumber===15)
    setStop(true);
  },[questionNumber,setStop])

  const moneyPyramid = [
    { id: 1, amount: "Rs 5000" },
    { id: 2, amount: "Rs 10,000" },
    { id: 3, amount: "Rs 20,000" },
    { id: 4, amount: "Rs 40,000" },
    { id: 5, amount: "Rs 80,000" },
    { id: 6, amount: "Rs 1,60,000" },
    { id: 7, amount: "Rs 3,20,000" },
    { id: 8, amount: "Rs 6,40,000" },
    { id: 9, amount: "Rs 12,50,000" },
    { id: 10, amount: "Rs 25,00,000" },
    { id: 11, amount: "Rs 50,00,000" },
    { id: 12, amount: "Rs 1,00,00,000" },
    { id: 13, amount: "Rs 5,00,00,000" },
    { id: 14, amount: "Rs 7,00,00,000" },
  ].reverse();

  useEffect(()=>{
    questionNumber > 1 && setEarned ( moneyPyramid.find( (m) =>m.id ===questionNumber-1).amount)
  },[moneyPyramid ,  questionNumber])

  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1 className="endText">You Won : {earned} </h1>
        ) : (
          <>
            <div className="top">
              <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
            </div>
            <div className="bottom">
              <Quiz
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>

      // money pyramid
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem "
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

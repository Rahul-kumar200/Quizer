import React,{useEffect, useState} from "react";
import './Quiz.css'

const Quiz = ({data , setStop , questionNumber , setQuestionNumber}) => {

    const [question , setQuestion] = useState(null)
    const [selectedAnswer , setSelectedAnswer] = useState(null);
    const [className , setClassName] = useState('answer');

    useEffect(()=>{
        setQuestion(data[questionNumber - 1])
    },[data,questionNumber])

    // this is create just to avoid the big syntax for use
    const delay = (duration , callback) =>{
        setTimeout(()=>{
            callback();
        } , duration)
    }

    const handleClick = (a)=>{
        setSelectedAnswer(a);
        setClassName('answer active')
        delay(1000 , () => {
            setClassName(a.correct ? "answer correct" : "answer wrong")
        } )

        delay(4000,()=>{
            if(a.correct){
                setQuestionNumber(prev=> prev+1)
                setSelectedAnswer(null);
            }

            else{
                setStop(true)
            }
        })
    }

  return (
    <div className="Quiz">
      <div className="question">{question?.question}</div>

      <div className="answers">
        {
            question?.answers.map((a)=>(                // if question is not null the perform next step
                <div className={selectedAnswer === a ? className : "answer"} onClick={()=> handleClick(a)}>{a.text}</div>
            ))
        }
      </div>
    </div>
  );
};

export default Quiz;

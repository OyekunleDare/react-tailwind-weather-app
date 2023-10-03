import React, { useState} from "react";
import QuizTitle from "./QuizTitle";
import Footer from "./Footer";

const QuizApp = () => {
    const qbank =  [
        {
            id: 1,
            question: 'What is the capital of Lagos State',
            options: ['Ibadan','Ilorin','Ikeja','Osogbo'],
            answer: 'Ikeja'
        },
        {
            id: 2,
            question: 'What is the capital of Osun State',
            options: ['Ibadan','Uyo','Ikeja','Osogbo'],
            answer: 'Osogbo',
        },
        {
            id: 3,
            question: 'What is the currency of Nigeria',
            options: ['Dollar','Pounce','Naira','Euro'],
            answer: 'Naira',
        },
        {
            id: 4,
            question: 'What is the apex bank in Nigeria',
            options: ['UBA','FBN','FCMB','CBN'],
            answer: 'CBN',
        },
        {
            id: 5,
            question: 'Who is the present President of Nigeria',
            options: ['Tinubu','Dangote','Obasanjo','Wike'],
            answer: 'Tinubu',
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [percent, setPercent] = useState(0);

    const handleAnswerOptionClick = (answer) => {
        if(qbank[currentQuestion].answer === answer){
            setScore(score + 1);
            setPercent(percent + 20);
        }
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < qbank.length){
            var opt = window.confirm("Are you sure you want to submit");
            if(opt==1){
            setCurrentQuestion(nextQuestion);
            }else{
                setCurrentQuestion(currentQuestion);
            }
        }else{
            setShowScore(true);
        }
    }

    const Disp = () => {
        if(percent<50){
            return <span className=" text-red-400 font-bold">{percent}</span>
        }else{
            return <span className=" text-green-400 font-bold text-3xl">{percent}</span>
        }
    }

        return(
            <div className='justify-center items-center p-4 bg-gray-400'>
               <QuizTitle value="MY REACT QUIZ APP" /> 
               <div className="grid justify-center items-center">
               { showScore ? (
				<div className='grid justify-center items-center text-2xl rounded-lg font-semibold text-center px-2 py-6 bg-slate-500 w-80 mt-4 text-white'>
					<p>You scored {score} out of {qbank.length}</p>
                    <p>You scored <Disp />% of {(qbank.length) * 20}%</p>
				</div>
			) : (
                <>
                    <div className=" text-2xl font-semibold text-center mb-6">
                            Question {currentQuestion + 1} / {qbank.length}
                    </div>
                    <div className="flex flex-row w-full space-x-2 justify-center text-2xl mb-4">
                           {currentQuestion + 1} <span className=" font-bold ml-3">{qbank[currentQuestion].question}</span>
                    </div>
                    <div className="flex flex-row w-full space-x-2 justify-center">
                            {qbank[currentQuestion].options.map((ansoptions) => (
                                <button onClick={() => handleAnswerOptionClick(ansoptions)} className="border-2 my-2 p-2 rounded-md w-auto bg-green-500">{ansoptions}</button>
                            ))}
                    </div>
                </>                
            )}
            </div>
            <Footer value="Designed by OYEKUNLE DARE EMMANUEL" />
            </div>
        );
}

export default QuizApp;
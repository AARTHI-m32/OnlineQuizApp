import React, { useState, useEffect } from "react";

const HardPage = () => {
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState(null);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [result, setResult] = useState(null); 

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
            const response = await fetch("https://questions-api-5.onrender.com/req-questions?difficulty=hard");
            if (!response.ok) {
                throw new Error("Failed to fetch questions");
            }
            const data = await response.json();
            setQuestions(data);
            setError(null);
        
            setSelectedAnswers(new Array(data.length).fill(null));
        } catch (error) {
            console.error("Error fetching questions:", error);
            setQuestions([]);
            setError(error.message);
        }
    };

    const handleOptionChange = (event) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuestionIndex] = event.target.value;
        setSelectedAnswers(newSelectedAnswers);
    };

    const handleNextClick = () => {
        if (selectedAnswers[currentQuestionIndex] !== null) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevClick = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    };

    const handleSubmit = async () => {
        try {
            let correctCount = 0;
            
            questions.forEach((question, index) => {
                if (selectedAnswers[index] === question.correctAnswer) {
                    correctCount++;
                }
            });
            
            
            const percentage = (correctCount / questions.length) * 100;
            
            setResult(`You scored ${percentage}% (${correctCount} out of ${questions.length} correct)`);
        } catch (error) {
            console.error("Error checking answers:", error);
            setResult("Error checking answers");
        }
    };
    

    return (
        <div className="container">
            <div className="question-container">
                <h1>Hard Questions</h1>
                {error && <p>{error}</p>}
                {questions.length > 0 && (
                    <form>
                        <ul>
                            <li>
                                <p>{questions[currentQuestionIndex].text}</p>
                                <div className="options-container">
                                    {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                                        <div key={optionIndex}>
                                            <input
                                                type="radio"
                                                id={`option-${optionIndex}`}
                                                name="options"
                                                value={option}
                                                onChange={handleOptionChange}
                                                checked={selectedAnswers[currentQuestionIndex] === option}
                                            />
                                            <label htmlFor={`option-${optionIndex}`}>{option}</label>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        </ul>
                        {currentQuestionIndex < questions.length - 1 && (
                            <button id="next" type="button" onClick={handleNextClick}>
                                Next
                            </button>
                        )}
                        {currentQuestionIndex > 0 && (
                            <button id="prev" type="button" onClick={handlePrevClick}>
                                Previous
                            </button>
                        )}
                        {currentQuestionIndex === questions.length - 1 && (
                            <button id="submit" type="button" onClick={handleSubmit}>
                                Submit
                            </button>
                        )}
                    </form>
                )}
            </div>
      
            {result !== null && (
                <div className="score-container">
                    <p id="res">Result: {result}</p>
                </div>
            )}

        
            <div>
                <p id="ans">Selected Answer: {selectedAnswers[currentQuestionIndex]}</p>
            </div>
      
        </div>
    );
};

export default HardPage;

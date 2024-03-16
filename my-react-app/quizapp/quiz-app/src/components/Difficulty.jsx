import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Difficulty = () => {
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState(null);

    const handleDifficultyClick = (difficulty) => {
        setSelectedDifficulty(difficulty);
    };

    useEffect(() => {
        
        if (selectedDifficulty) {
            fetchQuestions(selectedDifficulty);
        }
    }, [selectedDifficulty]);

    const fetchQuestions = async (difficulty) => {
        try {
            const response = await fetch(`/req-questions?difficulty=${difficulty}`);
            if (!response.ok) {
                throw new Error('Failed to fetch questions');
            }
            const data = await response.json();
            setQuestions(data);
            setError(null);
        } catch (error) {
            console.error('Error fetching questions:', error);
            setQuestions([]);
            setError(error.message);
        }
    };

    return (
        <>
            <div className='level'>
                <h1 className="diffi">Choose a Difficulty Level:</h1>
                <div className='btn'>
                  <Link to='/easy' class='link1'>  <button onClick={() => handleDifficultyClick('easy')} id="easy">Easy</button></Link> 
                   <Link to='/medium' class='link1'> <button onClick={() => handleDifficultyClick('medium')} id='medium'>Medium</button></Link>
                    <Link to='/hard' className="link1"><button onClick={() => handleDifficultyClick('hard')} id='hard'>Hard</button></Link>
                </div>
            </div>
            <div>
                {error && <p>{error}</p>}
                <ul>
                    {questions.map((question, index) => (
                        <li key={index}>{question.text}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Difficulty;

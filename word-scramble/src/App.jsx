import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage the original word, scrambled word, user input, game status, and result message
  const [originalWord, setOriginalWord] = useState('');
  const [scrambledWord, setScrambledWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [gameInProgress, setGameInProgress] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  // Helper function to scramble the word
  const scrambleWord = (word) => {
    let scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
    return scrambled;
  };

  // Handle start game
  const startGame = () => {
    if (originalWord.trim() !== '') {
      const scrambled = scrambleWord(originalWord);
      setScrambledWord(scrambled);
      setUserInput('');
      setGameInProgress(true); // Set the game in progress
      setResultMessage(''); // Clear any previous result message
    }
  };

  // Check if the user input matches the original word
  const checkGuess = () => {
    if (userInput === originalWord) {
      setResultMessage('Correct!');
    } else {
      setResultMessage('Try again!');
    }
  };

  // Handle resetting the game
  const resetGame = () => {
    setOriginalWord('');
    setScrambledWord('');
    setUserInput('');
    setGameInProgress(false); 
    setResultMessage(''); // AI helped to display whether you guessed right or wrong
  };

  return (
    <div className="App">
      <h1>Word Scramble Game</h1>
      {!gameInProgress ? (
        <div>
          <input
            type="text"
            placeholder="Enter a word"
            value={originalWord}
            onChange={(e) => setOriginalWord(e.target.value)}
          />
          <button onClick={startGame}>Start Game</button>
        </div>
      ) : (
        <div>
          <p>Scrambled Word: {scrambledWord}</p>
          <input
            type="text"
            placeholder="Your guess"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button onClick={checkGuess}>Check Guess</button>
          <button onClick={resetGame}>Reset Game</button>
          {resultMessage && <p>{resultMessage}</p>}
        </div>
      )}
    </div>
  );
}

export default App;

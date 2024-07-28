import { useState } from 'react';
import './App.css';
function App() {
  const diceObj = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
  };
  const [dice1, setDice1] = useState(diceObj[1]);
  const [dice2, setDice2] = useState(diceObj[5]);
  const setDiceValues = () => {
    setDice1(diceObj[rollDice()]);
    setDice2(diceObj[rollDice()]);
  };
  const rollDice = () => {
    return Math.ceil(Math.random() * 6);
  };
  return (
    <>
      <div>
        <h1>Dice Roll</h1>
        <div className="diceImg">
          <img src={`../public/DiceImages/${dice1}.svg`} alt="five.svg" />
          <img src={`../public/DiceImages/${dice2}.svg`} alt="one.svg" />
        </div>
        <button className="btn" onClick={setDiceValues}>
          Roll Dice !!
        </button>
      </div>
    </>
  );
}

export default App;

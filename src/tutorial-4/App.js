import React from 'react';
import './App.css';
import Phrase from './components/Phrase';
import EmptyBlock from './components/EmptyBlock';
import { adjectivesArr, nounsArr } from './utils/phrase';

const App = () => {
  const [phrases, setPhrases] = React.useState([]);

  const generateBtn = () => {
    const arrayRandElement = (arr) => {
      let rand = Math.floor(Math.random() * arr.length);
      return arr[rand];
    };

    const generatePhrase = `${arrayRandElement(adjectivesArr)} ${arrayRandElement(
      adjectivesArr,
    )} ${arrayRandElement(nounsArr)}`;

    setPhrases([generatePhrase, ...phrases]);
  };

  const removeClick = () => {
    setPhrases([]);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="list">
          {!phrases.length ? <EmptyBlock /> : phrases.map((str) => <Phrase text={str} key={str} />)}
        </div>
        <button className="btn btn_generate" onClick={generateBtn}>
          Сгенерировать
        </button>
        <button className="btn btn_clear" onClick={removeClick}>
          Очистить
        </button>
      </div>
    </div>
  );
};

export default App;

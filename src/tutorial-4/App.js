import React from 'react';
import './App.css';
import Phrase from './components/Phrase';
import EmptyBlock from './components/EmptyBlock';
import { adjectivesArr, nounsArr } from './utils/phrase';

const App = () => {
  const [adjectivesWords, setAdjectivesWords] = React.useState([]);
  const [nounsWords, setNounsWords] = React.useState([]);

  const generateBtn = () => {
    let newAdjectivesArr = [...adjectivesWords, ...adjectivesArr];
    setAdjectivesWords(newAdjectivesArr);

    let newNounsArr = [...nounsWords, ...nounsArr];
    setNounsWords(newNounsArr);
  };

  const removeClick = () => {
    setAdjectivesWords([]);
    setNounsWords([]);
  };

  return (
    <div className="container">
      <div className="wrapper">
        {adjectivesWords.length === 0 || nounsWords.length === 0 ? (
          <EmptyBlock />
        ) : (
          <Phrase adjectives={adjectivesWords} nouns={nounsWords} />
        )}

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

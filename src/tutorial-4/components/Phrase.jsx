const Phrase = ({ adjectives, nouns }) => {
  function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }
  return (
    <div className="list">
      {adjectives.map((adjective) => (
        <div className="block" key={adjective}>
          <h3>
            {arrayRandElement(adjectives)} {arrayRandElement(adjectives)} {arrayRandElement(nouns)}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Phrase;

import React from 'react';

import Comments from './components/Comments';
import Form from './components/Form';

const App = () => {
  const [mainList, setMainList] = React.useState([]);

  const onShowComments = (arr) => {
    setMainList([...mainList, ...arr]);
  };

  console.log(mainList);

  return (
    <>
      <Comments onShow={mainList} />
      <Form onShow={onShowComments} />
    </>
  );
};

export default App;

import React from 'react';

import Comment from './components/Comment';
import Form from './components/Form';

const App = () => {
  const [mainList, setMainList] = React.useState([]);

  const onShowComments = (obj) => {
    setMainList([...mainList, obj]);
  };

  return (
    <>
      <Comment objData={mainList} />
      <Form onShow={onShowComments} />
    </>
  );
};

export default App;

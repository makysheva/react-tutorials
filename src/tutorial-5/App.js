import React from 'react';

import Comment from './components/Comment';
import Form from './components/Form';

const App = () => {
  const [mainList, setMainList] = React.useState([]);

  const onShowComments = (obj) => {
    setMainList([...mainList, obj]);
  };

  React.useEffect(() => {
    setMainList(JSON.parse(localStorage.getItem('allComments')) || []);
  }, []);

  React.useEffect(() => {
    localStorage.setItem('allComments', JSON.stringify(mainList));
  }, [mainList]);

  return (
    <>
      <Comment mainList={mainList} />;
      <Form onShow={onShowComments} />
    </>
  );
};

export default App;

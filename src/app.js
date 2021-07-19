import React from 'react';
import Form from './components/searchForm/searchForm';
import Table from './components/table/table';
import Title from './components/title/title';

const App = () => {
  return (
    <main>
      <Title />
      <Form />
      <Table/>
    </main>
  )
}

export default App;

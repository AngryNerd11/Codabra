import React, { useState } from 'react';
import Editor from './components/Editor';
import Output from './components/Output';
const App = () => {
  const [code, setCode] = useState('');


  return (
    <div className=''>
      <Editor />
      <Output />
    </div>
  );
};

export default App;

import React, { useState, useEffect, createContext } from 'react';
import Editor from './components/Editor';
import Output from './components/Output';
import { useSelector } from 'react-redux';
import { selectCode } from './redux/codeSlice';
const MyContext = createContext();
const App = () => {

  const [language, setLanguage] = useState('python');

  const langSelect = (e) => {
    setLanguage(e.target.value);
  }
  const [dataFromChild, setDataFromChild] = useState(null);
  const handleDataChange = (newData) => {
    setDataFromChild(newData);
  };

  const handleClick = () => {
    console.log(dataFromChild);
  }

  return (
    <div className='bg-gray-500'>
      <h1 className="text-6xl font-italic text-white font-bold text-center bg-black bg-opacity-75  py-2">Codabra</h1>
      <h1 className="text-2xl font-italic text-white-opacity-10 font-bold text-center bg-black bg-opacity-70 py-2">Using OpenAI</h1>

      <div className="flex justify-center px-4 mt-3">
        <div className="w-1/2 mr-4 px-4">
          <h2 className="text-2xl font-bold mb-4">Editor</h2>
          <MyContext.Provider value={{ dataFromChild, handleDataChange }}>
            <Editor />
          </MyContext.Provider>
        </div>
        <div className="w-1/2 mr-4 px-2">
          <h2 className="text-2xl font-bold mb-4">Output</h2>
          <div >
            <select value={language} onChange={langSelect}>
              <option value='javascript'>JavaScript</option>
              <option value='python'>Python</option>
              <option value='cpp'>C++</option>
              <option value='java'>Java</option>
              <option value='rust'>Rust</option>
            </select>
          </div>
          <Output language={language} code={"hello"} />
        </div>
      </div>
      <div className='flex flex-col items-center  h-screen'>
        <button className=" bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-10 mt-4"
          onClick={handleClick}>
          Run
        </button>
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect, createContext } from 'react';
import Editor from './components/Editor';
import Output from './components/Output';
import { useSelector } from 'react-redux';

const App = () => {

  const [language, setLanguage] = useState('python');
  const [output, setOutput] = useState('');
  const langSelect = (e) => {
    setLanguage(e.target.value);
  }
  const code = useSelector(state => state.code.code);
  const languageEd = useSelector(state => state.code.language);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(languageEd);
  }, [languageEd]);
  const translate = async () => {
    setLoading(true);
    if (!code) {
      alert('Please enter some code');
      return;
    }
    if (language === languageEd) {
      alert('Please select a different language');
      return;
    }
    const res = await fetch('https://codabra.onrender.com/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, language })
    });
    const data = (await res.text()).trim();
    setOutput(data);
    setLoading(false);
  }
  const handleClick = () => {
    translate();
  }


  return (
    <div className='bg-gray-500' style={{ overflow: "hidden" }}>
      <h1 className="text-6xl font-italic text-white font-bold text-center bg-black bg-opacity-75  py-2">Codabra</h1>
      <h1 className="text-2xl font-italic text-white-opacity-10 font-bold text-center bg-black bg-opacity-70 py-2">Using OpenAI</h1>

      <div className="flex justify-center px-4 mt-3">
        <div className="w-1/2 mr-4 px-4">
          <h2 className="text-2xl font-bold mb-4">Editor</h2>
          <Editor />
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
          <Output language={language} code={output} />
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <button disabled={loading} en className=" bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-10 mt-4"
          onClick={handleClick}>
          {loading ? 'Translating...' : 'Translate'}
        </button>
      </div>
    </div>
  );
};

export default App;

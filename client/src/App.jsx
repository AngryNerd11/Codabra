import React, { useState, useEffect, createContext } from 'react';
import Editor from './components/Editor';
import Output from './components/Output';
import Footer from './components/Footer';
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
<<<<<<< HEAD
    <div className='bg-gray-500' style={{ overflow: "hidden" }}>
      <h1 className="text-6xl font-italic text-white font-bold text-center bg-black bg-opacity-75  py-2">Codabra</h1>
      <h1 className="text-2xl font-italic text-white-opacity-10 font-bold text-center bg-black bg-opacity-70 py-2">Using OpenAI</h1>
=======
    <div className='flex flex-col'>
      <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-8 text-center">
        <h1 className="text-6xl font-bold">Codabra</h1>
        <h2 className="text-2xl font-bold">Using OpenAI</h2>
      </header>
>>>>>>> fffe3cedf0657df951ec600e4f20b853c1fe738c

      <div className="flex-grow flex justify-center items-center mt-8">
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-bold mb-4">EDITOR</h2>
          <Editor />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-bold mb-4">OUTPUT</h2>
          <div className="flex justify-between items-center mb-4">
            <select className="p-2 rounded border" value={language} onChange={langSelect}>
              <option value='javascript'>JavaScript</option>
              <option value='python'>Python</option>
              <option value='cpp'>C++</option>
              <option value='java'>Java</option>
              <option value='rust'>Rust</option>
            </select>
            <div className="">
              <button disabled={loading} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
                onClick={handleClick}>
                {loading ? 'Translating...' : 'Translate'}
              </button>
            </div>
          </div>
          <Output language={language} code={output} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;

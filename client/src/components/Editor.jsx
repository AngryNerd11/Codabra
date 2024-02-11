import { useState, useEffect } from 'react';
import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { rust } from '@codemirror/lang-rust';
import { python } from '@codemirror/lang-python';
import { javascript } from '@codemirror/lang-javascript';
const Editor = () => {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('javascript');
    const [extensions, setExtensions] = useState(javascript());

    useEffect(() => {
        switch (language) {
            case 'javascript':
                setExtensions(javascript());
                break;
            case 'python':
                setExtensions(python());
                break;
            case 'cpp':
                setExtensions(cpp());
                break;
            case 'java':
                setExtensions(java());
                break;
            case 'rust':
                setExtensions(rust());
                break;
            default:
                setExtensions(javascript());
                break;
        }
    }, [language]);
    const langSelect = (e) => {
        setLanguage(e.target.value);
    }
    const check = () => {
        console.log(language)
        console.log(extensions)
    }
    return (
        <div>
            <div >
                <div >
                    <select value={language} onChange={langSelect}>
                        <option value='javascript'>JavaScript</option>
                        <option value='python'>Python</option>
                        <option value='cpp'>C++</option>
                        <option value='java'>Java</option>
                        <option value='rust'>Rust</option>
                    </select>
                </div>
                <CodeMirror
                    value={code}
                    onChange={(value) => {
                        setCode(value);
                    }}
                    height='80vh'
                    extensions={extensions}
                    theme='dark'
                />
                <button onClick={check}>
                    Run
                </button>
            </div>
        </div>
    )
}

export default Editor

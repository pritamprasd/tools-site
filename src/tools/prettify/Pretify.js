import React, { useState } from 'react'
import './Pretify.css';
import '../../App.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { Types, getOutButtonByType } from './types';
import { getJsonOutput } from '../../util/json_helpers';
import { getYamlOutput } from '../../util/yaml_helpers';
import { parseJwtAndReturnJSON } from '../../util/jwt_helpers';

const supportedExtensions = [Types.jwt, Types.json, Types.yaml]

export default function Pretify() {
    var outputText = ""
    var defaultInput="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

    const [inputText, setinputText] = useState(defaultInput)
    const [selectedType, setselectedType] = useState(Types.none)

    function handleActionButtonClick(type) {
        if (inputText !== "") {
            setselectedType(type)
        }
    }
    function getFormattedOutput(type, input) {
        console.log("getting formatted output")
        if (input !== "") {
            switch (type) {
                case Types.yaml:
                    outputText = getYamlOutput(input)                    
                    return outputText
                case Types.json:
                    outputText  = getJsonOutput(input)                    
                    return outputText
                case Types.jwt:
                    outputText  = parseJwtAndReturnJSON(input)                    
                    return JSON.stringify(outputText, null, 4)
                case Types.none:                    
                    return ""
            }
        }
    }
    return (
        <div className='container'>
            <div>
                <textarea type="text" className="form-control custom-text-input" placeholder="input text"
                    value={inputText} onChange={e => setinputText(e.target.value)} />
            </div>
            <div className='buttons'>
                {supportedExtensions.map(t =>
                    <button className='btn btn-primary' onClick={() => handleActionButtonClick(t)} key={t}>{t}</button>)
                }
            </div>
            <div className="text-output">
                <SyntaxHighlighter language="javascript" style={dark} className="syntax-highlighted-text">
                    {getFormattedOutput(selectedType, inputText)}
                </SyntaxHighlighter>
                <div className='outputButtons'>
                    {getOutButtonByType(selectedType, inputText, outputText)}
                </div>
            </div>

        </div>
    )
}


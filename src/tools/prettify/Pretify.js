import React, { useState } from 'react'
import './Pretify.css';
import '../../App.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { Types, getOutButtonByType } from './types';
import { getJsonOutput } from '../../util/json_helpers';
import { getYamlOutput } from '../../util/yaml_helpers';
import { getJwtOutput } from '../../util/jwt_helpers';

const supportedExtensions = [Types.json, Types.yaml, Types.jwt]

export default function Pretify() {
    const [inputText, setinputText] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
    const [selectedType, setselectedType] = useState(Types.none)

    var outputText = ""

    function handleActionButtonClick(type) {
        if (inputText !== "") {
            setselectedType(type)
        }
    }
    function getFormattedOutput(selectedType) {
        if (inputText !== "") {
            switch (selectedType) {
                case Types.yaml:
                    const output = getYamlOutput(inputText)
                    outputText = output
                    return output
                case Types.json:
                    const output2 = getJsonOutput(inputText)
                    outputText = output2
                    return output2
                case Types.jwt:
                    const output3 = getJwtOutput(inputText)
                    outputText = output3
                    return output3
                case Types.none:                    
                    return ""
                default:
                    alert("getFormattedOutput: Invalid converter : " + selectedType)
            }
        }
    }
    return (
        <div className='container'>
            <div>
                <textarea type="text" className="form-control custom-text-input" placeholder="input text"
                    onChange={e => setinputText(e.target.value)} value={inputText} />
            </div>
            <div className='buttons'>
                {supportedExtensions.map(t =>
                    <button className='btn btn-primary' onClick={() => handleActionButtonClick(t)} key={t}>{t}</button>)
                }
            </div>
            <div className="text-output">
                <SyntaxHighlighter language="javascript" style={dark} className="syntax-highlighted-text">
                    {getFormattedOutput(selectedType)}
                </SyntaxHighlighter>
                <div className='outputButtons'>
                    {getOutButtonByType(selectedType, inputText, outputText)}
                </div>
            </div>

        </div>
    )
}


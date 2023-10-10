import React, { useState } from 'react'
import './Pretify.css';
import '../../App.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { Types, getOutButtonByType, supportedExtensions } from './types';
import { getJsonOutput } from '../../util/json_helpers';
import { getYamlOutput } from '../../util/yaml_helpers';
import { parseJwtAndReturnJSON } from '../../util/jwt_helpers';
import { fromB64, toBase64 } from '../../util/base64_helpers';
import { copyToClipboard } from '../../util/clipboard';

export default function Pretify() {
    var outputText = ""
    var defaultInput = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

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
                    outputText = getJsonOutput(input)
                    return outputText
                case Types.jwt:
                    outputText = parseJwtAndReturnJSON(input)
                    return JSON.stringify(outputText, null, 4)
                case Types.b64encode:
                    outputText = toBase64(input)
                    return outputText
                case Types.b64decode:
                    outputText = fromB64(input)
                    return outputText
                case Types.none:
                    return ""
            }
        }
    }
    async function handlePasteClick() {
        setinputText(await navigator.clipboard.readText())
    }
    function handleCopyClick(){
        copyToClipboard(inputText)
    }
    return (
        <div className='container-pretify-ip'>
            <div className='text-input'>
                <div className='inputButtons'>
                    
                    <svg onClick={() => handlePasteClick()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                    </svg>
                    <svg onClick={() => handleCopyClick()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z" />
                    </svg>
                </div>
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


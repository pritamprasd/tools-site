import React, { useState } from 'react'
import './Pretify.css';
import '../../App.css';
import jsYaml from 'js-yaml';
import js_beautify from 'js-beautify'

const supportedExtensions = ["jwt", "yaml", "json"]

export default function Pretify() {
    const [inputText, setinputText] = useState("")
    const [outputText, setoutputText] = useState("")

    function handleInput(type) {
        if (inputText !== "") {
            switch (type) {
                case "yaml":
                    handleYamlInput();
                    break;
                case "json":
                    handleJsonInput();
                    break;
                case "jwt":
                    handleJwtInput();
                    break;
                default:
                    alert("Invalid converter")
                    break;
            }
        }
    }
    return (
        <div className='container'>
            <div>
                <textarea type="text" className="form-control custom-text-input" placeholder="input text"
                    onChange={e => setinputText(e.target.value)} />
            </div>
            <div className='buttons'>
                {supportedExtensions.map(t =>
                    <button className='btn btn-primary' onClick={() => handleInput(t)} key={t}>{t}</button>)
                }
            </div>
            <div>
            <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
                <textarea className="form-control custom-text-input" readOnly value=
                    {js_beautify(outputText)
                        // { indent_size: 2, space_in_empty_paren: true })
                    }>
                </textarea>
                {/* <p>{outputText}</p> */}
            </div>
        </div>
    )

    function handleYamlInput() {
        try {
            const textVal = convertIfJson();
            var santitized = textVal.replace(/:\s*-/g, ':\n    -');
            santitized = jsYaml.dump(santitized, { indent: 2 });
            const parsedYaml = jsYaml.load(santitized);
            setoutputText(parsedYaml);
        } catch (error) {
            setoutputText(`Errors: \n${error}`);
        }
    }

    function convertIfJson() {
        try {
            const yl = JSON.parse(inputText)
            const yaml = yaml.load(JSON.stringify(yl))
            return yaml.toString()
        } catch (error) {
            return inputText
        }
    }

    function handleJsonInput() {
        try {
            var santitized = JSON.parse(inputText)
            const parsed = JSON.stringify(santitized)
            setoutputText(parsed);
        } catch (error) {
            setoutputText(`Errors: \n${error}`);
        }
    }

    function handleJwtInput() {
        try {
            const parsed = parseJwt(inputText)
            setoutputText(JSON.stringify(parsed));
        } catch (error) {
            setoutputText(`Errors: \n${error}`);
        }
    }

    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }
}


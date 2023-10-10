import React, { useState } from 'react'
import { CopyButton, DownloadButton } from './OutputButtons';

export const Types = {
    jwt: "jwt",
    yaml: "yaml",
    json: "json",
    b64encode: "b64encode",
    b64decode: "b64decode",
    none: "none"
}

export const supportedExtensions = [
    Types.jwt,
    Types.json,
    Types.yaml,
    Types.b64encode,
    Types.b64decode
]

export function getOutButtonByType(selectedType, inputText, outputText) {
    if (inputText !== "") {
        switch (selectedType) {
            case Types.yaml:
                return <div>
                    <DownloadButton text={outputText} type={selectedType} />
                    <CopyButton text={outputText} type={selectedType} />
                </div>
            case Types.json:
                return <div>
                    <DownloadButton text={outputText} type={selectedType} />
                    <CopyButton text={outputText} type={selectedType} />
                </div>
            case Types.jwt:
                return <div>
                    <DownloadButton text={outputText} type={selectedType} />
                    <CopyButton text={outputText} type={selectedType} />
                </div>
            case Types.json:
                return <div>
                    <DownloadButton text={outputText} type={selectedType} />
                    <CopyButton text={outputText} type={selectedType} />
                </div>
            case Types.b64encode:
                return <div>
                    <DownloadButton text={outputText} type={selectedType} />
                    <CopyButton text={outputText} type={selectedType} />
                </div>
            case Types.b64decode:
                return <div>
                    <DownloadButton text={outputText} type={selectedType} />
                    <CopyButton text={outputText} type={selectedType} />
                </div>
            case Types.none:
                return <div></div>
            default:
                alert("getOutButtonTypes: Invalid converter : " + selectedType)
                break;
        }
    }
}
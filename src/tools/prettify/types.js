import React, { useState } from 'react'
import { CopyButton, DownloadButton } from './OutputButtons';

export const Types = {
    jwt: "jwt",
    yaml: "yaml",
    json: "json",
    none: "none"
}

export function getOutButtonByType(selectedType, inputText, outputText) {
    if (inputText !== "") {
        switch (selectedType) {
            case Types.yaml:
                <div>
                    <CopyButton text={outputText} type={selectedType} />
                </div>
                break;
            case Types.json:
                return <div>
                    <CopyButton text={outputText} type={selectedType} />
                </div>
            case Types.jwt:
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
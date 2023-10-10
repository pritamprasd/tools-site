import React, { useState } from 'react'
import { Types } from './types';
import { copyToClipboard } from '../../util/clipboard';

export function DownloadButton({ text, type }) {
    function handleJsonDownload() {
        const blob = new Blob([JSON.stringify(text, null, 4)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "sample.json";
        a.click();
        URL.revokeObjectURL(url);
    }
    function handleDownloadButtonClick(type) {
        switch (type) {
            case Types.yaml:
            case Types.json:
            case Types.jwt:
            case Types.b64encode:
            case Types.b64decode:
                handleJsonDownload()
                break;
            default:
                alert("handleDownloadButtonClick: Invalid converter : " + type)
                break;
        }
    }
    return <button onClick={() => handleDownloadButtonClick(type)} className='btn btn-outline-primary'>Download</button>;
}

export function CopyButton({ text, type }) {
    function handleCopyClick() {
        var toCopy = ""
        switch (type) {
            case Types.json:
                toCopy = JSON.stringify(text)
                break
            case Types.yaml:
            case Types.jwt:
            case Types.b64encode:
            case Types.b64decode:
                toCopy = text
                break;
            default:
                alert("CopyButton: Invalid converter : " + type)
                break;
        }

        copyToClipboard(toCopy);
    }
    return <button onClick={handleCopyClick} className='btn btn-outline-primary'>Copy</button>;
}

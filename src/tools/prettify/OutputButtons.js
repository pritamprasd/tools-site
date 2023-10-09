import React, { useState } from 'react'
import { Types } from './types';

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
                break;
            case Types.json:
                return;
            case Types.jwt:
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
        const textArea = document.createElement('textarea');
        textArea.value = JSON.stringify(text);
        textArea.style.position = 'fixed';
        textArea.style.top = 0;
        textArea.style.left = 0;
        textArea.style.opacity = 0;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            alert(`Copy to clipboard failed: ${err}`);
        }
        document.body.removeChild(textArea);
    }
    return <button onClick={handleCopyClick} className='btn btn-outline-primary'>Copy</button>;
}
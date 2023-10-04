import React, { useState } from 'react'
import { Types } from './types';

export function DownloadButton({text, type}) {
    function handleJsonDownload(){
        const blob = new Blob([JSON.stringify(text, null, 4)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);     
        const a = document.createElement('a');
        a.href = url;
        a.download = "sample.json";
        a.click();          
        URL.revokeObjectURL(url);
    }
    function handleDownloadButtonClick(type){
        switch (type) {
            case Types.yaml:
                break;
            case Types.json:
                return;
            case Types.jwt:
                handleJsonDownload()
                break;
            default:
                alert("handleDownloadButtonClick: Invalid converter : "+ type)
                break;
        }
    }
    return <button onClick={() => handleDownloadButtonClick(type)} className='btn btn-outline-primary'>Download</button>;
}
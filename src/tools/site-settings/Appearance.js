import React, { useState } from 'react'
import '../../App.css';
import './SettingsPage.css';
import { getFromLS, setToLS } from '../../storage/LocalStorageService';
import { LSKeys } from '../../appConfig';

export default function Appearance() {
    return (
        <div className='baseTabsContainer'>
            <AccentColor />
            <BackgroundColor/>
            <FontColor/>
        </div>
    )
}

function AccentColor() {
    const [selectedColor, setSelectedColor] = useState(getFromLS(LSKeys.accentColor.key, "#ffffff"));
    const handleColorChange = (event) => {
        const color = event.target.value
        setSelectedColor(color);
        setToLS(LSKeys.accentColor.key, color)
        document.documentElement.style.setProperty('--accent-color', color)
    };
    return (
        <div className='accentColor'>
            <div>Site accent Color</div>
            <input type="color" value={selectedColor} onChange={handleColorChange}/>
        </div>
    )
}

function BackgroundColor() {
    const [selectedColor, setSelectedColor] = useState(getFromLS(LSKeys.bgColor.key, "#ffffff"));
    const handleColorChange = (event) => {
        const color = event.target.value
        setSelectedColor(color);
        setToLS(LSKeys.bgColor.key, color)
        document.documentElement.style.setProperty('--default-background-color', color)
    };
    return (
        <div className='bgColor'>
            <div>Background Color</div>
            <input type="color" value={selectedColor} onChange={handleColorChange}/>
        </div>
    )
}

function FontColor() {
    const [selectedColor, setSelectedColor] = useState(getFromLS(LSKeys.fontColor.key, "#000000"));
    const handleColorChange = (event) => {
        const color = event.target.value
        setSelectedColor(color);
        setToLS(LSKeys.fontColor.key, color)
        document.documentElement.style.setProperty('--default-font-color', color)
    };
    return (
        <div className='fontColor'>
            <div>Font Color</div>
            <input type="color" value={selectedColor} onChange={handleColorChange}/>
        </div>
    )
}


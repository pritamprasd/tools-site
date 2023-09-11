import React, { useState } from 'react'
import '../../App.css';
import './SettingsPage.css';
import LocalStorageService from '../../storage/LocalStorageService';

export default function Appearance() {
    return (
        <div className='apprearanceContainer'>
            <AccentColor />
        </div>
    )
}

function AccentColor() {
    const accentColorLSKey = "accent-color"
    const [selectedColor, setSelectedColor] = useState(LocalStorageService.getItem(accentColorLSKey, ""));
    const handleColorChange = (event) => {
        const color = event.target.value
        setSelectedColor(color);
        LocalStorageService.setItem(accentColorLSKey, color)
        document.documentElement.style.setProperty('--accent-color', color)
    };
    return (
        <div className='accentColor'>
            <div>Site accent Color</div>
            <input type="color" value={selectedColor} onChange={handleColorChange}/>
        </div>
    )
}


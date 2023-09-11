import React, { useState } from 'react'
import '../../App.css';
import './SettingsPage.css';
import { getFromLS, setToLS } from '../../storage/LocalStorageService';
import { LSKeys } from '../../appConfig';

export default function Appearance() {
    return (
        <div className='apprearanceContainer'>
            <AccentColor />
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


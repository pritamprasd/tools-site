import React, { useState } from 'react'
import '../../App.css';
import './SettingsPage.css';

export default function Appearance() {
    return (
        <div className='apprearanceContainer'>
            <AccentColor />
        </div>
    )
}

function AccentColor() {
    const [selectedColor, setSelectedColor] = useState('');
    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
        document.documentElement.style.setProperty('--accent-color', event.target.value)
    };
    return (
        <div className='accentColor'>
            <div>Site accent Color</div>
            <input type="color" value={selectedColor} onChange={handleColorChange}/>
        </div>
    )
}


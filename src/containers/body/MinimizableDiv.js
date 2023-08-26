import React, { useState } from 'react'
import './MinimizableDiv.css';
import NavBar from '../NavBar/NavBar';

export default function MinimizableDiv() {
    const [isMinimized, setIsMinimized] = useState(false);
    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };
    return (
        <div className={`minimizableDiv`}>
            <NavBar/>
        </div>
    )
}

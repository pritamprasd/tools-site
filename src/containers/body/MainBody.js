import React, { useState } from 'react'
import '../../App.css'
import ToolsGrid from './ToolsGrid'
import ToolContainer from './ToolContainer'


export default function MainBody() {
    const [showToolsGrid, setshowToolsGrid] = useState(true)
    return (
        <div className='mainBody'>
            {showToolsGrid && <ToolsGrid />}
            {!showToolsGrid && <ToolContainer />}
        </div>
    )
}

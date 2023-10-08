import React, { useState } from 'react'
import '../App.css'
import ToolsGrid from './body/ToolsGrid'
import { appConfig } from '../appConfig'

export default function MainBody() {
    const [filteredToolsList, _] = useState(appConfig.toolsList)
    return (
        <div className='mainBody'>            
            <ToolsGrid toolsList={filteredToolsList}/>            
        </div>
    )
}

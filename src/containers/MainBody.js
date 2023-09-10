import React, { useState } from 'react'
import '../App.css'
import ToolsGrid from './body/ToolsGrid'
import ToolContainer from './body/ToolContainer'
import SearchTools from './body/SearchTools'
import { appConfig } from '../appConfig'


export default function MainBody() {
    const [showToolsGrid, _] = useState(true)
    const [filteredToolsList, setfilteredToolsList] = useState(appConfig.toolsList)
    return (
        <div className='mainBody'>
            <SearchTools toolsList={filteredToolsList} updateToolsList={setfilteredToolsList}/>
            {showToolsGrid && <ToolsGrid toolsList={filteredToolsList}/>}
            {!showToolsGrid && <ToolContainer />}
        </div>
    )
}

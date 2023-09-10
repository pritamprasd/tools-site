import React, { useState } from 'react'
import '../../App.css'
import { appConfig } from '../../appConfig';

export default function ToolsList() {
  const [tools, setTools] = useState(appConfig.toolsList)
  return (
    <div className='toolsList'>
        {tools.map(t => <ToolLink title={t.title}/>)}
    </div>
  )
}

function ToolLink({title}){
    const handleToolLinkClick = () => {
        console.log("heyyy")
    }
    return(
        <div className='toolLink' onClick={handleToolLinkClick}>{title}</div>
    )
}

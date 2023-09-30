import React from 'react'
import '../../App.css'
import { appConfig } from '../../appConfig';
import { useGlobalContext } from '../../store/globalVars';

export default function ToolsList() {
  return (
    <div className='toolsList'>
        {appConfig.toolsList.map(t => <ToolLink t={t} key={t.id}/>)}
    </div>
  )
}

function ToolLink({t}){
    const { _, updateGlobalVariable } = useGlobalContext();
    const handleToolLinkClick = () => {
        updateGlobalVariable("activeToolId", t.id)
    }
    return(
        <div className='toolLink' onClick={handleToolLinkClick}>{t.title}</div>
    )
}

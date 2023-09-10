import React, { useEffect, useState } from 'react'
import '../../App.css';
import ToolsCard from './ToolsCard';
import { appConfig } from '../../appConfig';
import { useGlobalContext } from '../../store/globalVars';
import { getToolFromToolId } from '../../store/helpers';

export default function ToolsGrid() {
  const { globalVariables, _ } = useGlobalContext();
  const [ filteredTools, setfilteredTools] = useState(appConfig.toolsList)
  useEffect(() => {
    if(globalVariables.activeTags.length != 0){
      setfilteredTools(
        appConfig.toolsList.filter(t => 
          t.tags.some((tag) => globalVariables.activeTags.includes(tag))
        )
      )
    } else {
      setfilteredTools(appConfig.toolsList)
    }
  }, [globalVariables])
  
  return (
    <div className='toolsGrid'>
      {globalVariables.activeToolId !== "" && getToolFromToolId(globalVariables.activeToolId)}
      {globalVariables.activeToolId === "" && filteredTools.map(t => <ToolsCard tileInfo={t} key={t.id}/>)}
    </div>
  )
}

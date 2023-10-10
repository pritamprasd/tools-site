import React, { Suspense, useEffect, useState } from 'react'
import '../../App.css';
import ToolsCard from './ToolsCard';
import { appConfig } from '../../appConfig';
import { useGlobalContext } from '../../store/globalVars';
import { getToolFromToolId } from '../../store/helpers';
import SearchTools from './SearchTools';

export default function ToolsGrid() {
  const { globalVariables, _ } = useGlobalContext();
  const [filteredTools, setfilteredTools] = useState(appConfig.toolsList)
  useEffect(() => {
    if (globalVariables.activeTags.length !== 0) {
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
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        {globalVariables.activeToolId !== "" && <div className='toolsContainer'>
          {getToolFromToolId(globalVariables.activeToolId)}
        </div>
        }
        {globalVariables.activeToolId === "" && <div>
          <SearchTools toolsList={filteredTools} updateToolsList={setfilteredTools} />
          <div className='toolsGrid'>
            {filteredTools.map(t => <ToolsCard tileInfo={t} key={t.id} />)}
          </div>
        </div>
        }
      </div>
    </Suspense >

  )
}

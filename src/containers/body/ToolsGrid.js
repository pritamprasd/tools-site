import React, { useState } from 'react'
import '../../App.css';
import ToolsCard from './ToolsCard';
import { appConfig } from '../../appConfig';
import { useActiveToolId } from '../../store/globalVars';

export default function ToolsGrid() {
  const [tiles, setTiles] = useState(appConfig.toolsList)
  // const { toolId, setToolId } = useActiveToolId();
  return (
    <div className='toolsGrid'>
      {tiles.map(t => <ToolsCard tileInfo={t} key={t.id}/>)}
    </div>
  )
}

import React, { useState } from 'react'
import '../../App.css';
import ToolsCard from './ToolsCard';
import { appConfig } from '../../appConfig';

export default function ToolsGrid() {
  const [tiles, setTiles] = useState(appConfig.toolsList)
  return (
    <div className='toolsGrid'>
      {tiles.map(t => <ToolsCard tileInfo={t}/>)}
    </div>
  )
}

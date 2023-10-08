import React from 'react'
import '../../App.css';
import './ToolsCard.css';
import { useGlobalContext } from '../../store/globalVars';

export default function ToolsCard({tileInfo}) {
  const { _, updateGlobalVariable } = useGlobalContext();
  function handleToolTileClick(){
    updateGlobalVariable("activeToolId", tileInfo.id)
  }
  return (
    <div className='toolsCard' onClick={handleToolTileClick}>
        <div className='toolCardTitle'>{tileInfo.title}</div>
        <div className='toolCardDescription'>{tileInfo.description}</div>
        <div className='toolCardTags'>{tileInfo.tags.map(t => ` #${t} `)}</div>
    </div>
  )
}

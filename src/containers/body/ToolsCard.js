import React from 'react'
import '../../App.css';
import './ToolsCard.css';

export default function ToolsCard({tileInfo}) {
  return (
    <div className='toolsCard'>
        <div className='toolCardTitle'>{tileInfo.title}</div>
        <div className='toolCardDescription'>{tileInfo.description}</div>
        <div className='toolCardTags'>{tileInfo.tags.map(t => ` #${t} `)}</div>
    </div>
  )
}

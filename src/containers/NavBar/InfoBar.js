import React from 'react'
import '../../App.css'
import { useGlobalContext } from '../../store/globalVars';

export default function InfoBar() {
  const { _, updateGlobalVariable } = useGlobalContext();
  function handleSiteHeaderClick(){
    updateGlobalVariable("activeToolId","")
    updateGlobalVariable("activeTags",[])
  }
  return (
    <div className='infoBar'>
        <div className="siteHeader" onClick={handleSiteHeaderClick}>DailyTools</div>
    </div>
  )
}

import React from 'react'
import InfoBar from './NavBar/InfoBar'
import Tags from './NavBar/Tags'
import SocialLinks from './NavBar/SocialLinks'
import '../App.css'
import ToolsList from './NavBar/ToolsList'
import { useGlobalContext } from '../store/globalVars'

export default function NavBar() {
  return (
    <div className='navBar'>
        <InfoBar/>
        <ToolsList/>
        <SettingsPageContainer/>
        <Tags/>
        <SocialLinks/>
    </div>
  )
}

export function SettingsPageContainer() {
  const { _, updateGlobalVariable } = useGlobalContext();
  function viewSettingsPage() {
    updateGlobalVariable("activeToolId", "site_settings")
  }
  return (
    <div onClick={viewSettingsPage} className='settingsPageContainer'>Settings</div>
  )
}


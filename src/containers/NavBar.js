import React from 'react'
import InfoBar from './NavBar/InfoBar'
import Tags from './NavBar/Tags'
import SocialLinks from './NavBar/SocialLinks'
import '../App.css'
import ToolsList from './NavBar/ToolsList'

export default function NavBar() {
  return (
    <div className='navBar'>
        <InfoBar/>
        <ToolsList/>
        <Tags/>
        <SocialLinks/>
    </div>
  )
}

import React from 'react'
import InfoBar from './InfoBar'
import ToolsList from './ToolsList'
import Tags from './Tags'
import SocialLinks from './SocialLinks'
import '../../App.css'

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

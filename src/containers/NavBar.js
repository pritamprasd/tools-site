import React from 'react'
import InfoBar from './NavBar/InfoBar'
import Tags from './NavBar/Tags'
import SocialLinks from './NavBar/SocialLinks'
import '../App.css'

export default function NavBar() {
  return (
    <div className='navBar'>
        <InfoBar/>
        <Tags/>
        <SocialLinks/>
    </div>
  )
}

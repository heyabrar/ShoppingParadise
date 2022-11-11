import React from 'react'
import HeaderNotification from '../Header/HeaderNotification'
import Navbar from './NavFolder/Navbar'
import SubNavbar from './NavFolder/SubNavbar'

const MainNavbar = () => {
  return (
    <div>
      <HeaderNotification />
      <Navbar/>
      <SubNavbar/>
    </div>
  )
}

export default MainNavbar

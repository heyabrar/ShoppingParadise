import React from 'react'
import {Fade} from '@mui/material'
import Brands from './Brands'
import Luxe from './Luxe'
import Skin from './Skin'
import Hair from './Hair'
import Appliances from './Appliances'
import MomBaby from './MomBaby'
import Mens from './Mens'
import Fragrence from './Fragrence'

const NavbarPopUpComponents = ({type}) => {
  return (
    <Fade in={type} timeout={1000} >
    <div>
        {type==='BRANDS' && <Brands/>}
        {type==='LUXE' && <Luxe/>}
        {type==="SKIN" && <Skin/>}
        {type==="HAIR" && <Hair/>}
        {type==="APPLIANCES" && <Appliances/>}
        {type==="MOM&BABY" && <MomBaby/>}
        {type==="MEN" && <Mens/>}
        {type==="FRAGRENCE" && <Fragrence/>}
        {type==="POPUPS" && <Hair/>}  
    </div>
</Fade>   
     
  )
}

export default NavbarPopUpComponents

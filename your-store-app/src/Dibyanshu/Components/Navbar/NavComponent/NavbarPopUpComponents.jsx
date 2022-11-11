import React from 'react'
import {Fade} from '@mui/material'
import Brands from './Brands'
import Luxe from './Luxe'
import NyakaFashion from './NyakaFashion'
import Beauty from './Beauty'
import Makup from './Makup'
import Skin from './Skin'
import Hair from './Hair'
import Appliances from './Appliances'
import Bathbody from './Bathbody'
import Natural from './Natural'
import MomBaby from './MomBaby'
import Mens from './Mens'
import Fragrence from './Fragrence'

const NavbarPopUpComponents = ({type}) => {
  return (
    <Fade in={type} timeout={1000} >
    <div>
        {type==='BRANDS' && <Brands/>}
        {type==='LUXE' && <Luxe/>}
        {type==='NYKAA' && <NyakaFashion/>}
        {type==='BEAUTY' && <Beauty/>}
        {type==="MAKEUP" && <Makup/>}
        {type==="SKIN" && <Skin/>}
        {type==="HAIR" && <Hair/>}
        {type==="APPLIANCES" && <Appliances/>}
        {type==="BATH&BODY" && <Bathbody/>}
        {type==="NATURAL" && <Natural/>}
        {type==="MOM&BABY" && <MomBaby/>}
        {type==="HEALTH" && <Bathbody/>}
        {type==="MEN" && <Mens/>}
        {type==="FRAGRENCE" && <Fragrence/>}
        {type==="POPUPS" && <Hair/>}  
    </div>
</Fade>   
     
  )
}

export default NavbarPopUpComponents

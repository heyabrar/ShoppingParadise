import React, { useState } from 'react'
import styled from 'styled-components'
import NavbarPopUpComponents from '../NavComponent/NavbarPopUpComponents';
 import {useNavigate} from 'react-router-dom'

const SubNavbar = () => {
    const navigate= useNavigate()
   const [howerState, setHowerState] = useState("");

    const hoverHandler = (type) => {
        setHowerState(type)
    }
    
    const handleNoHover = () => {
      setHowerState("")
    }
    return (
        <>
            <Subnav>
                <p onClick={()=>navigate("/men")} onMouseOver={() => hoverHandler('MAKEUP')}>Makeup </p>
                <p onClick={()=>navigate("/skin")} onMouseEnter={() => hoverHandler('SKIN')}>Skin</p>
                <p onClick={()=>navigate("/hair")} onMouseEnter={() => hoverHandler('HAIR')}>Hair</p>
                <p onClick={()=>navigate("/fragrance")} onMouseEnter={() => hoverHandler('APPLIANCES')}>Appliances</p>
                <p onClick={()=>navigate("/skin")} onMouseEnter={() => hoverHandler('BATH&BODY')}>Bath & Body</p>
                <p onClick={()=>navigate("/hair")} onMouseEnter={() => hoverHandler('NATURAL')}>Natural</p>
                <p onClick={()=>navigate("/skin")} onMouseEnter={() => hoverHandler('MOM&BABY')}>Mom & Baby</p>
                <p onClick={()=>navigate("/skin")} onMouseEnter={() => hoverHandler('HEALTH')}>Health & Wellness</p>
                <p onClick={()=>navigate("/men")} onMouseEnter={() => hoverHandler('MEN')}>Men</p>
                <p onClick={()=>navigate("/fragrance")} onMouseEnter={() => hoverHandler('FRAGRENCE')}>Fragrance</p>
                <p onClick={()=>navigate("/skin")} onMouseEnter={() => hoverHandler('POPUPS')}>Pop Ups</p>
            </Subnav>
            <Content>
                <div className='content' onMouseLeave={handleNoHover}>
                    {howerState && <NavbarPopUpComponents type={howerState}/>}
                </div>
            </Content>
        </>
    )
}

export default SubNavbar

const Subnav = styled.div`
display:flex;
justify-content:center;
margin:auto;
border:1px solid #e6dede;
align-items: center;
height:120px;
background-color: #ffffff;
gap:2vw;
font-weight:400;
color:gray;
font-size:15px;
margin-top:133px;
p:hover{
    border-bottom:3px solid #fc3581;
    cursor:pointer;
    padding:1.7vh 0 1.7vh 0;
    color:#fc3581;
    font-weight:600;
}
@media all and (min-width: 768px) and (max-width: 1024px) {
    margin-top:183px;
    font-size:14px;
}
@media all and (min-width: 320px) and (max-width: 767px) {
    width:100%;
   
    display:flex;
    flex-wrap: wrap;
    font-size:15px;
    margin-top:163px;
    font-size:15px;
    p{
       
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
 }

`
const Content = styled.div`
.content{
    position: absolute;
    z-index: 100000;
    width: 100vw;
   
}
`

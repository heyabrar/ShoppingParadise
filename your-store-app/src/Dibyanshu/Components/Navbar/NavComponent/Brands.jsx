import React from 'react'
import styled from 'styled-components'

const BrandsPopup = styled.div`
width:65%;
display:flex;
justify-content:center;
margin:auto;
padding:3vh 0px 3vh 0px; 
border-bottom-left-radius:5px;
border-bottom-right-radius:5px;
border:1px solid #e6dede;
background-color:#fafafa;
.style{
    display:grid;
    grid-template-columns: repeat(5,1fr);
    gap:2.5vh 2vw;
}
`

const Brands = () => {
    return (
        <>
            <BrandsPopup>
                <div className='style'>
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2019/Maybelline1211.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/lakme_mega_menu_header.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/For-Nykaa-Megamenu-New.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2019/lorealparis.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Huda.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/FacesCanadaa.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/Header/mac.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Huda.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2018/Biotique_new.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2019/NATURAL-LOGO.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/LOTUS-HERBALS.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/For-Nykaa-Megamenu-heade_new.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2019/niveaa.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2018/colorbar-logoforui.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/KayBeauty.png " alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2020/Olay_logos.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Estee-Lauder.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Herbal-Essences.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/header-luxe-brands/Laneige.jpg" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/header-luxe-brands/Kiehls.jpg" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/header-luxe-brands/Anastasia-Beverly-Hills.jpg" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/header-luxe-brands/Kiehls.jpg" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/new-wanderlust-brandsection-logo1.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/Header/mac.png" alt="" />
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Huda.png" alt="" />
                </div>
            </BrandsPopup>


        </>
    )
}

export default Brands

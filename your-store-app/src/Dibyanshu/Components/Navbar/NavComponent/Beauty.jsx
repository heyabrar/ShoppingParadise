import React from 'react'
import styled from 'styled-components'

const BeautyPop = styled.div`
  width: 74%;
  display: flex;
  justify-content: center;
  margin: auto;
  text-align: left;
  padding: 5vh 0 7vh 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #e6dede;
  background-color: #fafafa;
  .beauty {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 8vw;
  }
  .beauty > div > img {
    height: 20vh;
    width: 33vh;
    border-radius: 5px;
  }
  .beauty > div {
    line-height: 1.2;
    font-size: 14px;
  }
`;

const Beauty = () => {
    return (
        <BeautyPop>
            <div className='beauty'>
                <div>
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png" alt="" />
                    <h4>NYKAA TV</h4>
                    <p>Masterclasses By Experts & Vloggers</p>
                </div>
                <div>
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg" alt="" />
                    <h4>BEAUTY BOOK</h4>
                    <p>Nykaa's Digital Magazine</p>

                </div>
                <div>
                    <img src="https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg" alt="" />
                    <h4>BEAUTY BUYING GUIDES</h4>
                    <p>Tips To Explore While You Shop</p>

                </div>

            </div>

        </BeautyPop>
    )
}

export default Beauty

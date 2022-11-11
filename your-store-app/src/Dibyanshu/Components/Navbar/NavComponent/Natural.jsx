import React from 'react'
import styled from 'styled-components'

const NaturalPopup = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: auto;
  text-align: left;
  padding: 2vh 0 3vh 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #e6dede;
  background-color: #fafafa;
  .natural {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 1.8vw;
  }
  .natural > div:nth-child(even) {
    background-color: #f4f4f4;
    padding: 0px 14px 0px 14px;
  }

  .natural > div > p {
    line-height: 1.2;
    font-size: 14px;
  }
  .natural > div > p:hover {
    color: #fc3581;
    cursor: pointer;
  }
`;


const Natural = () => {
    return (
        <NaturalPopup>
            <div className="natural">
                <div>
                    <h4>Skin</h4>
                    <p>Face Wash</p>
                    <p>Cleanser</p>
                    <p>Moisturizer</p>
                    <p>Face Cream</p>
                    <p>Face Mist</p>
                    <p>Facial Kits</p>
                    <p>Toner</p>
                    <p>Face Oils</p>
                    <p>Sunscreen</p>
                    <p>Night Cream</p>
                    <p>Day Cream</p>
                    <p>Under Eye Care</p>
                    <p>Face Bleach</p>
                    <p>Serums</p>
                </div>
                <div>
                    <h4>Skin</h4>
                    <p>Sheet Masks</p>
                    <p>Masks & Peels</p>
                    <p>Scrubs & Exfoliators</p>
                    <p>Face Tools</p>
                    <p>Face Gel</p>
                    <p>Lip Scrub</p>
                    <h4>Body Care</h4>
                    <p>Shower Gels & Body Wash</p>
                    <p>Soaps</p>
                    <p>Body Lotions</p>
                    <p>Body Scrubs</p>
                    <p>Bath Salts & Bath Bombs</p>
                    <p>Hands & Feet Care</p>
                    <p>Bath Tools & Accessories</p>
                    <p>Oral Care</p>
                </div>
                <div>
                    <h4>Hair</h4>
                    <p>Shampoo & Cleanser</p>
                    <p>Conditioner</p>
                    <p>Hair Masks</p>
                    <p>Hair Oil</p>
                    <p>Hair Serum</p>
                    <p>Hair Color</p>
                    <p>Tools & Accessories</p>
                    <h4>Aromatherapy</h4>
                    <p>Massage Oils</p>
                    <p>Carrier Oils</p>
                    <p>Essential Oils</p>
                    <p>Candles</p>
                    <p>Diffuser</p>
                    <p>Incense Sticks</p>
                </div>
                <div>
                    <h4>Makeup</h4>
                    <p>Lipstick</p>
                    <p>Kajal</p>
                    <p>Eyeliner</p>
                    <p>Mascara</p>
                    <p>Nail Polish</p>
                    <p>Lip Balm & Gloss</p>
                    <p>Foundation & Concealer</p>
                    <p>Blush & Highlighter</p>
                    <p>Makeup Remover</p>
                    <p>Tools & Brushes</p>
                    <h4>Trending Search</h4>
                    <p>Tea Tree Oil</p>
                    <p>Eucalyptus Oil</p>
                    <p>Rosemary Oil</p>
                    <p>Jojoba Oil</p>
                    <p>Peppermint Oil</p>
                </div>
                <div>
                    <h4>Top Brands</h4>
                    <p>Biotique</p>
                    <p>Lotus Herbals</p>
                    <p>The Body Shop</p>
                    <p>Nykaa Naturals</p>
                    <p>Kama Ayurveda</p>
                    <p>Forest Essentials</p>
                    <p>Khadi Natural</p>
                    <p>Himalaya</p>
                    <p>VLCC</p>
                    <h4>Baby Care</h4>
                    <h4>Types Of Skin</h4>
                    <p>Dry Skin</p>
                    <p>Normal Skin</p>
                    <p>Oily Skin</p>
                    <p>Combination Skin</p>
                </div>
                <div>
                    <h4>Shop By Concern</h4>
                    <p>Tan Removal</p>
                    <p>Pigmentation</p>
                    <p>Acne Treatment</p>
                    <p>Skin Lightening</p>
                    <p>Anti Aging</p>
                    <p>Dark Circles</p>
                    <p>Hairfall</p>
                    <p>Dandruff</p>
                    <p>Dry & Frizzy Hair</p>
                    <h4>QUICK LINKS</h4>
                    <p>New Launches</p>
                    <p>Combos @ Nykaa</p>
                    <p>Gifts @ Nykaa</p>
                    <p>The Safe Beauty Edit</p>
                </div>
            </div>
        </NaturalPopup>
    )
}

export default Natural

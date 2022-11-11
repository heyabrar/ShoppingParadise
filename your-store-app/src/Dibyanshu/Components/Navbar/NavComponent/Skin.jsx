import React from 'react'
import styled from 'styled-components'

const SkinPopup = styled.div`
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
  .skin {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 1.8vw;
  }
  .skin > div:nth-child(even) {
    background-color: #f4f4f4;
    padding: 0px 14px 0px 14px;
  }

  .skin > div > p {
    line-height: 1.2;
    font-size: 14px;
  }
  .skin > div > p:hover {
    color: #fc3581;
    cursor: pointer;
  }
`;

const Skin = () => {
  return (
    <>
    <SkinPopup>
    <div className='skin'>
      <div>
        <h4>Moisturizers</h4>
        <p>Face Moisturizer</p>
        <p>Night Cream</p>
        <p>Face Oils</p>
        <p>All Purpose Gels/Creams</p>
        <h4>Face Serums</h4>
        <h4>Cleansers</h4>
        <p>Face Wash & Cleanser</p>
        <p>Cleansing Oils & Balm</p>
        <p>Micellar Water</p>
        <p>Face Wipes</p>
        <p>Makeup Remover</p>
        <p>Face Scrub</p>
      </div>
      <div>
        <h4>Trending Searches</h4>
        <p>Toners Under 1000</p>
        <p>Face Wash For Oily Skin</p>
        <p>Oil Free Face Moisturizers</p>
        <p>Lip Balm Under 500</p>
        <p>Vitamin C Serum</p>
        <h4>Masks</h4>
        <p>Sheet Masks</p>
        <p>Sleeping Masks</p>
        <p>Face Masks & Packs</p>
        <p>Face Packs</p>
        <p>Face Bleach</p>
      </div>
      <div>
        <h4>Toners & Mists</h4>
        <p>Toners</p>
        <p>Facial Mists</p>
        <p>Rose Water</p>
        <h4>Bath & Body</h4>
        <p>Body Lotions</p>
        <p>Body Butter</p>
        <p>Body Oils</p>
        <p>Shower Gels And Body Wash</p>
        <p>Soaps</p>
        <p>Body Scrubs</p>
        <p>Bath Salts</p>
        <p>Scrubs And Loofahs</p>
        <h4>Hands And Feet</h4>
        <p>Hand Creams</p>
        <p>Foot Creams</p>
        <p>Hand & Foot Masks</p>
      </div>
      <div>
        <h4>Specialised Skincare</h4>
        <p>Acne Spot Correctors</p>
        <p>Neck Creams</p>
        <p>Nose Strips</p>
        <p>Facial Peels</p>
        <h4>Eye Care</h4>
        <p>Eye Serums & Creams</p>
        <p>Eye Masks</p>
        <h4>Lip Care</h4>
        <p>Lip Balm</p>
        <p>Lip Scrubs</p>
        <p>Lip Masks</p>
        <h4>Sunscreen</h4>
        <p>Face Sunscreen</p>
        <p>Body Sunscreen</p>
      </div>
      <div>
        <h4>Kits And Combos</h4>
        <p>Facial Kits</p>
        <p>Kits & Combos</p>
        <p>Gift Sets</p>
        <h4>Skin Tools</h4>
        <p>Face Massagers</p>
        <p>Cleansing Brushes</p>
        <p>Blackhead Remover</p>
        <p>Dermarollers</p>
        <h4>Skin Supplements</h4>
        <p>Vitamins & Minerals</p>
        <p>Ayurvedic Herbs</p>
      </div>
      <div>
        <h4>Shop By Concern</h4>
        <p>Acne</p>
        <p>Dull Skin</p>
        <p>Pigmentation</p>
        <p>Wrinkles & Fine Lines</p>
        <p>Pores</p>
        <p>Dark Spots</p>
        <p>Face Tan</p>
        <p>Oil Control</p>
        <h4>New Launches</h4>
        <h4>Quick Links</h4>
        <p>The Gift Store</p>
      </div>
    </div>
    </SkinPopup>
    </>
  )
}

export default Skin

import React from 'react'
import styled from 'styled-components'

const MomBabyPopup = styled.div`
  width: 82%;
  display: flex;
  justify-content: center;
  margin: auto;
  text-align: left;
  padding: 2vh 0 3vh 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #e6dede;
  background-color: #fafafa;
  .mombaby {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 1vw;
  }
  .mombaby > div:nth-child(even) {
    background-color: #f4f4f4;
    padding: 5px 14px 5px 14px;
  }

  .mombaby > div > p {
    line-height: 1.2;
    font-size: 14px;
  }
  .mombaby > div > p:hover {
    color: #fc3581;
    cursor: pointer;
  }
`;

const MomBaby = () => {
    return (
        <MomBabyPopup>
            <div className="mombaby">
                <div>
                    <h4>Baby Care</h4>
                    <p>Body Wash & Soaps</p>
                    <p>Baby Oil</p>
                    <p>Hair Oil</p>
                    <p>Lotions & Creams</p>
                    <p>Baby Powder</p>
                    <p>Shampoo & Conditioner</p>
                    <p>Sunscreen</p>
                    <p>Wipes & Buds</p>
                    <p>Teeth & Dental Care</p>
                    <p>Rash Cream</p>
                    <p>Diapers</p>
                    <p>Diaper Accessories</p>
                    <p>Bath Accessories</p>
                    <p>Baby Grooming</p>
                    <p>Baby Bedding</p>
                </div>
                <div>
                    <h4>Kids Care</h4>
                    <p>Nutritional Supplement</p>
                    <p>Body Wash & Soaps</p>
                    <p>Lotions & Creams</p>
                    <p>Hair Care</p>
                    <p>Sunscreen</p>
                    <p>Dental Care</p>
                    <p>Kids Makeup</p>
                </div>
                <div>
                    <h4>Maternity Care</h4>
                    <p>Stretch Mark Creams & Oils</p>
                    <p>Breast Firming Gels & Creams</p>
                    <p>Nipple Creams</p>
                    <p>Nutritional Supplements</p>
                    <p>Maternity Pillows</p>
                </div>
                <div>
                    <h4>Nursing & Feeding</h4>
                    <p>Feeding Bottle & Nipples</p>
                    <p>Teethers & Soothers</p>
                    <p>Breast Pumps</p>
                    <p>Breast Pads</p>
                    <p>Cleaning & Feeding <br /> Accessories</p>
                    <p>Bibs</p>
                    <p>Sippers & Cups</p>
                </div>
                <div>
                    <h4>Health & Safety</h4>
                    <p>Nose & Ear Care</p>
                    <p>Gripe Water & Tummy <br /> Roll On</p>
                    <p>Detergents & Cleansers</p>
                    <p>Handwash & Sanitizer</p>
                    <p>Mosquito </p>
                    <h4>Maternity Wear</h4>
                    <p>Maternity Bra</p>
                    <p>Maternity Dress</p>
                    <p>Maternity Tops</p>
                </div>
                <div>
                    <h4>Baby Toys</h4>
                    <h4>Gift Sets</h4>
                    <h4>Shop By Concerns</h4>
                    <p>Baby Dry Skin</p>
                    <p>Cracked Nipple Cream</p>
                    <p>Scalp Treatment</p>
                    <p>Coconut Oil</p>
                    <p>Almond Oil</p>
                    <p>Heat Rash</p>
                    <p>Body Toning & Firming</p>
                    <p>Baby Skin Concerns</p>
                    <h4>Combos @ Nykaa</h4>
                </div>
            </div>
        </MomBabyPopup>
    )
}

export default MomBaby

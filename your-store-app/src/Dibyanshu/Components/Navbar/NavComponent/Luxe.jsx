import React from 'react'
import styled from 'styled-components'

const LuxePopup = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  margin: auto;
  text-align: left;
  padding: 2vh 0 3vh 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #e6dede;
  background-color: #fafafa;
  .luxe {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 4.5vw;
  }
  .luxe > div:nth-child(even) {
    background-color: #f4f4f4;
    padding: 0px 14px 0px 14px;
  }

  .luxe > div > p {
    line-height: 1.2;
    font-size: 15px;
  }
  .luxe > div > p:hover {
    color: #fc3581;
    cursor: pointer;
  }
`;

const Luxe = () => {
    return (
        <LuxePopup>
            <div className="luxe">
                <div>
                    <h4>Face</h4>
                    <p>Face Wash & Cleansers</p>
                    <p>Toner</p>
                    <p>Exfoliators</p>
                    <p>Serum</p>
                    <p>Moisturisers</p>
                    <p>Day Cream</p>
                    <p>Night Cream</p>
                    <p>Masks</p>
                    <p>Sunscreen</p>
                    <p>Face Mist</p>
                    <p>Makeup Remover</p>
                    <p>Tools & Appliances</p>
                </div>
                <div>
                    <h4>Fragrance</h4>
                    <p>Perfumes (EDP/EDT)</p>
                    <p>Aftershave</p>
                    <p>Face & Body Mists</p>
                    <p>Candles & Incense</p>
                    <p>Gifts</p>
                </div>
                <div>
                    <h4>Lip Care</h4>
                    <p>Eye Care</p>
                    <p>Eye Cream</p>
                    <p>Serum</p>
                    <p>Dark Circles</p>
                </div>
                <div>
                    <h4>EYES</h4>
                    <p>Eyeliner & Kajal</p>
                    <p>Mascara</p>
                    <p>Eye Shadow</p>
                    <p>Brows</p>
                    <p>Lashes</p>
                    <p>Eye Primer</p>
                    <p>Corrector & Conclealer</p>
                    <p>Customize Your Palette</p>
                </div>
                <div>
                    <h4>Tools & Brushes</h4>
                    <p>Face Brush</p>
                    <p>Eye Brush</p>
                    <p>Lip Brush</p>
                    <p>Applicators</p>
                </div>
            </div>

        </LuxePopup>
    )
}

export default Luxe

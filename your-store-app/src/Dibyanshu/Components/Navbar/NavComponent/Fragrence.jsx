import React from 'react'
import styled from 'styled-components'

const FragrancePopup = styled.div`
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
  .fragrance {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 1.4vw;
  }
  .fragrance > div:nth-child(even) {
    background-color: #f4f4f4;
    padding: 5px 14px 5px 14px;
  }

  .fragrance > div > p {
    line-height: 1.2;
    font-size: 14px;
  }
  .fragrance > div > p:hover {
    color: #fc3581;
    cursor: pointer;
  }
`;

const Fragrence = () => {
    return (
        <FragrancePopup>
            <div className="fragrance">
                <div>
                    <h4>Womens Fragrance</h4>
                    <p>Perfumes (EDT / EDP)</p>
                    <p>Body Mists / Sprays</p>
                    <p>Deodorants / Roll-Ons</p>
                    <h4>Mens Fragrance</h4>
                    <p>Perfumes (EDT / EDP)</p>
                    <p>Body Mists / Sprays</p>
                    <p>Deodorants / Roll-Ons</p>
                    <p>Colognes & After Shaves</p>
                </div>
                <div>
                    <h4>Giftsets & Combos</h4>
                    <h4>Shop By Fragrance Family</h4>
                    <p>Earthy & Woody</p>
                    <p>Floral</p>
                    <p>Fresh & Aquatic</p>
                    <p>Spicy & Warm</p>
                    <p>Oud Collection</p>
                    <p>Fruity</p>
                </div>
                <div>
                    <h4>The Parcos Store</h4>

                    <h4>Candles</h4>
                </div>
                <div>
                    <h4>Top Brands</h4>
                    <p>Nykaa Cosmetics</p>
                    <p>Masaba By Nykaa</p>
                    <p>Dior</p>
                    <p>Gucci</p>
                    <p>Calvin Klein</p>
                    <p>Davidoff</p>
                    <p>Hermes</p>
                    <p>Bvlgari</p>
                    <p>Versace</p>
                    <p>Skinn By Titan</p>
                    <p>Paco Rabanne</p>
                    <p>Giorgio Armani</p>
                </div>
                <div>
                    <h4>PREMIUM AND <br /> DESIGNER BRANDS</h4>
                    <p>Explore All</p>
                    <p>Dior</p>
                    <p>Hermès</p>
                    <p>Jo Malone London</p>
                    <p>Guerlain</p>
                    <p>BVLGARI</p>
                    <p>Salvatore Ferragamo</p>
                    <p>Calvin Klein</p>
                    <p>Giorgio Armani</p>
                    <p>Davidoff</p>
                    <p>Paco Rabanne</p>
                    <p>Carolina Herrera</p>
                    <p>Yves Saint Laurent</p>
                    <p>Elie Saab</p>
                </div>
                <div>
                    <p>Dolce & Gabbana</p>
                    <p>Narciso Rodrigue</p>
                    <p>Hugo Boss</p>
                    <p>Montblanc</p>
                    <h4>Quick Links</h4>
                    <p>Combos @ Nykaa</p>
                    <p>New Launches</p>
                    <p>NFBA Nominees 2020</p>
                    <p>Help Me Choose - Fragrance Finder</p>
                    <p>Gifts @ Nykaa</p>
                    <p>The Gift Store</p>
                </div>
            </div>
        </FragrancePopup>
    )
}

export default Fragrence

import React from 'react'
import styled from 'styled-components'

const Hairpopup = styled.div`
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
  .hair {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 1.8vw;
  }
  .hair > div:nth-child(even) {
    background-color: #f4f4f4;
    padding: 0px 14px 0px 14px;
  }

  .hair > div > p {
    line-height: 1.2;
    font-size: 14px;
  }
  .hair > div > p:hover {
    color: #fc3581;
    cursor: pointer;
  }
`;

const Hair = () => {
  return (
    <Hairpopup>
      <div className='hair'>
        <div>
          <h4>Hair Care</h4>
          <p>Shampoo</p>
          <p>Dry Shampoo NEW</p>
          <p>Conditioner</p>
          <p>Hair Oil</p>
          <p>Hair Serum</p>
          <p>Hair Creams & Masks</p>
          <p>Nutritional Supplements</p>
        </div>
        <div>
          <h4>Tools & Accessories</h4>
          <p>Hair Brushes</p>
          <p>Hair Combs</p>
          <p>Dryers & Stylers</p>
          <p>Straighteners</p>
          <p>Rollers & Curlers</p>
          <p>Hair Extensions</p>
          <p>Hair Accessories</p>
        </div>
        <div>
          <h4>Hair Styling</h4>
          <p>Hair Color</p>
          <p>Hair Spray</p>
          <p>Gels & Waxes</p>
          <h4>Shop By Hair Type</h4>
          <p> Straight</p>
          <p>Curly & Wavy</p>
          <h4>Professional Brands</h4>
        </div>
        <div>
          <h4>Shop By Concern</h4>
          <p>Hairfall & Thinning</p>
          <p>Dandruff</p>
          <p>Dry & Frizzy Hair</p>
          <p>Split Ends</p>
          <p>Color Protection</p>
          <h4>Trending Searches</h4>
          <p>Hair Growth Oil</p>
          <p> Dandruff Shampoo</p>
          <p>Castor Oil For Hair</p>
          <p>Sulphate Free Shampoo</p>
          <p>Hair Straightener Brush</p>
        </div>
        <div>
          <h4>Top Brands</h4>
          <p>Nykaa Naturals</p>
          <p> L'Oreal Paris</p>
          <p> Wella Professionals</p>
          <p> L'Oreal Professionnel</p>
          <p> BBlunt</p>
          <p> Herbal Essences</p>
          <p> Schwarzkopf Professional</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <p> Combos @ Nykaa</p>
          <p> New Launches</p>
          <p> NFBA Nominees 2020</p>
          <p> Herbal Hair Care</p>
          <p> Routine Finder</p>
          <p> The Beauty Ingredient Edit</p>
          <p> The Safe Beauty Edit</p>
          <p> The Gift Store</p>
        </div>
      </div>
    </Hairpopup>
  )
}

export default Hair

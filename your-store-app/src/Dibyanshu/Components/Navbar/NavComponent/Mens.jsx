import React from 'react'
import styled from 'styled-components'

const MensPopup = styled.div`
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
  .mens {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 1.8vw;
  }
  .mens > div:nth-child(even) {
    background-color: #f4f4f4;
    padding: 0px 14px 0px 14px;
  }

  .mens > div > p {
    line-height: 1.2;
    font-size: 14px;
  }
  .mens > div > p:hover {
    color: #fc3581;
    cursor: pointer;
  }
`;

const Mens = () => {
    return (
        <MensPopup>
            <div className="mens">
                <div>
                    <h4>Shaving</h4>
                    <p>Razors & Cartridges</p>
                    <p>Shavers</p>
                    <p>Trimmers</p>
                    <p>Shaving Creams</p>
                    <p>Shaving Foams</p>
                    <p>Shaving Gels</p>
                    <p>Pre & Post Shaves</p>
                    <p>Aftershave Lotion</p>
                    <p>Shaving Brushes</p>
                </div>
                <div>
                    <h4>Beard Care</h4>
                    <p>Beard Oil</p>
                    <p>Beard Butter</p>
                    <p>Beard Softener</p>
                    <p>Beard Wash</p>
                    <p>Beard Wax</p>
                    <p>Moustache Oil</p>
                    <p>Beard Comb</p>
                    <p>Moustache Wax</p>
                    <p>Beard Kits</p>
                    <p>Beard Gel</p>
                    <p>Beard Balm</p>
                    <p>Beard Cream</p>
                    <p>Beard Serum</p>
                    <p>Beard Mist</p>
                    <p>Beard Colour</p>
                    <p>Beard Shampoo</p>
                </div>
                <div>
                    <h4>Hair Care</h4>
                    <p>Shampoo</p>
                    Conditioner
                    <p>Hair Styling</p>
                    Hair Color
                    <p>Hair Oils</p>
                    <p>Professional Products</p>
                    <h4>Skin Care</h4>
                    <p>Face Wash</p>
                    <p>Moisturizers</p>
                    <p>Sunscreen</p>
                    <p>Masks & Peels</p>
                    <p>Scrubs & Exfoliators</p>
                    <p>Fairness</p>
                </div>
                <div>
                    <h4>Bath & Body</h4>
                    <p>Bath/Shower Gels</p>
                    <p>Soaps</p>
                    <p>Body Scrubs</p>
                    <p>Talc</p>
                    <p>Dental Care</p>
                    <p>Body Lotions</p>
                    <p>Intimate Care</p>
                    <h4>Grooming Kits</h4>
                    <h4>Fragrance</h4>
                    <p>Deodorants/Roll Ons</p>
                    <p>Colognes & Perfumes (EDT & EDP)</p>
                    <p>Luxe Fragrances</p>
                </div>
                <div>
                    <h4>Shop By Concern</h4>
                    <p>Anti Dandruff</p>
                    <p>Anti Hairfall</p>
                    <p>Scalp Treatment</p>
                    <p>Anti Acne</p>
                    <p>Anti Ageing</p>
                    <h4>Wellness</h4>
                    <p>Sexual Wellness</p>
                    <p>Health Supplements</p>
                    <p>Weight Management</p>
                    <p>Sports Nutrition</p>
                </div>
                <div>
                    <h4>Top Brands</h4>
                    <p>Beardo</p>
                    <p>Gilette</p>
                    <p>Livon</p>
                    <p>Nivea</p>
                    <p>Park Avenue</p>
                    <h4>Quick Links</h4>
                    <p>Combos @ Nykaa</p>
                    <p>New Launches</p>
                    <p>Gifts @ Nykaa</p>
                    <p>Routine Finder</p>
                    <p>The Gift Store</p>
                </div>
            </div>
        </MensPopup>
    )
}

export default Mens

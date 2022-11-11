import React from 'react'
import styled from 'styled-components'

const BathBody = styled.div`
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
  .bathbody {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 1vw;
  }
  .bathbody > div:nth-child(even) {
    background-color: #f4f4f4;
    padding: 5px 14px 5px 14px;
  }

  .bathbody > div > p {
    line-height: 1.2;
    font-size: 14px;
  }
  .bathbody > div > p:hover {
    color: #fc3581;
    cursor: pointer;
  }
`;

const Bathbody = () => {
    return (
        <BathBody>
            <div className='bathbody'>
                <div>
                    <h4>Bath & Shower</h4>
                    <p>Shower Gels & Body Wash</p>
                    <p>Body Scrubs & Exfoliants</p>
                    <p>Soaps</p>
                    <p>Bath Salts</p>
                    <p>Bath Accessories</p>
                    <h4>Body Care</h4>
                    <p>Body Lotions & Moisturizers</p>
                    <p>Deodorants/Roll Ons</p>
                    <p>Body Butters</p>
                    <p>Massage Oils</p>
                    <p>Essential Oils</p>
                    <p>Talcum Powder</p>
                    <p>Intimate Care</p>
                </div>
                <div>
                    <h4>Feminine Hygiene</h4>
                    <p>Sanitary Napkins</p>
                    <p>Menstrual Cups</p>
                    <p>Tampons</p>
                    <p>Pantyliners</p>
                    <p>Intimate Wash</p>
                    <p>Other Period Essentials</p>
                    <h4>Shaving & Hair Removal</h4>
                    <p>Body Razors & Cartridges</p>
                    <p>Face & Eyebrow Razors</p>
                    <p>Wax & Wax Strips</p>
                    <p>Hair Removal Creams</p>
                    <p>Epilators & Bikini Trimmers</p>
                    <p>Pre & Post Wax Essentials</p>
                </div>
                <div>
                    <h4>Men's Grooming</h4>
                    <p>Razors & Catridges</p>
                    <p>Shaving Cream, Foams & Gels</p>
                    <p>Pre & Post Shaves</p>
                    <p>Shavers & Trimmers</p>
                    <p>Beard & Moustache Care</p>
                    <p>Intimate Care</p>
                    <h4>Hands & Feet</h4>
                    <p>Hand Wash</p>
                    <p>Hand Creams & Masks</p>
                    <p>Foot Care</p>
                    <p>Manicure Pedicure Tools & Kits</p>
                </div>
                <div>
                    <h4>Hygiene Essentials</h4>
                    <p>Face Mask</p>
                    <p>Hand Sanitizer</p>
                    <p>Gloves, PPE & Face Shields</p>
                    <h4>Oral Care</h4>
                    <p>Toothpaste</p>
                    <p>Electric Toothbrush</p>
                    <p>Manual Toothbrush</p>
                    <p>Mouthwash</p>
                    <p>Floss & Tongue Cleaners</p>
                </div>
                <div>
                    <h4>Kits & Combos</h4>
                    <p>Bath & Body Kits</p>
                    <p>Bath & Body Combos</p>
                    <h4>Top Brands</h4>
                    <p>MCaffeine</p>
                    <p>Wanderlust</p>
                    <p>Gillette</p>
                    <p>Whisper</p>
                    <p>Dove</p>
                    <p>Sanfe</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <p>Combos @ Nykaa</p>
                    <p>New Launches</p>
                    <p>NFBA Nominees 2020</p>
                    <p>Gifts @ Nykaa</p>
                    <p>Routine Finder</p>
                    <p>The Gift Store</p>
                    <h4>Trending Searches</h4>
                    <p>Body Wash</p>
                    <p>Body Lotions</p>
                    <p>Face Razors For Women</p>
                    <p>Sanitary Napkins</p>
                    <p>Body Scrubs</p>
                    <p>Deodorants</p>
                </div>
            </div>
        </BathBody>
    )
}

export default Bathbody

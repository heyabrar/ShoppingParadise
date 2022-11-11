import React from 'react'
import styled from 'styled-components'

const MakeupPopup = styled.div`
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
  .makup {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 2.4vw;
  }
  .makup > div:nth-child(even) {
    background-color: #f4f4f4;
    padding: 0px 14px 0px 14px;
  }

  .makup > div > p {
    line-height: 1.2;
    font-size: 14px;
  }
  .makup > div > p:hover {
    color: #fc3581;
    cursor: pointer;
  }
`;

const Makup = () => {
  return (
    <MakeupPopup>
    <div className='makup'>
      <div>
        <h4>Face</h4>
        <p>Face Primer</p>
        <p>Concealer</p>
        <p>Foundation</p>
        <p>Compact</p>
        <p>Contour</p>
        <p>Loose Powder</p>
        <p>Tinted Moisturizer</p>
        <p>Blush</p>
        <p>Bronzer</p>
        <p>BB & CC Cream</p>
        <p>Highlighters</p>
        <p>Setting Spray</p>
        <p>Makeup Remover</p>
        <p>Sindoor</p>
      </div>
      <div>
        <h4>Eyes</h4>
        <p>Kajal</p>
        <p>Eyeliner</p>
        <p>Mascara</p>
        <p>Eye Shadow</p>
        <p>Eye Brow Enhancers</p>
        <p>Eye Primer</p>
        <p>False Eyelashes</p>
        <p>Eye Makeup Remover</p>
        <p>Under Eye Concealer</p>
        <p>Contact Lenses</p>

        <h4>Makeup Kits & Combos</h4>
        <p>Makeup Kits</p>
        <p>Makeup Combos</p>
      </div>
      <div>
        <h4>Lips</h4>
        <p>Lipstick</p>
        <p>Liquid Lipstick</p>
        <p>Lip Crayon</p>
        <p>Lip Gloss</p>
        <p>Lip Liner</p>
        <p>Lip Plumper</p>
        <p>Lip Stain</p>
        <h4>Nails</h4>
        <p>Nail Polish</p>
        <p>Nail Art Kits</p>
        <p>Nail Care</p>
        <p>Nail Polish Remover</p>
      </div>
      <div>
        <h4>Tools & Brushes</h4>
        <p>Face Brush</p>
        <p>Eye Brush</p>
        <p>Lip Brush</p>
        <p>Brush Sets</p>
        <p>Brush Cleaners</p>
        <p>Sponges & Applicators</p>
        <p>Eyelash Curlers</p>
        <p>Tweezers</p>
        <p>Sharpeners</p>
        <p>Mirrors</p>
        <p>Makeup Pouches</p>
        <h4>Multi-Functional Makeup <br /> Palettes</h4>
      </div>
      <div>
        <h4>Top Brands</h4>
        <p>Kay Beauty</p>
        <p>Huda Beauty</p>
        <p>Charlotte Tilbury</p>
        <p>M.A.C</p>
        <p>Maybelline New York</p>
        <p>L'Oreal Paris</p>
        <p>Lakme</p>
        <p>Nykaa Cosmetics</p>
        <p>Nyx Pro.Makeup</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <p>Combos @ Nykaa</p>
        <p>New Launches</p>
        <p>NFBA Nominees 2020</p>
        <p>Gifts @ Nykaa</p>
        <p>The Gift Store</p>
        <p>Trending Searches</p>
        <p>Nude Lipstick</p>
        <p>Matte Lipstick</p>
        <p>Red Lipstick</p>
        <p>Pink Lipstick</p>
      </div>
    </div>
    </MakeupPopup>
  )
}

export default Makup

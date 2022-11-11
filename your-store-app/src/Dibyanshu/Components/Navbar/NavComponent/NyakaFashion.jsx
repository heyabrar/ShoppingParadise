import React from 'react'
import styled from 'styled-components'

const Nyaka = styled.div`
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
  .nyaka {
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 2vw;
  }
  .nyaka > div:nth-child(even) {
    background-color: #f4f4f4;
    padding: 0px 10px 0px 10px;
  }
  .nyaka > div:nth-child(5) > img {
    height: 53vh;
  }
  .nyaka > div > p {
    line-height: 1.2;
    font-size: 15px;
  }
  .nyaka > div > p:hover {
    color: #fc3581;
    cursor: pointer;
  }
`;

const NyakaFashion = () => {
    return (
        <Nyaka>
            <div className='nyaka'>
                <div>
                    <h4 >What's New</h4>
                    <p>Recently Added</p>
                    <h4>Women</h4>
                    <p>Indianwear</p>
                    <p>Westernwear</p>
                    <p>Footwear</p>
                    <p>Bags</p>
                    <p>Lingerie</p>
                    <p>Sportswear</p>
                    <p>Sleep & Lounge</p>
                    <p>Jewellery</p>
                    <p>Watches</p>
                    <p>Accessories</p>
                    <h4> Men</h4>
                    <p>Topwear</p>
                    <p>Bottomwear</p>
                    <p>Ethnicwear</p>
                    <p>Topwear</p>

                </div>
                <div>
                    <p>Bottomwear</p>
                    <p>Ethnicwear</p>
                    <p>Footwear</p>
                    <p>Atheisure</p>
                    <p>Innerwear & Sleepwear</p>
                    <h4> Watches</h4>
                    <p>Accessories</p>
                    <p>Bags</p>
                    <p>Style Guide</p>

                    <h4> Tech</h4>
                    <p>Smart Wearables</p>
                    <p>Headphones</p>
                    <p>Speakers</p>
                    <p>Chargers & Cables</p>
                    <p>Power Banks</p>
                    <h4> Kids</h4>
                    <p>Westernwear</p>
                    <p>Indianwear</p>

                </div>
                <div>
                    <p>Winterwear</p>
                    <p>Footwear</p>
                    <p>Toys & Games</p>
                    <p>Feeding</p>
                    <p>Sportswear</p>
                    <p>Sleep & Lounge</p>
                    <h4> Home</h4>
                    <p>Kitchen & Dining</p>
                    <p>Decor</p>
                    <p>Bedding</p>
                    <p>Bath</p>
                    <p>Storage</p>
                    <p>Floor Coverings</p>
                    <p>Kitchen Appliances</p>

                    <h4> House Of Nykaa</h4>
                    <p>Twenty Dresses</p>
                    <p> Nykaa Fashion</p>
                    <p>RSVP By Nykaa Fashion</p>

                </div>
                <div>
                    <p>Gajra Gang</p>
                    <p>Nykd By Nykaa</p>
                    <p>Pipa Bella</p>
                    <p>IYKYK By Nykaa Fashion</p>
                    <p>Kica</p>
                    <p>Twig And Twine</p>
                    <p>Likha By Nykaa Fashion</p>
                    <h4> Top Brands</h4>
                    <p>Vero Moda</p>
                    <p>Fabindia</p>
                    <p>Na-Kd</p>
                    <p>Koton</p>
                    <p>I Saw It First</p>
                    <p>Swtantra</p>
                    <p>Biba</p>
                    <p>Forever New</p>
                </div>
                <div>
                    <img src="https://www.nykaa.com/media/wysiwyg/2022/NF-megamenu.jpg" alt="" />
                </div>
            </div>

        </Nyaka>
    )
}

export default NyakaFashion

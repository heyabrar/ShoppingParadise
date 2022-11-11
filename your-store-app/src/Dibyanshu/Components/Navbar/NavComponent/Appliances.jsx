import React from 'react'
import styled from 'styled-components'

const AppliancesPopup = styled.div`
width:75%;
display:flex;
justify-content:center;
margin:auto;
text-align:left;
padding:2vh 0 3vh 0;
border-bottom-left-radius:5px;
border-bottom-right-radius:5px;
border:1px solid #e6dede;
background-color:#fafafa;
.appliances{
    display:flex;
    justify-content:center;
    margin:auto;
    gap:4vw; 
}
.appliances>div:nth-child(even){
    background-color: #f4f4f4;
    padding:0px 14px 0px 14px ;
}
 
.appliances>div>p{
    line-height:1.2;
    font-size:15px;
}
.appliances>div>p:hover{
    color:#fc3581;
    cursor:pointer;
}
`

const Appliances = () => {
    return (
        <AppliancesPopup>
            <div className='appliances'>
                <div>
                    <h4>Hair Styling Tools</h4>
                    <p>Hair Dryers</p>
                    <p>Straighteners</p>
                    <p>Curling Iron/Stylers</p>
                    <p>Multi Stylers</p>
                </div>
                <div>
                    <h4>Hair Removal Tools</h4>
                    <p>Epilators</p>
                    <p>Body Groomers</p>
                    <p>Bikini Trimmers</p>
                </div>
                <div>
                    <h4>Shaving Tools</h4>
                    <p>Shavers</p>
                    <p>Trimmers</p>
                    <h4>Face/Skin Tools</h4>
                    <p>Face Epilator</p>
                    <p>Dermarollers</p>
                    <p>Cleansing Brushes</p>
                    <p>Acne Removal</p>
                    <h4>Massage Tools</h4>
                    <p>Massagers</p>
                    <h4>Foot Care</h4>
                </div>
                <div>
                    <h4>Top Brands</h4>
                    <p>Philips</p>
                    <p>Alan Truman</p>
                    <p>Dyson</p>
                    <p>VEGA</p>
                    <p>Braun</p>
                    <p>Ikonic Professional</p>
                    <p>Nova</p>
                    <p>Flawless</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <p>Combos @ Nykaa</p>
                    <p>New Launches</p>
                    <p>NFBA Nominees 2020</p>
                    <p>Gifts @ Nykaa</p>
                    <p>Herbal Hair Care</p>
                    <p>Routine Finder</p>
                </div>
            </div>
        </AppliancesPopup>
    )
}

export default Appliances

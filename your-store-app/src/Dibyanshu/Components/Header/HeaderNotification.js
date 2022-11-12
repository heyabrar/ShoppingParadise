
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import "./HeaderNotification.css";

const HeaderNotification = () => (

    <>
       {/* ****Top nav section*** */}
        <div id="top_headerflex">
            <div id="top_header">
                <a href="">
                    BEAUTY BONANZA Get Your Daily Dose of Amazing Offers
                </a>
            </div>


            <div id="top_menuflex">
           
                <div > <PhoneIphoneIcon />  </div>
                <div> <a href="">  Get App </a></div> 
                <div>|</div>
                <div >  <FmdGoodIcon/></div>
                <div> <a href="">Store & Events </a></div>
                <div>|</div>
                <div ><CardGiftcardIcon/></div>
                <div> <a href="">Gift Card </a></div>
                <div>|</div>
                <div><HelpOutlineIcon/></div>
                <div> <a href="">Help</a></div>
            </div>
        </div>

    </>
)

export default HeaderNotification;    
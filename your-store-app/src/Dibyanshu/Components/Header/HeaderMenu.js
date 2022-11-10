import { FaSistrix } from 'react-icons/fa';
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';

const HeaderMenu = () => (
    <div class="header_container">

        <div class="header_logo">
            <img src="https://www.linkpicture.com/q/2_733.png" alt="nykaa logo" srcset="" />
        </div>

        <div class="header_nav">
            <a href="">CATEGORIES</a>
            <a href="">BRANDS</a>
            <a href="">NYKAA FASHION</a>
            <a href="">BEAUTY ADVICE</a>
            <a href="">NYKAA NETWORK</a>
        </div>

        <div class="search_box media_input">
            <div class="input_box">
                <div><FaSistrix /></div>
                <input autocomplete="off" placeholder="Search for Products, Brands etc " value="" />
            </div>
        </div>

        <div class="accounts">
            <a href=""> <PersonIcon />
             <span>Account</span></a>
            
            <a href=""> <HttpsIcon /> </a>
        </div>
    </div>
)
export default HeaderMenu;    
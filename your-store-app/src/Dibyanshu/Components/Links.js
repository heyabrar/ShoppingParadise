import { Link } from "react-router-dom";
import DropDownComponent from "./Links/DropDownContent"

const DipyanshuLinks = () => (
    <div class="links_container flex ">
    <ul class="navbar  wx_80">
        <li class="sub_menu_1">
            <Link>Make Up</Link>
            <DropDownComponent />
        </li>
        <li>
            <Link to='/skin'>Skin</Link>
            <DropDownComponent />
        </li>
        <li><a href="">Hair</a>
            <DropDownComponent />    
        </li>
        <li><a href="">Appliances</a>
        <DropDownComponent />    
        </li>
        <li><a href="">Personal Care</a>
        <DropDownComponent />
        </li>
        <li><a href="">Natural</a>
        <DropDownComponent />
        </li>
        <li><a href="">Mom & Baby</a>
        <DropDownComponent />
        </li>
        <li><a href="">Health & Wellness</a>
        <DropDownComponent />
        </li>
        <li><a href="">Men</a>
        <DropDownComponent />    
        </li>
        <li><a href="">Fragrance</a>
        <DropDownComponent />   
        </li>
        <li><a href="">LUXE</a>
        <DropDownComponent />
        </li>
    </ul>
</div>
)

export default DipyanshuLinks;
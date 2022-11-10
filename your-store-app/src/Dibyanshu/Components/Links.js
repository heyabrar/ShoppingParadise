import DropDownComponent from "./Links/DropDownContent"

const Links = () => (
    <div class="links_container flex ">
    <ul class="navbar  wx_80">
        <li class="sub_menu_1">
            <a href="">Makeup</a>
            <DropDownComponent />
        </li>
        <li>
            <a href="">Skin</a>
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

export default Links;
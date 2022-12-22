import React, { useState, useEffect, useContext } from 'react'
import style from './Navbar.module.css'

import NavbarPopUpComponents from '../NavComponent/NavbarPopUpComponents';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import { FaSistrix } from "react-icons/fa";




const Navbar = () => {


  const navigate = useNavigate();
  const [howerState, setHowerState] = useState("");
  const [login, setLogin] = useState(false);
  const hoverHandler = (type) => {
    setHowerState(type);
  };
  const handleLogin = () => {
    if (login) {
      setLogin(false);
      localStorage.removeItem("user");
      localStorage.removeItem("oAuth");
      window.location.reload()
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(localStorage.getItem("oAuth"));

    if (data) setLogin(true);
  }, []);
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div id='carda'>
            <img
              style={{
                cursor: "pointer",
                width: "60px",
                height: "55px",
                marginTop: "2px",
              }}
              onClick={() => navigate("/")}
              src='https://www.linkpicture.com/q/1_295.jpg'
              className={style.card4}
              alt='nykka'
            />
            <p>Categories</p>
            <p onMouseOver={() => hoverHandler("BRANDS")}>Brands</p>
            <p onMouseEnter={() => hoverHandler("LUXE")}>Luxe</p>
            <p onMouseEnter={() => hoverHandler("NYKAA")}>Nykaa Fashion</p>
            <p onMouseEnter={() => hoverHandler("BEAUTY")}>Beauty Advice</p>
          </div>
          <div>
            <div className={style.inputContainer}>
              <input
                type='text'
                className={style.input}
                placeholder='Search on Shopping Paradise'
              />
              <div>
                <h2>
                  <SearchIcon />
                </h2>
              </div>
            </div>

            <div className={style.card2}>
              <Link to='/profile/myprofile'>
                <div style={{ color: "rgb(252,39,121)" }}>
                  <PersonIcon />
                </div>
              </Link>
              <div>
                <Link to='/profile/myprofile'> Profile</Link>
              </div>
              |
              <Link to='/cart'>
                {" "}
                <div style={{ color: "rgb(252,39,121)" }}>
                  <ShoppingBasketIcon />
                </div>
              </Link>
              <div>
                <Link to='/cart'> Cart</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={style.content} onMouseLeave={() => setHowerState("")}>
          {howerState && <NavbarPopUpComponents type={howerState} />}
        </div>
      </div>
    </>
  );
}

export default Navbar



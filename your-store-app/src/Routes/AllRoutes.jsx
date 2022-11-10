import { Route, Routes } from "react-router-dom";
import HomePage from "../Abrar/Pages/Home";
import SkinDotKeyPage from "../Abrar/Pages/SkinDotKeyPage";
import SkinPage from "../Abrar/Pages/SkinPage";
import Login from "../Apurba/Pages/Login";
import SignUp from "../Apurba/Pages/SignUp";
import Fragrance from "../Sonali/Pages/Fragrance";
import HairPage from "../Sonali/Pages/Hair";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/hair' element={<HairPage/>} />
        <Route path='/fragrance' element={<Fragrance/>} />
        <Route path='/skin' element={<SkinPage/>} />
        <Route path='/skindotkey' element={<SkinDotKeyPage/>} />
        <Route path='/men' element={<h1>Men Page</h1>} />
        <Route path='/menproducts' element={<h1>Men Products Page</h1>} />
        <Route path='/cart' element={<h1>Cart Page</h1>} />
        <Route path='/payment' element={<h1>Payment Page</h1>} />
      </Routes>
    </>
  );
}

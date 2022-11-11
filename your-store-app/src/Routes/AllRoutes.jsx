import { Route, Routes } from "react-router-dom";
import DotKeySingleProductPage from "../Abrar/Pages/DotSkinSPPage";
import EsteeSinglePage from "../Abrar/Pages/EsteeSinglePage";
import HomePage from "../Abrar/Pages/Home";
import LorealSinglePage from "../Abrar/Pages/LorealSinglePage";
import SkinDotKeyPage from "../Abrar/Pages/SkinDotKeyPage";
import SkinEsteePage from "../Abrar/Pages/SkinEsteePage";
import SkinLorealPage from "../Abrar/Pages/SkinLorealPage";
import SkinPage from "../Abrar/Pages/SkinPage";
import Login from "../Apurba/Pages/Login";
import Profile from "../Apurba/Pages/Profile";
import SignUp from "../Apurba/Pages/SignUp";
import ProfileRoutes from "../Apurba/routes/ProfileRoutes";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile/*' element={<Profile />} />
        <Route path='/hair' element={<h1>Hair Page</h1>} />
        <Route path='/fragrance' element={<h1>Fragrance Page</h1>} />
        <Route path='/skin' element={<SkinPage />} />
        <Route path='/skindotkey' element={<SkinDotKeyPage />} />
        <Route path='/skin/:id' element={<DotKeySingleProductPage />} />
        <Route path='/skinloreal' element={<SkinLorealPage />} />
        <Route path='/skinloreal/:id' element={<LorealSinglePage />} />
        <Route path='/skinEstee' element={<SkinEsteePage />} />
        <Route path='/skinEsteeLauder/:id' element={<EsteeSinglePage />} />
        <Route path='/men' element={<h1>Men Page</h1>} />
        <Route path='/menproducts' element={<h1>Men Products Page</h1>} />
        <Route path='/cart' element={<h1>Cart Page</h1>} />
        <Route path='/payment' element={<h1>Payment Page</h1>} />
      </Routes>
    </>
  );
}

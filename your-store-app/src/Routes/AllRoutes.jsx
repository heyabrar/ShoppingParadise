import { Route, Routes } from "react-router-dom";
import AdminBrandsPage from "../Abrar/AdminSide/AdminBrandsPage";
import AdminCategoriesPage from "../Abrar/AdminSide/AdminCategories";
import AdminSide from "../Abrar/AdminSide/AdminSide";
import CartPage from "../Abrar/Pages/CartPage";
import DotKeySingleProductPage from "../Abrar/Pages/DotSkinSPPage";
import EsteeSinglePage from "../Abrar/Pages/EsteeSinglePage";
import HomePage from "../Abrar/Pages/Home";
import LorealSinglePage from "../Abrar/Pages/LorealSinglePage";
import MensGarnierPage from "../Abrar/Pages/MensGarnierPage";
import MensGarnierSinglePage from "../Abrar/Pages/MensGarnierSPPage";
import MensPage from "../Abrar/Pages/MensPage";
import RasSinglePage from "../Abrar/Pages/RasSinglePage";
import SkinDotKeyPage from "../Abrar/Pages/SkinDotKeyPage";
import SkinEsteePage from "../Abrar/Pages/SkinEsteePage";
import SkinLorealPage from "../Abrar/Pages/SkinLorealPage";
import SkinPage from "../Abrar/Pages/SkinPage";
import SkinRasPage from "../Abrar/Pages/SkinRasPage";
import Login from "../Apurba/Pages/Login";
import Profile from "../Apurba/Pages/Profile";
import SignUp from "../Apurba/Pages/SignUp";
import ProfileRoutes from "../Apurba/routes/ProfileRoutes";
import HairPage from '../Sonali/Pages/Hair'

export default function AllRoutes() {
  return (
    <>
      <Routes> 
        <Route path="/adminside" element={<AdminSide/>}/>                                     {/*Need to be Protected*/}
        <Route path="/adminbrands" element={<AdminBrandsPage/>}/>                     {/*Need to be Protected*/}
        <Route path="/admincategories" element={<AdminCategoriesPage/>}/>         {/*Need to be Protected*/}
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile/*' element={<ProfileRoutes />} />
        <Route path='/hair' element={<HairPage/>} />
        <Route path='/fragrance' element={<h1>Fragrance Page</h1>} />
        <Route path='/skin' element={<SkinPage/>} />
        <Route path='/skindotkey' element={<SkinDotKeyPage/>} />                             {/*Need to be Protected*/}
        <Route path="/skin/:id" element={<DotKeySingleProductPage/>}/>                   {/*Need to be Protected*/}
        <Route path="/skinloreal" element={<SkinLorealPage/>}/>                                 {/*Need to be Protected*/}
        <Route path="/skinloreal/:id" element={<LorealSinglePage/>}/>                        {/*Need to be Protected*/}
        <Route path="/skinEstee" element={<SkinEsteePage/>}/>                                   {/*Need to be Protected*/}
        <Route path="/skinEsteeLauder/:id" element={<EsteeSinglePage/>}/>               {/*Need to be Protected*/}
        <Route path='/skinras' element={<SkinRasPage/>}/>                                           {/*Need to be Protected*/}
        <Route path="/skinras/:id" element={<RasSinglePage/>}/>                                  {/*Need to be Protected*/}
        <Route path='/men' element={<MensPage/>} />                          
        <Route path="/mensgarnier" element={<MensGarnierPage/>}/>                          {/*Need to be Protected*/}
        <Route path="/mensgarnier/:id" element={<MensGarnierSinglePage/>}/>            {/*Need to be Protected*/}
        <Route path='/cart' element={<CartPage/>} />                                                       {/*Need to be Protected*/}
        <Route path='/payment' element={<h1>Payment Page</h1>} />                          {/*Need to be Protected*/}
      </Routes>
    </>
  );
}

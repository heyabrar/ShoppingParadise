import { Route, Routes } from "react-router-dom";
import AdminBrandsPage from "../Abrar/AdminSide/AdminBrandsPage";
import AdminCategoriesPage from "../Abrar/AdminSide/AdminCategories";
import AdminSide from "../Abrar/AdminSide/AdminSide";
import AppliancePage from "../Abrar/Pages/Appliance";
import ApplianceSinglePage from "../Abrar/Pages/ApplianceSinglePage";
import CartPage from "../Abrar/Pages/CartPage";
import CheckoutPage from "../Abrar/Pages/CheckoutPage";
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
import { PrivateRoute } from "../Apurba/routes/PrivateRoute";
import Fragrance from "../Sonali/Pages/Fragrance";
import FragranceSingleProduct from "../Sonali/Pages/FragranceSingleProduct";
import HairPage from "../Sonali/Pages/Hair";
import HairProducts from "../Sonali/Pages/HairProducts";
import HairSinglePage from "../Sonali/Pages/HairSingalPage";
import MomAndBabyPage from "../Sonali/Pages/MomBaby";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path='/adminside' element={<AdminSide />} />{" "}
        <Route path='/adminbrands' element={<AdminBrandsPage />} />{" "}
        <Route path='/admincategories' element={<AdminCategoriesPage />} />{" "}
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/profile/*'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path='/hair' element={<HairPage />} />
        <Route path='/hairproducts' element={<PrivateRoute><HairProducts /></PrivateRoute>} />
        <Route path="/hairproducts/:id" element={<PrivateRoute><HairSinglePage/></PrivateRoute>}/>
        <Route path='/fragrance' element={<Fragrance/>} />
        <Route path="/fragrance/:id" element={<PrivateRoute><FragranceSingleProduct/></PrivateRoute>}/>
        <Route path='/skin' element={<SkinPage />} />
        <Route path='/skindotkey' element={<PrivateRoute><SkinDotKeyPage /></PrivateRoute>} />{" "}
        <Route path='/skin/:id' element={<PrivateRoute><DotKeySingleProductPage /></PrivateRoute>} />{" "}
        <Route path='/skinloreal' element={<PrivateRoute><SkinLorealPage /></PrivateRoute>} />{" "}
        <Route path='/skinloreal/:id' element={<PrivateRoute><LorealSinglePage /></PrivateRoute>} />{" "}
        <Route path='/skinEstee' element={<PrivateRoute><SkinEsteePage /></PrivateRoute>} />{" "}
        <Route path='/skinEsteeLauder/:id' element={<PrivateRoute><EsteeSinglePage /></PrivateRoute>} />{" "}
        <Route path='/skinras' element={<SkinRasPage />} />{" "}
        <Route path='/skinras/:id' element={<PrivateRoute><RasSinglePage /></PrivateRoute>} />{" "}
        <Route path='/men' element={<MensPage />} />
        <Route path='/mensgarnier' element={<PrivateRoute><MensGarnierPage /></PrivateRoute>} />{" "}
        <Route path='/mensgarnier/:id'element={<PrivateRoute><MensGarnierSinglePage /></PrivateRoute>}/>{" "}
        <Route path='/cart' element={<PrivateRoute><CartPage /></PrivateRoute>} />
        <Route path="/appliance" element={<AppliancePage/>}/>
        <Route path="/appliance/:id" element={<PrivateRoute><ApplianceSinglePage/></PrivateRoute>}/>
        <Route path='/mombaby' element={<MomAndBabyPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
      </Routes>
    </>
  );
}

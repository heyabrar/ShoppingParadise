import { Route, Routes } from "react-router-dom";
import SkinDotKey from "../Abrar/Pages/SkinDotKeyPage";
import SkinPage from "../Abrar/Pages/SkinPage";

export default function AllRoutes ( ) {
    return (
        <>
        <Routes>
            <Route path="/" element={<h1>HomePage</h1>}/>                
            <Route path= "/signup" element={<h1>SignUpPage</h1>}/>
            <Route path="/login" element={<h1>Login</h1>}/>
            <Route path="/hair" element={<h1>Hair Page</h1>}/>
            <Route path="/fragrance" element={<h1>Fragrance Page</h1>}/>
            <Route path="/skin" element={<SkinPage/>}/>
            <Route path="/skindotkey" element={<SkinDotKey/>}/>
            <Route path="/skinloreal" element={<h1>Skin loreal Page</h1>}/>
            <Route path="/skinesteelauder" element={<h1>Skin esteelauder Page</h1>}/>
            <Route path="/men" element={<h1>Men Page</h1>}/>
            <Route path="/menproducts" element={<h1>Men Products Page</h1>}/>
            <Route path="/cart" element={<h1>Cart Page</h1>}/>
            <Route path="/payment" element={<h1>Payment Page</h1>}/>
        </Routes>
        </>
    )
}
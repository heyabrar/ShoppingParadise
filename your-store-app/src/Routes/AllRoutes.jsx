import { Route, Routes } from "react-router-dom";

export default function AllRoutes ( ) {
    return (
        <>
        <Routes>
            <Route path="/" element={<h1>HomePage</h1>}/>                
            <Route path= '/signup' element={<h1>SignUpPage</h1>}/>
            <Route path="login" element={<h1>Login</h1>}/>
            <Route path="/hair" element={<h1>Hair Page</h1>}/>
            <Route path="/fragrance" element={<h1>Fragrance Page</h1>}/>
            <Route path="/skin" element={<h1>Skin Page</h1>}/>
            <Route path="/men" element={<h1>Men Page</h1>}/>
            <Route path="/cart" element={<h1>Cart Page</h1>}/>
            <Route path="/payment" element={<h1>Payment Page</h1>}/>
        </Routes>
        </>
    )
}
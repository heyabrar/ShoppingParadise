import Login from "../Apurba/Pages/Login";
import SignUp from "../Apurba/Pages/SignUp";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>HomePage</h1>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/hair' element={<h1>Hair Page</h1>} />
        <Route path='/fragrance' element={<h1>Fragrance Page</h1>} />
        <Route path='/skin' element={<h1>Skin Page</h1>} />
        <Route path='/skinproducts' element={<h1>Skin Products Page</h1>} />
        <Route path='/men' element={<h1>Men Page</h1>} />
        <Route path='/menproducts' element={<h1>Men Products Page</h1>} />
        <Route path='/cart' element={<h1>Cart Page</h1>} />
        <Route path='/payment' element={<h1>Payment Page</h1>} />
      </Routes>
    </>
  );
}

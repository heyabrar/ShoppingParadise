import { Link } from "react-router-dom";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";


function App() {
  return (

    <div className='App'>
      {/* <SkinPage/> */} <Link to='/adminside'>Admin Side</Link>
      <Link to='/cart'>Cart</Link>
      <AllRoutes />


    </div>
  );
}

export default App;

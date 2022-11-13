import { Link } from "react-router-dom";
import Footer from "./Abrar/Components/Footer";
import Navbar from "./Abrar/Components/Navbar";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import MfeatcherdBrand from "./Sonali/Components/MfeatcherdBrand";
import MomBabyByCategory from "./Sonali/Components/MomBabyCategory";
import MomBabyLast from "./Sonali/Components/MomBabyLat";
import MomBabayTop from "./Sonali/Components/MomBabyTop";
import MomBabyTrending from "./Sonali/Components/MomBabyTrending";
import MomBrandsLov from "./Sonali/Components/MomBransLov";


function App() {
  return (

    <div className='App'>
      {/* <AllRoutes /> */}
      <Navbar/>
      <MomBabayTop/>
      <MomBrandsLov/>
          
          <MomBabyTrending/>
          <MomBabyByCategory/>
          <MfeatcherdBrand/>
          <MomBabyLast/>
          <Footer/>

    </div>
  );
}

export default App;

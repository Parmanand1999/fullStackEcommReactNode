import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";

const MyContext = createContext();
function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry,setSelectedCountry]=useState("")
  useEffect(() => {
    getCoutry("https://countriesnow.space/api/v0.1/countries/");
  }, []);
  const getCoutry = async (url) => {
    await axios.get(url).then((res) => {
   
      setCountryList(res.data.data);
    });
  };
  const values = {
    countryList,
    setSelectedCountry, 
    selectedCountry,              
  };
          
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="cat/:id" element={<Listing/>}></Route>
          <Route path="/product/:id" element={<ProductDetails/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
        <Footer/>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };

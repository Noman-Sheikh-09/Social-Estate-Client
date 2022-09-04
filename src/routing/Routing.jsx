import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from ".././modules/home/Home";
import Footer from "../components/footer/Footer";
import GoTopButton from "../components/goTopButton/GoTopButton";
import Header from "../components/header/Header";
import Auth from "../modules/auth/Auth";
import { useDispatch } from "react-redux";
import CartScreen from "../modules/cartScreen/CartScreen";
import DetailPage from "../modules/detailPage/DetailPage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { doGetLoggedInUser } from "../store/action/AuthAction";
import Welcome from "../modules/welcome/Welcome";
import Sale from "../modules/sale/Sale";
import PrivateRouting from "./PrivateRouting";
import { useSelector } from "react-redux";
import House from "../modules/categories/House";
import Appartment from "../modules/categories/Appartment";
import Plots from "../modules/categories/Plots";
import Chelet from "../modules/categories/Chelet";
import Villa from "../modules/categories/Villa";
import Studio from "../modules/categories/Studio";
import Propery from "../modules/property/Property";
import Office from "../modules/categories/Office";
import PublicRouting from "./PublicRouting";

export default function Routing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(async () => {
    const token = await window.localStorage.getItem("token");
    if (token) {
      dispatch(doGetLoggedInUser(token, navigate));
    }
    //  console.log("token in useEffect",token);
  }, []);
  const isUserLoggedIn = useSelector(
    (state) => state.AuthReducer.isUserLoggedIn
  );
  // console.log(isUser);
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<PublicRouting isUserLoggedIn={isUserLoggedIn}>
          <Auth />
        </PublicRouting>} />

        <Route
          path="/sale"
          element={
            <PrivateRouting isUserLoggedIn={isUserLoggedIn}>
              <Sale />
            </PrivateRouting>
          }
        />
        <Route path="/detail/:id" element={<DetailPage />} />

        <Route
          path="/favourite"
          element={
            <PrivateRouting isUserLoggedIn={isUserLoggedIn}>
              <CartScreen />
            </PrivateRouting>
          }
        />
        <Route
          path="/properties"
          element={
            <PrivateRouting isUserLoggedIn={isUserLoggedIn}>
              <Propery />
            </PrivateRouting>
          }
        />
        <Route path="/office" element={<Office />} />
        <Route path="/house" element={<House />} />
        <Route path="/appartment" element={<Appartment />} />
        <Route path="/plots" element={<Plots />} />
        <Route path="/chelet" element={<Chelet />} />
        <Route path="/villa" element={<Villa />} />
        <Route path="/studio" element={<Studio />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Loader from "../pages/Loader"
import Home from "../pages/Home"
import ProductId from "../pages/ProductId"
import Cart from "../pages/Cart"
import Search from "../pages/Search"
import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn"
import Checkout from "../pages/Checkout"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductId />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

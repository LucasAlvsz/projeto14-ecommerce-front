import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/Home"
import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn"
import Checkout from "../pages/Checkout"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/:id" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

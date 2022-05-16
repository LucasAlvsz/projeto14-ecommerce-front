import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/Home"
import ProductId from "../pages/ProductId"
import Cart from "../pages/Cart"
import Search from "../pages/Search"
import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn"

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<Home />} />
				<Route path="/product/:id" element={<ProductId />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/search/:keyword" element={<Search />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/sign-in" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	)
}

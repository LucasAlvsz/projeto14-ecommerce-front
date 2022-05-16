import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/Home"
import ProductId from "../pages/ProductId"

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<Home />} />
				<Route path="/product/:id" element={<ProductId />} />
			</Routes>
		</BrowserRouter>
	)
}

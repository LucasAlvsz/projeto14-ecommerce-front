import { Player } from "@lottiefiles/react-lottie-player"
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

import { getItem } from "../../utils"
import cartAnimation from "../../assets/animations/cartAnimation.json"
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg"

import * as S from "./styles"

export default function HomeFooter({ addToCart }) {
	const navigate = useNavigate()
	const cartRef = useRef(null)

	return (
		<S.ProductFooter>
			<HomeIcon className="home-icon" onClick={() => navigate("/home")} />
			<div
				className="cart-icon"
				onClick={() => {
					cartRef.current.play()
					navigate("/cart")
				}}>
				<Player
					ref={cartRef}
					src={cartAnimation}
					style={S.Cart}></Player>
			</div>
			<div
				className="add-cart-icon"
				onClick={() => {
					if (getItem("auth")) {
						addToCart()
						cartRef.current.play()
					} else {
						navigate("/sign-in")
					}
				}}>
				Adicionar ao carrinho
			</div>
		</S.ProductFooter>
	)
}

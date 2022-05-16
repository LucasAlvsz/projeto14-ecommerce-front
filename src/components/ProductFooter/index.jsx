import { Player } from "@lottiefiles/react-lottie-player"
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

import cartAnimation from "../../assets/animations/cartAnimation.json"
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg"

import * as S from "./styles"

export default function HomeFooter() {
	const navigate = useNavigate()
	const cartRef = useRef(null)
	return (
		<S.HomeFooter>
			<HomeIcon className="home-icon" onClick={() => navigate("/home")} />
			<div className="cart-icon" onClick={() => cartRef.current.play()}>
				<Player
					ref={cartRef}
					src={cartAnimation}
					style={S.Cart}></Player>
			</div>
			<div className="add-cart-icon">Adicionar ao carrinho</div>
		</S.HomeFooter>
	)
}

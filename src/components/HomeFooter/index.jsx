import { Player } from "@lottiefiles/react-lottie-player"
import { useState, useRef } from "react"
import cartAnimation from "../../assets/animations/cartAnimation.json"
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg"
import { ReactComponent as CategoriesIcon } from "../../assets/icons/categories.svg"
import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg"
import * as S from "./styles"

export default function HomeFooter() {
	const cartRef = useRef(null)
	return (
		<S.HomeFooter>
			<HomeIcon className="home-icon" />
			<div className="cart-icon" onClick={() => cartRef.current.play()}>
				<Player
					ref={cartRef}
					src={cartAnimation}
					style={S.Cart}></Player>
			</div>
			<CategoriesIcon className="categories-icon" />
			<PersonIcon className="person-icon" />
		</S.HomeFooter>
	)
}

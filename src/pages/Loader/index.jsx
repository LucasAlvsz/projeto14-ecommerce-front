import { Player } from "@lottiefiles/react-lottie-player"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"

import logoAnimation from "../../assets/animations/logoAnimation.json"
import cartAnimation from "../../assets/animations/cartAnimation.json"

import * as S from "./styles"

export default function Loader() {
	const navigate = useNavigate()

	setTimeout(() => {
		navigate("/home")
	}, 4000)

	return (
		<S.LoaderContainer>
			<Player
				src={logoAnimation}
				style={S.cart}
				autoplay={true}
				loop={true}></Player>
		</S.LoaderContainer>
	)
}

import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Player } from "@lottiefiles/react-lottie-player"

import { ReactComponent as BackIcon } from "../../assets/icons/back.svg"
import { ReactComponent as NextIcon } from "../../assets/icons/next.svg"
import { ReactComponent as BeforeIcon } from "../../assets/icons/before.svg"
import menuAnimation from "../../assets/animations/menuAnimation.json"

import * as S from "./styles"

export default function ProductHeader() {
	const navigate = useNavigate()
	const menuRef = useRef(null)
	return (
		<S.ProductHeader>
			<BackIcon className="back-icon" onClick={() => navigate(-1)} />
			<S.SideIconsContainer>
				<S.SideIconEllipse>
					<div
						className="menu-icon"
						onClick={() => menuRef.current.play()}>
						<Player
							ref={menuRef}
							src={menuAnimation}
							style={S.Menu}></Player>
					</div>
				</S.SideIconEllipse>
			</S.SideIconsContainer>
		</S.ProductHeader>
	)
}

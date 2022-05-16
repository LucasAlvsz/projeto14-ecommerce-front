import { useState, useRef } from "react"
import { Player } from "@lottiefiles/react-lottie-player"

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg"
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg"
import menuAnimation from "../../assets/animations/menuAnimation.json"

import * as S from "./styles"

export default function HomeHeader() {
	const menuRef = useRef(null)
	return (
		<S.Header>
			<LogoIcon className="logo-icon" />
			<S.SearchBarContainer>
				<div className="search-icon-cointainer">
					<SearchIcon className="search-icon" />
				</div>
				<input type="text" placeholder="Pesquisar..." />
			</S.SearchBarContainer>
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
		</S.Header>
	)
}

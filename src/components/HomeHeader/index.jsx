import { useState, useRef } from "react"
import { Player } from "@lottiefiles/react-lottie-player"

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg"
import cartAnimation from "../../assets/animations/cartAnimation.json"
import menuAnimation from "../../assets/animations/menuAnimation.json"
import teste from "../../assets/images/teste.png"

import * as S from "./styles"

export default function HomeHeader() {
	const cartRef = useRef(null)
	const menuRef = useRef(null)
	return (
		<>
			<S.SalesContainer>
				<img src={teste} alt="" />
				<div className="ellipses-container">
					<div className="ellipse"></div>
					<div className="ellipse"></div>
					<div className="ellipse"></div>
				</div>
			</S.SalesContainer>
			<S.Header>
				<S.SearchBarContainer>
					<div className="search-icon-cointainer">
						<SearchIcon className="search-icon" />
					</div>
					<input type="text" placeholder="Pesquisar..." />
				</S.SearchBarContainer>
				<S.SideIconsContainer>
					<S.SideIconEllipse>
						<div
							className="cart-icon"
							onClick={() => cartRef.current.play()}>
							<Player
								ref={cartRef}
								src={cartAnimation}
								style={S.Cart}></Player>
						</div>
					</S.SideIconEllipse>
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
		</>
	)
}

import axios from "axios"
import { useRef, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Player } from "@lottiefiles/react-lottie-player"

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg"
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg"
import menuAnimation from "../../assets/animations/menuAnimation.json"

import * as S from "./styles"

export default function HomeHeader() {
	const navigate = useNavigate()
	const menuRef = useRef(null)
	const [searchOpen, setSearchOpen] = useState(false)
	const [search, setSearch] = useState("")
	const [searchResult, setSearchResult] = useState([])
	const [update, setUpdate] = useState(false)
	useEffect(() => {
		if (search) {
			axios
				.get(
					`${process.env.REACT_APP_URI}/products/search?keyword=${search}&limit=10`
				)
				.then(({ data }) => {
					setSearchResult(data)
					console.log(data)
				})
				.catch(error => console.log(error))
		}
	}, [update])
	return (
		<S.Header>
			<LogoIcon className="logo-icon" />
			<S.SearchBarContainer>
				<div className="search-icon-cointainer">
					<SearchIcon className="search-icon" />
				</div>
				<input
					type="text"
					placeholder="Pesquisar..."
					onChange={e => {
						if (e.target.value === "") setSearchOpen(false)
						else {
							setSearchOpen(true)
							setSearch(e.target.value)
							if (e.target.value.length > 2) setUpdate(!update)
						}
					}}
				/>
				{searchOpen && (
					<S.SearchResults>
						<h3>Resultados para "{search}"</h3>
						{searchResult.map(({ _id, name }) => (
							<div
								key={_id}
								className="search-result-item"
								onClick={() => navigate(`/search/${name}`)}>
								<p>{name}</p>
							</div>
						))}
					</S.SearchResults>
				)}
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

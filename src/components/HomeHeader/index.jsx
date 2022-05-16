import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { getItem, removeItem } from "../../utils/"
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg"
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg"
import { ReactComponent as LoggoutIcon } from "../../assets/icons/loggout.svg"
import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg"

import * as S from "./styles"

export default function HomeHeader() {
	const navigate = useNavigate()
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
	const signOut = () => {
		const { token } = getItem("auth")
		removeItem("auth")
		axios
			.post(`${process.env.REACT_APP_URI}/sign-out`, "", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(() => setUpdate(!update))
			.catch(error => console.log(error))
	}
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
						if (e.target.value === "") {
							setSearchResult("")
							setSearchOpen(false)
						} else {
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
					{getItem("auth") ? (
						<LoggoutIcon
							className="loggout-icon"
							onClick={() => signOut()}
						/>
					) : (
						<PersonIcon
							className="person-icon"
							onClick={() => navigate("/sign-in")}
						/>
					)}
				</S.SideIconEllipse>
			</S.SideIconsContainer>
		</S.Header>
	)
}

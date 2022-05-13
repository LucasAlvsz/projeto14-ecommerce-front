import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg"

import * as S from "./styles"

export default function HomeHeader() {
	return (
		<S.Header>
			<S.SearchBarContainer>
				<div className="search-icon-cointainer">
					<SearchIcon className="search-icon" />
				</div>
				<input type="text" placeholder="Pesquisar..." />
			</S.SearchBarContainer>
		</S.Header>
	)
}

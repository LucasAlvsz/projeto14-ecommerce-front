import styled from "styled-components"

export const Main = styled.main`
	width: 100%;
	height: calc(100vh - 60px);
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	font-family: "Inter", sans-serif;
	margin-top: 60px;
`
export const SearchResultsContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-wrap: wrap;
	padding: 13px 0px 0 5px;
	h3 {
		font-size: 15px;
		font-weight: 500;
		color: #333;
		margin-bottom: 10px;
	}
	a {
		width: calc(50% - 5px);
		height: 240px;
		margin-right: 5px;
		margin-bottom: 5px;
	}
`
export const FiltersContainer = styled.div`
	width: 100%;
	height: 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px;
	border-bottom: 1px solid #e6e6e6;
`

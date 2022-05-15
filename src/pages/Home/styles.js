import styled from "styled-components"

export const Main = styled.main`
	width: 100%;
	height: calc(100vh - 120px);
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 5px;
	font-family: "Inter", sans-serif;
	margin-top: 60px;
	margin-bottom: 70px;
	overflow-x: hidden;
`

export const CategoriesContainer = styled.div`
	width: 100%;
	height: 290px;
	display: flex;
	flex-direction: column;
	margin-top: 25px;
	.categorie {
		font-size: 16px;
		line-height: 19px;
		font-weight: 600;
		color: #333333;
		padding: 0 15px;
	}
`

export const ProductsContainer = styled.div`
	width: 100vw;
	height: 270px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	overflow-x: auto;
	border-radius: 6px;
	padding: 13px 13px;
	::-webkit-scrollbar {
		height: 5px;
	}
	::-webkit-scrollbar-thumb {
		background: #fff;
		border-radius: 30px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #a762ff;
	}
`

export const HighlightsContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-wrap: wrap;
	padding: 13px 0px 0 5px;
`
export const Highlight = styled.div``

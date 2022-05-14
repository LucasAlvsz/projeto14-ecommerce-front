import styled from "styled-components"

export const Main = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 20px;
`

export const CategoriesContainer = styled.div`
	margin-top: 20px;
	width: 100%;
	height: 260px;
	display: flex;
	flex-direction: column;
	/* background-color: #fff; */
	p {
		font-size: 16px;
		line-height: 19px;
		color: #333333;
	}
`

export const ProductsContainer = styled.div`
	width: 100vw;
	height: 230px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin-top: 20px;
	background-color: #fff;
	overflow-x: auto;
`

export const Product = styled.div`
	width: 175px;
	height: 220px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	margin-right: 20px;
	background: linear-gradient(
		180deg,
		#bbaacc 0%,
		rgba(255, 255, 255, 0) 100%
	);
	filter: drop-shadow(0px 5px 5px rgba(220, 220, 220, 0.25));
	border-radius: 6px;
	img {
		width: 100%;
		height: 110px;
		object-fit: cover;
	}
	.line {
		border-top: 3px solid #c4c4c4;
		width: 30px;
		margin: 8px auto;
	}
`

export const ProductName = styled.p`
	font-size: 14px;
	line-height: 17px;
	color: #333333;
	margin-top: 28px;
`
export const ProductPrice = styled.p`
	font-size: 16px;
	line-height: 19px;
	color: #333333;
`

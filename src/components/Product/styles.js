import styled from "styled-components"

export const Product = styled.div`
	width: 180px;
	height: 240px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	margin-right: 20px;
	background: #fff;
	box-shadow: rgba(220, 220, 220, 0.45) 0px 5px 5px;
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
	max-width: 145px;
	min-height: 35px;
	max-height: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 15px;
	line-height: 17px;
	color: #333333;
	text-align: center;
	margin-top: 15px;
`
export const ProductPrice = styled.p`
	font-size: 16px;
	line-height: 19px;
	font-weight: 500;
	color: #333333;
`
export const HighlightProduct = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	background: #fff;
	box-shadow: rgba(220, 220, 220, 0.45) 0px 5px 5px;
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

import styled from "styled-components"

export const Main = styled.main`
	width: 100%;
	height: calc(100vh - 60px);
	display: flex;
	flex-direction: column;
	margin-top: 60px;
	font-family: "Inter";
	overflow-x: auto;
`

export const ProductContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 0 15px;
`

export const ProductImagesContainer = styled.div`
	width: 100%;
	min-height: 250px;
	max-height: 250px;
	position: relative;
	object-fit: cover;
	background-color: #fff;
	background: linear-gradient(180deg, #e1c9ff 0%, rgba(225, 201, 255, 0) 100%),
		#ffffff;
	box-shadow: 0px 4px 28px rgba(51, 51, 51, 0.25);
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.backback-icon-container {
		width: 25px;
		height: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		background-color: #fff;
		position: absolute;
		top: 50%;
		left: 5px;
		.back-icon {
			width: 15px;
			height: 15px;
		}
	}

	.next-icon-container {
		width: 25px;
		height: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		background-color: #fff;
		position: absolute;
		top: 50%;
		right: 5px;
		.next-icon {
			width: 15px;
			height: 15px;
		}
	}
	.images-caption {
		width: 30px;
		height: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		background-color: #b0b0b0;
		position: absolute;
		bottom: 5px;
		right: 5px;
		font-weight: 500;
		font-size: 9px;
		line-height: 10px;
		color: #ffffff;
	}
`
export const ProductName = styled.h1`
	width: 100%;
	margin-top: 20px;
	font-weight: 600;
	font-size: 30px;
	line-height: 36px;
	color: #333333;
`
export const ProductPrice = styled.h4`
	width: 100%;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	color: #333333;
	margin-top: 20px;
`

export const ProductQuantity = styled.div`
	width: 100%;
	margin-top: 20px;
	h5 {
		font-weight: 500;
		font-size: 20px;
		line-height: 24px;
		color: #000000;
	}
	.available-quantity {
		width: 111px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 5px;
		font-size: 13px;
		line-height: 12px;
		color: lightgray;
	}
	.quantity-container {
		width: 111px;
		height: 44px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 5px;
		border: 1px solid #b57efb;
		padding: 0 13px;
		margin-top: 15px;
		input {
			width: 50px;
			height: 100%;
			background-color: transparent;
			text-align: center;
			&-webkit-outer-spin-button,
			&::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}
		}
	}
`

export const ProductInfos = styled.div`
	width: 100%;
	min-height: 100px;
	border-top: 3px solid #e1c9ff;
	padding-top: 20px;
	margin-top: 20px;
	h5 {
		font-weight: 700;
		font-size: 20px;
		line-height: 24px;
		color: #333333;
	}
	p {
		font-weight: 400;
		font-size: 16px;
		line-height: 20px;
		color: #333333;
		margin-top: 10px;
	}
`

export const ProductDescriptions = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	border-top: 3px solid #e1c9ff;
	margin-top: 20px;
	margin-bottom: 80px;
	padding-top: 20px;
	h5 {
		font-weight: 700;
		font-size: 20px;
		line-height: 24px;
		color: #333333;
	}
	.description-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		margin-top: 20px;
		h6 {
			font-weight: 700;
			font-size: 16px;
			line-height: 19px;
			color: rgba(51, 51, 51, 0.68);
		}
		p {
			font-weight: 400;
			font-size: 16px;
			line-height: 19px;
			color: #b0b0b0;
		}
		div {
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #e1c9ff;
			margin-top: 6px;
			padding: 0 2px;
			&:last-child {
				margin-bottom: 30px;
			}
		}
	}
`

import styled from "styled-components"

export const CartProduct = styled.div`
	width: 100%;
	height: 93px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 6px;
	background-color: #fff;
	box-shadow: 0px 4px 28px rgba(51, 51, 51, 0.25);
	font-family: "Inter", sans-serif;
	margin-bottom: 10px;
	.delete-button {
		width: 25px;
		height: 25px;
		position: absolute;
		top: -7px;
		right: -4px;
	}
`
export const CartProductImage = styled.div`
	width: 90px;
	height: 100%;
	background: linear-gradient(
		180deg,
		#bbaacc 0%,
		rgba(255, 255, 255, 0) 100%
	);
	border-radius: 6px;
	img {
		width: 90px;
		height: 100%;
		object-fit: cover;
	}
`

export const CartProductInfo = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	padding-top: 10px;
	h4 {
		font-size: 14px;
		line-height: 17px;
		color: #333333;
	}
	p {
		font-weight: 300;
		font-size: 12px;
		line-height: 15px;
		color: #333333;
		margin-top: 10px;
	}
`

export const CartProductQuantity = styled.div`
	.available-cart-quantity {
		width: 111px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 5px;
		font-size: 10px;
		line-height: 12px;
		color: lightgray;
		padding-right: 16px;
	}
	.cart-quantity-container {
		width: 90px;
		height: 34px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 5px;
		border: 1px solid #b57efb;
		padding: 0 15px;
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

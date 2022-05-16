import styled from "styled-components"

export const HomeFooter = styled.footer`
	width: 100%;
	height: 60px;
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	padding-left: 20px;
	font-family: "inter", sans-serif;
	.home-icon {
		width: 35px;
		height: 30px;
		color: #333333;
		font-size: 20px;
	}
	.add-cart-icon {
		width: 175px;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: rgba(181, 126, 251, 0.7);
		font-weight: 500;
		font-size: 15px;
		line-height: 22px;
		color: #ffffff;
		padding: 15px;
	}
`
export const Cart = {
	width: "40px",
	height: "40px",
}

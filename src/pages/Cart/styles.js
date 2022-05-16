import styled from "styled-components"

export const Main = styled.main`
	width: 100%;
	height: calc(100vh - 60px);
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	margin-top: 60px;
	font-family: "Inter", sans-serif;
`

export const ProductList = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 10px;
	margin-top: 20px;
	h3 {
		width: 100%;
		height: 50px;
		display: flex;
		font-weight: 600;
		font-size: 16px;
		line-height: 19px;
		color: #333333;
	}
	.empty-cart-container {
		display: flex;
		flex-direction: column;
		h3 {
			display: flex;
			justify-content: center;
			text-align: center;
		}
		a {
			text-decoration: underline;
			color: #b57efb;
			display: flex;
			justify-content: center;
			text-align: center;
			margin-top: 20px;
		}
	}
`

export const CartFooter = styled.footer`
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
	box-shadow: 0px -4px 28px rgba(51, 51, 51, 0.25);
	.home-icon {
		width: 35px;
		height: 30px;
		color: #333333;
		font-size: 20px;
	}
`
export const CloseOrder = styled.div`
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
`
export const Total = styled.div`
	width: 35%;
	height: 60px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h6 {
		font-weight: 500;
		font-size: 14px;
		line-height: 17px;
		color: #333333;
	}
	p {
		font-weight: 500;
		font-size: 15px;
		line-height: 18px;
		color: #adadad;
	}
`

export const EmptyCart = {
	width: "100%",
	height: "100%",
}

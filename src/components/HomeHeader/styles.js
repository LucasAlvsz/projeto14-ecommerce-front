import styled from "styled-components"

export const Header = styled.header`
	width: 100%;
	height: 60px;
	display: flex;
	position: fixed;
	top: 0;
	align-items: center;
	justify-content: space-between;
	background-color: transparent;
	padding: 23px 12px;
`
export const SearchBarContainer = styled.div`
	width: 100%;
	height: 30px;
	display: flex;
	position: relative;
	background-color: #fff;
	border-radius: 5px;
	margin-right: 28px;
	input {
		width: 100%;
		height: 30px;
		border-radius: 5px;
		padding-left: 5px;
		&::placeholder {
			padding-left: 5px;
		}
	}
	.search-icon-cointainer {
		width: 26px;
		height: 26px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.search-icon {
		position: absolute;
		top: 7px;
		left: 9px;
	}
`
export const SideIconsContainer = styled.div`
	width: 80px;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const SideIconEllipse = styled.div`
	width: 35px;
	height: 30px;
	border-radius: 50%;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 10px;
`

export const SalesContainer = styled.div`
	width: 100%;
	height: 130px;
	position: relative;
	top: 0;
	background-color: #000;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.ellipses-container {
		width: 75px;
		height: 10px;
		display: flex;
		align-items: center;
		position: absolute;
		bottom: 5px;
		left: 43%;
		gap: 25px;
		.ellipse {
			width: 5px;
			height: 5px;
			border-radius: 50%;
			background-color: #fff;
		}
	}
`

export const Cart = {
	width: "30px",
	height: "30px",
}

export const Menu = {
	width: "20px",
	height: "20px",
}

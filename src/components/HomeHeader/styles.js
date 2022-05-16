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
	font-family: "Inter", sans-serif;
	.logo-icon {
		width: 50px;
		height: 50px;
		margin-right: 15px;
	}
`
export const SearchBarContainer = styled.div`
	width: 100%;
	height: 30px;
	display: flex;
	position: relative;
	background-color: #fff;
	border-radius: 5px;
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
export const SearchResults = styled.div`
	width: 100%;
	max-height: 300px;
	position: absolute;
	top: 30px;
	left: 0;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	padding: 10px;
	overflow-y: auto;
	font-size: 14px;
	font-weight: 500;
	color: #333333;
	h3 {
		font-size: 14px;
		font-weight: 500;
	}
	.search-result-item {
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #e6e6e6;
		margin-top: 10px;
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
	height: 33px;
	border-radius: 50%;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 20px;
`

export const Menu = {
	width: "20px",
	height: "20px",
}

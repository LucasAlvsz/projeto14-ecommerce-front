import styled from "styled-components"

export const Header = styled.header`
	width: 100%;
	height: 60px;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 23px 12px;
`
export const SearchBarContainer = styled.div`
	width: 100%;
	height: 30px;
	display: flex;
	position: relative;
	background-color: #fff;
	border-radius: 5px;
	margin-right: 123px;
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

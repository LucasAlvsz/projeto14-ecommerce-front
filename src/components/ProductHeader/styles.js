import styled from "styled-components"

export const ProductHeader = styled.header`
	width: 100%;
	height: 60px;
	display: flex;
	position: fixed;
	top: 0;
	align-items: center;
	justify-content: space-between;
	background-color: #fff;
	padding: 23px 12px;
	.back-icon {
		width: 20px;
		height: 20px;
		margin-left: 3px;
	}
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`
export const SideIconsContainer = styled.div`
	width: 40px;
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

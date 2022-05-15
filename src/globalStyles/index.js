import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Inter', sans-serif;
        
    }
    button {
        cursor: pointer;
        background: #fff;
        border: none;
    }
    input{
        background: #fff;
        border: none;
    }
    a {
        text-decoration: none;
    }
    body {
        background: linear-gradient(180deg, rgba(225, 201, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF;
    }
    main{
        overflow: auto;
    }
    h1{
        cursor: default;
    }
    p{
        cursor: default;
    }
    ::-webkit-scrollbar {
		width: 0px;
    }
	
`

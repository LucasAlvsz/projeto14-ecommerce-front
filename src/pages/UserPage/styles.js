import styled from "styled-components"

export const Main = styled.main`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-family: Inter, sans-serif;
    color: lightblue;
    font-size: 25px;
    font-weight: 500;
    text-align: center;
    text-shadow: 2px 2px rgba(100, 100, 111, 0.2);
  }
`
export const LoaderContainer = styled.div`
  width: 100%;
  height: max-content;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Construction = {
  width: "80%",
  height: "100%",
}

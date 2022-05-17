import styled from "styled-components"

export const Product = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  background-color: white;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 20px;
  padding-left: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`

export const ImageContainer = styled.div`
  img {
    width: 110px;
  }

  width: max-content;
`

export const Title = styled.h3`
  width: 100px;
  margin-top: 0px;
  text-overflow: hidden;
`

export const Quantity = styled.h4`
  font-size: 12px;
  color: #bababa;
  margin-top: 5px;
`

export const Price = styled.p`
  color: #bababa;
  font-size: 12px;
`

export const InfoContainer = styled.div`
  flex: 1;
`

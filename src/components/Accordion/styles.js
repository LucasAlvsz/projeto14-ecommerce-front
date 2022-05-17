import styled from "styled-components"

export const AccordionSection = styled.section`
  padding: 20px;
  background-color: #fff;

  width: 100%;
  max-width: 450px;
  border-radius: 5px;
  margin-bottom: 30px;

  box-shadow: #cfcfcf 0px 7px 29px 0px;
  color: #333;

  .rotate {
    transform: rotate(90deg);
  }

  .accordion__icon {
    margin-left: auto;
    transition: transform 0.6s ease;
  }

  .accordion p.hide {
    display: none;
  }

  .accordion.active p.hide {
    display: initial;
  }
`
export const Accordion = styled.button`
  width: 100%;
  text-align: left;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;

  svg {
    height: 16px;
    color: #333;
  }
`
export const AccordionTitle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  color: #333;
`
export const AccordionContent = styled.div`
  margin-top: 20px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.6s ease;
`
export const AccordionText = styled.div``

export const AccordionIcon = styled.span``

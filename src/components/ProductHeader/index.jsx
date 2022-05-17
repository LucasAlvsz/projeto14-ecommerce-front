import { useNavigate } from "react-router-dom"

import { ReactComponent as BackIcon } from "../../assets/icons/back.svg"

import * as S from "./styles"

export default function ProductHeader() {
  const navigate = useNavigate()

  return (
    <S.ProductHeader>
      <BackIcon className="back-icon" onClick={() => navigate(-1)} />
    </S.ProductHeader>
  )
}

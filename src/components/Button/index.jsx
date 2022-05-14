import { ThreeDots } from "react-loader-spinner"
import * as S from "./styles"

export default function Button(props) {
  const { children, disabled, ...othersProps } = props

  return (
    <S.Button {...othersProps} disabled={disabled}>
      {!props.isLoading === true ? (
        children
      ) : (
        <S.Loader>
          <ThreeDots type="ThreeDots" color="white" height={20} width={50} />
        </S.Loader>
      )}
    </S.Button>
  )
}

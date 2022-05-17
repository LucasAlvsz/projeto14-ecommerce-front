import { Player } from "@lottiefiles/react-lottie-player"
import ConstructionAnimation from "./../../assets/animations/constructionAnimation.json"
import HomeFooter from "../../components/HomeFooter"
import ProductHeader from "../../components/HomeHeader"

import * as S from "./styles"

export default function UserPage() {
  return (
    <>
      <ProductHeader />
      <S.Main>
        <S.LoaderContainer>
          <Player
            src={ConstructionAnimation}
            style={S.Construction}
            autoplay={true}
            loop={true}
          ></Player>
        </S.LoaderContainer>
        <p>
          Página
          <br /> em construção
        </p>
      </S.Main>
      <HomeFooter />
    </>
  )
}

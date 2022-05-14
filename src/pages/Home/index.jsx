import HomeHeader from "../../components/HomeHeader"
import imgproduto from "../../assets/images/imgprodutoteste.png"

import * as S from "./styles"

export default function Home() {
	return (
		<>
			<HomeHeader />
			<S.Main>
				<S.CategoriesContainer>
					<p>Notebooks</p>
					<S.ProductsContainer>
						<S.Product>
							<img src={imgproduto} alt="" />
							<S.ProductName>Nome do Produto</S.ProductName>
							<div className="line"></div>
							<S.ProductPrice>R$ 1.000,00</S.ProductPrice>
						</S.Product>
						<S.Product>
							<img src={imgproduto} alt="" />
							<S.ProductName>Nome do Produto</S.ProductName>
							<div className="line"></div>
							<S.ProductPrice>R$ 1.000,00</S.ProductPrice>
						</S.Product>
						<S.Product>
							<img src={imgproduto} alt="" />
							<S.ProductName>Nome do Produto</S.ProductName>
							<div className="line"></div>
							<S.ProductPrice>R$ 1.000,00</S.ProductPrice>
						</S.Product>
						<S.Product>
							<img src={imgproduto} alt="" />
							<S.ProductName>Nome do Produto</S.ProductName>
							<div className="line"></div>
							<S.ProductPrice>R$ 1.000,00</S.ProductPrice>
						</S.Product>
					</S.ProductsContainer>
				</S.CategoriesContainer>
			</S.Main>
		</>
	)
}

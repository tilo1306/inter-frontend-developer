import { useState } from "react";
import { Headers } from "../components/Headers/Headers";
import { useParams } from "react-router-dom";
import productsList from "../data/product";
import { Purchase } from '../components/Purchase/Purchase';

export const Product = () => {
  const shirt: number = useParams();

  const [item] = useState();

  return (
    <div>
      <Headers />
      {productsList.map((p, index) => {
        if (p.id_product == shirt.id) {
          return (
            <div key={index}>
              <Purchase  value={p.price}/>
              <h1>{p.name_product}</h1>
              <img src={p.image} alt={p.name_product} />
              <h3>Categoria:{p.name_categorys}</h3>
              <h3>Valor: {p.price}</h3>
              <p>Compre a camisa do time do seu coração!</p>
              <h4>Descrição</h4>
              <p>TODOS OS MODELOS DAS FOTOS ESTÃO DISPONÍVEIS EM ESTOQUE PARA ESCOLHA DO CLIENTE E TAMBÉM TEMOS OUTROS DISPONÍVEIS, SÃO VÁRIOS MODELOS DIFERENTES!
<br/>
<br/>
Todos os nossos produtos são revisados antes do envio, e possuem garantias contra defeitos de fabricação.
<br/>
<br/>
ATENÇÃO APÓS A CONFIRMAÇÃO DA COMPRA ENTRAREMOS EM CONTATO PELO CHAT MANDAREMOS FOTOS DE TODOS OS MODELOS DISPONIVEIS E ENTÃO O CLIENTE ESCOLHERÁ OS CINCO MODELOS!
<br/>
<br/>
Informações dos Produtos.
<br/>
-Tamanhos: M G GG
-Escudo: Bordado de alta qualidade
-Estampa: Sublimação
-Tecido: Cacharrel Dry- 100% poliester
<br/>
DIMENSÕES APROXIMADAS
<br/>
Tamanho > M=72 X 52 CM
<br/>
Tamanho > G=76 X 55 CM
<br/>
Tamanho > GG= 79 X 59 CM
<br/>
<br/>
QUALQUER OUTRA DÚVIDA PERGUNTE NO CAMPO DE PERGUNTAS
<br/>
<br/>
OBRIGADO PELA ATENÇÃO E UM BOA COMPRA.
</p>
            </div>
          );
        }
      })}
    </div>
  );
};

import { Link } from "react-router-dom";
import "./style.css";
type Props = {
  data: any;
};
export const Products = ({ data }: Props) => {
  return (
    <div id="products">
      {data.map((p, index) => (
        <div id="product" key={index}>
          <Link to={`/${p.id_product}`}>
            <img src={p.image} alt={p.name_product} />
            <h4>{p.name_product}</h4>
            <p>{`R$ ${p.price}`}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

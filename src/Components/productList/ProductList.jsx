import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Sites which helped me during my studying time & now</h1>
        <p className="pl-desc">
          I'm sharing these ones with you for good purposes, SHARING IS CARRYING
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} backgroundColor={item.backgroundColor} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

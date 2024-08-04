import PlusMinusButton from "./PlusMinusButton";
import { formatPrice } from "@/utils/commaNumber";
import { calcDiscount } from "@/utils/calcDiscount";
import { productsType } from "@/@types/globals.d";
import { func, number } from "prop-types";

const AddCartCounter = ({ products, count, addProducts, minusProducts }) => {
  const { discount, price, title } = products;

  const checkDiscount =
    discount === 0 ? (
      <>
        <p className="real-price">{formatPrice(price)}원</p>
      </>
    ) : (
      <>
        <p className="real-price">
          {formatPrice(calcDiscount(price, discount))}원
        </p>
        <p className="original-price">{formatPrice(price)}원</p>
      </>
    );

  return (
    <>
      <article className="AddCartCounter">
        <span className="product-name">{title}</span>
        <div className="count-container">
          <div className="price-container">{checkDiscount}</div>
          <PlusMinusButton
            count={count}
            addProducts={addProducts}
            minusProducts={minusProducts}
          />
        </div>
      </article>
    </>
  );
};
export default AddCartCounter;

AddCartCounter.propTypes = {
  products: productsType.isRequired,
  count: number.isRequired,
  addProducts: func.isRequired,
  minusProducts: func.isRequired,
};

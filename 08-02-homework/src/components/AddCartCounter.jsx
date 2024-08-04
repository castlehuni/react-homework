import PlusMinusButton from "./PlusMinusButton";
import { formatPrice } from "@/utils/commaNumber";
import { calcDiscount } from "@/utils/calcDiscount";

const AddCartCounter = ({ products }) => {
  console.log(typeof products.discount);
  const { discount, price, title } = products;
  return (
    <>
      <article className="AddCartCounter">
        <span className="product-name">{title}</span>
        <div className="count-container">
          <div className="price-container">
            <p className="real-price">
              {formatPrice(calcDiscount(price, discount))}원
            </p>
            <p className="original-price">{formatPrice(price)}원</p>
          </div>
          <PlusMinusButton />
        </div>
      </article>
    </>
  );
};
export default AddCartCounter;

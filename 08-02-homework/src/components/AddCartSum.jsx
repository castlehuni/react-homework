import { formatPrice } from "@/utils/commaNumber";
import { priceType } from "@/@types/globals.d";

const AddCartSum = ({ price }) => {
  return (
    <>
      <article className="AddCartSum">
        <article className="showTotalPrice">
          <span>합계</span>
          <p className="totalPrice">{formatPrice(price)}원</p>
        </article>
        <article className="pointContainer">
          <span className="tagNames">적립</span>
          <p className="pointInfo">구매 시 5원 적립</p>
        </article>
      </article>
    </>
  );
};
export default AddCartSum;

AddCartSum.propTypes = {
  price: priceType.isRequired,
};

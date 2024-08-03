import PlusMinusButton from "./PlusMinusButton";

const AddCartCounter = () => {
  return (
    <>
      <article className="AddCartCounter">
        <span className="product-name">
          [하코야]살얼음 동동 냉메밀 소바 2인분
        </span>
        <div className="count-container">
          <div className="price-container">
            <p className="real-price">7,920원</p>
            <p className="original-price">9,900원</p>
          </div>
          <PlusMinusButton />
        </div>
      </article>
    </>
  );
};
export default AddCartCounter;

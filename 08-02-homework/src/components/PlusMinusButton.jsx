import { func, number } from "prop-types";

const PlusMinusButton = ({ count, addProducts, minusProducts }) => {
  return (
    <>
      <div className="plusMinusButton">
        <button className="plusAndMinusButtons" onClick={minusProducts}>
          <img src="icons/minus.svg" alt="상품 추가를 위한 마이너스 버튼" />
        </button>
        <p className="countProductNumber">{count}</p>
        <button className="plusAndMinusButtons" onClick={addProducts}>
          <img src="icons/plus.svg" alt="상품 추가를 위한 플러스 버튼" />
        </button>
      </div>
    </>
  );
};
export default PlusMinusButton;

PlusMinusButton.propTypes = {
  count: number.isRequired,
  addProducts: func.isRequired,
  minusProducts: func.isRequired,
};

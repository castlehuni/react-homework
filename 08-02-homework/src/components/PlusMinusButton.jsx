const PlusMinusButton = () => {
  return (
    <>
      <div className="plusMinusButton">
        <button className="plusAndMinusButtons" onClick={onclick}>
          <img src="icons/plus.svg" alt="상품 추가를 위한 플러스 버튼" />
        </button>
        <p className="countProductNumber">1</p>
        <button className="plusAndMinusButtons">
          <img src="icons/minus.svg" alt="상품 추가를 위한 마이너스 버튼" />
        </button>
      </div>
    </>
  );
};
export default PlusMinusButton;

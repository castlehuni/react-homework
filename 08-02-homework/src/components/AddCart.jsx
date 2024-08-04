import AddCartHeader from "./AddCartHeader";
import AddCartCounter from "./AddCartCounter";
import AddCartSum from "./AddCartSum";
import ButtonContainer from "./ButtonContainer";
import products from "@/data/datas";
import { useState, useEffect } from "react";
import { calcDiscount } from "@/utils/calcDiscount";

const AddCart = () => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (products.discount === 0) {
      setPrice(products.price);
    } else {
      setPrice(calcDiscount(products.price, products.discount));
    }
  }, [products]);

  function addProducts() {
    const newCount = count + 1;
    setCount(newCount);
    setPrice((prevPrice) => prevPrice + products.price);
  }

  function minusProducts() {
    const newCount = count - 1;
    if (newCount !== 0) {
      setCount(newCount);
      setPrice((prevPrice) => prevPrice - products.price);
    } else if (newCount <= 0) {
      alert("숫자가 0보다 작으면 안됩니다");
      setCount(1);
    }
  }

  return (
    <>
      <section className="addCart">
        <AddCartHeader products={products} />
        <AddCartCounter
          products={products}
          count={count}
          addProducts={addProducts}
          minusProducts={minusProducts}
        />
        <AddCartSum price={price} />
        <ButtonContainer />
      </section>
    </>
  );
};
export default AddCart;

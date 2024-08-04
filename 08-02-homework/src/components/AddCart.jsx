import AddCartHeader from "./AddCartHeader";
import AddCartCounter from "./AddCartCounter";
import AddCartSum from "./AddCartSum";
import ButtonContainer from "./ButtonContainer";
import products from "@/data/datas";

const AddCart = () => {
  return (
    <>
      <section className="addCart">
        <AddCartHeader products={products} />
        <AddCartCounter products={products} />
        <AddCartSum />
        <ButtonContainer />
      </section>
    </>
  );
};
export default AddCart;

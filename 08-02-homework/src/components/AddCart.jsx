import AddCartHeader from "./AddCartHeader";
import AddCartCounter from "./AddCartCounter";
import AddCartSum from "./AddCartSum";
import ButtonContainer from "./ButtonContainer";

const AddCart = () => {
  return (
    <>
      <section className="addCart">
        <AddCartHeader />
        <AddCartCounter />
        <AddCartSum />
        <ButtonContainer />
      </section>
    </>
  );
};
export default AddCart;

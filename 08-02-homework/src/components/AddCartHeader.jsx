import { productsType } from "@/@types/globals.d";

const AddCartHeader = ({ products }) => {
  const { images, title } = products;
  return (
    <>
      <article className="AddCartHeader">
        <img src={images} alt="소바 이미지" />
        <p>{title}</p>
      </article>
    </>
  );
};
export default AddCartHeader;

AddCartHeader.propTypes = {
  products: productsType.isRequired,
};

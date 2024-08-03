import sobaPicPath from "@/assets/foods/soba.jpg?url";

const AddCartHeader = () => {
  return (
    <>
      <article className="AddCartHeader">
        <img src={sobaPicPath} alt="소바 이미지" />
        <p>[하코야]살얼음 동동 냉메밀 소바 2인분</p>
      </article>
    </>
  );
};
export default AddCartHeader;

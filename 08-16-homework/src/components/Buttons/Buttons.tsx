import ButtonStyled from "./buttons.module.css";

interface ButtonsProps {
  labelName: string;
  classNames: string;
  onButtonClick: Function;
}

const Buttons = ({ labelName, classNames, onButtonClick }: ButtonsProps) => {
  let changeClassName = ButtonStyled[classNames];

  return (
    <>
      <button type="button" className={ButtonStyled.Button_Gray}>
        + 생각났어{labelName}
      </button>
    </>
  );
};
export default Buttons;

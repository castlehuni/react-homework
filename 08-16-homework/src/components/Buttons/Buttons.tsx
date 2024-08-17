import ButtonStyled from "./buttons.module.css";

interface ButtonsProps {
  children: string;
  classNames: string;
  onButtonClick: Function;
}

const Buttons = ({ children, classNames, onButtonClick }: ButtonsProps) => {
  let changeClassName = ButtonStyled[classNames];

  return (
    <>
      <button type="button" className={changeClassName}>
        {children}
      </button>
    </>
  );
};
export default Buttons;

import { node } from "prop-types";
import SquareStyles from "./Square.module.css";

const Square = ({ children }) => {
  const isDisabled = !!children;

  return (
    <>
      <button
        type="button"
        className={SquareStyles.Square}
        disabled={isDisabled}
      >
        {children}
      </button>
    </>
  );
};
export default Square;

Square.propTypes = {
  children: node,
};

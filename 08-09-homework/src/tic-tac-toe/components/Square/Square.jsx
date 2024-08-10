import { node, func, object } from "prop-types";
import SquareStyles from "./Square.module.css";

const Square = ({ children, onPlay, style }) => {
  const isDisabled = !!children;

  return (
    <>
      <button
        type="button"
        className={SquareStyles.Square}
        disabled={isDisabled}
        onClick={onPlay}
        style={style}
      >
        {children}
      </button>
    </>
  );
};
export default Square;

Square.propTypes = {
  children: node,
  onPlay: func,
  style: object,
};

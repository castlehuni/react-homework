import { PLAYER } from "@/tic-tac-toe/Constants";
import Square from "../Square/Square";

const Squares = () => {
  return (
    <>
      <Square>{PLAYER.ONE}</Square>
      <Square>{PLAYER.TWO}</Square>
      <Square></Square>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </>
  );
};
export default Squares;

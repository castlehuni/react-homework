import { arrayOf, number, oneOf, shape } from "prop-types";
import { PLAYER_LIST } from "../Constants";

export const OneOfPlayerType = oneOf(PLAYER_LIST);
export const OneOfPlayerListType = arrayOf(OneOfPlayerType);
export const WhosWinnerType = shape({
  winners: OneOfPlayerType,
  condition: arrayOf(number),
});

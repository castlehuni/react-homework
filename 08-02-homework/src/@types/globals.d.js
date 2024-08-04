import { exact, string, number } from "prop-types";

export const productsType = exact({
  title: string,
  images: string,
  price: number,
  discount: number,
});

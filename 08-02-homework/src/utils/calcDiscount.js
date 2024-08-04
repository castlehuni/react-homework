export function calcDiscount(price, discount) {
  return Math.floor((price * ((100 - discount) / 100)) / 10) * 10;
}

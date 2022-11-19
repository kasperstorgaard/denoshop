import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function AddToCart() {
  // case 1: not added
  // case 2: added, adjust quantities
  // case 3: fully sold out
  // case 4: sold out above 2 quantity
  return (
    <>
      <button/>
      <button/>
    </>
  );
}

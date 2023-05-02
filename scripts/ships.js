import { getShippingShips } from "./database.js";

const ships = getShippingShips();

export const ShipsList = () => {
  let shipsHTML = "<ul>";

  for (const shipy of ships) {
    shipsHTML += `<li data-haulerid= "${shipy.haulerId}" data-id="${shipy.id}" data-type="shipping-ship">
        ${shipy.name}
        </li>`;
  }

  shipsHTML += "</ul>";

  return shipsHTML;
};


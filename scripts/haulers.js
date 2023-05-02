import { getHaulingShips, getShippingShips } from "./database.js";

const haulers = getHaulingShips();
export const haulerList = () => {
  let haulerHTML = "<ul>";

  for (const hauler of haulers) {
    haulerHTML += `<li data-id="${hauler.id}" data-type="hauler">
        ${hauler.name} 
        </li>`;
  }
  haulerHTML += "</ul>";

  return haulerHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "hauler") {
    const haulerId = itemClicked.dataset.id;

    let shipCount = 0;

    const ships = getShippingShips();
    for (const ship of ships) {
      if (ship.haulerId === parseInt(haulerId)) {
        shipCount++;
      }
    }

    window.alert(`This hauler is carrying ${shipCount} ships.`);
  }
});

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
  
    if (itemClicked.dataset.type === "shipping-ship") {
      const haulerId = itemClicked.dataset.haulerid;
  
      let haulingShip = { name: "Incorrect" };
      const haulers = getHaulingShips();
  
      for (const hauler of haulers) {
        if (hauler.id === parseInt(haulerId)) {
          haulingShip = hauler;
        }
      }
  
      window.alert(
        `${itemClicked.textContent} is being hauled by ${haulingShip.name}`
      );
    }
  });

  document.addEventListener("click", (clickEvent) => {
      const itemClicked = clickEvent.target;
      if (itemClicked.dataset.type === "dock") {
        const dockId = itemClicked.dataset.id;
        const haulers = getHaulingShips();
        let dockHaulers = [];
        for (const hauler of haulers) {
          if (hauler.dockId === parseInt(dockId)) {
            dockHaulers.push(hauler.name);
          }
        }
        if (dockHaulers.length === 0) {
          window.alert(
            `${itemClicked.dataset.name} dock is currently unloading nothing`
          );
        } else if (dockHaulers.length === 1) {
          window.alert(
            `${itemClicked.dataset.name} dock is currently unloading ${dockHaulers}`
          );
        } else {
          window.alert(
            `${
              itemClicked.dataset.name
            } dock is currently unloading ${dockHaulers.join(", ")}`
          );
        }
      }
    });

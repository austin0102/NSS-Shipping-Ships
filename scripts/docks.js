import { getDocks } from "./database.js";

const docks = getDocks();

export const DockList = () => {
  let docksHTML = "<ul>";

  for (const dock of docks) {
    docksHTML += `<li data-type="dock" data-id="${dock.id}" data-name="${dock.location}">
            ${dock.location} can hold ${dock.volume} million tons of cargo
        </li>`;
  }

  docksHTML += "</ul>";

  return docksHTML;
};




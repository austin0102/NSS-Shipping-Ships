import { DockList } from "./docks.js";
import { ShipsList } from "./ships.js";
import { haulerList } from "./haulers.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ships</h1>
<article class="details">
    <section>
        <h2>Docks</h2>
        ${DockList()}
    </section>
    <section>
        <h2>Ships</h2>
        ${ShipsList()}
    </section>
    <section>
        <h2>Haulers</h2>
        ${haulerList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML


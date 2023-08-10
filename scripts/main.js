import { PaintsFetchFunction } from "./paints.js"
import { InteriorFetchFunction } from "./interior.js";
import { TechFetchFunction } from "./tech.js";
import { WheelFetchFunction } from "./wheels.js";

const container = document.querySelector("#container")


const render = async() => {
    const paintsHTML = await PaintsFetchFunction()
    const interiorHTML = await InteriorFetchFunction()
    const techHTML = await TechFetchFunction()
    const wheelHTML = await WheelFetchFunction()

    container.innerHTML = `
    <section class="all_choices_html">
        <div class="paints_html">
        ${paintsHTML}
        </div>
        <div class="interior_html">
        ${interiorHTML}
        </div>
        </div>
        <div class="tech_html">
        ${techHTML}
        </div>    </div>
        <div class="wheel_html">
        ${wheelHTML}
        </div>






    </section>
`



};


render()
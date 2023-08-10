import { PaintsFetchFunction } from "./paints.js"
import { InteriorFetchFunction } from "./interior.js";
import { TechFetchFunction } from "./tech.js";
import { WheelFetchFunction } from "./wheels.js";
import { SaveSubmission } from "./submissionbtn.js";
import { Orders } from "./orders.js";

const container = document.querySelector("#container")


const render = async() => {
    const paintsHTML = await PaintsFetchFunction()
    const interiorHTML = await InteriorFetchFunction()
    const techHTML = await TechFetchFunction()
    const wheelHTML = await WheelFetchFunction()
    const savebtnHTML = await SaveSubmission()
    const ordersHTML = await Orders()

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
        <div class="save_btn_html">
        ${savebtnHTML}
        </div>
        <div class="orders_html">
        ${ordersHTML}
        </div>

        
        </section>
        `
        
        
        document.addEventListener("orderSaved", render);
        
    };


render()
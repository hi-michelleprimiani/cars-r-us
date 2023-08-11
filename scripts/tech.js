import { setTechnology } from "./transientstate.js"



const changeHandlerTech = (changeEvent) => {
    if (changeEvent.target.id === "technologys") {
        const chosenOption = changeEvent.target.value
        setTechnology(parseInt(chosenOption))
    }
}



export const TechFetchFunction = async() => {
    const response = await fetch("http://localhost:8088/packages")
    const technologys = await response.json()

    document.addEventListener("change", changeHandlerTech)

    let html = `<h2>Technology</h2>
    <select id="technologys">
    <option value="0">Choose Your Technology</option>`
    const technologyArray = technologys.map((technology) => {
        return `<option value="${technology.id}">${technology.name}</option>`
    }
    )
    
    html += technologyArray.join("")
    html += `</select>`
    return html
}
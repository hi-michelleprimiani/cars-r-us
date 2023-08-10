


const changeHandlerTech = (changeEvent) => {
    if (changeEvent.target.id === "technology") {
        const chosenOption = changeEvent.target.value
        console.log(parseInt(chosenOption))
    }
}



export const TechFetchFunction = async() => {
    const response = await fetch("http://localhost:8088/technology")
    const technology = await response.json()

    document.addEventListener("change", changeHandlerTech)

    let html = `<h2>Technology</h2>
    <select id="technology">
    <option value="0">Choose Your Technology</option>`
    const technologyArray = technology.map((tech) => {
        return `<option value="${tech.id}">${tech.name}</option>`
    }
    )
    
    html += technologyArray.join("")
    html += `</select>`
    return html
}



const changeHandlerInterior = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
        const chosenOption = changeEvent.target.value
        console.log(parseInt(chosenOption))
    }
}


export const InteriorFetchFunction = async() => {
    const response = await fetch("http://localhost:8088/interior")
    const interiors = await response.json()

    document.addEventListener("change", changeHandlerInterior)

    let html = `<h2>Interior</h2>
                <select id="interior"> 
                <option value="0">Choose Your Interior</option>`
    const interiorsArray = interiors.map((interior) => {
        return `<option value="${interior.id}">${interior.name}</option>`
    }
    )
    
    html += interiorsArray.join("")
    html += `</select>`
    return html
}



const changeHandlerPaints = (changeEvent) => {
    if (changeEvent.target.id === "paints") {
        const chosenOption = changeEvent.target.value
        console.log(parseInt(chosenOption))
    }
}






export const PaintsFetchFunction = async() => {
    const response = await fetch("http://localhost:8088/paint");
    const paints = await response.json()


document.addEventListener("change", changeHandlerPaints)

    let html = `<h2>Paints</h2>
                <select id="paints">
                <option value="0">Choose Your Color</option>`
    const paintsArray = paints.map((paint) => {
        return `<option value="${paint.id}">${paint.name}</option>`
    }
    )
    html += paintsArray.join("")
    html += `</select>`
    return html
}
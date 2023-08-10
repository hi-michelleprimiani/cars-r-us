



const changeHandlerWheels = (changeEvent) => {
   if (changeEvent.target.id === "wheels") {
      const chosenOption = changeEvent.target.value
      console.log(parseInt(chosenOption))
   }
}



export const WheelFetchFunction = async() => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    document.addEventListener("change", changeHandlerWheels)

    let html = `<h2>Wheels</h2>
                <select id="wheels">
                <option value="0">Choose Your Wheels</option>`

    const wheelsArray = wheels.map((wheel) => {
        return `<option value="${wheel.id}">${wheel.name}</option>`
    })

    html += wheelsArray.join("")
    html += `</select>`
    return html
}
const transientState = {
    paintId: 0,
    interiorId: 0,
    packageId: 0,
    wheelId: 0
}

export const setPaint = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const setInterior = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const setTechnology = (chosenTech) => {
    transientState.packageId = chosenTech
    console.log(transientState)
}

export const setWheels = (chosenWheels) => {
    transientState.wheelId = chosenWheels
    console.log(transientState)
}


export const saveOrder = async () => {
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transientState),
    };
  
    const response = await fetch("http://localhost:8088/orders", postOptions);
  
    // this is what is allowing save submission to post to orders without refreshing
    const saveEvent = new CustomEvent("orderSaved");
    document.dispatchEvent(saveEvent);
  };
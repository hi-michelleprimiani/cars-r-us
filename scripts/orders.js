

export const Orders = async() => {
    const response = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=package&_expand=wheel")
    const orders = await response.json()

let html = `<h2>Orders</h2>`
const ordersArray = orders.map((order) => {
    let orderPrice = order.paint.price + order.interior.price + order.package.price + order.wheel.price
    let convertedPrice = 
    orderPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<div>Order ${order.id} costs ${convertedPrice}</div>`
});

html += ordersArray.join("")
return html
}
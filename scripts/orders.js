



export const Orders = async() => {
    const response = await fetch("http://localhost:8088/orders")
    const orders = await response.json()

let html = `<h2>Orders</h2>`
const ordersArray = orders.map((order) => {
    return `<div>Order ${order.id}</div>`
})

html += ordersArray.join("")
return html
}
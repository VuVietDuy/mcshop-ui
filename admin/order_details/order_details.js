function renderOrderDetailPage(orderId) {
    fetch("./order_details/index.html")
        .then(response => {
            return response.text()
            console.log(response.text())
        })
        .then(data => {
            content.innerHTML = data
            setActive(manageOrderNav)

            const order = getOrderById(orderId)
            console.log(order);
            
            $('.header_title_order_detail').innerHTML = `Order ${orderId}`
            const list = $('.list_product_of_order')
            order.listProducts.map((item) => {
                const product = getProductById(item.productId);
                const price = product.isSale ? product.salePrice : product.regularPrice
                addRowIntoListProducts(list, item.productId, item.color, item.size, price, item.quantity, item.total);
            })

            $('.customer_id_title').innerHTML = `Customer ID : ${order.customerId}`

        });

}


function addRowIntoListProducts(table, productName, color, size, price, quantity, total) {

    const newRow = document.createElement('tr')

    const r = `<td class="product_name align-middle p-3">${productName}</td>
                <td class="color align-middle p-3">${color}</td>
                <td class="size align-middle p-3">${size}</td>
                <td class="price align-middle p-3 text-end">${price}</td>
                <td class="quantity align-middle p-3">${quantity}</td>
                <td class="total align-middle p-3">${total}</td>
                `
    newRow.innerHTML = r
    table.appendChild(newRow)
}
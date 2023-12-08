manageOrderNav.addEventListener('click', function() {
    fetch("./manage_order/index.html")
        .then(response => {
            return response.text()
            console.log(response.text())
        })
        .then(data => {
            content.innerHTML = data
            setActive(manageOrderNav)

            const tableManageOrder = $(".manage_order_table_content")
            orders.map((item) => {
                const customer = getCustomerById(item.customerId)
                console.log(customer);
                const src = customer.srcAvatarImg === "" ? "../access/image/Avatar/avatar.jpeg" : customer.srcAvatarImg;
                console.log(src);
                addRowIntoManageOderTable(tableManageOrder, item.orderId, item.total , src, customer.customerName, item.paymentStatus, item.paymentMethod, item.status, item.createAt)
            })

            $('.view_order').addEventListener('click', viewMoreOrder)
        });
});

function addRowIntoManageOderTable(table, orderId, total, srcAvatarCustomer, customerName, paymentStatus, paymentMethod, orderStatus, date) {
    const newRow = document.createElement('tr');
    newRow.className = 'position-static';
    
    const row = `<td class="fs--1 align-middle">
                <div class="form-check mb-0 fs-0">
                    <input class="form-check-input" type="checkbox">
                </div>
                </td>
                <td class="order align-middle">${orderId}</td>
                <td class="product align-middle">${total}</td>
                <td class="name align-middle">
                    <div class="d-flex align-items-center">
                        <div class="avatar rounded-circle overflow-hidden" style="width: 32px; height: 32px;">
                            <img class="" src="${srcAvatarCustomer}" alt="" style="width: 32px;">
                        </div>
                        <span class="text-1100 fw-bold ms-2">${customerName}</span>
                    </div>
                </td>
                <td class="payment_status align-middle">
                    <span class="badge badge-tag me-2 mb-2  text-bg-success">${paymentMethod}</span>
                </td>
                <td class="payment_status align-middle">
                    <span class="badge badge-tag me-2 mb-2  ${paymentStatus==="Đã thanh toán" ? "text-bg-success" : "text-bg-warning"}">${paymentStatus}</span>
                </td>
                <td class="fulfilment_status align-middle white-space-nowrap review pb-2 ps-3">
                    <span class="badge badge-tag me-2 mb-2 ${orderStatus==="Đã giao hàng" ? "text-bg-success" : "text-bg-info"}">${orderStatus}</span>
                </td>
                <td class="time align-middle white-space-nowrap text-600">${date}</td>
                <td class="action ps-2 align-middle text-center">
                    <div class="dropdown">
                        <button class="btn bg-body-tertiary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="view_order dropdown-item" href="#"><i class="fa-solid fa-eye"></i><span class="ms-3">Chi tiết</span></a></li>
                            <li><a class="edit_order dropdown-item" href="#"><i class="fa-regular fa-pen-to-square"></i><span class="ms-3">Chỉnh sửa</span></a></li>
                            <li><a class="delete_order dropdown-item" href="#"><i class="fa-solid fa-trash"></i><span class="ms-3"> Xoá</span></a></li>
                        </ul>
                    </div>
                </td>`       
    newRow.innerHTML = row;
    
    table.appendChild(newRow);
}

function viewMoreOrder() {
    renderOrderDetailPage('#00002')
}
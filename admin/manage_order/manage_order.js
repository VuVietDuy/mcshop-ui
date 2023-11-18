manageOrderNav.addEventListener('click', function() {
    fetch("./manage_order/index.html")
        .then(response => {
            return response.text()
            console.log(response.text())
        })
        .then(data => {
            content.innerHTML = data
            setActive(manageOrderNav)

        });
});

function addRowIntoManageOderTable(table, orderId, total, srcAvatarCustomer, customerName, paymentStatus, fulfilmentStatus, date) {
    const newRow = document.createElement('tr');
    newRow.className = 'position-static';
    
    const row = `<td class="fs--1 align-middle">
        <div class="form-check mb-0 fs-0"><input class="form-check-input" type="checkbox" data-bulk-select-row="{&quot;product&quot;:&quot;Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset&quot;,&quot;productImage&quot;:&quot;/products/5.png&quot;,&quot;price&quot;:&quot;$120&quot;,&quot;category&quot;:&quot;Fashion&quot;,&quot;tags&quot;:[&quot;Music&quot;,&quot;Audio&quot;,&quot;Meeting&quot;,&quot;Record&quot;,&quot;Sound&quot;],&quot;star&quot;:false,&quot;vendor&quot;:&quot;Inertia Fashion&quot;,&quot;publishedOn&quot;:&quot;Nov 8, 5:32 PM&quot;}"></div>
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
        <span class="badge badge-tag me-2 mb-2 text-bg-success">${paymentStatus}</span>
    </td>
    <td class="fulfilment_status align-middle white-space-nowrap review pb-2 ps-3">
        <span class="badge badge-tag me-2 mb-2 text-bg-success">${fulfilmentStatus}</span>
    </td>
    <td class="time align-middle white-space-nowrap text-600">${date}</td>
    <td class="action ps-2 align-middle">
        <div class="dropdown">
            <button class="btn bg-body-tertiary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-ellipsis"></i>
            </button>
            <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Chỉnh sửa</a></li>
            <li><a class="dropdown-item" href="#">Xoá</a></li>
            </ul>
        </div>
    </td>`       
    newRow.innerHTML = row;
    
    table.appendChild(newRow);
}
            
manageUserNav.addEventListener('click', function() {
    
    fetch("./manage_user/index.html")
        .then(response => {
            return response.text()
            console.log(response.text())
        })
        .then(data => {
            content.innerHTML = data
            setActive(manageUserNav)

            const tableManageUser = document.querySelector(".manage_user_table_content")

            customers.map((customer) => {
                addRowToManageUserTable(tableManageUser, customer.srcAvatarImg, customer.customerName, customer.email, customer.phone, customer.address, customer.orderAmount, customer.createdAt)
            })
        });

});

function addRowToManageUserTable(tableManageUser, srcAvatarImg, customerName, email, phone, address, orderAmount, createdAt) {
    const newRow = document.createElement('tr')

    const row = `<td class="fs--1 align-middle">
                    <div class="form-check mb-0 fs-0"><input class="form-check-input" type="checkbox" data-bulk-select-row="{&quot;product&quot;:&quot;Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset&quot;,&quot;productImage&quot;:&quot;/products/5.png&quot;,&quot;price&quot;:&quot;$120&quot;,&quot;category&quot;:&quot;Fashion&quot;,&quot;tags&quot;:[&quot;Music&quot;,&quot;Audio&quot;,&quot;Meeting&quot;,&quot;Record&quot;,&quot;Sound&quot;],&quot;star&quot;:false,&quot;vendor&quot;:&quot;Inertia Fashion&quot;,&quot;publishedOn&quot;:&quot;Nov 8, 5:32 PM&quot;}"></div>
                </td>
                <td class="name align-middle">
                    <div class="d-flex align-items-center">
                        <div class="avatar rounded-circle overflow-hidden" style="width: 32px; height: 32px;">
                            <img class="" src="${srcAvatarImg === "" ? "../access/image/Avatar/avatar.jpeg" : srcAvatarImg}" alt="" style="width: 32px;">
                        </div>
                        <span class="text-1100 fw-bold ms-2">${customerName}</span>
                    </div>
                </td>
                <td class="email align-middle">${email}</td>
                <td class="phone align-middle text-center">${phone}</td>
                <td class="address align-middle">${address}</td>
                <td class="tags align-middle text-center">${orderAmount}</td>
                <td class="time align-middle white-space-nowrap text-600">${createdAt}</td>
                <td class="action ps-2 align-middle d-flex justify-content-center">
                    <div class="dropdown">
                        <button class="btn bg-body-tertiary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis"></i>
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Chỉnh sửa</a></li>
                        <li><a class="dropdown-item" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Xoá</a></li>
                        </ul>
                    </div>
                </td>`
                newRow.innerHTML = row;

                tableManageUser.appendChild(newRow);
}
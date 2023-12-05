manageProductNav.addEventListener('click', renderManageProduct);

function renderManageProduct() {
    fetch("./manage_product/index.html")
        .then(response => {
            return response.text()
            console.log(response.text())
        })
        .then(data => {
            content.innerHTML = data
            setActive(manageProductNav)

            $(".add_product_btn")?.addEventListener('click', handleOnclickBtnAddProduct)
            const table = $(".manage_product_table_content")
            
            products?.map((product) => {
                addRow(table, product.imgSrcs[0], product.productTitle, product.regularPrice, product.category, product.colors, product.publishedAt);
            })
            
            $('.edit_product')?.addEventListener('click', handleEditProduct)
        });
}

function addRow(table, imgSrc, productTitle, price, category, colors, publishedAt) {
    const newRow = document.createElement('tr');
    newRow.className = 'position-static';

    var c = ""
    colors.map((item)=> {
        c = c + `<a class="text-decoration-none" href="#!"><span class="badge badge-tag me-2 mb-2 text-bg-secondary">${item}</span></a>`
    })
    
    const row = `<td class="fs--1 align-middle">
        <div class="form-check mb-0 fs-0"><input class="form-check-input" type="checkbox"></div>
        </td>
        <td class="">
            <div>
                <img class="border" src="${imgSrc}" alt="" width="64">
            </div>
        </td>
        <td class="product align-middle">${productTitle}</td>
        <td class="price align-middle white-space-nowrap fw-bold text-700">${price}</td>
        <td class="category align-middle white-space-nowrap text-600 ">${category}</td>
        <td class="tags align-middle review pb-2 ps-3" style="min-width:225px;">
            ${c}
        </td>
        <td class="time align-middle white-space-nowrap text-600">${publishedAt}</td>
        <td class="action ps-2 align-middle">
        <div class="dropdown d-flex justify-content-center">
            <button class="btn bg-body-tertiary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-ellipsis"></i>
            </button>
            <ul class="dropdown-menu">
                <li><a class="edit_product dropdown-item" href="#">Chỉnh sửa</a></li>
                <li><a class="dropdown-item" href="#">Xoá</a></li>
            </ul>
        </div>
    </td>`
                    
    newRow.innerHTML = row;
    
    table.appendChild(newRow);
}
                
function handleOnclickBtnAddProduct() {
    renderAddProduct()
}

function handleEditProduct() {
    const a = $('.edit_product')
    console.log(a);
}

// set default 
renderManageProduct();
setActive(manageProductNav)
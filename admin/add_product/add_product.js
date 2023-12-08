function renderAddProduct(id) {
    fetch("./add_product/index.html")
        .then(response => {
            return response.text()
            console.log(response.text())
        })
        .then(data => {
            content.innerHTML = data
            setActive(manageProductNav)

            $(".pre_btn").addEventListener('click', handlePreBtn)

            if(id!=null) {
                const product = getProductById(id)
                console.log(product);
                $("#productName").value = product.productTitle;
                $("#productDescription").value = product.productDescription;
                // $("#productImages").value = product.productImages;
                $("#isSale").value = product.isSale;
                $("#category").value = product.category;
                $("#collection").value = product.collection;
                $("#regularPrice").value = product.regularPrice;
                $("#salePrice").value = product.salePrice;
            }

            $$(".infoInput").forEach(btn => {
                btn.addEventListener('click', handleChangeInfo);
            });
            $(".add_product_btn").addEventListener('click',handleSubmit)
        });
}

const handlePreBtn = () => {
    renderManageProduct()
}

function handleSubmit(event) {
    event.preventDefault();
    const form = $(".product_detail")
    const formData = new FormData(form);

    for (const entry of formData.entries()) {
        console.log(entry[0] + ': ' + entry[1]);

    }
}

function handleChangeInfo(e) {
    const a = e.target.getAttribute('key');
    console.log(a);
    const infoInput = [
        {
            key: 'pricing',
            element: $(".pricing")
        },
        {
            key: 'stock',
            element: $(".stock")
        },
        {
            key: 'attributes',
            element: $(".attributes")
        }
    ]
    infoInput.forEach((item) => {
        item.element.classList.add("d-none")
        if (item.key===a) {
            item.element.classList.remove("d-none")
            console.log(item.element);
        }
    })
}
function renderAddProduct() {
    fetch("./add_product/index.html")
        .then(response => {
            return response.text()
            console.log(response.text())
        })
        .then(data => {
            content.innerHTML = data
            setActive(manageProductNav)

            $(".pre_btn").addEventListener('click', handlePreBtn)
        });
}

const handlePreBtn = () => {
    renderManageProduct()
}
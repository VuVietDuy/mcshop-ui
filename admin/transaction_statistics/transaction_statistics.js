var type = 'bar'

transactionStatistics.addEventListener('click', function() {
    fetch("./transaction_statistics/index.html")
    .then(response => {
        return response.text()
        console.log(response.text())
    })
    .then(data => {
        content.innerHTML = data

        setActive(transactionStatistics)
        drawChart('thong_ke_giao_dich', type, dataChart1)
        drawChart('thong_ke_giao_dich_1', type, dataChart2)

        const table = $('.top_selling_table');
        topSelling.map((item) => {
            addRowInTopSellingTable(table, item.name, item.price, item.quantity, item.amount);
        })

        const tableTopRegion = $('.table_regoins');
        topRegion.map((item) => {
            addRowInTopSellingTable(tableTopRegion, item.city, item.userQuanlity, item.productQuantity, item.amount);
        })

    });
});

var dataChart1 = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    datasets: [{
        label: 'Doanh thu',
        data: [435, 359, 678, 553, 255, 800, 500, 510, 546, 411, 300, 400],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

var dataChart2 = {
    labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
    datasets: [{
        label: 'Doanh số bán hàng',
        data: [43, 35, 67, 53, 55, 80, 50],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

function drawChart(id,typeChar, data) {
    
    var ctx = document.getElementById(id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: typeChar,
        data: data,
        options: {
        }
    });
}

function addRowInTopSellingTable(table, name, price, quantity, amount) {
    const newRow = document.createElement('tr');
    const row = `<td>
                    <h6 class="font-14 my-1 fw-normal">${name}</h6>
                </td>
                <td>
                    <h6 class="font-14 my-1 fw-normal">${price}</h6>
                    <span class="text-muted font-13">Giá</span>
                </td>
                <td>
                    <h6 class="font-14 my-1 fw-normal">${quantity}</h6>
                    <span class="text-muted font-13">Số lượng</span>
                </td>
                <td>
                    <h6 class="font-14 my-1 fw-normal">${amount}</h6>
                    <span class="text-muted font-13">Doanh thu</span>
                </td>`
                    
    newRow.innerHTML = row;
    
    table.appendChild(newRow);
}

function addRowInTopRegionTable(table, city, userQuanlity, productQuantity, amount) {
    const newRow = document.createElement('tr');
    const row = `<td>
                    <h6 class="font-14 my-1 fw-normal">${city}</h6>
                </td>
                <td>
                    <h6 class="font-14 my-1 fw-normal">${userQuanlity}</h6>
                    <span class="text-muted font-13">Lượng người dùng</span>
                </td>
                <td>
                    <h6 class="font-14 my-1 fw-normal">${productQuantity}</h6>
                    <span class="text-muted font-13">Lượng sản phẩm</span>
                </td>
                <td>
                    <h6 class="font-14 my-1 fw-normal">${amount}</h6>
                    <span class="text-muted font-13">Tổng doanh thi</span>
                </td>`
                    
    newRow.innerHTML = row;
    
    table.appendChild(newRow);
}
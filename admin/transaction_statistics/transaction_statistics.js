var type = 'line'

transactionStatistics.addEventListener('click', function() {
    fetch("./transaction_statistics/index.html")
    .then(response => {
        return response.text()
        console.log(response.text())
    })
    .then(data => {
        content.innerHTML = data

        setActive(transactionStatistics)
        drawChart('thong_ke_giao_dich', type)
        drawChart1('thong_ke_giao_dich_1', type)

    });
});

function drawChart(id,typeChar) {
    var data = {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        datasets: [{
            label: 'Doanh số bán hàng',
            data: [435, 359, 678, 553, 255, 800, 500, 510, 546, 411, 300, 400],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };
    
    // Thiết lập biểu đồ cột
    var ctx = document.getElementById(id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: typeChar,
        data: data,
        options: {
        }
    });
}

function drawChart1(id,typeChar) {
    var data = {
        labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
        datasets: [{
            label: 'Doanh số bán hàng',
            data: [43, 35, 67, 53, 55, 80, 50],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };
    
    // Thiết lập biểu đồ cột
    var ctx = document.getElementById(id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: typeChar,
        data: data,
        options: {

        }
    });
}
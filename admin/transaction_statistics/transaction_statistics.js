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
        drawChart('thong_ke_giao_dich', type)

    });
});

function drawChart(id,typeChar) {
    var data = {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        datasets: [{
            label: 'Doanh số bán hàng',
            data: [12, 19, 3, 5, 2, 8, 15, 10, 6, 11, 20, 25],
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
            // scales: {
            //     y: {
            //         beginAtZero: true
            //     }
            // }
        }
    });
}

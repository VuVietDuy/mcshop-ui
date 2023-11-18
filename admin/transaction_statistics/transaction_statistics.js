transactionStatistics.addEventListener('click', function() {
    loadComponent("./transaction_statistics/index.html")
    setActive(transactionStatistics)
    // drawChart()
});

function drawChart(ctx) {
    // Dữ liệu mẫu cho biểu đồ
    var transactionData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Transaction Amount',
            data: [1500, 2000, 1800, 2500, 3000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    // Cấu hình biểu đồ
    var transactionOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Lấy canvas và vẽ biểu đồ
    ctx.getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: transactionData,
        options: transactionOptions
    });
}
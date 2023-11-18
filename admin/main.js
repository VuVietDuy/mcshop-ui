const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const content = $(".management_part");
const manageUserNav = $(".manage_user");
const manageProductNav = $(".manage_product");
const manageOrderNav = $(".manage_order");
const manageComplain = $(".manage_complain");
const transactionStatistics = $(".transaction_statistics")
const violatingAccount = $(".violating_account")
const allNavItem = $$(".nav-link");

function setActive(navItem) {
    allNavItem.forEach(element => {
        element.classList.remove("active");
    });
    
    navItem.classList.add("active")
}

function loadComponent(source) {
    fetch(source)
        .then(response => {
            return response.text()
            console.log(response.text())
        })
        .then(data => {
            content.innerHTML = data;
            
            const ctx = document.getElementById('transactionChart')
            if (ctx != null) {
                drawChart(ctx)
            }
        });
}

violatingAccount.addEventListener('click', function() {
    loadComponent("./violating_account/index.html")
    setActive(violatingAccount)
});
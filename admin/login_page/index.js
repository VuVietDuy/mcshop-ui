
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const formLogin = $(".login-form")
const usernameInput = $(".username")
const passwordInput = $(".password")
const btnLogin = $(".login")

formLogin.onsubmit = function(e) {
    e.preventDefault();

    // get data from form login
    const username = e.target.username.value
    const password = e.target.password.value
    const rememberMe = e.target.rememberMe.checked
    console.log(username, password, rememberMe)

    window.location.href = "../index.html"
}
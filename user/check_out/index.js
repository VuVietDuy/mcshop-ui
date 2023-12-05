const $ = document.querySelector.bind(document);

const nextBtn = $(".next_b2");
const preBtn = $(".pre_b1");
const shippingInfoB1 = $(".shipping_info_b1");
const shippingInfoB2 = $(".shipping_info_b2");

nextBtn.addEventListener('click', function() {
    console.log("next b2");
    shippingInfoB1.classList.add("d-none")
    shippingInfoB2.classList.remove("d-none")
})

preBtn.addEventListener('click', function() {
    console.log("pre b1");
    shippingInfoB1.classList.remove("d-none")
    shippingInfoB2.classList.add("d-none")
})
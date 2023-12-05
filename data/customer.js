function getCustomerById(customerId) {
    const customer = customers.find(item => item.customerId === customerId);

    if (customer) {
        return customer;
    } else {
        return "";
    }
}

const customers = [
    {
        customerId: "00001",
        srcAvatarImg: "../access/image/customer/customer_1.jpg",
        customerName: "Vu Viet Duy",
        email: "vuvietduy@gmail.com",
        phone: "0935263446",
        address: "Huu Van Chuong My Ha Noi",
        orderAmount: 54,
        createdAt: "Nov 8, 5:32 PM",
    },
    {
        customerId: "00002",
        srcAvatarImg: "",
        customerName: "Nguyễn Văn An",
        email: "vanan@gmail.com",
        phone: "0223526346",
        address: "Huu Van Chuong My Ha Noi",
        orderAmount: 54,
        createdAt: "Nov 8, 5:32 PM",
    },
    {
        customerId: "00002",
        srcAvatarImg: "",
        customerName: "Trần Thị Nhung",
        email: "nhung@gmail.com",
        phone: "0324563246",
        address: "Huu Van Chuong My Ha Noi",
        orderAmount: 54,
        createdAt: "Nov 8, 5:32 PM",
    },
    {
        customerId: "00004",
        srcAvatarImg: "../access/image/customer/customer_2.webp",
        customerName: "Đỗ Quốc Huy",
        email: "quochiy@gmail.com",
        phone: "0276226346",
        address: "Huu Van Chuong My Ha Noi",
        orderAmount: 54,
        createdAt: "Nov 8, 5:32 PM",
    },
    {
        customerId: "00005",
        srcAvatarImg:  "../access/image/customer/customer_3.jpg",
        customerName: "Hoàng Tến Dũng",
        email: "hoantiendung@gmail.com",
        phone: "0456753456",
        address: "Huu Van Chuong My Ha Noi",
        orderAmount: 54,
        createdAt: "Nov 8, 5:32 PM",
    },
    {
        customerId: "00006",
        srcAvatarImg:  "../access/image/customer/customer_4.png",
        customerName: "Quý Lâm",
        email: "quylam@gmail.com",
        phone: "0234532466",
        address: "Huu Van Chuong My Ha Noi",
        orderAmount: 54,
        createdAt: "Nov 8, 5:32 PM",
    },
    {
        customerId: "00007",
        srcAvatarImg: "",
        customerName: "Van Nam",
        email: "vananm@gmail.com",
        phone: "0992234626",
        address: "Huu Van Chuong My Ha Noi",
        orderAmount: 54,
        createdAt: "Nov 8, 5:32 PM",
    },
    {
        customerId: "00008",
        srcAvatarImg:  "../access/image/customer/customer_1.jpg",
        customerName: "Anh Tuấn",
        email: "anhtuan@gmail.com",
        phone: "0235452346",
        address: "Huu Van Chuong My Ha Noi",
        orderAmount: 54,
        createdAt: "Nov 8, 5:32 PM",
    },
    {
        customerId: "00009",
        srcAvatarImg: "",
        customerName: "Mr. Aress",
        email: "aressss@gmail.com",
        phone: "0121234146",
        address: "Huu Van Chuong My Ha Noi",
        orderAmount: 54,
        createdAt: "Nov 8, 5:32 PM",
    },
    // {
    //     customerId: "000010",
    //     srcAvatarImg:  "../access/image/customer/customer_3.jpg",
    //     customerName: "Hạo Nam",
    //     email: "haonam@gmail.com",
    //     phone: "0132219946",
    //     address: "Huu Van Chuong My Ha Noi",
    //     orderAmount: 54,
    //     createdAt: "Nov 8, 5:32 PM",
    // },
]
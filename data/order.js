function getOrderById(orderId) {
    const order = orders.find(item => item.orderId === orderId);
    return order;
}

const paymentMethods = [
    'Chuyển khoản',
    'Payment on delivery'
]

const orderStatuses = [
    'Order Placed',
    'Packed',
    'Shipped',
    'Delivered',
]

const orders = [
    {
        orderId: '#00001',
        listProducts: [
            {
                productId: "00001",
                quantity: 2,
                size: 'XL',
                color: "Black",
                total: 400,
            },
            {
                productId: "00002",
                quantity: 2,
                size: 'XL',
                color: "Black",
                total: 400,
            }
        ],
        total: 800,
        customerId: "00001",
        status: 'shipping',
        paymentMethod: 'Chuyển khoản',
        paymentStatus: 'Đã thanh toán',
        orderStatus: 'Shipped',
        shippingCharge: 30,
        shippingInfo: "Hữu Văn, Chương Mỹ, Hà Nội",
        coupon: 10,
        createAt: '	Nov 8, 5:32 PM',
    },
    {
        orderId: '#00002',
        listProducts: [
            {
                productId: "00001",
                quantity: 2,
                size: 'XL',
                color: "Black",
                total: 400,
            },
            {
                productId: "00002",
                quantity: 2,
                size: 'XL',
                color: "Black",
                total: 400,
            }
        ],
        total: 800,
        customerId: "00002",
        status: 'shipping',
        paymentMethod: 'Chuyển khoản',
        paymentStatus: 'Đã thanh toán',
        orderStatus: 'Shipped',
        shippingCharge: 30,
        shippingInfo: "Hữu Văn, Chương Mỹ, Hà Nội",
        coupon: 10,
        createAt: '	Nov 8, 5:32 PM',
    },
    {
        orderId: '#00003',
        listProducts: [
            {
                productId: "00001",
                quantity: 2,
                size: 'XL',
                color: "Black",
                total: 400,
            },
            {
                productId: "00002",
                quantity: 2,
                size: 'XL',
                color: "Black",
                total: 400,
            }
        ],
        total: 800,
        customerId: "00004",
        status: 'shipping',
        paymentMethod: 'Chuyển khoản',
        paymentStatus: 'Chờ chuyển khoản',
        orderStatus: 'Shipped',
        shippingCharge: 30,
        shippingInfo: "Hữu Văn, Chương Mỹ, Hà Nội",
        coupon: 10,
        createAt: '	Nov 8, 5:32 PM',
    },
    {
        orderId: '#00003',
        listProducts: [
            {
                productId: "00001",
                quantity: 2,
                size: 'XL',
                color: "Black",
                total: 400,
            },
            {
                productId: "00002",
                quantity: 2,
                size: 'XL',
                color: "Black",
                total: 400,
            }
        ],
        total: 800,
        customerId: "00002",
        status: 'shipping',
        paymentMethod: 'Chuyển khoản',
        paymentStatus: 'Chờ chuyển khoản',
        orderStatus: 'Shipped',
        shippingCharge: 30,
        shippingInfo: "Hữu Văn, Chương Mỹ, Hà Nội",
        coupon: 10,
        createAt: '	Nov 8, 5:32 PM',
    },
    {
        orderId: '#0004',
        listProducts: [
            {
                productId: "00001",
                quantity: 2,
                size: 'XL',
                color: "Black",
                total: 400,
            },
            {
                productId: "00002",
                quantity: 2,
                size: 'XL',
                color: "Black",
                total: 400,
            }
        ],
        total: 800,
        customerId: "00005",
        status: 'shipping',
        paymentMethod: 'Chuyển khoản',
        paymentStatus: 'Đã thanh toán',
        orderStatus: 'Shipped',
        shippingCharge: 30,
        shippingInfo: "Hữu Văn, Chương Mỹ, Hà Nội",
        coupon: 10,
        createAt: '	Nov 8, 5:32 PM',
    },
    {
        orderId: '#0005',
        listProducts: [
            {
                productId: "00001",
                quantity: 2,
                size: 'XL',
                color: "Black",
                total: 400,
            },
            {
                productId: "00002",
                quantity: 2,
                size: 'XL',
                color: "Black",
                total: 400,
            }
        ],
        total: 800,
        customerId: "00001",
        status: 'shipping',
        paymentMethod: 'Thanh toán khi nhận hàng',
        paymentStatus: 'Chờ thanh toán',
        orderStatus: 'Shipped',
        shippingCharge: 30,
        shippingInfo: "Hữu Văn, Chương Mỹ, Hà Nội",
        coupon: 10,
        createAt: '	Nov 8, 5:32 PM',
    },
]
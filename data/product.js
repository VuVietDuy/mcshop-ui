function getProductById(productId) {
    const product = products.find(item => item.productId === productId);

    if (product) {
        return product;
    } else {
        return null;
    }
}

const categorys = [
    'cardigan',
    'hoodie',
    'jacket',
    'polo',
    'sweater',
    't_shirt'
]

const products = [
    {
        productId: "00001",
        imgSrcs: [
            "../access/image/Cardigan/cardigan_play_green.jpg",
            "../access/image/Cardigan/cardigan_play_black.jpg",
        ],
        productTitle: "Cardigan Play",
        regularPrice: 200000,
        salePrice: 100,
        isSale: false,
        category: categorys[0],
        colection: "thu đông",
        productDescription: "Cardigan Play",
        colors: ["Black", "Green", "Cadetblue"],
        publishedAt: "Nov 8, 5:32 PM"
    },
    {
        productId: "00002",
        imgSrcs: [
            "../access/image/Hoodie/hoodie_basic_boxy_black.jpg",
            "../access/image/Hoodie/hoodie_basic_boxy_brown.jpg",
            "../access/image/Hoodie/hoodie_basic_boxy_white.jpg"
        ],
        productTitle: "Hoodie Basic Boxy",
        regularPrice: 200000,
        salePrice: 100,
        isSale: false,
        category: categorys[1],
        colection: "thu đông",
        productDescription: "Hoodie Basic Boxy",
        colors: ["Black", "Blue", "Brown", "Bisque"],
        publishedAt: "Nov 8, 5:32 PM"
    },
    {
        productId: "00003",
        imgSrcs: [
            "../access/image/Hoodie/hoodie_classic_black.jpg",
            "../access/image/Hoodie/hoodie_classic_yellow.jpg",
        ],
        productTitle: "Hoodie Classic",
        regularPrice: 199000,
        salePrice: 100,
        isSale: false,
        category: categorys[1],
        colection: "thu đông",
        productDescription: "Hoodie Classic",
        colors: ["Black", "Yellow", "Bisque"],
        publishedAt: "Nov 8, 5:32 PM"
    },
    {
        productId: "00004",
        imgSrcs: [
            "../access/image/Hoodie/hoodie_classic_zipper_green.jpg",
            "../access/image/Hoodie/hoodie_classic_zipper_black.jpg",
        ],
        productTitle: "Hoodie Classic Zipper ",
        regularPrice: 199000,
        salePrice: 100,
        isSale: false,
        category: categorys[1],
        colection: "Thu đông",
        productDescription: "Hoodie Classic Zipper",
        colors: ["Blue", "Black", "Green"],
        publishedAt: "Nov 8, 5:32 PM"
    },
    {
        productId: "00005",
        imgSrcs: [
            "../access/image/Hoodie/hoodie_popular_logo_green.jpg",
            "../access/image/Hoodie/hoodie_popular_logo_Yellow.jpg",
        ],
        productTitle: "Hoodie Popular Logo ",
        regularPrice: 199000,
        salePrice: 100,
        isSale: false,
        category: categorys[1],
        colection: "Thu đông",
        productDescription: "Hoodie Popular Logo",
        colors: ["Yellow", "Green", "Brown"],
        publishedAt: "Nov 8, 5:32 PM"
    },
    {
        productId: "00006",
        imgSrcs: [
            "../access/image/Jacket/jacket_line_white.jpg",
            "../access/image/Jacket/jacket_line_black.jpg",
        ],
        productTitle: "Jacket Line White ",
        regularPrice: 199000,
        salePrice: 100,
        isSale: false,
        category: categorys[2],
        colection: "Thu đông",
        productDescription: "Jacket Line White",
        colors: ["Yellow", "Green", "Burliwood"],
        publishedAt: "Nov 8, 5:32 PM"
    },
    {
        productId: "00007",
        imgSrcs: [
            "../access/image/Jacket/jacket_punch_black.jpg",
            "../access/image/Jacket/jacket_punch_green.jpg",
        ],
        productTitle: "Jacket Punch ",
        regularPrice: 299000,
        salePrice: 100,
        isSale: false,
        category: categorys[2],
        colection: "Thu đông",
        productDescription: "Jacket Punch",
        colors: ["Brown", "Red" ,"Black", "Green"],
        publishedAt: "Nov 8, 5:32 PM"
    },
    {
        productId: "00008",
        imgSrcs: [
            "../access/image/Jacket/jacket_sporty_red.jpg",
            "../access/image/Jacket/jacket_sporty_black.jpg",
        ],
        productTitle: "Jacket Sporty ",
        regularPrice: 299000,
        salePrice: 100,
        isSale: false,
        category: categorys[2],
        colection: "Thu đông",
        productDescription: "Jacket Sporty",
        colors: ["Black", "Red", "Darkgray"],
        publishedAt: "Nov 8, 5:32 PM"
    },
    {
        productId: "00009",
        imgSrcs: [
            "../access/image/Jacket/jacket_poppop_black.jpg",
        ],
        productTitle: "Jacket Poppop ",
        regularPrice: 299000,
        salePrice: 100,
        isSale: false,
        category: categorys[2],
        colection: "Thu đông",
        productDescription: "Jacket Poppop",
        colors: ["Black", "Green", "Cyan"],
        publishedAt: "Nov 8, 5:32 PM"
    },
]

const topSelling = [
    {
        name: "Cardigan play back",
        price: "299.000",
        quantity: 765,
        amount: "2.990.000",
    },
    {
        name: "Hoodie play back",
        price: "299.000",
        quantity: 625,
        amount: "2.990.000",
    },
    {
        name: "T-shirt play back",
        price: "299.000",
        quantity: 265,
        amount: "2.990.000",
    },
    {
        name: "Cardigan play back",
        price: "299.000",
        quantity: 165,
        amount: "2.990.000",
    },
    {
        name: "Cardigan play back",
        price: "299.000",
        quantity: 95,
        amount: "2.990.000",
    },
]

const topRegion = [
    {
        city: "Hà Nội",
        userQuanlity: 473,
        productQuantity: 463,
        amount: "29.990.000",
    },
    {
        city: "Hà Nam",
        userQuanlity: 273,
        productQuantity: 163,
        amount: "21.990.000",
    },
    {
        city: "Thái Bình",
        userQuanlity: 273,
        productQuantity: 163,
        amount: "1.990.000",
    },
    {
        city: "Hải Dương",
        userQuanlity: 273,
        productQuantity: 163,
        amount: "990.000",
    },
    {
        city: "Thanh Hoá",
        userQuanlity: 273,
        productQuantity: 163,
        amount: "990.000",
    },
]
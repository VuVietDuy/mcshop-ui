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
        colection: "",
        productDescription: "Cardigan Play",
        colors: ["Black", "Green"],
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
        colection: "",
        productDescription: "Hoodie Basic Boxy",
        colors: ["Black", "White", "Brown"],
        publishedAt: "Nov 8, 5:32 PM"
    },
    {
        productId: "00003",
        imgSrcs: [
            "../access/image/Hoodie/hoodie_classic_cream.jpg",
            "../access/image/Hoodie/hoodie_classis_black.jpg",
        ],
        productTitle: "Hoodie Classic",
        regularPrice: 199000,
        salePrice: 100,
        isSale: false,
        category: categorys[1],
        colection: "",
        productDescription: "Hoodie Classic",
        colors: ["Black", "Cream"],
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
        colection: "",
        productDescription: "Hoodie Classic Zipper",
        colors: ["Black", "Green"],
        publishedAt: "Nov 8, 5:32 PM"
    },
    {
        productId: "00005",
        imgSrcs: [
            "../access/image/Hoodie/hoodie_popular_logo_green.jpg",
            "../access/image/Hoodie/hoodie_popular_logo_cream.jpg",
        ],
        productTitle: "Hoodie Popular Logo ",
        regularPrice: 199000,
        salePrice: 100,
        isSale: false,
        category: categorys[1],
        colection: "",
        productDescription: "Hoodie Popular Logo",
        colors: ["Cream", "Green"],
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
        colection: "",
        productDescription: "Jacket Line White",
        colors: ["Cream", "Green"],
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
        colection: "",
        productDescription: "Jacket Punch",
        colors: ["Black", "Green"],
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
        colection: "",
        productDescription: "Jacket Sporty",
        colors: ["Black", "Red"],
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
        colection: "",
        productDescription: "Jacket Poppop",
        colors: ["Black", "Green"],
        publishedAt: "Nov 8, 5:32 PM"
    },
]
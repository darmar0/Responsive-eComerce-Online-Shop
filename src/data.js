const data = {
  stockData: [
    {
      id: 1,
      category: "keyboards",
      productName: "Steelseries Apex Pro",
      productImage: {
        1: "https://i.ebayimg.com/images/g/8poAAOSwJVJftRtz/s-l640.png",
        2: "https://images-na.ssl-images-amazon.com/images/I/81cGvv1WojL._AC_SL1500_.jpg",
      },
      productDescription:
        "Mechanical Gaming Keyboard, Mechanical Switches with Adjustable Activation, OLED Smart Display, Nordic QWERTY Layout",
      productComments: [
        { username: "Jerry", comment: "nice", date: "01/03/2021" },
        { username: "Jane", comment: "cool", date: "15/03/2021" },
      ],
      productPrice: 229.99,
      rating: 4.5,
      reviews: 8,
      productSerial: "ORNG25655",
      productQuantity: 50,
    },
    {
      id: 2,
      category: "keyboards",
      productName: "Corsair K95 RGB Platinum XT",
      productImage: {
        1: "https://plecom.imgix.net/iil-244115-644481.jpg?fit=fillmax&fill=solid&fill-color=ffffff&auto=format&w=1000&h=1000",
        2: "https://www.corsair.com/corsairmedia/sys_master/productcontent/k95rgbplatinum-Content-29.png",
      },
      productDescription: "Mechanical Gaming Keyboard, Backlit RGB LED, Cherry MX Speed RGB Silver, Black (CH-9127414-NA)",
      productComments: [
        { username: "Jerry", comment: "nice", date: "01/03/2021" },
        { username: "Jane", comment: "cool", date: "15/03/2021" },
      ],
      productPrice: 199.99,
      rating: 4.8,
      reviews: 8,
      productSerial: "ORNG25644",
      productQuantity: 20,
    },
    {
      id: 3,
      category: "keyboards",
      productName: "HyperX Alloy Origins",
      productImage: {
        1: "https://media.kingston.com/hyperx/product/hx-product-keyboard-alloy-origins-us-1-zm-lg.jpg",
        2: "https://www.pcstudio.in/wp-content/uploads/2020/09/HyperX-Alloy-Origins-Core-Tenkeyless-Mechanical-Gaming-Keyboard-2.jpg",
      },
      productDescription:
        " Mechanical Gaming Keyboard, Software-Controlled Light & Macro Customization, Compact Form Factor, RGB LED Backlit - Linear HyperX Red Switch",
      productComments: [
        { username: "Jerry", comment: "nice", date: "01/03/2021" },
        { username: "Jane", comment: "cool", date: "15/03/2021" },
      ],
      productPrice: 101.99,
      rating: 4.0,
      reviews: 9,
      productSerial: "ORNG25755",
      productQuantity: 30,
    },
    {
      id: 4,
      category: "keyboards",
      productName: "Razer Huntsman Tournament Edition",
      productImage: {
        1: "https://techbrandstore.com/wp-content/uploads/2021/01/Razer-Huntsman-Mini-60-Gaming-Keyboard1.jpg",
        2: "https://assets2.razerzone.com/images/pnx.assets/dc273ad4cada0f50f9bdbd7c565561ff/razer-huntsman-te-detachable-type-c-cable.jpg",
      },
      productDescription:
        "TKL Tenkeyless Gaming Keyboard: Fastest Keyboard Switches Ever - Linear Optical Switches - Chroma RGB Lighting - PBT Keycaps - Onboard Memory - Classic Black",
      productComments: [
        { username: "Jerry", comment: "nice", date: "01/03/2021" },
        { username: "Jane", comment: "cool", date: "15/03/2021" },
      ],
      productPrice: 89.99,
      rating: 3.5,
      reviews: 5,
      productSerial: "ORNG24655",
      productQuantity: 10,
    },
    {
      id: 5,
      category: "mices",
      productName: "Logitech MX Master 3",
      productImage: {
        1: "https://dijaspora.shop/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/5/0/5099206085800_1.jpg",
        2: "https://www.bhphotovideo.com/images/images1000x1000/logitech_910_005693_mx_master_3_wireless_1571628.jpg",
      },
      productDescription:
        "The MX Master 3, Logitech's latest revision of its classic productivity mouse, gets a tuneup that makes you feel like a power user with minimal effort.",
      productComments: [
        { username: "Jerry", comment: "nice", date: "01/03/2021" },
        { username: "Jane", comment: "cool", date: "15/03/2021" },
      ],
      productPrice: 99.99,
      rating: 2.5,
      reviews: 3,
      productSerial: "ORNT24155",
      productQuantity: 35,
    },
    {
      id: 6,
      category: "mices",
      productName: "Razer Basilisk Ultimate",
      productImage: {
        1: "https://gamecentarrs.b-cdn.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/6/26012-razer-basilisk-ultimate-wireless-rgb-mis-cena-prodaja-2.jpg",
        2: "https://gamecentarrs.b-cdn.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/6/26012-razer-basilisk-ultimate-wireless-rgb-mis-cena-prodaja-6.jpg",
      },
      productDescription:
        "The Razer Basilisk Ultimate is a killer, all-purpose wireless gaming mouse for serious PC gamers driven to pull out all the stops.",
      productComments: [
        { username: "Jerry", comment: "nice", date: "01/03/2021" },
        { username: "Jane", comment: "cool", date: "15/03/2021" },
      ],
      productPrice: 99.99,
      rating: 1.5,
      reviews: 3,
      productSerial: "ORNT24177",
      productQuantity: 25,
    },
    {
      id: 7,
      category: "mices",
      productName: "Corsair Ironclaw RGB Wireless",
      productImage: {
        1: "https://images-na.ssl-images-amazon.com/images/I/61MOxy%2BVrLL._SL1500_.jpg",
        2: "https://brain-images-ssl.cdn.dixons.com/1/9/10195691/l_10195691_003.jpg",
      },
      productDescription:
        "Corsair's latest wireless mouse, the Ironclaw RGB Wireless, is a little more practical than some of its top-end competitors. It's a strong pick for big-handed users.",
      productComments: [],
      productPrice: 79.99,
      rating: 1.5,
      reviews: 3,
      productSerial: "ORNT24177",
      productQuantity: 5,
    },
  ],
  cartItems: [],
  orders: [],
  accounts: [
    {
      id: 11,
      name: "admin",
      email: "admin@gmail.com",
      password: "admin123",
    },
  ],
};

export default data;

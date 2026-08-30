/* =========================================================
   MAB-STORE
   CLEAN MARKETPLACE JAVASCRIPT
   ========================================================= */


/* =========================================================
   PRODUCT DATABASE
========================================================= */

const products = [

    {
        id: 1,
        name: "Smartphone Pro Max",
        category: "Elektronik",
        price: 2999000,
        oldPrice: 3499000,
        rating: 4.9,
        sold: 120,
        flash: true,
        flashSold: 82,
        image: "https://images.pexels.com/photos/8408537/pexels-photo-8408537.jpeg?auto=compress&cs=tinysrgb&w=800",
        keywords: "smartphone hp ponsel android elektronik"
    },

    {
        id: 2,
        name: "Wireless Headphone",
        category: "Elektronik",
        price: 399000,
        oldPrice: 599000,
        rating: 4.8,
        sold: 85,
        flash: true,
        flashSold: 68,
        image: "https://images.pexels.com/photos/7772547/pexels-photo-7772547.jpeg?auto=compress&cs=tinysrgb&w=800",
        keywords: "headphone headset audio musik wireless elektronik"
    },

    {
        id: 3,
        name: "Smartwatch Series 5",
        category: "Elektronik",
        price: 549000,
        oldPrice: 799000,
        rating: 4.7,
        sold: 64,
        flash: true,
        flashSold: 74,
        image: "https://images.pexels.com/photos/14691505/pexels-photo-14691505.jpeg?auto=compress&cs=tinysrgb&w=800",
        keywords: "smartwatch jam tangan elektronik"
    },

    {
        id: 4,
        name: "Tas Backpack Premium",
        category: "Aksesoris",
        price: 249000,
        oldPrice: 399000,
        rating: 4.9,
        sold: 210,
        flash: true,
        flashSold: 91,
        image: "https://images.pexels.com/photos/11726029/pexels-photo-11726029.jpeg?auto=compress&cs=tinysrgb&w=800",
        keywords: "tas backpack fashion aksesoris sekolah"
    },

    {
        id: 5,
        name: "Sneakers Casual",
        category: "Olahraga",
        price: 329000,
        oldPrice: 0,
        rating: 4.8,
        sold: 98,
        flash: false,
        image: "https://images.pexels.com/photos/797637/pexels-photo-797637.jpeg?auto=compress&cs=tinysrgb&w=800",
        keywords: "sneakers sepatu olahraga fashion"
    },

    {
        id: 6,
        name: "Laptop Slim",
        category: "Elektronik",
        price: 7999000,
        oldPrice: 0,
        rating: 4.9,
        sold: 41,
        flash: false,
        image: "https://images.pexels.com/photos/3584974/pexels-photo-3584974.jpeg?auto=compress&cs=tinysrgb&w=800",
        keywords: "laptop komputer notebook elektronik"
    },

    {
        id: 7,
        name: "T-Shirt Premium",
        category: "Fashion",
        price: 129000,
        oldPrice: 0,
        rating: 4.7,
        sold: 340,
        flash: false,
        image: "https://images.pexels.com/photos/12039633/pexels-photo-12039633.jpeg?auto=compress&cs=tinysrgb&w=800",
        keywords: "kaos tshirt pakaian fashion"
    },

    {
        id: 8,
        name: "Kursi Minimalis",
        category: "Rumah",
        price: 499000,
        oldPrice: 0,
        rating: 4.6,
        sold: 56,
        flash: false,
        image: "https://images.pexels.com/photos/21852582/pexels-photo-21852582.jpeg?auto=compress&cs=tinysrgb&w=800",
        keywords: "kursi furniture rumah minimalis"
    },

    {
        id: 9,
        name: "Kamera Mirrorless",
        category: "Elektronik",
        price: 1299000,
        oldPrice: 0,
        rating: 4.8,
        sold: 72,
        flash: false,
        image: "https://images.pexels.com/photos/15945023/pexels-photo-15945023.jpeg?auto=compress&cs=tinysrgb&w=800",
        keywords: "kamera fotografi mirrorless elektronik"
    },

    {
        id: 10,
        name: "Parfum Premium",
        category: "Kecantikan",
        price: 279000,
        oldPrice: 0,
        rating: 4.9,
        sold: 188,
        flash: false,
        image: "https://images.pexels.com/photos/16089870/pexels-photo-16089870.jpeg?auto=compress&cs=tinysrgb&w=800",
        keywords: "parfum fragrance kecantikan"
    },

    {
        id: 11,
        name: "Mug Keramik",
        category: "Rumah",
        price: 89000,
        oldPrice: 0,
        rating: 4.7,
        sold: 415,
        flash: false,
        image: "https://images.pexels.com/photos/4109750/pexels-photo-4109750.jpeg?auto=compress&cs=tinysrgb&w=800",
        keywords: "mug gelas keramik rumah dapur"
    },

    {
        id: 12,
        name: "Keyboard Mechanical",
        category: "Gaming",
        price: 459000,
        oldPrice: 0,
        rating: 4.8,
        sold: 126,
        flash: false,
        image: "https://images.pexels.com/photos/18114576/pexels-photo-18114576.jpeg?auto=compress&cs=tinysrgb&w=800",
        keywords: "keyboard mechanical komputer gaming"
    }

];


/* =========================================================
   CATEGORY
========================================================= */

const categoryInfo = {

    Elektronik: {
        icon: "📱",
        description:
            "Temukan smartphone, laptop, kamera, audio, dan perangkat elektronik pilihan."
    },

    Fashion: {
        icon: "👕",
        description:
            "Temukan pakaian dan produk fashion pilihan untuk melengkapi gaya kamu."
    },

    Rumah: {
        icon: "🏠",
        description:
            "Berbagai kebutuhan rumah dan perlengkapan pilihan untuk rumah kamu."
    },

    Kecantikan: {
        icon: "💄",
        description:
            "Temukan berbagai produk kecantikan dan perawatan pilihan."
    },

    Gaming: {
        icon: "🎮",
        description:
            "Perlengkapan gaming dan aksesori untuk pengalaman bermain yang lebih seru."
    },

    Olahraga: {
        icon: "⚽",
        description:
            "Berbagai perlengkapan olahraga untuk mendukung aktivitas kamu."
    },

    Buku: {
        icon: "📚",
        description:
            "Temukan buku dan bahan bacaan pilihan."
    },

    Aksesoris: {
        icon: "👜",
        description:
            "Lengkapi gaya dan kebutuhan kamu dengan berbagai aksesoris pilihan."
    }

};


/* =========================================================
   VOUCHERS
========================================================= */

const vouchers = {

    MAB20: {
        code: "MAB20",
        title: "Diskon 20%",
        description: "Potongan 20% dengan minimum belanja Rp100.000.",
        type: "percent",
        value: 20,
        minimum: 100000
    },

    ONGKIR: {
        code: "ONGKIR",
        title: "Gratis Ongkir",
        description: "Gratis ongkir untuk minimum belanja Rp150.000.",
        type: "shipping",
        value: 0,
        minimum: 150000
    },

    MEMBER50: {
        code: "MEMBER50",
        title: "Potongan Rp50.000",
        description: "Potongan Rp50.000 dengan minimum belanja Rp300.000.",
        type: "fixed",
        value: 50000,
        minimum: 300000
    }

};


/* =========================================================
   STATE
========================================================= */

let cart = [];

let wishlist = [];

let notifications = [];

let claimedVouchers = [];

let orders = [];

let selectedProduct = null;

let detailQuantity = 1;

let activeCategory = null;

let activeSort = "terbaru";

let categorySort = "terbaru";

let searchKeyword = "";

let remainingSeconds = 2 * 60 * 60;


/* =========================================================
   DOM
========================================================= */

const homePage =
    document.getElementById("homePage");

const categoryPage =
    document.getElementById("categoryPage");

const homeProducts =
    document.getElementById("homeProducts");

const flashProducts =
    document.getElementById("flashProducts");

const categoryProducts =
    document.getElementById("categoryProducts");

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const cartDrawer =
    document.getElementById("cartDrawer");

const wishlistDrawer =
    document.getElementById("wishlistDrawer");

const notificationDrawer =
    document.getElementById("notificationDrawer");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const wishlistCount =
    document.getElementById("wishlistCount");

const notificationCount =
    document.getElementById("notificationCount");

const overlay =
    document.getElementById("overlay");

const toast =
    document.getElementById("toast");


/* =========================================================
   LOCAL STORAGE
========================================================= */

function loadStorage() {

    try {

        cart =
            JSON.parse(
                localStorage.getItem(
                    "mabstore_cart"
                )
            ) || [];

    } catch {

        cart = [];

    }


    try {

        wishlist =
            JSON.parse(
                localStorage.getItem(
                    "mabstore_wishlist"
                )
            ) || [];

    } catch {

        wishlist = [];

    }


    try {

        claimedVouchers =
            JSON.parse(
                localStorage.getItem(
                    "mabstore_vouchers"
                )
            ) || [];

    } catch {

        claimedVouchers = [];

    }


    try {

        notifications =
            JSON.parse(
                localStorage.getItem(
                    "mabstore_notifications"
                )
            ) || [];

    } catch {

        notifications = [];

    }


    try {

        orders =
            JSON.parse(
                localStorage.getItem(
                    "mabstore_orders"
                )
            ) || [];

    } catch {

        orders = [];

    }

}


function saveStorage() {

    localStorage.setItem(
        "mabstore_cart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "mabstore_wishlist",
        JSON.stringify(wishlist)
    );

    localStorage.setItem(
        "mabstore_vouchers",
        JSON.stringify(claimedVouchers)
    );

    localStorage.setItem(
        "mabstore_notifications",
        JSON.stringify(notifications)
    );

    localStorage.setItem(
        "mabstore_orders",
        JSON.stringify(orders)
    );

}


/* =========================================================
   RUPIAH
========================================================= */

function rupiah(number) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(number);

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    if (!toast) return;

    toast.textContent =
        message;

    toast.classList.add("show");

    clearTimeout(
        showToast.timer
    );

    showToast.timer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2300
        );

}


/* =========================================================
   NOTIFICATION
========================================================= */

function addNotification(
    title,
    message,
    icon = "🔔"
) {

    notifications.unshift({

        id:
            Date.now(),

        title,

        message,

        icon,

        time:
            new Date()
                .toLocaleTimeString(
                    "id-ID",
                    {
                        hour: "2-digit",
                        minute: "2-digit"
                    }
                ),

        read: false

    });


    if (notifications.length > 30) {

        notifications =
            notifications.slice(
                0,
                30
            );

    }


    saveStorage();

    renderNotifications();

}


function renderNotifications() {

    const container =
        document.getElementById(
            "notificationItems"
        );

    if (!container) return;


    if (
        notifications.length === 0
    ) {

        container.innerHTML = `
            <div class="empty-cart">
                Belum ada notifikasi.
            </div>
        `;

    }

    else {

        container.innerHTML =
            notifications
                .map(
                    notification => `
                        <div class="
                            notification-item
                            ${notification.read ? "" : "unread"}
                        ">

                            <div class="notification-icon">
                                ${notification.icon}
                            </div>

                            <div class="notification-content">

                                <strong>
                                    ${notification.title}
                                </strong>

                                <p>
                                    ${notification.message}
                                </p>

                                <small>
                                    ${notification.time}
                                </small>

                            </div>

                        </div>
                    `
                )
                .join("");

    }


    const unread =
        notifications.filter(
            item =>
                !item.read
        ).length;


    notificationCount.textContent =
        unread;

}


/* =========================================================
   OPEN NOTIFICATIONS
========================================================= */

function openNotifications() {

    notificationDrawer.classList.add(
        "open"
    );

    overlay.classList.add(
        "active"
    );

}


function closeNotifications() {

    notificationDrawer.classList.remove(
        "open"
    );

    if (
        !cartDrawer.classList.contains("open") &&
        !wishlistDrawer.classList.contains("open")
    ) {

        overlay.classList.remove(
            "active"
        );

    }

}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(product) {

    const liked =
        wishlist.includes(
            product.id
        );


    const discount =
        product.oldPrice > 0
            ? Math.round(
                (
                    1 -
                    product.price /
                    product.oldPrice
                ) * 100
            )
            : 0;


    return `

        <article
            class="product-card"
            data-product-id="${product.id}"
        >

            <div class="product-image">

                <img
                    class="product-photo"
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >


                ${
                    product.flash
                        ? `
                            <span class="flash-badge">
                                ⚡ FLASH SALE
                            </span>
                        `
                        : ""
                }


                <button
                    class="
                        wishlist-button
                        ${liked ? "active" : ""}
                    "
                    data-wishlist-id="${product.id}"
                    type="button"
                    aria-label="Wishlist"
                >
                    ${liked ? "♥" : "♡"}
                </button>

            </div>


            <div class="product-info">

                ${
                    product.flash
                        ? `
                            <span class="flash-discount">
                                -${discount}%
                            </span>
                        `
                        : ""
                }


                <h3>
                    ${product.name}
                </h3>


                <div class="price">
                    ${rupiah(product.price)}
                </div>


                ${
                    product.oldPrice > 0
                        ? `
                            <div class="old-price">
                                ${rupiah(product.oldPrice)}
                            </div>
                        `
                        : ""
                }


                <div class="product-bottom">

                    <span>
                        ⭐ ${product.rating}
                    </span>

                    <span>
                        Terjual ${product.sold}
                    </span>

                </div>


                ${
                    product.flash
                        ? `
                            <div class="flash-stock">

                                <div class="flash-stock-bar">

                                    <div
                                        class="flash-stock-progress"
                                        style="
                                            width:${product.flashSold}%;
                                        "
                                    ></div>

                                </div>

                                <div class="flash-stock-text">
                                    ${product.flashSold}% terjual
                                </div>

                            </div>
                        `
                        : ""
                }


                <button
                    class="add-cart"
                    data-cart-id="${product.id}"
                    type="button"
                >
                    ${product.flash
                        ? "⚡ Beli Sekarang"
                        : "+ Keranjang"}
                </button>

            </div>

        </article>

    `;

}


/* =========================================================
   SEARCH
========================================================= */

function matchesSearch(product) {

    if (!searchKeyword) {

        return true;

    }


    const text = `

        ${product.name}

        ${product.category}

        ${product.keywords}

    `.toLowerCase();


    return text.includes(
        searchKeyword
    );

}


/* =========================================================
   SORT
========================================================= */

function sortProducts(
    list,
    sortType
) {

    const sorted =
        [...list];


    if (
        sortType ===
        "terlaris"
    ) {

        sorted.sort(
            (a,b) =>
                b.sold - a.sold
        );

    }

    else if (
        sortType ===
        "termurah"
    ) {

        sorted.sort(
            (a,b) =>
                a.price - b.price
        );

    }

    else if (
        sortType ===
        "rating"
    ) {

        sorted.sort(
            (a,b) =>
                b.rating - a.rating
        );

    }

    else if (
        sortType ===
        "termahal"
    ) {

        sorted.sort(
            (a,b) =>
                b.price - a.price
        );

    }

    else {

        sorted.sort(
            (a,b) =>
                a.id - b.id
        );

    }


    return sorted;

}


/* =========================================================
   RENDER HOME
========================================================= */

function renderHomeProducts() {

    if (!homeProducts) return;


    let list =
        products.filter(
            matchesSearch
        );


    list =
        sortProducts(
            list,
            activeSort
        );


    if (
        list.length === 0
    ) {

        homeProducts.innerHTML = `

            <div class="empty-search">

                <h3>
                    Produk tidak ditemukan
                </h3>

                <p>
                    Coba gunakan kata pencarian lain.
                </p>

            </div>

        `;

        return;

    }


    homeProducts.innerHTML =
        list
            .map(
                createProductCard
            )
            .join("");

}


/* =========================================================
   FLASH SALE
========================================================= */

function renderFlashSale() {

    if (!flashProducts) return;


    const list =
        products.filter(
            product =>
                product.flash
        );


    flashProducts.innerHTML =
        list
            .map(
                createProductCard
            )
            .join("");

}


/* =========================================================
   CATEGORY
========================================================= */

function showCategory(
    category,
    updateUrl = true
) {

    if (
        !categoryInfo[category]
    ) return;


    activeCategory =
        category;

    searchKeyword =
        "";

    if (searchInput) {

        searchInput.value =
            "";

    }


    const info =
        categoryInfo[
            category
        ];


    document.getElementById(
        "categoryPageIcon"
    ).textContent =
        info.icon;


    document.getElementById(
        "categoryPageTitle"
    ).textContent =
        category;


    document.getElementById(
        "categoryPageDescription"
    ).textContent =
        info.description;


    renderCategoryProducts();


    homePage.hidden =
        true;

    categoryPage.hidden =
        false;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (updateUrl) {

        const url =
            new URL(
                window.location.href
            );

        url.searchParams.set(
            "category",
            category
        );

        history.pushState(
            {},
            "",
            url
        );

    }

}


/* =========================================================
   CATEGORY PRODUCTS
========================================================= */

function renderCategoryProducts() {

    if (
        !activeCategory ||
        !categoryProducts
    ) return;


    let list =
        products.filter(
            product =>
                product.category ===
                activeCategory
        );


    list =
        list.filter(
            matchesSearch
        );


    list =
        sortProducts(
            list,
            categorySort
        );


    categoryProducts.innerHTML =
        list
            .map(
                createProductCard
            )
            .join("");


    const count =
        document.getElementById(
            "categoryResultCount"
        );


    if (count) {

        count.textContent =
            `${list.length} produk ditemukan`;

    }

}


/* =========================================================
   SHOW HOME
========================================================= */

function showHome(
    updateUrl = true
) {

    activeCategory =
        null;

    searchKeyword =
        "";

    if (searchInput) {

        searchInput.value =
            "";

    }


    categoryPage.hidden =
        true;

    homePage.hidden =
        false;


    renderHomeProducts();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (updateUrl) {

        const url =
            new URL(
                window.location.href
            );

        url.searchParams.delete(
            "category"
        );

        history.pushState(
            {},
            "",
            url
        );

    }

}


/* =========================================================
   CART
========================================================= */

function addToCart(
    product,
    quantity = 1
) {

    const existing =
        cart.find(
            item =>
                item.id ===
                product.id
        );


    if (existing) {

        existing.quantity +=
            quantity;

    }

    else {

        cart.push({

            id:
                product.id,

            name:
                product.name,

            price:
                product.price,

            image:
                product.image,

            quantity:
                quantity

        });

    }


    saveStorage();

    updateCart();


    showToast(
        `${product.name} masuk ke keranjang 🛒`
    );


    addNotification(
        "Produk ditambahkan",
        `${product.name} berhasil ditambahkan ke keranjang.`,
        "🛒"
    );

}


function updateCart() {

    if (
        !cartItems
    ) return;


    if (
        cart.length === 0
    ) {

        cartItems.innerHTML = `

            <p class="empty-cart">
                Keranjang masih kosong.
            </p>

        `;

        cartCount.textContent =
            "0";

        cartTotal.textContent =
            "Rp0";

        return;

    }


    let total =
        0;

    let quantityTotal =
        0;


    cartItems.innerHTML =
        "";


    cart.forEach(
        (item,index) => {

            total +=
                item.price *
                item.quantity;

            quantityTotal +=
                item.quantity;


            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "cart-item-row";


            row.innerHTML = `

                <div class="cart-product-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>


                <div class="cart-product-details">

                    <strong>
                        ${item.name}
                    </strong>

                    <div class="cart-product-price">
                        ${rupiah(item.price)}
                    </div>


                    <div class="cart-quantity">

                        <button
                            class="quantity-btn"
                            data-cart-minus="${index}"
                            type="button"
                        >
                            −
                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            class="quantity-btn"
                            data-cart-plus="${index}"
                            type="button"
                        >
                            +
                        </button>


                        <button
                            class="remove-item"
                            data-cart-remove="${index}"
                            type="button"
                        >
                            Hapus
                        </button>

                    </div>

                </div>

            `;


            cartItems.appendChild(
                row
            );

        }
    );


    cartCount.textContent =
        quantityTotal;

    cartTotal.textContent =
        rupiah(total);

}


/* =========================================================
   CART DRAWER
========================================================= */

function openCart() {

    cartDrawer.classList.add(
        "open"
    );

    overlay.classList.add(
        "active"
    );

}


function closeCart() {

    cartDrawer.classList.remove(
        "open"
    );

    closeOverlayIfNothingOpen();

}


function closeOverlayIfNothingOpen() {

    if (
        !cartDrawer.classList.contains("open") &&
        !wishlistDrawer.classList.contains("open") &&
        !notificationDrawer.classList.contains("open")
    ) {

        overlay.classList.remove(
            "active"
        );

    }

}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWishlist(
    product
) {

    const index =
        wishlist.indexOf(
            product.id
        );


    if (index >= 0) {

        wishlist.splice(
            index,
            1
        );

        showToast(
            `${product.name} dihapus dari wishlist.`
        );

    }

    else {

        wishlist.push(
            product.id
        );

        showToast(
            `${product.name} masuk wishlist ❤️`
        );

        addNotification(
            "Wishlist diperbarui",
            `${product.name} ditambahkan ke wishlist.`,
            "❤️"
        );

    }


    saveStorage();

    updateWishlist();

    renderHomeProducts();

    renderFlashSale();

    if (activeCategory) {

        renderCategoryProducts();

    }

}


function updateWishlist() {

    wishlistCount.textContent =
        wishlist.length;


    const container =
        document.getElementById(
            "wishlistItems"
        );


    if (!container) return;


    if (
        wishlist.length === 0
    ) {

        container.innerHTML = `

            <div class="empty-cart">

                ❤️

                <br><br>

                Wishlist masih kosong.

            </div>

        `;

        return;

    }


    container.innerHTML =
        wishlist
            .map(
                id => {

                    const product =
                        products.find(
                            item =>
                                item.id ===
                                id
                        );


                    if (!product)
                        return "";


                    return `

                        <div class="wishlist-row">

                            <div class="wishlist-row-image">

                                <img
                                    src="${product.image}"
                                    alt="${product.name}"
                                >

                            </div>


                            <div class="wishlist-row-info">

                                <h3>
                                    ${product.name}
                                </h3>

                                <strong>
                                    ${rupiah(product.price)}
                                </strong>


                                <div class="wishlist-actions">

                                    <button
                                        class="wishlist-cart-btn"
                                        data-wishlist-cart="${product.id}"
                                        type="button"
                                    >
                                        🛒 Keranjang
                                    </button>

                                    <button
                                        class="wishlist-remove-btn"
                                        data-wishlist-remove="${product.id}"
                                        type="button"
                                    >
                                        Hapus
                                    </button>

                                </div>

                            </div>

                        </div>

                    `;

                }
            )
            .join("");

}


/* =========================================================
   PRODUCT MODAL
========================================================= */

function openProductModal(
    product
) {

    selectedProduct =
        product;

    detailQuantity =
        1;


    document.getElementById(
        "detailProductImage"
    ).src =
        product.image;


    document.getElementById(
        "detailProductImage"
    ).alt =
        product.name;


    document.getElementById(
        "detailProductName"
    ).textContent =
        product.name;


    document.getElementById(
        "detailRating"
    ).textContent =
        `⭐ ${product.rating} • ${product.sold} terjual`;


    document.getElementById(
        "detailProductPrice"
    ).textContent =
        rupiah(
            product.price
        );


    document.getElementById(
        "detailOldPrice"
    ).textContent =
        product.oldPrice > 0
            ? rupiah(
                product.oldPrice
            )
            : "";


    document.getElementById(
        "detailProductDescription"
    ).textContent =
        `${product.name} merupakan produk kategori ${product.category}. Produk ini memiliki rating ${product.rating} dan telah terjual ${product.sold} unit.`;


    document.getElementById(
        "detailQuantity"
    ).textContent =
        "1";


    document.getElementById(
        "productModal"
    ).classList.add(
        "show"
    );


    document.body.classList.add(
        "modal-open"
    );

}


function closeProductModal() {

    document.getElementById(
        "productModal"
    ).classList.remove(
        "show"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   VOUCHER
========================================================= */

function claimVoucher(
    code
) {

    const voucher =
        vouchers[code];


    if (!voucher) return;


    if (
        claimedVouchers.includes(
            code
        )
    ) {

        showToast(
            `Voucher ${code} sudah diklaim.`
        );

        return;

    }


    claimedVouchers.push(
        code
    );


    saveStorage();


    showToast(
        `Voucher ${code} berhasil diklaim 🎟️`
    );


    addNotification(
        "Voucher berhasil diklaim",
        `${voucher.title} dengan kode ${code} sudah tersimpan.`,
        "🎟️"
    );


    document
        .querySelectorAll(
            `[data-voucher="${code}"]`
        )
        .forEach(
            button => {

                button.textContent =
                    "✓ Diklaim";

                button.disabled =
                    true;

            }
        );

}


function openVoucherModal() {

    document.getElementById(
        "voucherModal"
    ).hidden =
        false;

}


function closeVoucherModal() {

    document.getElementById(
        "voucherModal"
    ).hidden =
        true;

}


/* =========================================================
   TRACKING
========================================================= */

function createOrder() {

    if (
        cart.length === 0
    ) {

        showToast(
            "Keranjang masih kosong."
        );

        return null;

    }


    const orderNumber =
        `MAB-${new Date().getFullYear()}-${String(
            Math.floor(
                Math.random() * 900
            ) + 100
        )}`;


    const total =
        cart.reduce(
            (
                sum,
                item
            ) =>
                sum +
                item.price *
                item.quantity,
            0
        );


    const order = {

        id:
            orderNumber,

        date:
            new Date()
                .toLocaleDateString(
                    "id-ID"
                ),

        total,

        status:
            "Pesanan Diproses",

        step:
            1,

        items:
            [...cart],

        timeline: [

            {
                title:
                    "Pesanan dibuat",

                description:
                    "Pesanan berhasil diterima oleh MAB-Store."
            },

            {
                title:
                    "Pesanan diproses",

                description:
                    "Pesanan sedang disiapkan oleh penjual."
            },

            {
                title:
                    "Pesanan dikirim",

                description:
                    "Paket akan diserahkan kepada kurir."
            },

            {
                title:
                    "Dalam perjalanan",

                description:
                    "Paket sedang menuju alamat tujuan."
            },

            {
                title:
                    "Pesanan diterima",

                description:
                    "Pesanan telah sampai kepada pembeli."
            }

        ]

    };


    orders.unshift(
        order
    );


    if (
        orders.length > 10
    ) {

        orders =
            orders.slice(
                0,
                10
            );

    }


    cart = [];


    saveStorage();

    updateCart();


    addNotification(
        "Pesanan berhasil dibuat",
        `Pesanan ${order.id} sedang diproses.`,
        "📦"
    );


    return order;

}


function openTracking(
    orderId = ""
) {

    const modal =
        document.getElementById(
            "trackingModal"
        );


    modal.hidden =
        false;


    const input =
        document.getElementById(
            "trackingInput"
        );


    input.value =
        orderId;


    const result =
        document.getElementById(
            "trackingResult"
        );


    result.innerHTML =
        "";


    result.classList.remove(
        "show"
    );


    if (orderId) {

        renderTracking(
            orderId
        );

    }

}


function closeTracking() {

    document.getElementById(
        "trackingModal"
    ).hidden =
        true;

}


function renderTracking(
    orderId
) {

    const result =
        document.getElementById(
            "trackingResult"
        );


    const order =
        orders.find(
            item =>
                item.id
                    .toLowerCase() ===
                orderId
                    .trim()
                    .toLowerCase()
        );


    if (!order) {

        result.innerHTML = `

            <div class="empty-cart">

                ❌

                <br><br>

                Nomor pesanan tidak ditemukan.

                <br>

                Contoh:
                MAB-2026-123

            </div>

        `;

        result.classList.add(
            "show"
        );

        return;

    }


    result.innerHTML = `

        <div class="tracking-order-summary">

            <strong>
                ${order.id}
            </strong>

            <span>
                Dibuat ${order.date}
            </span>

            <span>
                Total ${rupiah(order.total)}
            </span>

        </div>


        <div class="tracking-timeline">

            ${order.timeline
                .map(
                    (
                        item,
                        index
                    ) => `

                        <div class="
                            tracking-step
                            ${
                                index <
                                order.step
                                    ? "done"
                                    : ""
                            }
                            ${
                                index ===
                                order.step
                                    ? "current"
                                    : ""
                            }
                        ">

                            <div class="tracking-dot">

                                ${
                                    index <
                                    order.step
                                        ? "✓"
                                        : index + 1
                                }

                            </div>


                            <div>

                                <h4>
                                    ${item.title}
                                </h4>

                                <p>
                                    ${item.description}
                                </p>

                            </div>

                        </div>

                    `
                )
                .join("")}

        </div>

    `;


    result.classList.add(
        "show"
    );

}


/* =========================================================
   SUCCESS MODAL
========================================================= */

function showOrderSuccess(
    order
) {

    document.getElementById(
        "successOrderCode"
    ).textContent =
        order.id;


    document.getElementById(
        "orderSuccessModal"
    ).hidden =
        false;

}


function closeOrderSuccess() {

    document.getElementById(
        "orderSuccessModal"
    ).hidden =
        true;

}


/* =========================================================
   CHECKOUT
========================================================= */

function checkout() {

    const order =
        createOrder();


    if (!order)
        return;


    closeCart();


    showOrderSuccess(
        order
    );

}


/* =========================================================
   COUNTDOWN
========================================================= */

function updateCountdown() {

    const countdown =
        document.getElementById(
            "countdown"
        );


    if (!countdown)
        return;


    const hours =
        Math.floor(
            remainingSeconds /
            3600
        );


    const minutes =
        Math.floor(
            (
                remainingSeconds %
                3600
            ) / 60
        );


    const seconds =
        remainingSeconds %
        60;


    countdown.textContent =

        `${String(hours).padStart(2,"0")}:` +

        `${String(minutes).padStart(2,"0")}:` +

        `${String(seconds).padStart(2,"0")}`;


    if (
        remainingSeconds > 0
    ) {

        remainingSeconds--;

    }

    else {

        remainingSeconds =
            2 * 60 * 60;

    }

}


setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   EVENT: SEARCH
========================================================= */

if (searchButton) {

    searchButton.addEventListener(
        "click",
        () => {

            searchKeyword =
                searchInput
                    .value
                    .trim()
                    .toLowerCase();


            if (activeCategory) {

                renderCategoryProducts();

            }

            else {

                renderHomeProducts();

            }


            if (searchKeyword) {

                showToast(
                    `Mencari "${searchKeyword}"`
                );

            }

        }
    );

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            searchKeyword =
                searchInput
                    .value
                    .trim()
                    .toLowerCase();


            if (activeCategory) {

                renderCategoryProducts();

            }

            else {

                renderHomeProducts();

            }

        }
    );


    searchInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Enter"
            ) {

                searchButton.click();

            }

        }
    );

}


/* =========================================================
   EVENT: SORT
========================================================= */

document
    .querySelectorAll(
        "[data-sort]"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    activeSort =
                        button.dataset.sort;


                    document
                        .querySelectorAll(
                            "[data-sort]"
                        )
                        .forEach(
                            item =>
                                item.classList.remove(
                                    "active"
                                )
                        );


                    button.classList.add(
                        "active"
                    );


                    renderHomeProducts();

                }
            );

        }
    );


/* =========================================================
   EVENT: CATEGORY SORT
========================================================= */

document
    .querySelectorAll(
        "[data-category-sort]"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    categorySort =
                        button.dataset.categorySort;


                    document
                        .querySelectorAll(
                            "[data-category-sort]"
                        )
                        .forEach(
                            item =>
                                item.classList.remove(
                                    "active"
                                )
                        );


                    button.classList.add(
                        "active"
                    );


                    renderCategoryProducts();

                }
            );

        }
    );


/* =========================================================
   EVENT: CATEGORY
========================================================= */

document
    .querySelectorAll(
        ".category-card"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    showCategory(
                        button.dataset.category
                    );

                }
            );

        }
    );


/* =========================================================
   EVENT: PRODUCT
========================================================= */

document.addEventListener(
    "click",
    event => {


        /* ADD CART */

        const addButton =
            event.target.closest(
                "[data-cart-id]"
            );


        if (addButton) {

            event.stopPropagation();


            const product =
                products.find(
                    item =>
                        item.id ===
                        Number(
                            addButton.dataset.cartId
                        )
                );


            if (product) {

                addToCart(
                    product,
                    1
                );

            }


            return;

        }


        /* WISHLIST */

        const wishlistButton =
            event.target.closest(
                "[data-wishlist-id]"
            );


        if (wishlistButton) {

            event.stopPropagation();


            const product =
                products.find(
                    item =>
                        item.id ===
                        Number(
                            wishlistButton.dataset.wishlistId
                        )
                );


            if (product) {

                toggleWishlist(
                    product
                );

            }


            return;

        }


        /* PRODUCT CARD */

        const card =
            event.target.closest(
                ".product-card"
            );


        if (card) {

            const product =
                products.find(
                    item =>
                        item.id ===
                        Number(
                            card.dataset.productId
                        )
                );


            if (product) {

                openProductModal(
                    product
                );

            }

        }

    }
);


/* =========================================================
   EVENT: CART QUANTITY
========================================================= */

cartItems.addEventListener(
    "click",
    event => {

        const plus =
            event.target.closest(
                "[data-cart-plus]"
            );

        const minus =
            event.target.closest(
                "[data-cart-minus]"
            );

        const remove =
            event.target.closest(
                "[data-cart-remove]"
            );


        if (plus) {

            const index =
                Number(
                    plus.dataset.cartPlus
                );


            if (cart[index]) {

                cart[index].quantity++;

            }

        }


        if (minus) {

            const index =
                Number(
                    minus.dataset.cartMinus
                );


            if (cart[index]) {

                cart[index].quantity--;


                if (
                    cart[index].quantity <= 0
                ) {

                    cart.splice(
                        index,
                        1
                    );

                }

            }

        }


        if (remove) {

            const index =
                Number(
                    remove.dataset.cartRemove
                );


            if (cart[index]) {

                showToast(
                    `${cart[index].name} dihapus dari keranjang.`
                );

            }


            cart.splice(
                index,
                1
            );

        }


        saveStorage();

        updateCart();

    }
);


/* =========================================================
   EVENT: WISHLIST DRAWER
========================================================= */

document
    .getElementById(
        "wishlistItems"
    )
    .addEventListener(
        "click",
        event => {

            const cartButton =
                event.target.closest(
                    "[data-wishlist-cart]"
                );


            const removeButton =
                event.target.closest(
                    "[data-wishlist-remove]"
                );


            if (cartButton) {

                const product =
                    products.find(
                        item =>
                            item.id ===
                            Number(
                                cartButton.dataset.wishlistCart
                            )
                    );


                if (product) {

                    addToCart(
                        product
                    );

                }

            }


            if (removeButton) {

                const id =
                    Number(
                        removeButton.dataset.wishlistRemove
                    );


                wishlist =
                    wishlist.filter(
                        item =>
                            item !==
                            id
                    );


                saveStorage();

                updateWishlist();

                renderHomeProducts();

                renderFlashSale();

            }

        }
    );


/* =========================================================
   EVENT: MODAL
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            event.target.closest(
                "[data-close-product]"
            )
        ) {

            closeProductModal();

        }


        if (
            event.target.id ===
            "detailPlus"
        ) {

            detailQuantity++;

            document.getElementById(
                "detailQuantity"
            ).textContent =
                detailQuantity;

        }


        if (
            event.target.id ===
            "detailMinus"
        ) {

            detailQuantity =
                Math.max(
                    1,
                    detailQuantity - 1
                );


            document.getElementById(
                "detailQuantity"
            ).textContent =
                detailQuantity;

        }


        if (
            event.target.id ===
                "detailAddCart" &&
            selectedProduct
        ) {

            addToCart(
                selectedProduct,
                detailQuantity
            );

            closeProductModal();

            openCart();

        }


        if (
            event.target.id ===
                "detailBuyNow" &&
            selectedProduct
        ) {

            addToCart(
                selectedProduct,
                detailQuantity
            );

            closeProductModal();

            openCart();

        }

    }
);


/* =========================================================
   EVENT: VOUCHER
========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".claim-voucher"
            );


        if (!button)
            return;


        claimVoucher(
            button.dataset.voucher
        );

    }
);


/* =========================================================
   EVENT: OPEN VOUCHER
========================================================= */

document
    .getElementById(
        "viewAllVoucherButton"
    )
    .addEventListener(
        "click",
        openVoucherModal
    );


document
    .getElementById(
        "footerVoucherButton"
    )
    .addEventListener(
        "click",
        openVoucherModal
    );


document.addEventListener(
    "click",
    event => {

        if (
            event.target.closest(
                "[data-close-voucher]"
            )
        ) {

            closeVoucherModal();

        }

    }
);


/* =========================================================
   EVENT: CART
========================================================= */

document
    .getElementById(
        "cartButton"
    )
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById(
        "closeCart"
    )
    .addEventListener(
        "click",
        closeCart
    );


document
    .getElementById(
        "checkoutButton"
    )
    .addEventListener(
        "click",
        checkout
    );


/* =========================================================
   EVENT: WISHLIST
========================================================= */

document
    .getElementById(
        "wishlistButton"
    )
    .addEventListener(
        "click",
        () => {

            wishlistDrawer.classList.add(
                "open"
            );

            overlay.classList.add(
                "active"
            );

        }
    );


document
    .getElementById(
        "closeWishlist"
    )
    .addEventListener(
        "click",
        () => {

            wishlistDrawer.classList.remove(
                "open"
            );

            closeOverlayIfNothingOpen();

        }
    );


/* =========================================================
   EVENT: NOTIFICATION
========================================================= */

document
    .getElementById(
        "notificationButton"
    )
    .addEventListener(
        "click",
        openNotifications
    );


document
    .getElementById(
        "topNotificationButton"
    )
    .addEventListener(
        "click",
        openNotifications
    );


document
    .getElementById(
        "footerNotificationButton"
    )
    .addEventListener(
        "click",
        openNotifications
    );


document
    .getElementById(
        "closeNotification"
    )
    .addEventListener(
        "click",
        closeNotifications
    );


document
    .getElementById(
        "clearNotifications"
    )
    .addEventListener(
        "click",
        () => {

            notifications =
                notifications.map(
                    item => ({
                        ...item,
                        read: true
                    })
                );


            saveStorage();

            renderNotifications();

            showToast(
                "Semua notifikasi sudah dibaca."
            );

        }
    );


/* =========================================================
   EVENT: OVERLAY
========================================================= */

overlay.addEventListener(
    "click",
    () => {

        closeCart();

        wishlistDrawer.classList.remove(
            "open"
        );

        notificationDrawer.classList.remove(
            "open"
        );

        overlay.classList.remove(
            "active"
        );

    }
);


/* =========================================================
   EVENT: TRACKING
========================================================= */

document
    .getElementById(
        "trackingSearchButton"
    )
    .addEventListener(
        "click",
        () => {

            renderTracking(
                document.getElementById(
                    "trackingInput"
                ).value
            );

        }
    );


document
    .getElementById(
        "trackingInput"
    )
    .addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Enter"
            ) {

                document
                    .getElementById(
                        "trackingSearchButton"
                    )
                    .click();

            }

        }
    );


document.addEventListener(
    "click",
    event => {

        if (
            event.target.closest(
                "[data-close-tracking]"
            )
        ) {

            closeTracking();

        }

    }
);


/* =========================================================
   EVENT: SUCCESS
========================================================= */

document
    .getElementById(
        "closeSuccessModal"
    )
    .addEventListener(
        "click",
        closeOrderSuccess
    );


document
    .getElementById(
        "trackSuccessOrder"
    )
    .addEventListener(
        "click",
        () => {

            const code =
                document.getElementById(
                    "successOrderCode"
                ).textContent;


            closeOrderSuccess();

            openTracking(
                code
            );

        }
    );


/* =========================================================
   FOOTER TRACKING
========================================================= */

document
    .getElementById(
        "footerTrackingButton"
    )
    .addEventListener(
        "click",
        () => {

            openTracking();

        }
    );


/* =========================================================
   HERO
========================================================= */

document
    .getElementById(
        "heroButton"
    )
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "homeProductsSection"
                )
                .scrollIntoView({
                    behavior:
                        "smooth"
                });

        }
    );


/* =========================================================
   FLASH SEE ALL
========================================================= */

document
    .getElementById(
        "flashSeeAll"
    )
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "homeProductsSection"
                )
                .scrollIntoView({
                    behavior:
                        "smooth"
                });

        }
    );


/* =========================================================
   BACK HOME
========================================================= */

document
    .getElementById(
        "backHomeButton"
    )
    .addEventListener(
        "click",
        () => {

            showHome();

        }
    );


document
    .getElementById(
        "homeLogo"
    )
    .addEventListener(
        "click",
        () => {

            showHome();

        }
    );


/* =========================================================
   ACCOUNT SIMULATION
========================================================= */

const accountButton =
    document.getElementById(
        "accountButton"
    );

const accountDropdown =
    document.getElementById(
        "accountDropdown"
    );


accountButton.addEventListener(
    "click",
    () => {

        accountDropdown.hidden =
            !accountDropdown.hidden;

    }
);


document
    .getElementById(
        "logoutButton"
    )
    .addEventListener(
        "click",
        () => {

            accountDropdown.hidden =
                true;

            showToast(
                "Kamu sedang menggunakan mode pengunjung."
            );

        }
    );


/* =========================================================
   SELLER / HELP
========================================================= */

document
    .getElementById(
        "sellerButton"
    )
    .addEventListener(
        "click",
        () => {

            showToast(
                "Fitur Seller akan dikembangkan pada tahap berikutnya."
            );

        }
    );


document
    .getElementById(
        "helpButton"
    )
    .addEventListener(
        "click",
        () => {

            showToast(
                "Pusat bantuan MAB-Store masih berupa simulasi."
            );

        }
    );


/* =========================================================
   BROWSER HISTORY
========================================================= */

window.addEventListener(
    "popstate",
    () => {

        const params =
            new URLSearchParams(
                window.location.search
            );


        const category =
            params.get(
                "category"
            );


        if (
            category &&
            categoryInfo[category]
        ) {

            showCategory(
                category,
                false
            );

        }

        else {

            showHome(
                false
            );

        }

    }
);


/* =========================================================
   ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            closeProductModal();

            closeCart();

            wishlistDrawer.classList.remove(
                "open"
            );

            notificationDrawer.classList.remove(
                "open"
            );

            closeVoucherModal();

            closeTracking();

            closeOrderSuccess();

            overlay.classList.remove(
                "active"
            );

        }

    }
);


/* =========================================================
   INITIALIZATION
========================================================= */

loadStorage();

renderHomeProducts();

renderFlashSale();

updateCart();

updateWishlist();

renderNotifications();

updateCountdown();


/* =========================================================
   DEFAULT NOTIFICATION
========================================================= */

if (
    notifications.length === 0
) {

    addNotification(
        "Selamat datang di MAB-Store",
        "Temukan produk pilihan dan berbagai promo menarik.",
        "🛍️"
    );

}


console.log(
    "MAB-Store berhasil dijalankan 🚀"
);

/* =========================================================
   MAB-STORE
   MARKETPLACE FRONTEND
   CATEGORY + SEARCH + SORTING + CART
   ========================================================= */


/* =========================================================
   PRODUCT DATABASE
========================================================= */

const products = [

    {
        id: 1,
        name: "Smartphone Pro Max",
        category: "Elektronik",
        icon: "📱",
        price: 2999000,
        oldPrice: 3499000,
        rating: 4.9,
        sold: 120,
        image: "https://images.pexels.com/photos/8408537/pexels-photo-8408537.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: true,
        keywords: "smartphone hp ponsel android elektronik"
    },

    {
        id: 2,
        name: "Wireless Headphone",
        category: "Elektronik",
        icon: "🎧",
        price: 399000,
        oldPrice: 599000,
        rating: 4.8,
        sold: 85,
        image: "https://images.pexels.com/photos/7772547/pexels-photo-7772547.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: true,
        keywords: "headphone headset audio musik wireless elektronik"
    },

    {
        id: 3,
        name: "Smartwatch Series 5",
        category: "Elektronik",
        icon: "⌚",
        price: 549000,
        oldPrice: 799000,
        rating: 4.7,
        sold: 64,
        image: "https://images.pexels.com/photos/14691505/pexels-photo-14691505.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: true,
        keywords: "smartwatch jam tangan elektronik"
    },

    {
        id: 4,
        name: "Tas Backpack Premium",
        category: "Aksesoris",
        icon: "🎒",
        price: 249000,
        oldPrice: 399000,
        rating: 4.9,
        sold: 210,
        image: "https://images.pexels.com/photos/11726029/pexels-photo-11726029.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: true,
        keywords: "tas backpack fashion aksesoris sekolah"
    },

    {
        id: 5,
        name: "Sneakers Casual",
        category: "Olahraga",
        icon: "👟",
        price: 329000,
        oldPrice: 0,
        rating: 4.8,
        sold: 98,
        image: "https://images.pexels.com/photos/797637/pexels-photo-797637.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: false,
        keywords: "sneakers sepatu olahraga fashion"
    },

    {
        id: 6,
        name: "Laptop Slim",
        category: "Elektronik",
        icon: "💻",
        price: 7999000,
        oldPrice: 0,
        rating: 4.9,
        sold: 41,
        image: "https://images.pexels.com/photos/3584974/pexels-photo-3584974.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: false,
        keywords: "laptop komputer notebook elektronik"
    },

    {
        id: 7,
        name: "T-Shirt Premium",
        category: "Fashion",
        icon: "👕",
        price: 129000,
        oldPrice: 0,
        rating: 4.7,
        sold: 340,
        image: "https://images.pexels.com/photos/12039633/pexels-photo-12039633.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: false,
        keywords: "kaos tshirt pakaian fashion"
    },

    {
        id: 8,
        name: "Kursi Minimalis",
        category: "Rumah",
        icon: "🪑",
        price: 499000,
        oldPrice: 0,
        rating: 4.6,
        sold: 56,
        image: "https://images.pexels.com/photos/21852582/pexels-photo-21852582.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: false,
        keywords: "kursi furniture rumah minimalis"
    },

    {
        id: 9,
        name: "Kamera Mirrorless",
        category: "Elektronik",
        icon: "📷",
        price: 1299000,
        oldPrice: 0,
        rating: 4.8,
        sold: 72,
        image: "https://images.pexels.com/photos/15945023/pexels-photo-15945023.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: false,
        keywords: "kamera fotografi mirrorless elektronik"
    },

    {
        id: 10,
        name: "Parfum Premium",
        category: "Kecantikan",
        icon: "🌸",
        price: 279000,
        oldPrice: 0,
        rating: 4.9,
        sold: 188,
        image: "https://images.pexels.com/photos/16089870/pexels-photo-16089870.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: false,
        keywords: "parfum fragrance kecantikan"
    },

    {
        id: 11,
        name: "Mug Keramik",
        category: "Rumah",
        icon: "☕",
        price: 89000,
        oldPrice: 0,
        rating: 4.7,
        sold: 415,
        image: "https://images.pexels.com/photos/4109750/pexels-photo-4109750.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: false,
        keywords: "mug gelas keramik rumah dapur"
    },

    {
        id: 12,
        name: "Keyboard Mechanical",
        category: "Gaming",
        icon: "⌨️",
        price: 459000,
        oldPrice: 0,
        rating: 4.8,
        sold: 126,
        image: "https://images.pexels.com/photos/18114576/pexels-photo-18114576.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: false,
        keywords: "keyboard mechanical komputer gaming"
    }

];


/* =========================================================
   CATEGORY INFORMATION
========================================================= */

const categoryInfo = {

    Elektronik: {
        icon: "📱",
        description: "Temukan smartphone, laptop, kamera, audio, dan perangkat elektronik pilihan."
    },

    Fashion: {
        icon: "👕",
        description: "Temukan pakaian dan produk fashion pilihan untuk melengkapi gaya kamu."
    },

    Rumah: {
        icon: "🏠",
        description: "Berbagai kebutuhan rumah dan perlengkapan pilihan untuk rumah kamu."
    },

    Kecantikan: {
        icon: "💄",
        description: "Temukan berbagai produk kecantikan dan perawatan pilihan."
    },

    Gaming: {
        icon: "🎮",
        description: "Perlengkapan gaming dan aksesori untuk pengalaman bermain yang lebih seru."
    },

    Olahraga: {
        icon: "⚽",
        description: "Berbagai perlengkapan olahraga untuk mendukung aktivitas kamu."
    },

    Buku: {
        icon: "📚",
        description: "Temukan buku dan bahan bacaan pilihan."
    },

    Aksesoris: {
        icon: "👜",
        description: "Lengkapi gaya dan kebutuhan kamu dengan berbagai aksesoris pilihan."
    }

};


/* =========================================================
   STATE
========================================================= */

let activeCategory = null;

let activeSort = "terbaru";

let categorySort = "terbaru";

let searchKeyword = "";

let cart = [];

let wishlist = [];

let selectedProduct = null;

let detailQuantity = 1;


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

const cartButton =
    document.getElementById("cartButton");

const closeCart =
    document.getElementById("closeCart");

const overlay =
    document.getElementById("overlay");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutButton =
    document.getElementById("checkoutButton");

const toast =
    document.getElementById("toast");


/* =========================================================
   LOCAL STORAGE
========================================================= */

function loadStorage() {

    try {

        const savedCart =
            localStorage.getItem("mabstore_cart_v3");

        if (savedCart) {

            const parsedCart =
                JSON.parse(savedCart);

            if (Array.isArray(parsedCart)) {

                cart = parsedCart;

            }

        }

    } catch (error) {

        console.warn(
            "Cart storage error:",
            error
        );

        cart = [];

    }


    try {

        const savedWishlist =
            localStorage.getItem("mabstore_wishlist_v2");

        if (savedWishlist) {

            const parsedWishlist =
                JSON.parse(savedWishlist);

            if (Array.isArray(parsedWishlist)) {

                wishlist = parsedWishlist;

            }

        }

    } catch (error) {

        console.warn(
            "Wishlist storage error:",
            error
        );

        wishlist = [];

    }

}


function saveCart() {

    localStorage.setItem(
        "mabstore_cart_v3",
        JSON.stringify(cart)
    );

}


function saveWishlist() {

    localStorage.setItem(
        "mabstore_wishlist_v2",
        JSON.stringify(wishlist)
    );

}


/* =========================================================
   FORMAT RUPIAH
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

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);

}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(product) {

    const liked =
        wishlist.includes(product.id);


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
                                ⚡ SALE
                            </span>
                          `
                        : ""
                }


                <button
                    class="wishlist-button ${liked ? "active" : ""}"
                    data-wishlist-id="${product.id}"
                    type="button"
                    aria-label="Wishlist"
                >
                    ${liked ? "♥" : "♡"}
                </button>

            </div>


            <div class="product-info">

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


                <button
                    class="add-cart"
                    data-cart-id="${product.id}"
                    type="button"
                >
                    + Keranjang
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


    const searchText = `

        ${product.name}

        ${product.category}

        ${product.keywords}

    `.toLowerCase();


    return searchText.includes(
        searchKeyword
    );

}


/* =========================================================
   SORTING
========================================================= */

function sortProducts(list, sortType) {

    const sorted =
        [...list];


    if (sortType === "terlaris") {

        sorted.sort(
            (a, b) =>
                b.sold - a.sold
        );

    }

    else if (sortType === "termurah") {

        sorted.sort(
            (a, b) =>
                a.price - b.price
        );

    }

    else if (sortType === "rating") {

        sorted.sort(
            (a, b) =>
                b.rating - a.rating
        );

    }

    else if (sortType === "termahal") {

        sorted.sort(
            (a, b) =>
                b.price - a.price
        );

    }

    else {

        /*
         * ID lebih kecil dianggap
         * produk lebih baru dalam
         * database demo ini.
         */

        sorted.sort(
            (a, b) =>
                a.id - b.id
        );

    }


    return sorted;

}


/* =========================================================
   RENDER HOME PRODUCTS
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


    if (list.length === 0) {

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
            .map(createProductCard)
            .join("");

}


/* =========================================================
   RENDER FLASH SALE
========================================================= */

function renderFlashSale() {

    if (!flashProducts) return;


    const flashList =
        products.filter(
            product =>
                product.flash
        );


    flashProducts.innerHTML =
        flashList
            .map(createProductCard)
            .join("");

}


/* =========================================================
   HOME SORT BUTTON
========================================================= */

document
    .querySelectorAll("[data-sort]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                activeSort =
                    button.dataset.sort;


                document
                    .querySelectorAll("[data-sort]")
                    .forEach(item => {

                        item.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );


                renderHomeProducts();

            }
        );

    });


/* =========================================================
   CATEGORY BUTTON
========================================================= */

document
    .querySelectorAll(".category-card")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.category;


                showCategory(
                    category,
                    true
                );

            }
        );

    });


/* =========================================================
   SHOW CATEGORY PAGE
========================================================= */

function showCategory(
    category,
    updateUrl = true
) {

    if (
        !categoryInfo[category]
    ) {

        return;

    }


    activeCategory =
        category;


    categorySort =
        "terbaru";


    searchKeyword =
        "";


    if (searchInput) {

        searchInput.value = "";

    }


    const info =
        categoryInfo[category];


    const icon =
        document.getElementById(
            "categoryPageIcon"
        );


    const title =
        document.getElementById(
            "categoryPageTitle"
        );


    const description =
        document.getElementById(
            "categoryPageDescription"
        );


    if (icon) {

        icon.textContent =
            info.icon;

    }


    if (title) {

        title.textContent =
            category;

    }


    if (description) {

        description.textContent =
            info.description;

    }


    updateCategoryButtons();

    renderCategoryProducts();


    /*
     * PENTING:
     * Beranda disembunyikan.
     * Halaman kategori ditampilkan.
     */

    if (homePage) {

        homePage.hidden = true;

        homePage.style.display =
            "none";

    }


    if (categoryPage) {

        categoryPage.hidden = false;

        categoryPage.style.display =
            "block";

    }


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
            {
                category
            },
            "",
            url
        );

    }

}


/* =========================================================
   RENDER CATEGORY PRODUCTS
========================================================= */

function renderCategoryProducts() {

    if (
        !categoryProducts ||
        !activeCategory
    ) {

        return;

    }


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


    if (list.length === 0) {

        categoryProducts.innerHTML = `

            <div class="empty-search">

                <h3>
                    Produk belum tersedia
                </h3>

                <p>
                    Belum ada produk dalam kategori ini.
                </p>

            </div>

        `;

    }

    else {

        categoryProducts.innerHTML =
            list
                .map(createProductCard)
                .join("");

    }


    const resultCount =
        document.getElementById(
            "categoryResultCount"
        );


    if (resultCount) {

        resultCount.textContent =
            `${list.length} produk ditemukan`;

    }

}


/* =========================================================
   CATEGORY SORT
========================================================= */

document
    .querySelectorAll(
        "[data-category-sort]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                categorySort =
                    button.dataset.categorySort;


                updateCategoryButtons();

                renderCategoryProducts();

            }
        );

    });


function updateCategoryButtons() {

    document
        .querySelectorAll(
            "[data-category-sort]"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.categorySort ===
                    categorySort
            );

        });

}


/* =========================================================
   RETURN HOME
========================================================= */

function showHome(
    updateUrl = true
) {

    activeCategory =
        null;


    searchKeyword =
        "";


    if (searchInput) {

        searchInput.value = "";

    }


    if (categoryPage) {

        categoryPage.hidden = true;

        categoryPage.style.display =
            "none";

    }


    if (homePage) {

        homePage.hidden = false;

        homePage.style.display =
            "";

    }


    renderHomeProducts();


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


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   BACK HOME BUTTON
========================================================= */

const backHomeButton =
    document.getElementById(
        "backHomeButton"
    );


if (backHomeButton) {

    backHomeButton.addEventListener(
        "click",
        () => {

            showHome(
                true
            );

        }
    );

}


/* =========================================================
   LOGO → HOME
========================================================= */

const homeLogo =
    document.getElementById(
        "homeLogo"
    );


if (homeLogo) {

    homeLogo.addEventListener(
        "click",
        () => {

            showHome(
                true
            );

        }
    );

}


/* =========================================================
   SEARCH
========================================================= */

function performSearch() {

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


if (searchButton) {

    searchButton.addEventListener(
        "click",
        performSearch
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
                event.key === "Enter"
            ) {

                performSearch();

            }

        }
    );

}


/* =========================================================
   HERO BUTTON
========================================================= */

const heroButton =
    document.getElementById(
        "heroButton"
    );


if (heroButton) {

    heroButton.addEventListener(
        "click",
        () => {

            const section =
                document.getElementById(
                    "homeProductsSection"
                );


            if (section) {

                section.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


/* =========================================================
   PRODUCT EVENTS
========================================================= */

document.addEventListener(
    "click",
    event => {


        /* -----------------------------------------
           ADD TO CART
        ----------------------------------------- */

        const addButton =
            event.target.closest(
                "[data-cart-id]"
            );


        if (addButton) {

            event.stopPropagation();


            const id =
                Number(
                    addButton.dataset.cartId
                );


            const product =
                products.find(
                    item =>
                        item.id === id
                );


            if (product) {

                addToCart(
                    product,
                    1
                );

            }


            return;

        }


        /* -----------------------------------------
           WISHLIST
        ----------------------------------------- */

        const wishlistButton =
            event.target.closest(
                "[data-wishlist-id]"
            );


        if (wishlistButton) {

            event.stopPropagation();


            const id =
                Number(
                    wishlistButton.dataset.wishlistId
                );


            const product =
                products.find(
                    item =>
                        item.id === id
                );


            if (product) {

                toggleWishlist(
                    product
                );

            }


            return;

        }


        /* -----------------------------------------
           PRODUCT CARD
        ----------------------------------------- */

        const productCard =
            event.target.closest(
                ".product-card"
            );


        if (productCard) {

            const id =
                Number(
                    productCard.dataset.productId
                );


            const product =
                products.find(
                    item =>
                        item.id === id
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
   ADD TO CART
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


    saveCart();

    updateCart();


    showToast(
        `${product.name} ditambahkan ke keranjang 🛒`
    );

}


/* =========================================================
   UPDATE CART
========================================================= */

function updateCart() {

    if (
        !cartItems ||
        !cartCount ||
        !cartTotal
    ) {

        return;

    }


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


    cartItems.innerHTML = "";


    cart.forEach(
        (
            item,
            index
        ) => {

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


                    <div>
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
   CART QUANTITY
========================================================= */

if (cartItems) {

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
                        cart[index].quantity <=
                        0
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


                cart.splice(
                    index,
                    1
                );


                showToast(
                    "Produk dihapus dari keranjang."
                );

            }


            saveCart();

            updateCart();

        }
    );

}


/* =========================================================
   OPEN CART
========================================================= */

function openCart() {

    if (!cartDrawer) return;


    cartDrawer.classList.add(
        "open"
    );


    if (overlay) {

        overlay.classList.add(
            "active"
        );

    }

}


/* =========================================================
   CLOSE CART
========================================================= */

function closeCartDrawer() {

    if (cartDrawer) {

        cartDrawer.classList.remove(
            "open"
        );

    }


    if (overlay) {

        overlay.classList.remove(
            "active"
        );

    }

}


if (cartButton) {

    cartButton.addEventListener(
        "click",
        openCart
    );

}


if (closeCart) {

    closeCart.addEventListener(
        "click",
        closeCartDrawer
    );

}


if (overlay) {

    overlay.addEventListener(
        "click",
        closeCartDrawer
    );

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

    }


    saveWishlist();


    renderHomeProducts();

    renderFlashSale();


    if (activeCategory) {

        renderCategoryProducts();

    }

}


/* =========================================================
   PRODUCT DETAIL MODAL
========================================================= */

function createProductModal() {

    if (
        document.getElementById(
            "productModal"
        )
    ) {

        return;

    }


    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "productModal";


    modal.className =
        "product-modal";


    modal.innerHTML = `

        <div
            class="product-modal-backdrop"
            data-close-product
        ></div>


        <div
            class="product-modal-dialog"
        >

            <button
                class="product-modal-close"
                data-close-product
                type="button"
            >
                ✕
            </button>


            <div
                class="product-modal-grid"
            >

                <div
                    class="product-modal-image"
                >

                    <img
                        id="detailProductImage"
                        src=""
                        alt=""
                    >

                </div>


                <div
                    class="product-modal-info"
                >

                    <span
                        class="detail-badge"
                    >
                        MAB-Store
                    </span>


                    <h2
                        id="detailProductName"
                    >
                    </h2>


                    <div
                        class="detail-rating"
                    >
                        ⭐
                        <span
                            id="detailRating"
                        >
                        </span>
                    </div>


                    <div
                        class="detail-price"
                        id="detailProductPrice"
                    >
                    </div>


                    <p
                        class="detail-stock"
                    >
                        ✓ Stok tersedia
                    </p>


                    <p
                        id="detailProductDescription"
                    >
                    </p>


                    <div
                        class="detail-quantity"
                    >

                        <span>
                            Jumlah
                        </span>


                        <div>

                            <button
                                id="detailMinus"
                                type="button"
                            >
                                −
                            </button>


                            <strong
                                id="detailQuantity"
                            >
                                1
                            </strong>


                            <button
                                id="detailPlus"
                                type="button"
                            >
                                +
                            </button>

                        </div>

                    </div>


                    <div
                        class="detail-actions"
                    >

                        <button
                            id="detailAddCart"
                            type="button"
                        >
                            🛒 Tambah ke Keranjang
                        </button>


                        <button
                            id="detailBuyNow"
                            type="button"
                        >
                            ⚡ Beli Sekarang
                        </button>

                    </div>

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    modal.addEventListener(
        "click",
        event => {

            if (
                event.target.closest(
                    "[data-close-product]"
                )
            ) {

                closeProductModal();

            }

        }
    );

}


/* =========================================================
   OPEN PRODUCT MODAL
========================================================= */

function openProductModal(
    product
) {

    createProductModal();


    selectedProduct =
        product;


    detailQuantity =
        1;


    const image =
        document.getElementById(
            "detailProductImage"
        );


    const name =
        document.getElementById(
            "detailProductName"
        );


    const rating =
        document.getElementById(
            "detailRating"
        );


    const price =
        document.getElementById(
            "detailProductPrice"
        );


    const description =
        document.getElementById(
            "detailProductDescription"
        );


    const quantity =
        document.getElementById(
            "detailQuantity"
        );


    if (image) {

        image.src =
            product.image;

        image.alt =
            product.name;

    }


    if (name) {

        name.textContent =
            product.name;

    }


    if (rating) {

        rating.textContent =
            `${product.rating} • ${product.sold} terjual`;

    }


    if (price) {

        price.textContent =
            rupiah(
                product.price
            );

    }


    if (description) {

        description.textContent =
            `${product.name} merupakan produk kategori ` +
            `${product.category}. Produk ini memiliki ` +
            `rating ${product.rating} dan telah terjual ` +
            `${product.sold} unit.`;

    }


    if (quantity) {

        quantity.textContent =
            detailQuantity;

    }


    const modal =
        document.getElementById(
            "productModal"
        );


    if (modal) {

        modal.classList.add(
            "show"
        );

    }


    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   CLOSE PRODUCT MODAL
========================================================= */

function closeProductModal() {

    const modal =
        document.getElementById(
            "productModal"
        );


    if (modal) {

        modal.classList.remove(
            "show"
        );

    }


    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   MODAL BUTTONS
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            event.target.id ===
            "detailPlus"
        ) {

            detailQuantity++;


            const quantity =
                document.getElementById(
                    "detailQuantity"
                );


            if (quantity) {

                quantity.textContent =
                    detailQuantity;

            }

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


            const quantity =
                document.getElementById(
                    "detailQuantity"
                );


            if (quantity) {

                quantity.textContent =
                    detailQuantity;

            }

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
   CHECKOUT
========================================================= */

if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        () => {

            if (
                cart.length === 0
            ) {

                showToast(
                    "Keranjang masih kosong."
                );

                return;

            }


            const total =
                cart.reduce(
                    (
                        sum,
                        item
                    ) =>
                        sum +
                        (
                            item.price *
                            item.quantity
                        ),
                    0
                );


            alert(

                "🛒 CHECKOUT MAB-STORE\n\n" +

                `Total: ${rupiah(total)}\n\n` +

                "Checkout masih berupa simulasi."

            );

        }
    );

}


/* =========================================================
   VOUCHER
========================================================= */

const voucherButton =
    document.getElementById(
        "voucherButton"
    );


if (voucherButton) {

    voucherButton.addEventListener(
        "click",
        () => {

            voucherButton.textContent =
                "Voucher Berhasil Diklaim ✓";


            showToast(
                "Voucher MAB-Store berhasil diklaim 🎟️"
            );

        }
    );

}


/* =========================================================
   FLASH SALE COUNTDOWN
========================================================= */

let remainingSeconds =
    2 * 60 * 60;


function updateCountdown() {

    const countdown =
        document.getElementById(
            "countdown"
        );


    if (!countdown) {

        return;

    }


    const hours =
        Math.floor(
            remainingSeconds / 3600
        );


    const minutes =
        Math.floor(
            (
                remainingSeconds % 3600
            ) / 60
        );


    const seconds =
        remainingSeconds % 60;


    countdown.textContent =

        `${String(hours).padStart(2, "0")}:` +

        `${String(minutes).padStart(2, "0")}:` +

        `${String(seconds).padStart(2, "0")}`;


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


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   URL CATEGORY
========================================================= */

function loadCategoryFromURL() {

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


/* =========================================================
   BROWSER BACK / FORWARD
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
   ESC → CLOSE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeProductModal();

            closeCartDrawer();

        }

    }
);


/* =========================================================
   INITIALIZATION
========================================================= */

loadStorage();

renderFlashSale();

renderHomeProducts();

updateCart();

loadCategoryFromURL();


console.log(
    "MAB-Store berhasil dijalankan 🚀"
);

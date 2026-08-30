/* =========================================================
   MAB-STORE
   MARKETPLACE FRONTEND
   CLEAN FINAL JAVASCRIPT
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
        image: "https://images.pexels.com/photos/12882840/pexels-photo-12882840.jpeg?auto=compress&cs=tinysrgb&w=800",
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

const wishlistButton =
    document.getElementById("wishlistButton");

const wishlistCount =
    document.getElementById("wishlistCount");

const wishlistDrawer =
    document.getElementById("wishlistDrawer");

const closeWishlist =
    document.getElementById("closeWishlist");

const wishlistItems =
    document.getElementById("wishlistItems");

const wishlistShopButton =
    document.getElementById("wishlistShopButton");

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
   STORAGE
   ========================================================= */

function loadStorage() {

    try {

        const savedCart =
            localStorage.getItem("mabstore_cart_v3");

        if (savedCart) {

            const parsed =
                JSON.parse(savedCart);

            if (Array.isArray(parsed)) {
                cart = parsed;
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

            const parsed =
                JSON.parse(savedWishlist);

            if (Array.isArray(parsed)) {
                wishlist = parsed;
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

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(
        showToast.timer
    );

    showToast.timer =
        setTimeout(
            () => {
                toast.classList.remove("show");
            },
            2200
        );

}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function createProductCard(product) {
    const liked = wishlist.includes(product.id);
    const discount = product.oldPrice > product.price && product.oldPrice > 0
        ? Math.round((1 - product.price / product.oldPrice) * 100)
        : 0;
    const stockPercent = Math.min(95, Math.max(42, Math.round((product.sold / 230) * 100)));

    return `
        <article class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                ${product.image
                    ? `<img class="product-photo" src="${product.image}" alt="${product.name}" loading="lazy">`
                    : `<div class="product-placeholder">${product.icon}</div>`}
                <button class="wishlist-button ${liked ? "active" : ""}" data-wishlist-id="${product.id}" type="button" aria-label="Wishlist">
                    ${liked ? "♥" : "♡"}
                </button>
                ${product.flash ? `<span class="flash-badge">⚡ FLASH SALE</span>` : ""}
                ${product.flash && discount ? `<span class="flash-discount">-${discount}%</span>` : ""}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="price">${rupiah(product.price)}</div>
                ${product.oldPrice > 0 ? `<div class="old-price">${rupiah(product.oldPrice)}</div>` : `<div class="old-price" style="visibility:hidden">Rp0</div>`}
                <div class="product-bottom">
                    <span>⭐ ${product.rating}</span>
                    <span>Terjual ${product.sold}</span>
                </div>
                ${product.flash ? `
                    <div class="flash-stock">
                        <div class="flash-stock-bar"><div class="flash-stock-progress" style="width:${stockPercent}%"></div></div>
                        <div class="flash-stock-text">${stockPercent}% terjual</div>
                    </div>` : ""}
                <button class="add-cart" data-cart-id="${product.id}" type="button">
                    ${product.flash ? "⚡ Beli Sekarang" : "+ Keranjang"}
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

        sorted.sort(
            (a, b) =>
                a.id - b.id
        );

    }


    return sorted;

}


/* =========================================================
   RENDER HOME
   ========================================================= */

function renderHomeProducts() {

    if (!homeProducts) {
        return;
    }


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
   FLASH SALE
   ========================================================= */

function renderFlashSale() {

    if (!flashProducts) {
        return;
    }


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
   HOME SORT BUTTONS
   ========================================================= */

document
    .querySelectorAll(
        "[data-sort]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                activeSort =
                    button.dataset.sort;


                document
                    .querySelectorAll(
                        "[data-sort]"
                    )
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
   CATEGORY BUTTONS
   ========================================================= */

document
    .querySelectorAll(
        ".category-card"
    )
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
   SHOW CATEGORY
   ========================================================= */

function showCategory(
    category,
    updateUrl = true
) {

    if (!categoryInfo[category]) {
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
   CATEGORY PRODUCTS
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
   BACK HOME
   ========================================================= */

const backHomeButton =
    document.getElementById(
        "backHomeButton"
    );


if (backHomeButton) {

    backHomeButton.addEventListener(
        "click",
        () => {

            showHome(true);

        }
    );

}


/* =========================================================
   LOGO HOME
   ========================================================= */

const homeLogo =
    document.getElementById(
        "homeLogo"
    );


if (homeLogo) {

    homeLogo.addEventListener(
        "click",
        () => {

            showHome(true);

        }
    );

}


/* =========================================================
   SEARCH
   ========================================================= */

function performSearch() {

    searchKeyword =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


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
                searchInput.value
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
   PRODUCT EVENTS
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


        /* WISHLIST */

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


        /* PRODUCT CARD */

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


    if (cart.length === 0) {

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


    let total = 0;

    let quantityTotal = 0;


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

    if (!cartDrawer) {
        return;
    }


    cartDrawer.classList.add(
        "open"
    );


    if (overlay) {

        overlay.classList.add(
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
    updateWishlistCount();
    if (wishlistDrawer && wishlistDrawer.classList.contains("open")) renderWishlist();

    renderHomeProducts();

    renderFlashSale();


    if (activeCategory) {

        renderCategoryProducts();

    }

}


/* =========================================================
   WISHLIST DRAWER
   ========================================================= */

function updateWishlistCount() {
    if (wishlistCount) wishlistCount.textContent = wishlist.length;
    if (wishlistButton) wishlistButton.classList.toggle("has-items", wishlist.length > 0);
}

function renderWishlist() {
    if (!wishlistItems) return;
    const items = wishlist
        .map(id => products.find(product => product.id === id))
        .filter(Boolean);

    if (!items.length) {
        wishlistItems.innerHTML = `
            <div class="wishlist-empty-state">
                <div class="wishlist-empty-icon">♡</div>
                <h3>Wishlist masih kosong</h3>
                <p>Simpan produk favoritmu agar mudah ditemukan lagi.</p>
            </div>`;
        updateWishlistCount();
        return;
    }

    wishlistItems.innerHTML = items.map(product => `
        <article class="wishlist-row">
            <button class="wishlist-row-image" data-wishlist-product="${product.id}" type="button" aria-label="Lihat ${product.name}">
                <img src="${product.image}" alt="${product.name}">
            </button>
            <div class="wishlist-row-info">
                <h3>${product.name}</h3>
                <div class="wishlist-row-meta">⭐ ${product.rating} · ${product.sold} terjual</div>
                <strong>${rupiah(product.price)}</strong>
                <div class="wishlist-row-actions">
                    <button class="wishlist-cart-btn" data-wishlist-cart="${product.id}" type="button">🛒 Keranjang</button>
                    <button class="wishlist-remove-btn" data-wishlist-remove="${product.id}" type="button">Hapus</button>
                </div>
            </div>
        </article>`).join("");

    updateWishlistCount();
}

function openWishlist() {
    closeCartDrawer();
    renderWishlist();
    if (wishlistDrawer) wishlistDrawer.classList.add("open");
    if (overlay) overlay.classList.add("active");
}

function closeWishlistDrawer() {
    if (wishlistDrawer) wishlistDrawer.classList.remove("open");
    if (overlay) overlay.classList.remove("active");
}

if (wishlistButton) wishlistButton.addEventListener("click", openWishlist);
if (closeWishlist) closeWishlist.addEventListener("click", closeWishlistDrawer);
if (wishlistShopButton) wishlistShopButton.addEventListener("click", () => { closeWishlistDrawer(); showHome(true); });

if (wishlistItems) {
    wishlistItems.addEventListener("click", event => {
        const cartBtn = event.target.closest("[data-wishlist-cart]");
        const removeBtn = event.target.closest("[data-wishlist-remove]");
        const productBtn = event.target.closest("[data-wishlist-product]");

        if (cartBtn) {
            const product = products.find(item => item.id === Number(cartBtn.dataset.wishlistCart));
            if (product) { addToCart(product); }
            return;
        }

        if (removeBtn) {
            const id = Number(removeBtn.dataset.wishlistRemove);
            wishlist = wishlist.filter(item => item !== id);
            saveWishlist();
            renderWishlist();
            renderHomeProducts();
            renderFlashSale();
            if (activeCategory) renderCategoryProducts();
            showToast("Produk dihapus dari wishlist.");
            return;
        }

        if (productBtn) {
            const product = products.find(item => item.id === Number(productBtn.dataset.wishlistProduct));
            if (product) openProductModal(product);
        }
    });
}

/* =========================================================
   PRODUCT DETAIL MODAL
   ========================================================= */

function createProductModal() {
    if (document.getElementById("productModal")) return;
    const modal = document.createElement("div");
    modal.id = "productModal"; modal.className = "product-modal";
    modal.innerHTML = `
      <div class="product-modal-backdrop" data-close-product></div>
      <div class="product-modal-dialog">
        <button class="product-modal-close" data-close-product type="button">✕</button>
        <div class="product-modal-grid">
          <div class="product-modal-image"><img id="detailProductImage" src="" alt=""></div>
          <div class="product-modal-info">
            <span class="detail-badge">MAB-STORE OFFICIAL</span>
            <h2 id="detailProductName"></h2>
            <div class="detail-rating">⭐ <span id="detailRating"></span></div>
            <div class="detail-meta"><span id="detailCategory"></span><span>✓ Produk Pilihan</span><span>🚚 Pengiriman Cepat</span></div>
            <div><span class="detail-price" id="detailProductPrice"></span><span class="detail-old-price" id="detailOldPrice"></span><span class="detail-discount" id="detailDiscount"></span></div>
            <p class="detail-stock">✓ Stok tersedia &nbsp; • &nbsp; Siap dikirim</p>
            <p id="detailProductDescription"></p>
            <div class="detail-highlights"><div class="detail-highlight"><b>⭐ Rating</b><span id="detailRatingBox"></span></div><div class="detail-highlight"><b>🛍 Terjual</b><span id="detailSoldBox"></span></div><div class="detail-highlight"><b>🔒 Aman</b><span>Transaksi</span></div></div>
            <div class="detail-quantity"><span>Jumlah</span><div><button id="detailMinus" type="button">−</button><strong id="detailQuantity">1</strong><button id="detailPlus" type="button">+</button></div></div>
            <div class="detail-actions"><button id="detailAddCart" type="button">🛒 Tambah ke Keranjang</button><button id="detailBuyNow" type="button">⚡ Beli Sekarang</button></div>
            <button id="detailWishlistButton" class="detail-wishlist-button" type="button">♡ Simpan ke Wishlist</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(modal);
    modal.addEventListener("click", e => { if (e.target.closest("[data-close-product]")) closeProductModal(); });
}


/* =========================================================
   OPEN PRODUCT MODAL
   ========================================================= */

function openProductModal(product) {
    createProductModal(); selectedProduct = product; detailQuantity = 1;
    const set = (id,val) => { const el=document.getElementById(id); if(el) el.textContent=val; };
    const image=document.getElementById("detailProductImage"); if(image){image.src=product.image||"";image.alt=product.name;}
    set("detailProductName",product.name); set("detailRating",`${product.rating} • ${product.sold} terjual`); set("detailCategory",product.category); set("detailProductPrice",rupiah(product.price));
    set("detailOldPrice",product.oldPrice>product.price?rupiah(product.oldPrice):""); set("detailDiscount",product.oldPrice>product.price?`-${Math.round((1-product.price/product.oldPrice)*100)}%`:"");
    set("detailProductDescription",`${product.name} merupakan produk pilihan kategori ${product.category}. Nikmati harga bersahabat, kualitas terbaik, dan pengalaman belanja yang mudah di MAB-Store.`); set("detailRatingBox",`${product.rating}/5`); set("detailSoldBox",`${product.sold}+`); set("detailQuantity","1");
    const wish=document.getElementById("detailWishlistButton"); if(wish){const liked=wishlist.includes(product.id);wish.textContent=liked?"♥ Tersimpan di Wishlist":"♡ Simpan ke Wishlist";wish.classList.toggle("active",liked);}
    document.getElementById("productModal")?.classList.add("show"); document.body.classList.add("modal-open");
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

        if (event.target.id === "detailWishlistButton" && selectedProduct) {
            toggleWishlist(selectedProduct);
            const btn=document.getElementById("detailWishlistButton");
            if(btn){const liked=wishlist.includes(selectedProduct.id);btn.textContent=liked?"♥ Tersimpan di Wishlist":"♡ Simpan ke Wishlist";btn.classList.toggle("active",liked);}
        }

    }
);


/* =========================================================
   CHECKOUT — FULL SHOPPING FLOW
   ========================================================= */
const checkoutPage=document.getElementById("checkoutPage");
const changeAddressButton = document.getElementById("changeAddressButton");
const backToCartButton=document.getElementById("backToCartButton");
const checkoutItems=document.getElementById("checkoutItems");
const checkoutProductCount=document.getElementById("checkoutProductCount");
const summarySubtotal=document.getElementById("summarySubtotal");
const summaryShipping=document.getElementById("summaryShipping");
const summaryDiscount=document.getElementById("summaryDiscount");
const summaryTotal=document.getElementById("summaryTotal");
const checkoutVoucher=document.getElementById("checkoutVoucher");
const applyVoucherButton=document.getElementById("applyVoucherButton");
const voucherMessage=document.getElementById("voucherMessage");
const placeOrderButton=document.getElementById("placeOrderButton");
let checkoutShipping=15000, checkoutDiscount=0, appliedVoucher="";
let checkoutAddress = JSON.parse(localStorage.getItem("mabstore_address") || "null") || {
    name: "Muhammad Aslambik",
    phone: "+62 812-3456-7890",
    address: "Jl. Contoh No. 123, Kecamatan Sukamaju, Kota Jakarta, Indonesia 12345"
};

const addressDisplay = document.getElementById("addressDisplay");
const addressEditForm = document.getElementById("addressEditForm");
const editRecipient = document.getElementById("editRecipient");
const editPhone = document.getElementById("editPhone");
const editAddress = document.getElementById("editAddress");
const saveAddressButton = document.getElementById("saveAddressButton");
const cancelAddressButton = document.getElementById("cancelAddressButton");

function renderAddress() {
    const recipientEl = document.getElementById("checkoutRecipient");
    const phoneEl = document.getElementById("checkoutPhone");
    const addressEl = document.getElementById("checkoutAddress");
    if (recipientEl) recipientEl.textContent = checkoutAddress.name;
    if (phoneEl) phoneEl.textContent = checkoutAddress.phone;
    if (addressEl) addressEl.textContent = checkoutAddress.address;
}

function openAddressForm() {
    if (!addressEditForm) return;
    editRecipient.value = checkoutAddress.name;
    editPhone.value = checkoutAddress.phone;
    editAddress.value = checkoutAddress.address;
    addressEditForm.hidden = false;
    addressDisplay.hidden = true;
    addressEditForm.classList.remove("error");
}

function closeAddressForm() {
    if (!addressEditForm) return;
    addressEditForm.hidden = true;
    addressDisplay.hidden = false;
}

if (changeAddressButton) changeAddressButton.addEventListener("click", openAddressForm);
if (cancelAddressButton) cancelAddressButton.addEventListener("click", closeAddressForm);

if (saveAddressButton) {
    saveAddressButton.addEventListener("click", () => {
        const name = editRecipient.value.trim();
        const phone = editPhone.value.trim();
        const address = editAddress.value.trim();

        if (!name || !phone || !address) {
            addressEditForm.classList.add("error");
            showToast("Lengkapi semua data alamat terlebih dahulu.");
            return;
        }

        checkoutAddress = { name, phone, address };
        localStorage.setItem("mabstore_address", JSON.stringify(checkoutAddress));
        renderAddress();
        closeAddressForm();
        showToast("Alamat pengiriman berhasil diperbarui ✓");
    });
}

renderAddress();
function getCartSubtotal(){return cart.reduce((sum,item)=>sum+item.price*item.quantity,0);}
function renderCheckout(){
    if(!checkoutItems)return;
    const subtotal=getCartSubtotal(), qty=cart.reduce((sum,item)=>sum+item.quantity,0);
    if(checkoutProductCount)checkoutProductCount.textContent=`${qty} produk`;
    checkoutItems.innerHTML=cart.map(item=>`<div class="checkout-item"><div class="checkout-item-image"><img src="${item.image}" alt="${item.name}"></div><div><h3>${item.name}</h3><p>${rupiah(item.price)} × ${item.quantity}</p></div><strong>${rupiah(item.price*item.quantity)}</strong></div>`).join("");
    if(summarySubtotal)summarySubtotal.textContent=rupiah(subtotal); if(summaryShipping)summaryShipping.textContent=rupiah(checkoutShipping); if(summaryDiscount)summaryDiscount.textContent=`-${rupiah(checkoutDiscount)}`; if(summaryTotal)summaryTotal.textContent=rupiah(Math.max(0,subtotal+checkoutShipping-checkoutDiscount));
}
function openCheckout(){if(!cart.length){showToast("Keranjang masih kosong.");return;}closeCartDrawer();if(checkoutPage){checkoutPage.hidden=false;checkoutPage.style.display="block";renderCheckout();window.scrollTo({top:0,behavior:"smooth"});}}
function closeCheckout(){if(checkoutPage){checkoutPage.hidden=true;checkoutPage.style.display="none";}}
if(checkoutButton)checkoutButton.addEventListener("click",openCheckout);
if(backToCartButton)backToCartButton.addEventListener("click",()=>{closeCheckout();openCart();});
document.querySelectorAll('input[name="shipping"]').forEach(input=>input.addEventListener("change",()=>{checkoutShipping=Number(input.value);document.querySelectorAll(".shipping-option").forEach(el=>el.classList.remove("selected"));input.closest(".shipping-option")?.classList.add("selected");renderCheckout();}));
document.querySelectorAll('input[name="payment"]').forEach(input=>input.addEventListener("change",()=>{document.querySelectorAll(".payment-option").forEach(el=>el.classList.remove("selected"));input.closest(".payment-option")?.classList.add("selected");}));
if(applyVoucherButton)applyVoucherButton.addEventListener("click",()=>{const code=(checkoutVoucher?.value||"").trim().toUpperCase(),subtotal=getCartSubtotal();voucherMessage.style.color="";if(code==="MABHEMAT"){checkoutDiscount=Math.min(100000,Math.round(subtotal*.10));appliedVoucher=code;voucherMessage.textContent=`✓ Voucher ${code} berhasil digunakan. Hemat ${rupiah(checkoutDiscount)}.`;}else if(!code){checkoutDiscount=0;appliedVoucher="";voucherMessage.textContent="Masukkan kode voucher terlebih dahulu.";}else{checkoutDiscount=0;appliedVoucher="";voucherMessage.textContent="Kode voucher tidak ditemukan.";voucherMessage.style.color="#d34b4b";}renderCheckout();});
if (placeOrderButton) {
    placeOrderButton.addEventListener("click", () => {
        if (!cart.length) {
            showToast("Keranjang masih kosong.");
            return;
        }

        if (!checkoutAddress.name || !checkoutAddress.phone || !checkoutAddress.address) {
            showToast("Lengkapi alamat pengiriman terlebih dahulu.");
            openAddressForm();
            return;
        }

        placeOrderButton.disabled = true;
        placeOrderButton.classList.add("loading");
        placeOrderButton.innerHTML = "Memproses Pesanan...";

        setTimeout(() => {
            const payment = document.querySelector('input[name="payment"]:checked')?.value || "QRIS";
            const total = Math.max(0, getCartSubtotal() + checkoutShipping - checkoutDiscount);
            const orderCode = `MAB-${Date.now().toString().slice(-8)}`;

            const success = document.createElement("div");
            success.className = "order-success";
            success.innerHTML = `<div class="order-success-card"><div class="success-icon">✓</div><h2>Pesanan Berhasil Dibuat!</h2><p>Terima kasih. Pesanan kamu sudah tercatat di MAB-Store.</p><div class="order-code">${orderCode}</div><p>Total <b>${rupiah(total)}</b> • Pembayaran: <b>${payment}</b></p><button type="button" id="continueShoppingAfterOrder">Kembali Belanja</button></div>`;
            document.body.appendChild(success);

            cart = [];
            saveCart();
            updateCart();
            closeCheckout();
            checkoutDiscount = 0;
            appliedVoucher = "";

            placeOrderButton.disabled = false;
            placeOrderButton.classList.remove("loading");
            placeOrderButton.innerHTML = 'Buat Pesanan <span>→</span>';

            success.querySelector("#continueShoppingAfterOrder").addEventListener("click", () => {
                success.remove();
                showHome(true);
            });
        }, 1200);
    });
}
const _updateCart=updateCart;updateCart=function(){_updateCart();if(checkoutPage&&!checkoutPage.hidden)renderCheckout();};


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
                remainingSeconds %
                3600
            ) / 60
        );


    const seconds =
        remainingSeconds %
        60;


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
   CATEGORY FROM URL
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
   ESCAPE
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeProductModal();

            closeCartDrawer();
            closeWishlistDrawer();
            closeCheckout();

        }

    }
);


/* =========================================================
   HEADER / EXTRA UI
   ========================================================= */

const flashViewAllButton = document.getElementById("flashViewAllButton");
const downloadAppButton = document.getElementById("downloadAppButton");
const sellerButton = document.getElementById("sellerButton");

if (flashViewAllButton) {
    flashViewAllButton.addEventListener("click", () => {
        const section = document.getElementById("homeProductsSection");
        if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

if (downloadAppButton) {
    downloadAppButton.addEventListener("click", () => showToast("Fitur Download App segera hadir 📱"));
}

if (sellerButton) {
    sellerButton.addEventListener("click", () => showToast("Pendaftaran seller segera hadir 🏪"));
}


/* =========================================================
   AUTH SYSTEM (SIMULASI)
   ========================================================= */
let registeredUsers = JSON.parse(localStorage.getItem("mabstore_users") || "[]");
let currentUser = JSON.parse(localStorage.getItem("mabstore_current_user") || "null");

const accountButton = document.getElementById("accountButton");
const accountLabel = document.getElementById("accountLabel");
const accountDropdown = document.getElementById("accountDropdown");
const accountDropdownName = document.getElementById("accountDropdownName");
const accountDropdownRole = document.getElementById("accountDropdownRole");
const logoutButton = document.getElementById("logoutButton");

const authModal = document.getElementById("authModal");
const closeAuthModal = document.getElementById("closeAuthModal");
const authTabs = document.querySelectorAll("[data-auth-tab]");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginError = document.getElementById("loginError");
const registerError = document.getElementById("registerError");

function saveUsers() {
    localStorage.setItem("mabstore_users", JSON.stringify(registeredUsers));
}

function saveCurrentUser() {
    localStorage.setItem("mabstore_current_user", JSON.stringify(currentUser));
}

function updateAccountUI() {
    if (!accountLabel) return;
    if (currentUser) {
        accountLabel.textContent = currentUser.name.split(" ")[0];
        if (accountDropdownName) accountDropdownName.textContent = currentUser.name;
        if (accountDropdownRole) accountDropdownRole.textContent = currentUser.role === "seller" ? "Penjual" : "Pembeli";
    } else {
        accountLabel.textContent = "Masuk";
    }
}

function openAuthModal() {
    if (authModal) authModal.hidden = false;
}

function closeAuth() {
    if (authModal) authModal.hidden = true;
    loginError.textContent = "";
    registerError.textContent = "";
    loginForm.reset();
    registerForm.reset();
}

if (accountButton) {
    accountButton.addEventListener("click", () => {
        if (currentUser) {
            accountDropdown.hidden = !accountDropdown.hidden;
        } else {
            openAuthModal();
        }
    });
}

if (closeAuthModal) closeAuthModal.addEventListener("click", closeAuth);

if (registerForm) registerForm.style.display = "none";
authTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        authTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const target = tab.dataset.authTab;
        loginForm.style.display = target === "login" ? "grid" : "none";
        registerForm.style.display = target === "register" ? "grid" : "none";
    });
});

if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("registerName").value.trim();
        const email = document.getElementById("registerEmail").value.trim().toLowerCase();
        const password = document.getElementById("registerPassword").value;
        const role = document.querySelector('input[name="registerRole"]:checked')?.value || "buyer";

        if (!name || !email || !password) {
            registerError.textContent = "Lengkapi semua data terlebih dahulu.";
            return;
        }

        if (registeredUsers.some(user => user.email === email)) {
            registerError.textContent = "Email sudah terdaftar, silakan masuk.";
            return;
        }

        registeredUsers.push({ name, email, password, role });
        saveUsers();

        currentUser = { name, email, role };
        saveCurrentUser();
        updateAccountUI();
        closeAuth();
        showToast(`Selamat datang, ${name}! Akun berhasil dibuat 🎉`);
    });
}

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value.trim().toLowerCase();
        const password = document.getElementById("loginPassword").value;

        const found = registeredUsers.find(user => user.email === email && user.password === password);

        if (!found) {
            loginError.textContent = "Email atau kata sandi salah.";
            return;
        }

        currentUser = { name: found.name, email: found.email, role: found.role };
        saveCurrentUser();
        updateAccountUI();
        closeAuth();
        showToast(`Selamat datang kembali, ${found.name}! 👋`);
    });
}

if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        currentUser = null;
        localStorage.removeItem("mabstore_current_user");
        updateAccountUI();
        accountDropdown.hidden = true;
        showToast("Kamu berhasil keluar.");
    });
}

document.addEventListener("click", (event) => {
    if (accountDropdown && !accountDropdown.hidden) {
        if (!accountDropdown.contains(event.target) && !accountButton.contains(event.target)) {
            accountDropdown.hidden = true;
        }
    }
});

updateAccountUI();


/* =========================================================
   INITIALIZATION
   ========================================================= */

loadStorage();

renderFlashSale();

renderHomeProducts();

updateCart();
updateWishlistCount();
renderWishlist();

loadCategoryFromURL();


console.log(
    "MAB-Store berhasil dijalankan 🚀"
);

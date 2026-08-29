/* =========================================================
   MAB-STORE
   MARKETPLACE FRONTEND
   VERSION — CATEGORY PAGE + SEARCH + SORTING + CART
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
        image: "https://images.pexels.com/photos/12882840/pexels-photo-12882840.png?auto=compress&cs=tinysrgb&w=800",
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
        image: "https://images.pexels.com/photos/16303233/pexels-photo-16303233.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        image: "https://images.pexels.com/photos/14979022/pexels-photo-14979022.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        image: "https://images.pexels.com/photos/13869858/pexels-photo-13869858.jpeg?auto=compress&cs=tinysrgb&w=800",
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
   DOM
========================================================= */

const homePage =
    document.getElementById(
        "homePage"
    );

const categoryPage =
    document.getElementById(
        "categoryPage"
    );

const homeProducts =
    document.getElementById(
        "homeProducts"
    );

const flashProducts =
    document.getElementById(
        "flashProducts"
    );

const categoryProducts =
    document.getElementById(
        "categoryProducts"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );

const searchButton =
    document.getElementById(
        "searchButton"
    );

const cartDrawer =
    document.getElementById(
        "cartDrawer"
    );

const cartButton =
    document.getElementById(
        "cartButton"
    );

const closeCart =
    document.getElementById(
        "closeCart"
    );

const overlay =
    document.getElementById(
        "overlay"
    );

const cartItems =
    document.getElementById(
        "cartItems"
    );

const cartCount =
    document.getElementById(
        "cartCount"
    );

const cartTotal =
    document.getElementById(
        "cartTotal"
    );

const checkoutButton =
    document.getElementById(
        "checkoutButton"
    );

const toast =
    document.getElementById(
        "toast"
    );


/* =========================================================
   STATE
========================================================= */

let activeCategory =
    null;

let activeSort =
    "terbaru";

let categorySort =
    "terbaru";

let searchKeyword =
    "";

let cart = [];

let wishlist = [];

let selectedProduct =
    null;

let detailQuantity =
    1;


/* =========================================================
   STORAGE
========================================================= */

try {

    cart =
        JSON.parse(
            localStorage.getItem(
                "mabstore_cart_v3"
            ) || "[]"
        );

    if (!Array.isArray(cart)) {

        cart = [];

    }

} catch {

    cart = [];

}


try {

    wishlist =
        JSON.parse(
            localStorage.getItem(
                "mabstore_wishlist_v2"
            ) || "[]"
        );

    if (!Array.isArray(wishlist)) {

        wishlist = [];

    }

} catch {

    wishlist = [];

}


/* =========================================================
   RUPIAH
========================================================= */

function rupiah(
    number
) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(
        number
    );

}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message
) {

    if (!toast) {

        return;

    }

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

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
            2200
        );

}


/* =========================================================
   SAVE CART
========================================================= */

function saveCart() {

    localStorage.setItem(
        "mabstore_cart_v3",
        JSON.stringify(
            cart
        )
    );

}


/* =========================================================
   SAVE WISHLIST
========================================================= */

function saveWishlist() {

    localStorage.setItem(
        "mabstore_wishlist_v2",
        JSON.stringify(
            wishlist
        )
    );

}


/* =========================================================
   PRODUCT CARD HTML
========================================================= */

function productCard(
    product
) {

    const liked =
        wishlist.includes(
            product.id
        );


    return `

        <article
            class="product-card"
            data-product-id="${product.id}"
        >

            <div class="product-image">

                ${
                    product.image

                    ?

                    `
                    <img
                        class="product-photo"
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >
                    `

                    :

                    `
                    <div class="product-placeholder">
                        ${product.icon}
                    </div>
                    `
                }


                <button
                    class="wishlist-button ${liked ? "active" : ""}"
                    data-wishlist-id="${product.id}"
                    type="button"
                    aria-label="Wishlist"
                >
                    ${liked ? "♥" : "♡"}
                </button>


                ${
                    product.flash

                    ?

                    `
                    <span class="flash-badge">
                        ⚡ SALE
                    </span>
                    `

                    :

                    ""
                }

            </div>


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>


                <div class="price">
                    ${rupiah(product.price)}
                </div>


                ${
                    product.oldPrice

                    ?

                    `
                    <div class="old-price">
                        ${rupiah(product.oldPrice)}
                    </div>
                    `

                    :

                    ""
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
   RENDER HOME
========================================================= */

function renderHome() {

    const list =
        sortProducts(
            products,
            activeSort
        );


    homeProducts.innerHTML =
        list
            .filter(
                product =>
                    matchesSearch(
                        product
                    )
            )
            .map(
                productCard
            )
            .join(
                ""
            );

}


/* =========================================================
   RENDER FLASH SALE
========================================================= */

function renderFlashSale() {

    const list =
        products.filter(
            product =>
                product.flash
        );


    flashProducts.innerHTML =
        list
            .map(
                productCard
            )
            .join(
                ""
            );

}


/* =========================================================
   SEARCH
========================================================= */

function matchesSearch(
    product
) {

    if (
        !searchKeyword
    ) {

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
    sort
) {

    const result =
        [...list];


    switch (
        sort
    ) {

        case "terlaris":

            result.sort(
                (
                    a,
                    b
                ) =>
                    b.sold -
                    a.sold
            );

            break;


        case "termurah":

            result.sort(
                (
                    a,
                    b
                ) =>
                    a.price -
                    b.price
            );

            break;


        case "rating":

            result.sort(
                (
                    a,
                    b
                ) =>
                    b.rating -
                    a.rating
            );

            break;


        case "termahal":

            result.sort(
                (
                    a,
                    b
                ) =>
                    b.price -
                    a.price
            );

            break;


        case "terbaru":

        default:

            result.sort(
                (
                    a,
                    b
                ) =>
                    a.id -
                    b.id
            );

            break;

    }


    return result;

}


/* =========================================================
   SORT BUTTONS HOME
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


                    renderHome();

                }
            );

        }
    );


/* =========================================================
   CATEGORY NAVIGATION
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

                    const category =
                        button.dataset.category;


                    openCategory(
                        category
                    );

                }
            );

        }
    );


/* =========================================================
   OPEN CATEGORY
========================================================= */

function openCategory(
    category
) {

    if (
        !categoryInfo[
            category
        ]
    ) {

        return;

    }


    activeCategory =
        category;


    categorySort =
        "terbaru";


    searchKeyword =
        "";


    searchInput.value =
        "";


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


    updateCategorySortButtons();


    renderCategory();


    homePage.hidden =
        true;


    categoryPage.hidden =
        false;


    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    );


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


/* =========================================================
   RENDER CATEGORY
========================================================= */

function renderCategory() {

    if (
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


    categoryProducts.innerHTML =
        list
            .map(
                productCard
            )
            .join(
                ""
            );


    document.getElementById(
        "categoryResultCount"
    ).textContent =

        `${list.length} produk ditemukan`;

}


/* =========================================================
   CATEGORY SORT
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


                    updateCategorySortButtons();


                    renderCategory();

                }
            );

        }
    );


function updateCategorySortButtons() {

    document
        .querySelectorAll(
            "[data-category-sort]"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.categorySort ===
                        categorySort
                );

            }
        );

}


/* =========================================================
   BACK HOME
========================================================= */

document
    .getElementById(
        "backHomeButton"
    )
    .addEventListener(
        "click",
        goHome
    );


document
    .getElementById(
        "homeLogo"
    )
    .addEventListener(
        "click",
        goHome
    );


function goHome() {

    activeCategory =
        null;


    categoryPage.hidden =
        true;


    homePage.hidden =
        false;


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


    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    );

}


/* =========================================================
   SEARCH
========================================================= */

function performSearch() {

    searchKeyword =
        searchInput.value
            .trim()
            .toLowerCase();


    if (
        activeCategory
    ) {

        renderCategory();

    } else {

        renderHome();

    }


    if (
        searchKeyword
    ) {

        if (
            activeCategory
        ) {

            showToast(
                `Mencari "${searchKeyword}" di ${activeCategory}`
            );

        } else {

            showToast(
                `Mencari "${searchKeyword}"`
            );

        }

    }

}


searchButton.addEventListener(
    "click",
    performSearch
);


searchInput.addEventListener(
    "input",
    () => {

        searchKeyword =
            searchInput.value
                .trim()
                .toLowerCase();


        if (
            activeCategory
        ) {

            renderCategory();

        } else {

            renderHome();

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

            performSearch();

        }

    }
);


/* =========================================================
   HERO BUTTON
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
                .scrollIntoView(
                    {
                        behavior:
                            "smooth"
                    }
                );

        }
    );


/* =========================================================
   PRODUCT CLICK
========================================================= */

document.addEventListener(
    "click",
    event => {

        const cartButton =
            event.target.closest(
                "[data-cart-id]"
            );


        if (
            cartButton
        ) {

            const id =
                Number(
                    cartButton.dataset.cartId
                );


            const product =
                products.find(
                    item =>
                        item.id ===
                        id
                );


            if (
                product
            ) {

                addToCart(
                    product,
                    1
                );

            }


            return;

        }


        const wishlistButton =
            event.target.closest(
                "[data-wishlist-id]"
            );


        if (
            wishlistButton
        ) {

            const id =
                Number(
                    wishlistButton.dataset.wishlistId
                );


            const product =
                products.find(
                    item =>
                        item.id ===
                        id
                );


            if (
                product
            ) {

                toggleWishlist(
                    product
                );

            }


            return;

        }


        const card =
            event.target.closest(
                ".product-card"
            );


        if (
            card
        ) {

            const id =
                Number(
                    card.dataset.productId
                );


            const product =
                products.find(
                    item =>
                        item.id ===
                        id
                );


            if (
                product
            ) {

                openProductModal(
                    product
                );

            }

        }

    }
);


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


    if (
        index >= 0
    ) {

        wishlist.splice(
            index,
            1
        );


        showToast(
            `${product.name} dihapus dari wishlist.`
        );

    } else {

        wishlist.push(
            product.id
        );


        showToast(
            `${product.name} masuk wishlist ❤️`
        );

    }


    saveWishlist();


    renderHome();


    renderFlashSale();


    if (
        activeCategory
    ) {

        renderCategory();

    }

}


/* =========================================================
   PRODUCT MODAL
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


function openProductModal(
    product
) {

    createProductModal();


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
        `${product.rating} • ${product.sold} terjual`;


    document.getElementById(
        "detailProductPrice"
    ).textContent =
        rupiah(
            product.price
        );


    document.getElementById(
        "detailProductDescription"
    ).textContent =

        `${product.name} merupakan produk kategori ` +

        `${product.category}. ` +

        `Produk ini memiliki rating ${product.rating} ` +

        `dan telah terjual sebanyak ${product.sold} unit.`;


    document.getElementById(
        "detailQuantity"
    ).textContent =
        detailQuantity;


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

    document
        .getElementById(
            "productModal"
        )
        ?.classList.remove(
            "show"
        );


    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   MODAL ACTIONS
========================================================= */

document.addEventListener(
    "click",
    event => {

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
   CART
========================================================= */

function addToCart(
    product,
    quantity
) {

    const existing =
        cart.find(
            item =>
                item.id ===
                product.id
        );


    if (
        existing
    ) {

        existing.quantity +=
            quantity;

    } else {

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


function updateCart() {

    cartItems.innerHTML =
        "";


    if (
        cart.length ===
        0
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

    let count =
        0;


    cart.forEach(
        (
            item,
            index
        ) => {

            total +=
                item.price *
                item.quantity;


            count +=
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
        count;


    cartTotal.textContent =
        rupiah(
            total
        );

}


/* =========================================================
   CART ACTIONS
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


        if (
            plus
        ) {

            const index =
                Number(
                    plus.dataset.cartPlus
                );


            cart[index].quantity++;


            saveCart();

            updateCart();

        }


        if (
            minus
        ) {

            const index =
                Number(
                    minus.dataset.cartMinus
                );


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


            saveCart();

            updateCart();

        }


        if (
            remove
        ) {

            const index =
                Number(
                    remove.dataset.cartRemove
                );


            cart.splice(
                index,
                1
            );


            saveCart();

            updateCart();

            showToast(
                "Produk dihapus dari keranjang."
            );

        }

    }
);


/* =========================================================
   OPEN / CLOSE CART
========================================================= */

function openCart() {

    cartDrawer.classList.add(
        "open"
    );

    overlay.classList.add(
        "active"
    );

}


function closeCartDrawer() {

    cartDrawer.classList.remove(
        "open"
    );

    overlay.classList.remove(
        "active"
    );

}


cartButton.addEventListener(
    "click",
    openCart
);


closeCart.addEventListener(
    "click",
    closeCartDrawer
);


overlay.addEventListener(
    "click",
    closeCartDrawer
);


/* =========================================================
   CHECKOUT
========================================================= */

checkoutButton.addEventListener(
    "click",
    () => {

        if (
            cart.length ===
            0
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

            "Checkout masih dalam tahap simulasi."

        );

    }
);


/* =========================================================
   VOUCHER
========================================================= */

document
    .getElementById(
        "voucherButton"
    )
    .addEventListener(
        "click",
        event => {

            event.currentTarget.textContent =
                "Voucher Berhasil Diklaim ✓";


            showToast(
                "Voucher MAB-Store berhasil diklaim 🎟️"
            );

        }
    );


/* =========================================================
   COUNTDOWN
========================================================= */

let remainingSeconds =
    2 * 60 * 60;


function updateCountdown() {

    const countdown =
        document.getElementById(
            "countdown"
        );


    if (
        !countdown
    ) {

        return;

    }


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
            ) /
            60
        );


    const seconds =
        remainingSeconds %
        60;


    countdown.textContent =

        `${String(hours).padStart(2, "0")}:` +

        `${String(minutes).padStart(2, "0")}:` +

        `${String(seconds).padStart(2, "0")}`;


    if (
        remainingSeconds >
        0
    ) {

        remainingSeconds--;

    } else {

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
   CATEGORY URL ON PAGE LOAD
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
        categoryInfo[
            category
        ]
    ) {

        openCategory(
            category
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
            categoryInfo[
                category
            ]
        ) {

            activeCategory =
                category;


            categoryPage.hidden =
                false;


            homePage.hidden =
                true;


            openCategory(
                category
            );

        } else {

            goHome();

        }

    }
);


/* =========================================================
   EXTRA CSS
========================================================= */

const extraStyle =
    document.createElement(
        "style"
    );


extraStyle.textContent = `

    [hidden] {
        display: none !important;
    }


    .logo {
        border: none;
        background: transparent;
        cursor: pointer;
        font: inherit;
    }


    .category-page {
        min-height: 70vh;
        padding: 40px 0 70px;
    }


    .back-home-button {
        border: none;
        background: transparent;
        cursor: pointer;
        font-weight: 700;
        margin-bottom: 28px;
        font-size: 15px;
    }


    .category-page-header {
        padding: 35px;
        border-radius: 22px;
        margin-bottom: 28px;
        background:
            linear-gradient(
                135deg,
                rgba(0, 130, 110, .12),
                rgba(0, 180, 150, .05)
            );
    }


    .category-page-header > div {
        display: flex;
        align-items: center;
        gap: 22px;
    }


    .category-page-icon {
        width: 76px;
        height: 76px;
        display: grid;
        place-items: center;
        border-radius: 20px;
        background: white;
        font-size: 38px;
        box-shadow:
            0 10px 25px rgba(0,0,0,.08);
        flex-shrink: 0;
    }


    .category-page-label {
        margin: 0 0 5px;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 1px;
        opacity: .6;
    }


    .category-page-header h1 {
        margin: 0 0 7px;
        font-size: 34px;
    }


    .category-page-header p:last-child {
        margin: 0;
        opacity: .7;
    }


    .category-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 22px;
    }


    .category-result-count {
        font-weight: 700;
        opacity: .75;
    }


    .flash-badge {
        position: absolute;
        left: 10px;
        top: 10px;
        padding: 5px 9px;
        border-radius: 8px;
        background: #e74c3c;
        color: white;
        font-size: 11px;
        font-weight: 800;
        z-index: 2;
    }


    .product-image {
        position: relative;
    }


    .wishlist-button {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 38px;
        height: 38px;
        border: none;
        border-radius: 50%;
        background: rgba(255,255,255,.95);
        cursor: pointer;
        font-size: 22px;
        z-index: 5;
        box-shadow:
            0 5px 15px rgba(0,0,0,.12);
        transition: .2s ease;
    }


    .wishlist-button:hover {
        transform: scale(1.1);
    }


    .wishlist-button.active {
        color: #d63031;
    }


    .product-placeholder {
        height: 100%;
        min-height: 190px;
        display: grid;
        place-items: center;
        font-size: 60px;
    }


    .product-modal {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        opacity: 0;
        visibility: hidden;
        transition: .25s ease;
    }


    .product-modal.show {
        opacity: 1;
        visibility: visible;
    }


    .product-modal-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,.55);
        backdrop-filter: blur(4px);
    }


    .product-modal-dialog {
        position: relative;
        z-index: 2;
        width: min(900px, 100%);
        max-height: 90vh;
        overflow: auto;
        background: white;
        border-radius: 22px;
        padding: 25px;
        box-shadow:
            0 30px 80px rgba(0,0,0,.25);
        transform: translateY(20px);
        transition: .25s ease;
    }


    .product-modal.show .product-modal-dialog {
        transform: translateY(0);
    }


    .product-modal-close {
        position: absolute;
        right: 15px;
        top: 15px;
        border: none;
        background: rgba(0,0,0,.06);
        width: 38px;
        height: 38px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 3;
    }


    .product-modal-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }


    .product-modal-image {
        min-height: 350px;
        display: grid;
        place-items: center;
        background: #f6f7f7;
        border-radius: 18px;
        overflow: hidden;
    }


    .product-modal-image img {
        width: 100%;
        height: 100%;
        max-height: 480px;
        object-fit: contain;
    }


    .product-modal-info {
        padding: 20px 5px;
    }


    .detail-badge {
        display: inline-block;
        padding: 6px 10px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 800;
        margin-bottom: 12px;
    }


    .product-modal-info h2 {
        font-size: 28px;
        margin: 5px 0 12px;
    }


    .detail-rating {
        margin-bottom: 18px;
        font-weight: 600;
    }


    .detail-price {
        font-size: 28px;
        font-weight: 900;
        margin-bottom: 8px;
    }


    .detail-stock {
        font-weight: 700;
    }


    .detail-quantity {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 25px 0;
    }


    .detail-quantity > div {
        display: flex;
        align-items: center;
        gap: 18px;
    }


    .detail-quantity button {
        width: 38px;
        height: 38px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-size: 20px;
    }


    .detail-actions {
        display: flex;
        gap: 10px;
    }


    .detail-actions button {
        flex: 1;
        padding: 14px;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        font-weight: 800;
    }


    body.modal-open {
        overflow: hidden;
    }


    @media (max-width: 750px) {

        .category-toolbar {
            display: block;
        }


        .category-result-count {
            margin-bottom: 14px;
        }


        .category-page-header {
            padding: 24px;
        }


        .category-page-header > div {
            align-items: flex-start;
        }


        .category-page-header h1 {
            font-size: 27px;
        }


        .product-modal-grid {
            grid-template-columns: 1fr;
        }


        .product-modal-image {
            min-height: 250px;
        }


        .detail-actions {
            flex-direction: column;
        }

    }

`;


document.head.appendChild(
    extraStyle
);


/* =========================================================
   INITIALIZE
========================================================= */

renderFlashSale();

renderHome();

updateCart();

loadCategoryFromURL();


console.log(
    "MAB-Store — Marketplace system aktif 🚀"
);

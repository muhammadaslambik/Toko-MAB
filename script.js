/* =====================================================
   MAB-STORE
   STEP 3 — SEARCH + CATEGORY + SORTING
   + CART
   + PRODUCT DETAIL
   + WISHLIST
   + FLASH SALE
   + LOCAL STORAGE
   ===================================================== */


/* =====================================================
   STORAGE
   ===================================================== */

const CART_KEY = "mabstore_cart_v3";
const WISHLIST_KEY = "mabstore_wishlist_v1";


/* =====================================================
   GLOBAL STATE
   ===================================================== */

let cart = [];
let wishlist = [];

let selectedProduct = null;
let detailQuantity = 1;

let activeCategory = "Semua";
let activeSort = "terbaru";
let searchKeyword = "";


/* =====================================================
   LOAD STORAGE
   ===================================================== */

try {

    cart =
        JSON.parse(
            localStorage.getItem(CART_KEY)
        ) || [];

    wishlist =
        JSON.parse(
            localStorage.getItem(WISHLIST_KEY)
        ) || [];

    if (!Array.isArray(cart)) {
        cart = [];
    }

    if (!Array.isArray(wishlist)) {
        wishlist = [];
    }

} catch (error) {

    console.warn(
        "Storage MAB-Store gagal dibaca.",
        error
    );

    cart = [];
    wishlist = [];

}


/* =====================================================
   ELEMENTS
   ===================================================== */

const cartButton =
    document.getElementById("cartButton");

const closeCart =
    document.getElementById("closeCart");

const cartDrawer =
    document.getElementById("cartDrawer");

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

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const toast =
    document.getElementById("toast");

const countdown =
    document.getElementById("countdown");


/* =====================================================
   RUPIAH
   ===================================================== */

function rupiah(value) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(
        Number(value) || 0
    );

}


/* =====================================================
   SAVE CART
   ===================================================== */

function saveCart() {

    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );

}


/* =====================================================
   SAVE WISHLIST
   ===================================================== */

function saveWishlist() {

    localStorage.setItem(
        WISHLIST_KEY,
        JSON.stringify(wishlist)
    );

}


/* =====================================================
   TOAST
   ===================================================== */

function showToast(message) {

    if (!toast) {

        console.log(message);

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


/* =====================================================
   OPEN CART
   ===================================================== */

function openCart() {

    if (cartDrawer) {

        cartDrawer.classList.add(
            "open"
        );

    }

    if (overlay) {

        overlay.classList.add(
            "active"
        );

    }

}


/* =====================================================
   CLOSE CART
   ===================================================== */

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


/* =====================================================
   CART BUTTON
   ===================================================== */

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


/* =====================================================
   PRODUCT CATEGORY MAP
   ===================================================== */

const categoryMap = {

    "Smartphone Pro Max":
        "Elektronik",

    "Wireless Headphone":
        "Elektronik",

    "Smartwatch Series 5":
        "Elektronik",

    "Tas Backpack Premium":
        "Aksesoris",

    "Sneakers Casual":
        "Fashion",

    "Laptop Slim":
        "Elektronik",

    "T-Shirt Premium":
        "Fashion",

    "Kursi Minimalis":
        "Rumah",

    "Kamera Mirrorless":
        "Elektronik",

    "Parfum Premium":
        "Kecantikan",

    "Mug Keramik":
        "Rumah",

    "Keyboard Mechanical":
        "Gaming"

};


/* =====================================================
   PRODUCT KEYWORDS
   ===================================================== */

const productKeywords = {

    "Smartphone Pro Max":
        "smartphone hp ponsel elektronik",

    "Wireless Headphone":
        "headphone audio wireless elektronik",

    "Smartwatch Series 5":
        "smartwatch jam tangan elektronik",

    "Tas Backpack Premium":
        "tas backpack fashion aksesoris",

    "Sneakers Casual":
        "sepatu sneakers fashion",

    "Laptop Slim":
        "laptop komputer elektronik",

    "T-Shirt Premium":
        "kaos tshirt fashion pakaian",

    "Kursi Minimalis":
        "kursi rumah furniture",

    "Kamera Mirrorless":
        "kamera fotografi elektronik",

    "Parfum Premium":
        "parfum kecantikan fragrance",

    "Mug Keramik":
        "mug rumah keramik",

    "Keyboard Mechanical":
        "keyboard gaming komputer elektronik"

};


/* =====================================================
   GET PRODUCT DATA
   ===================================================== */

function getProductFromCard(card) {

    const name =
        card.dataset.product ||
        card.querySelector(
            "h3"
        )?.textContent.trim() ||
        "Produk";


    const priceText =
        card.dataset.price ||
        card.querySelector(
            ".price"
        )?.textContent ||
        "0";


    const price =
        Number(
            String(priceText)
                .replace(
                    /[^\d]/g,
                    ""
                )
        ) || 0;


    const image =
        card.querySelector(
            ".product-photo"
        )?.src || "";


    const soldText =
        card.querySelector(
            ".product-bottom span:last-child"
        )?.textContent || "";


    const sold =
        Number(
            soldText.replace(
                /[^\d]/g,
                ""
            )
        ) || 0;


    const ratingText =
        card.querySelector(
            ".rating"
        )?.textContent || "";


    const ratingMatch =
        ratingText.match(
            /[\d.]+/
        );


    const rating =
        ratingMatch
            ? Number(
                ratingMatch[0]
            )
            : 0;


    return {

        name,

        price,

        image,

        sold,

        rating,

        category:
            categoryMap[name] ||
            "Lainnya",

        keywords:
            productKeywords[name] ||
            name.toLowerCase(),

        card

    };

}


/* =====================================================
   GET ALL PRODUCTS
   ===================================================== */

function getAllProducts() {

    return [
        ...document.querySelectorAll(
            ".product-card"
        )
    ].map(
        getProductFromCard
    );

}


/* =====================================================
   ADD TO CART
   ===================================================== */

function addToCart(
    product,
    quantity = 1
) {

    const existing =
        cart.find(
            item =>
                item.name ===
                product.name
        );


    if (existing) {

        existing.quantity +=
            quantity;

    } else {

        cart.push({

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
        `${product.name} masuk ke keranjang 🛒`
    );

}


/* =====================================================
   UPDATE CART
   ===================================================== */

function updateCart() {

    if (
        !cartItems ||
        !cartCount ||
        !cartTotal
    ) {

        return;

    }


    cartItems.innerHTML = "";


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


    let total = 0;
    let count = 0;


    cart.forEach(
        (item, index) => {

            item.price =
                Number(item.price) || 0;

            item.quantity =
                Math.max(
                    1,
                    Number(item.quantity) || 1
                );


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

                    ${
                        item.image

                        ?

                        `
                        <img
                            src="${item.image}"
                            alt="${item.name}"
                        >
                        `

                        :

                        `
                        🛍️
                        `
                    }

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
                            data-action="minus"
                            data-index="${index}"
                        >
                            −
                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            class="quantity-btn"
                            data-action="plus"
                            data-index="${index}"
                        >
                            +
                        </button>


                        <button
                            class="remove-item"
                            data-index="${index}"
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
        rupiah(total);

}


/* =====================================================
   CART ACTIONS
   ===================================================== */

if (cartItems) {

    cartItems.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "button"
                );


            if (!button) return;


            const index =
                Number(
                    button.dataset.index
                );


            if (
                !cart[index]
            ) {

                return;

            }


            if (
                button.classList.contains(
                    "quantity-btn"
                )
            ) {

                if (
                    button.dataset.action ===
                    "plus"
                ) {

                    cart[index].quantity++;

                } else {

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


                saveCart();

                updateCart();

                return;

            }


            if (
                button.classList.contains(
                    "remove-item"
                )
            ) {

                const name =
                    cart[index].name;


                cart.splice(
                    index,
                    1
                );


                saveCart();

                updateCart();

                showToast(
                    `${name} dihapus.`
                );

            }

        }
    );

}


/* =====================================================
   WISHLIST
   ===================================================== */

function isInWishlist(name) {

    return wishlist.includes(
        name
    );

}


function toggleWishlist(product) {

    const index =
        wishlist.indexOf(
            product.name
        );


    if (index >= 0) {

        wishlist.splice(
            index,
            1
        );

        showToast(
            `${product.name} dihapus dari wishlist.`
        );

    } else {

        wishlist.push(
            product.name
        );

        showToast(
            `${product.name} masuk wishlist ❤️`
        );

    }


    saveWishlist();

    updateWishlistButtons();

}


/* =====================================================
   WISHLIST BUTTONS
   ===================================================== */

function updateWishlistButtons() {

    document
        .querySelectorAll(
            ".wishlist-button"
        )
        .forEach(
            button => {

                const name =
                    button.dataset.product;


                const active =
                    isInWishlist(
                        name
                    );


                button.textContent =
                    active
                        ? "♥"
                        : "♡";


                button.classList.toggle(
                    "active",
                    active
                );

                button.title =
                    active
                        ? "Hapus dari wishlist"
                        : "Tambah ke wishlist";

            }
        );

}


/* =====================================================
   CREATE WISHLIST BUTTON
   ===================================================== */

function createWishlistButtons() {

    document
        .querySelectorAll(
            ".product-card"
        )
        .forEach(
            card => {

                const product =
                    getProductFromCard(
                        card
                    );


                if (
                    card.querySelector(
                        ".wishlist-button"
                    )
                ) {

                    return;

                }


                const button =
                    document.createElement(
                        "button"
                    );


                button.className =
                    "wishlist-button";


                button.dataset.product =
                    product.name;


                button.type =
                    "button";


                button.innerHTML =
                    "♡";


                button.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        toggleWishlist(
                            product
                        );

                    }
                );


                card.style.position =
                    "relative";


                card.appendChild(
                    button
                );

            }
        );


    updateWishlistButtons();

}


/* =====================================================
   FILTER SYSTEM
   ===================================================== */

function productMatchesSearch(
    product
) {

    if (
        !searchKeyword
    ) {

        return true;

    }


    const searchableText = `

        ${product.name}

        ${product.category}

        ${product.keywords}

    `.toLowerCase();


    return searchableText.includes(
        searchKeyword
    );

}


function productMatchesCategory(
    product
) {

    if (
        activeCategory ===
        "Semua"
    ) {

        return true;

    }


    return (
        product.category ===
        activeCategory
    );

}


/* =====================================================
   SORT PRODUCTS
   ===================================================== */

function sortProducts(
    products
) {

    const sorted =
        [...products];


    if (
        activeSort ===
        "terbaru"
    ) {

        return sorted;

    }


    if (
        activeSort ===
        "terlaris"
    ) {

        sorted.sort(
            (
                a,
                b
            ) =>
                b.sold -
                a.sold
        );

    }


    if (
        activeSort ===
        "termurah"
    ) {

        sorted.sort(
            (
                a,
                b
            ) =>
                a.price -
                b.price
        );

    }


    if (
        activeSort ===
        "termahal"
    ) {

        sorted.sort(
            (
                a,
                b
            ) =>
                b.price -
                a.price
        );

    }


    if (
        activeSort ===
        "rating"
    ) {

        sorted.sort(
            (
                a,
                b
            ) =>
                b.rating -
                a.rating
        );

    }


    return sorted;

}


/* =====================================================
   APPLY PRODUCT FILTER
   ===================================================== */

function applyProductFilter() {

    const products =
        getAllProducts();


    const filtered =
        products.filter(
            product =>

                productMatchesSearch(
                    product
                ) &&

                productMatchesCategory(
                    product
                )
        );


    const sorted =
        sortProducts(
            filtered
        );


    const grid =
        document.querySelector(
            ".product-grid"
        );


    if (!grid) return;


    /* Semua produk disembunyikan dulu */

    products.forEach(
        product => {

            product.card.style.display =
                "none";

        }
    );


    /* Tampilkan sesuai urutan */

    sorted.forEach(
        product => {

            product.card.style.display =
                "";

            grid.appendChild(
                product.card
            );


            product.card.classList.remove(
                "filter-animation"
            );


            void product.card.offsetWidth;


            product.card.classList.add(
                "filter-animation"
            );

        }
    );


    updateResultCounter(
        sorted.length,
        products.length
    );


    if (
        sorted.length === 0
    ) {

        showNoResults();

    } else {

        removeNoResults();

    }

}


/* =====================================================
   RESULT COUNTER
   ===================================================== */

function updateResultCounter(
    visible,
    total
) {

    let counter =
        document.getElementById(
            "productResultCount"
        );


    if (!counter) {

        counter =
            document.createElement(
                "div"
            );

        counter.id =
            "productResultCount";


        counter.className =
            "product-result-count";


        const grid =
            document.querySelector(
                ".product-grid"
            );


        if (
            grid &&
            grid.parentNode
        ) {

            grid.parentNode.insertBefore(
                counter,
                grid
            );

        }

    }


    if (
        searchKeyword ||
        activeCategory !==
            "Semua"
    ) {

        counter.textContent =
            `${visible} dari ${total} produk ditemukan`;

    } else {

        counter.textContent =
            `${total} produk`;

    }

}


/* =====================================================
   NO RESULTS
   ===================================================== */

function showNoResults() {

    if (
        document.getElementById(
            "noProductResults"
        )
    ) {

        return;

    }


    const grid =
        document.querySelector(
            ".product-grid"
        );


    if (!grid) return;


    const empty =
        document.createElement(
            "div"
        );


    empty.id =
        "noProductResults";


    empty.className =
        "no-product-results";


    empty.innerHTML = `

        <div>
            🔍
        </div>

        <h3>
            Produk tidak ditemukan
        </h3>

        <p>
            Coba gunakan kata kunci atau
            kategori yang berbeda.
        </p>

        <button
            id="resetProductFilter"
        >
            Reset Filter
        </button>

    `;


    grid.appendChild(
        empty
    );


    document
        .getElementById(
            "resetProductFilter"
        )
        ?.addEventListener(
            "click",
            resetFilters
        );

}


function removeNoResults() {

    document
        .getElementById(
            "noProductResults"
        )
        ?.remove();

}


/* =====================================================
   RESET FILTER
   ===================================================== */

function resetFilters() {

    activeCategory =
        "Semua";

    activeSort =
        "terbaru";

    searchKeyword =
        "";


    if (searchInput) {

        searchInput.value =
            "";

    }


    updateCategoryButtons();

    updateSortButtons();

    applyProductFilter();


    showToast(
        "Filter berhasil direset."
    );

}


/* =====================================================
   SEARCH
   ===================================================== */

function performSearch() {

    searchKeyword =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    applyProductFilter();

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        performSearch
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

}


if (searchButton) {

    searchButton.addEventListener(
        "click",
        performSearch
    );

}


/* =====================================================
   CATEGORY BUTTONS
   ===================================================== */

function createCategorySystem() {

    const categories =
        document.querySelectorAll(
            ".category-card"
        );


    categories.forEach(
        card => {

            if (
                card.dataset.filterReady ===
                "true"
            ) {

                return;

            }


            card.dataset.filterReady =
                "true";


            card.addEventListener(
                "click",
                () => {

                    const text =
                        card.textContent
                            .replace(
                                /[^\p{L}\s]/gu,
                                ""
                            )
                            .trim();


                    activeCategory =
                        text ||
                        "Semua";


                    updateCategoryButtons();

                    applyProductFilter();


                    showToast(
                        `Kategori ${activeCategory}`
                    );

                }
            );

        }
    );

}


/* =====================================================
   CATEGORY ACTIVE STYLE
   ===================================================== */

function updateCategoryButtons() {

    document
        .querySelectorAll(
            ".category-card"
        )
        .forEach(
            card => {

                const text =
                    card.textContent
                        .replace(
                            /[^\p{L}\s]/gu,
                            ""
                        )
                        .trim();


                card.classList.toggle(
                    "active",
                    text ===
                    activeCategory
                );

            }
        );

}


/* =====================================================
   SORT BUTTONS
   ===================================================== */

function createSortSystem() {

    const buttons =
        document.querySelectorAll(
            ".sort-buttons button"
        );


    buttons.forEach(
        (button, index) => {

            if (
                button.dataset.sortReady ===
                "true"
            ) {

                return;

            }


            button.dataset.sortReady =
                "true";


            button.addEventListener(
                "click",
                () => {

                    const text =
                        button.textContent
                            .toLowerCase();


                    if (
                        text.includes(
                            "terlaris"
                        )
                    ) {

                        activeSort =
                            "terlaris";

                    }

                    else if (
                        text.includes(
                            "terendah"
                        ) ||
                        text.includes(
                            "termurah"
                        )
                    ) {

                        activeSort =
                            "termurah";

                    }

                    else if (
                        text.includes(
                            "termahal"
                        )
                    ) {

                        activeSort =
                            "termahal";

                    }

                    else if (
                        text.includes(
                            "rating"
                        )
                    ) {

                        activeSort =
                            "rating";

                    }

                    else {

                        activeSort =
                            "terbaru";

                    }


                    updateSortButtons();

                    applyProductFilter();

                }
            );

        }
    );

}


/* =====================================================
   SORT ACTIVE
   ===================================================== */

function updateSortButtons() {

    document
        .querySelectorAll(
            ".sort-buttons button"
        )
        .forEach(
            button => {

                const text =
                    button.textContent
                        .toLowerCase();


                let type =
                    "terbaru";


                if (
                    text.includes(
                        "terlaris"
                    )
                ) {

                    type =
                        "terlaris";

                }

                else if (
                    text.includes(
                        "terendah"
                    ) ||
                    text.includes(
                        "termurah"
                    )
                ) {

                    type =
                        "termurah";

                }

                else if (
                    text.includes(
                        "termahal"
                    )
                ) {

                    type =
                        "termahal";

                }

                else if (
                    text.includes(
                        "rating"
                    )
                ) {

                    type =
                        "rating";

                }


                button.classList.toggle(
                    "active",
                    type ===
                    activeSort
                );

            }
        );

}


/* =====================================================
   CREATE EXTRA SORT BUTTONS
   ===================================================== */

function addExtraSortButtons() {

    const container =
        document.querySelector(
            ".sort-buttons"
        );


    if (!container) return;


    if (
        container.dataset.expanded ===
        "true"
    ) {

        return;

    }


    container.dataset.expanded =
        "true";


    const existingTexts =
        [
            ...container.querySelectorAll(
                "button"
            )
        ]
        .map(
            button =>
                button.textContent
                    .toLowerCase()
        );


    if (
        !existingTexts.some(
            text =>
                text.includes(
                    "rating"
                )
        )
    ) {

        const ratingButton =
            document.createElement(
                "button"
            );


        ratingButton.textContent =
            "⭐ Rating Tertinggi";


        container.appendChild(
            ratingButton
        );

    }


    if (
        !existingTexts.some(
            text =>
                text.includes(
                    "termahal"
                )
        )
    ) {

        const expensiveButton =
            document.createElement(
                "button"
            );


        expensiveButton.textContent =
            "💎 Termahal";


        container.appendChild(
            expensiveButton
        );

    }


    createSortSystem();

}


/* =====================================================
   PRODUCT DETAIL MODAL
   ===================================================== */

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
            >
                ✕
            </button>


            <div class="product-modal-grid">


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
                    ></h2>


                    <div
                        class="detail-rating"
                    >
                        ⭐ 4.8
                        <span>
                            • Produk pilihan
                        </span>
                    </div>


                    <div
                        class="detail-price"
                        id="detailProductPrice"
                    ></div>


                    <p
                        class="detail-stock"
                    >
                        ✓ Stok tersedia
                    </p>


                    <h3>
                        Deskripsi Produk
                    </h3>


                    <p
                        id="detailProductDescription"
                    ></p>


                    <div
                        class="detail-quantity"
                    >

                        <span>
                            Jumlah
                        </span>


                        <div>

                            <button
                                id="detailMinus"
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
                            class="detail-add-cart"
                        >
                            🛒 Tambah ke Keranjang
                        </button>


                        <button
                            id="detailBuyNow"
                            class="detail-buy-now"
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


/* =====================================================
   OPEN PRODUCT MODAL
   ===================================================== */

function openProductModal(
    product
) {

    createProductModal();


    selectedProduct =
        product;


    detailQuantity =
        1;


    const modal =
        document.getElementById(
            "productModal"
        );


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
        "detailProductPrice"
    ).textContent =
        rupiah(
            product.price
        );


    document.getElementById(
        "detailProductDescription"
    ).textContent =

        `${product.name} merupakan produk ` +
        `kategori ${product.category}. ` +
        `Produk ini memiliki rating ${product.rating || 4.8} ` +
        `dan telah terjual sekitar ${product.sold || 0} unit. ` +
        `Nikmati pengalaman belanja mudah ` +
        `di MAB-Store.`;


    document.getElementById(
        "detailQuantity"
    ).textContent =
        "1";


    modal.classList.add(
        "show"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* =====================================================
   CLOSE PRODUCT MODAL
   ===================================================== */

function closeProductModal() {

    const modal =
        document.getElementById(
            "productModal"
        );


    if (!modal) return;


    modal.classList.remove(
        "show"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/* =====================================================
   PRODUCT CARD CLICK
   ===================================================== */

document
    .querySelectorAll(
        ".product-card"
    )
    .forEach(
        card => {

            const product =
                getProductFromCard(
                    card
                );


            const addButton =
                card.querySelector(
                    ".add-cart"
                );


            if (addButton) {

                addButton.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        addToCart(
                            product
                        );

                    }
                );

            }


            card.addEventListener(
                "click",
                event => {

                    if (
                        event.target.closest(
                            ".add-cart"
                        ) ||

                        event.target.closest(
                            ".wishlist-button"
                        )
                    ) {

                        return;

                    }


                    openProductModal(
                        product
                    );

                }
            );

        }
    );


/* =====================================================
   PRODUCT MODAL ACTIONS
   ===================================================== */

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


/* =====================================================
   ESCAPE
   ===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            closeProductModal();

        }

    }
);


/* =====================================================
   FLASH SALE COUNTDOWN
   ===================================================== */

let remainingSeconds =
    2 * 60 * 60;


function updateCountdown() {

    if (!countdown) return;


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

        `${String(hours).padStart(2, "0")}:` +

        `${String(minutes).padStart(2, "0")}:` +

        `${String(seconds).padStart(2, "0")}`;


    if (
        remainingSeconds > 0
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


/* =====================================================
   VOUCHER
   ===================================================== */

const voucherButton =
    document.querySelector(
        ".voucher-box button"
    );


if (voucherButton) {

    voucherButton.addEventListener(
        "click",
        event => {

            event.currentTarget.textContent =
                "Voucher Diklaim ✓";


            showToast(
                "Voucher berhasil diklaim 🎟️"
            );

        }
    );

}


/* =====================================================
   HERO BUTTON
   ===================================================== */

const heroButton =
    document.querySelector(
        ".hero-button"
    );


if (heroButton) {

    heroButton.addEventListener(
        "click",
        () => {

            const products =
                document.querySelector(
                    ".products"
                );


            if (products) {

                products.scrollIntoView({
                    behavior:
                        "smooth"
                });

            }

        }
    );

}


/* =====================================================
   CHECKOUT
   ===================================================== */

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

                `Total belanja: ${rupiah(total)}\n\n` +

                "Checkout masih dalam mode simulasi."

            );

        }
    );

}


/* =====================================================
   CSS TAMBAHAN OTOMATIS
   ===================================================== */

function injectEnhancementCSS() {

    if (
        document.getElementById(
            "mabstore-step3-css"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "mabstore-step3-css";


    style.textContent = `

        /* SEARCH / FILTER */

        .product-result-count {

            margin:
                10px 0 18px;

            font-size:
                14px;

            font-weight:
                600;

            opacity:
                .75;

        }


        .category-card.active {

            transform:
                translateY(-3px);

            box-shadow:
                0 10px 25px
                rgba(0,0,0,.12);

        }


        .sort-buttons {

            display:
                flex;

            flex-wrap:
                wrap;

            gap:
                8px;

        }


        .sort-buttons button {

            cursor:
                pointer;

            transition:
                .25s ease;

        }


        .sort-buttons button.active {

            transform:
                translateY(-2px);

            font-weight:
                700;

        }


        /* PRODUCT ANIMATION */

        .filter-animation {

            animation:
                mabProductFilter
                .35s ease both;

        }


        @keyframes mabProductFilter {

            from {

                opacity:
                    0;

                transform:
                    translateY(12px)
                    scale(.98);

            }

            to {

                opacity:
                    1;

                transform:
                    translateY(0)
                    scale(1);

            }

        }


        /* WISHLIST */

        .wishlist-button {

            position:
                absolute;

            top:
                10px;

            right:
                10px;

            width:
                38px;

            height:
                38px;

            border:
                0;

            border-radius:
                50%;

            background:
                rgba(255,255,255,.95);

            cursor:
                pointer;

            font-size:
                22px;

            z-index:
                5;

            box-shadow:
                0 4px 12px
                rgba(0,0,0,.12);

            transition:
                .25s ease;

        }


        .wishlist-button:hover {

            transform:
                scale(1.12);

        }


        .wishlist-button.active {

            font-weight:
                900;

        }


        /* NO RESULT */

        .no-product-results {

            grid-column:
                1 / -1;

            text-align:
                center;

            padding:
                50px 20px;

        }


        .no-product-results > div {

            font-size:
                50px;

            margin-bottom:
                10px;

        }


        .no-product-results button {

            border:
                0;

            padding:
                11px 20px;

            border-radius:
                10px;

            cursor:
                pointer;

        }


        /* MODAL */

        .product-modal {

            position:
                fixed;

            inset:
                0;

            z-index:
                9999;

            display:
                flex;

            align-items:
                center;

            justify-content:
                center;

            opacity:
                0;

            visibility:
                hidden;

            transition:
                .25s ease;

        }


        .product-modal.show {

            opacity:
                1;

            visibility:
                visible;

        }


        .product-modal-backdrop {

            position:
                absolute;

            inset:
                0;

            background:
                rgba(0,0,0,.55);

            backdrop-filter:
                blur(5px);

        }


        .product-modal-dialog {

            position:
                relative;

            z-index:
                2;

            width:
                min(920px, 92%);

            max-height:
                90vh;

            overflow:
                auto;

            border-radius:
                24px;

            background:
                white;

            box-shadow:
                0 30px 80px
                rgba(0,0,0,.25);

            transform:
                translateY(25px)
                scale(.96);

            transition:
                .3s ease;

        }


        .product-modal.show
        .product-modal-dialog {

            transform:
                translateY(0)
                scale(1);

        }


        .product-modal-close {

            position:
                absolute;

            right:
                16px;

            top:
                16px;

            z-index:
                5;

            width:
                38px;

            height:
                38px;

            border:
                0;

            border-radius:
                50%;

            cursor:
                pointer;

            font-size:
                18px;

        }


        .product-modal-grid {

            display:
                grid;

            grid-template-columns:
                1fr 1fr;

            gap:
                30px;

            padding:
                35px;

        }


        .product-modal-image img {

            width:
                100%;

            aspect-ratio:
                1 / 1;

            object-fit:
                cover;

            border-radius:
                18px;

        }


        .detail-badge {

            display:
                inline-block;

            padding:
                6px 10px;

            border-radius:
                20px;

            font-size:
                12px;

            font-weight:
                700;

            background:
                #e8f8f3;

        }


        .detail-price {

            font-size:
                28px;

            font-weight:
                800;

            margin:
                15px 0;

        }


        .detail-stock {

            font-weight:
                600;

        }


        .detail-quantity {

            display:
                flex;

            align-items:
                center;

            justify-content:
                space-between;

            margin:
                25px 0;

        }


        .detail-quantity > div {

            display:
                flex;

            align-items:
                center;

            gap:
                15px;

        }


        .detail-quantity button {

            width:
                36px;

            height:
                36px;

            border:
                0;

            border-radius:
                9px;

            cursor:
                pointer;

        }


        .detail-actions {

            display:
                flex;

            gap:
                10px;

        }


        .detail-actions button {

            flex:
                1;

            padding:
                13px;

            border:
                0;

            border-radius:
                12px;

            cursor:
                pointer;

            font-weight:
                700;

        }


        .modal-open {

            overflow:
                hidden;

        }


        @media (max-width: 700px) {

            .product-modal-grid {

                grid-template-columns:
                    1fr;

                padding:
                    20px;

            }


            .product-modal-dialog {

                width:
                    94%;

                max-height:
                    94vh;

            }


            .detail-actions {

                flex-direction:
                    column;

            }

        }

    `;


    document.head.appendChild(
        style
    );

}


/* =====================================================
   INITIALIZE
   ===================================================== */

injectEnhancementCSS();

createWishlistButtons();

createCategorySystem();

createSortSystem();

addExtraSortButtons();

updateCategoryButtons();

updateSortButtons();

applyProductFilter();

updateCart();

console.log(
    "MAB-Store STEP 3 aktif 🚀"
);

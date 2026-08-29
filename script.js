/* =========================================================
   MAB-STORE
   MARKETPLACE FRONTEND
   STEP 3 — SEARCH + CATEGORY + SORTING
   CART + PRODUCT DETAIL + WISHLIST
   ========================================================= */


/* =========================================================
   ELEMENT
   ========================================================= */

const cartButton =
    document.getElementById("cartButton");

const closeCart =
    document.getElementById("closeCart");

const cartDrawer =
    document.getElementById("cartDrawer");

const overlay =
    document.getElementById("overlay");

const cartCount =
    document.getElementById("cartCount");

const cartItems =
    document.getElementById("cartItems");

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


/* =========================================================
   STORAGE
   ========================================================= */

const CART_KEY =
    "mabstore_cart_v2";

const WISHLIST_KEY =
    "mabstore_wishlist_v1";


/* =========================================================
   STATE
   ========================================================= */

let cart = [];

let wishlist = [];

let selectedProduct = null;

let detailQuantity = 1;

let activeCategory =
    "Semua";

let activeSort =
    "terbaru";

let searchKeyword =
    "";


/* =========================================================
   LOAD CART
   ========================================================= */

try {

    cart =
        JSON.parse(
            localStorage.getItem(
                CART_KEY
            ) || "[]"
        );

    if (!Array.isArray(cart)) {
        cart = [];
    }

} catch {

    cart = [];

}


/* =========================================================
   LOAD WISHLIST
   ========================================================= */

try {

    wishlist =
        JSON.parse(
            localStorage.getItem(
                WISHLIST_KEY
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


/* =========================================================
   SAVE CART
   ========================================================= */

function saveCart() {

    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );

}


/* =========================================================
   SAVE WISHLIST
   ========================================================= */

function saveWishlist() {

    localStorage.setItem(
        WISHLIST_KEY,
        JSON.stringify(wishlist)
    );

}


/* =========================================================
   TOAST
   ========================================================= */

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


/* =========================================================
   CART OPEN
   ========================================================= */

function openCart() {

    cartDrawer?.classList.add(
        "open"
    );

    overlay?.classList.add(
        "active"
    );

}


/* =========================================================
   CART CLOSE
   ========================================================= */

function closeCartDrawer() {

    cartDrawer?.classList.remove(
        "open"
    );

    overlay?.classList.remove(
        "active"
    );

}


/* =========================================================
   CART BUTTON
   ========================================================= */

cartButton?.addEventListener(
    "click",
    openCart
);


closeCart?.addEventListener(
    "click",
    closeCartDrawer
);


overlay?.addEventListener(
    "click",
    closeCartDrawer
);


/* =========================================================
   PRODUCT CATEGORY
   ========================================================= */

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


/* =========================================================
   PRODUCT KEYWORDS
   ========================================================= */

const keywordMap = {

    "Smartphone Pro Max":
        "smartphone hp ponsel android elektronik",

    "Wireless Headphone":
        "headphone headset audio musik wireless elektronik",

    "Smartwatch Series 5":
        "smartwatch jam tangan elektronik kesehatan",

    "Tas Backpack Premium":
        "tas backpack fashion aksesoris sekolah",

    "Sneakers Casual":
        "sneakers sepatu fashion olahraga",

    "Laptop Slim":
        "laptop komputer notebook elektronik",

    "T-Shirt Premium":
        "tshirt kaos pakaian fashion",

    "Kursi Minimalis":
        "kursi furniture rumah",

    "Kamera Mirrorless":
        "kamera fotografi mirrorless elektronik",

    "Parfum Premium":
        "parfum fragrance kecantikan",

    "Mug Keramik":
        "mug gelas keramik rumah",

    "Keyboard Mechanical":
        "keyboard komputer gaming mechanical"

};


/* =========================================================
   GET PRODUCT
   ========================================================= */

function getProductFromCard(card) {

    const name =
        card.dataset.product ||
        card.querySelector(
            "h3"
        )?.textContent.trim() ||
        "Produk";


    const price =
        Number(
            card.dataset.price ||
            card.querySelector(
                ".price"
            )?.textContent
                .replace(
                    /[^\d]/g,
                    ""
                ) ||
            0
        );


    const image =
        card.querySelector(
            ".product-photo"
        )?.src ||
        "";


    const soldText =
        card.querySelector(
            ".product-bottom span:last-child"
        )?.textContent ||
        "";


    const sold =
        Number(
            soldText.replace(
                /[^\d]/g,
                ""
            )
        ) || 0;


    const ratingText =
        card.querySelector(
            ".product-bottom"
        )?.textContent ||
        "";


    const ratingMatch =
        ratingText.match(
            /⭐\s*([\d.]+)/
        );


    const rating =
        ratingMatch
            ? Number(
                ratingMatch[1]
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
            keywordMap[name] ||
            name.toLowerCase(),

        card

    };

}


/* =========================================================
   ALL PRODUCTS
   ========================================================= */

function getAllProducts() {

    return [
        ...document.querySelectorAll(
            ".product-card"
        )
    ].map(
        getProductFromCard
    );

}


/* =========================================================
   ADD CART
   ========================================================= */

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

        if (product.image) {

            existing.image =
                product.image;

        }

    } else {

        cart.push({

            name:
                product.name,

            price:
                Number(
                    product.price
                ),

            image:
                product.image ||
                "",

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


    cartItems.innerHTML =
        "";


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

    let count =
        0;


    cart.forEach(
        (
            item,
            index
        ) => {

            item.price =
                Number(
                    item.price
                ) || 0;


            item.quantity =
                Math.max(
                    1,
                    Number(
                        item.quantity
                    ) || 1
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

                        "🛍️"
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


/* =========================================================
   CART ACTIONS
   ========================================================= */

cartItems?.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "button"
            );


        if (!button) {
            return;
        }


        const index =
            Number(
                button.dataset.index
            );


        if (
            !Number.isInteger(index) ||
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
                    cart[index].quantity <=
                    0
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
                `${name} dihapus dari keranjang.`
            );

        }

    }
);


/* =========================================================
   PRODUCT CARD
   ========================================================= */

document
    .querySelectorAll(
        ".product-card"
    )
    .forEach(
        card => {

            const addButton =
                card.querySelector(
                    ".add-cart"
                );


            const getProduct =
                () =>
                    getProductFromCard(
                        card
                    );


            addButton?.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    addToCart(
                        getProduct()
                    );

                }
            );


            card.addEventListener(
                "click",
                event => {

                    if (
                        event.target.closest(
                            ".add-cart"
                        )
                    ) {

                        return;

                    }


                    if (
                        event.target.closest(
                            ".wishlist-button"
                        )
                    ) {

                        return;

                    }


                    openProductModal(
                        getProduct(),
                        card
                    );

                }
            );

        }
    );


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
            role="dialog"
            aria-modal="true"
        >

            <button
                class="product-modal-close"
                data-close-product
                aria-label="Tutup"
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
                    ></h2>


                    <div
                        class="detail-rating"
                    >
                        ⭐
                        <span id="detailRating">
                            0
                        </span>

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


/* =========================================================
   OPEN PRODUCT MODAL
   ========================================================= */

function openProductModal(
    product,
    card
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


    const image =
        document.getElementById(
            "detailProductImage"
        );


    const name =
        document.getElementById(
            "detailProductName"
        );


    const price =
        document.getElementById(
            "detailProductPrice"
        );


    const description =
        document.getElementById(
            "detailProductDescription"
        );


    const rating =
        document.getElementById(
            "detailRating"
        );


    image.src =
        product.image;


    image.alt =
        product.name;


    name.textContent =
        product.name;


    price.textContent =
        rupiah(
            product.price
        );


    rating.textContent =
        product.rating ||
        "0";


    const oldPrice =
        card
            ?.querySelector(
                ".old-price"
            )
            ?.textContent
            .trim();


    const sold =
        card
            ?.querySelector(
                ".product-bottom span:last-child"
            )
            ?.textContent
            .trim();


    description.textContent =

        `${product.name} adalah produk ` +

        `kategori ${product.category} ` +

        `yang tersedia di MAB-Store. ` +

        `Produk memiliki rating ` +

        `${product.rating || 0} ` +

        `dan ${sold || "belum ada data penjualan"}. ` +

        (
            oldPrice
                ? `Harga sebelumnya ${oldPrice}.`
                : ""
        );


    document.getElementById(
        "detailQuantity"
    ).textContent =
        detailQuantity;


    modal.classList.add(
        "show"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeProductModal() {

    const modal =
        document.getElementById(
            "productModal"
        );


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "show"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   DETAIL MODAL ACTION
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

            showToast(
                "Produk siap untuk checkout ⚡"
            );

        }

    }
);


/* =========================================================
   SEARCH
   ========================================================= */

function performSearch() {

    searchKeyword =
        searchInput
            ?.value
            .trim()
            .toLowerCase() ||
        "";


    applyFilters();

}


searchButton?.addEventListener(
    "click",
    performSearch
);


searchInput?.addEventListener(
    "input",
    performSearch
);


searchInput?.addEventListener(
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
   CATEGORY FILTER
   ========================================================= */

function getCategoryName(
    category
) {

    const span =
        category.querySelector(
            "span"
        );


    if (
        span
    ) {

        return span.textContent
            .trim();

    }


    return category.textContent
        .replace(
            /[^\p{L}\s]/gu,
            ""
        )
        .trim();

}


document
    .querySelectorAll(
        ".category-card"
    )
    .forEach(
        category => {

            category.addEventListener(
                "click",
                () => {

                    activeCategory =
                        getCategoryName(
                            category
                        );


                    updateCategoryButtons();

                    applyFilters();


                    showToast(
                        `Kategori ${activeCategory} dipilih.`
                    );

                }
            );

        }
    );


/* =========================================================
   CATEGORY ACTIVE
   ========================================================= */

function updateCategoryButtons() {

    document
        .querySelectorAll(
            ".category-card"
        )
        .forEach(
            category => {

                category.classList.toggle(
                    "active",
                    getCategoryName(
                        category
                    ) ===
                    activeCategory
                );

            }
        );

}


/* =========================================================
   SORT SYSTEM
   ========================================================= */

function createSortButtons() {

    const container =
        document.querySelector(
            ".sort-buttons"
        );


    if (!container) {
        return;
    }


    const currentButtons =
        [
            ...container.querySelectorAll(
                "button"
            )
        ];


    const hasRating =
        currentButtons.some(
            button =>
                button.textContent
                    .toLowerCase()
                    .includes(
                        "rating"
                    )
        );


    const hasExpensive =
        currentButtons.some(
            button =>
                button.textContent
                    .toLowerCase()
                    .includes(
                        "termahal"
                    )
        );


    if (!hasRating) {

        const button =
            document.createElement(
                "button"
            );


        button.textContent =
            "⭐ Rating Tertinggi";


        container.appendChild(
            button
        );

    }


    if (!hasExpensive) {

        const button =
            document.createElement(
                "button"
            );


        button.textContent =
            "💎 Termahal";


        container.appendChild(
            button
        );

    }


    bindSortButtons();

}


/* =========================================================
   SORT TYPE
   ========================================================= */

function getSortType(
    button
) {

    const text =
        button.textContent
            .toLowerCase();


    if (
        text.includes(
            "terlaris"
        )
    ) {

        return "terlaris";

    }


    if (
        text.includes(
            "terendah"
        ) ||
        text.includes(
            "termurah"
        )
    ) {

        return "termurah";

    }


    if (
        text.includes(
            "rating"
        )
    ) {

        return "rating";

    }


    if (
        text.includes(
            "termahal"
        )
    ) {

        return "termahal";

    }


    return "terbaru";

}


/* =========================================================
   BIND SORT BUTTON
   ========================================================= */

function bindSortButtons() {

    document
        .querySelectorAll(
            ".sort-buttons button"
        )
        .forEach(
            button => {

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

                        activeSort =
                            getSortType(
                                button
                            );


                        updateSortButtons();

                        applyFilters();


                        const messages = {

                            terbaru:
                                "Menampilkan produk terbaru.",

                            terlaris:
                                "Menampilkan produk terlaris 🔥",

                            termurah:
                                "Menampilkan harga terendah 💰",

                            rating:
                                "Menampilkan rating tertinggi ⭐",

                            termahal:
                                "Menampilkan produk termahal 💎"

                        };


                        showToast(
                            messages[
                                activeSort
                            ]
                        );

                    }
                );

            }
        );

}


/* =========================================================
   SORT ACTIVE
   ========================================================= */

function updateSortButtons() {

    document
        .querySelectorAll(
            ".sort-buttons button"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    getSortType(
                        button
                    ) ===
                    activeSort
                );

            }
        );

}


/* =========================================================
   SORT PRODUCTS
   ========================================================= */

function sortProducts(
    products
) {

    const result =
        [...products];


    switch (
        activeSort
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

            /*
               Urutan HTML asli dianggap
               sebagai urutan terbaru.
            */

            break;

    }


    return result;

}


/* =========================================================
   SEARCH MATCH
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
   CATEGORY MATCH
   ========================================================= */

function matchesCategory(
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


/* =========================================================
   APPLY FILTER
   ========================================================= */

function applyFilters() {

    const allProducts =
        getAllProducts();


    const filtered =
        allProducts.filter(
            product =>

                matchesSearch(
                    product
                ) &&

                matchesCategory(
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


    if (!grid) {
        return;
    }


    allProducts.forEach(
        product => {

            product.card.style.display =
                "none";

        }
    );


    sorted.forEach(
        product => {

            product.card.style.display =
                "";


            grid.appendChild(
                product.card
            );


            product.card.classList.remove(
                "mab-filter-animation"
            );


            void product.card.offsetWidth;


            product.card.classList.add(
                "mab-filter-animation"
            );

        }
    );


    updateProductCounter(
        sorted.length,
        allProducts.length
    );


    if (
        sorted.length ===
        0
    ) {

        showNoResults();

    } else {

        removeNoResults();

    }

}


/* =========================================================
   RESULT COUNTER
   ========================================================= */

function updateProductCounter(
    visible,
    total
) {

    let counter =
        document.getElementById(
            "mabProductCounter"
        );


    if (!counter) {

        counter =
            document.createElement(
                "div"
            );


        counter.id =
            "mabProductCounter";


        counter.className =
            "mab-product-counter";


        const grid =
            document.querySelector(
                ".product-grid"
            );


        grid?.parentNode?.insertBefore(
            counter,
            grid
        );

    }


    counter.textContent =
        (
            searchKeyword ||
            activeCategory !==
                "Semua"
        )

        ?

        `${visible} dari ${total} produk ditemukan`

        :

        `${total} produk tersedia`;

}


/* =========================================================
   NO RESULTS
   ========================================================= */

function showNoResults() {

    if (
        document.getElementById(
            "mabNoResults"
        )
    ) {

        return;

    }


    const grid =
        document.querySelector(
            ".product-grid"
        );


    if (!grid) {
        return;
    }


    const empty =
        document.createElement(
            "div"
        );


    empty.id =
        "mabNoResults";


    empty.className =
        "mab-no-results";


    empty.innerHTML = `

        <div class="no-result-icon">
            🔍
        </div>

        <h3>
            Produk tidak ditemukan
        </h3>

        <p>
            Coba gunakan kata kunci
            atau kategori lain.
        </p>

        <button
            id="resetMabFilter"
        >
            Reset Filter
        </button>

    `;


    grid.appendChild(
        empty
    );


    document
        .getElementById(
            "resetMabFilter"
        )
        ?.addEventListener(
            "click",
            resetFilters
        );

}


/* =========================================================
   REMOVE NO RESULTS
   ========================================================= */

function removeNoResults() {

    document
        .getElementById(
            "mabNoResults"
        )
        ?.remove();

}


/* =========================================================
   RESET FILTER
   ========================================================= */

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

    applyFilters();


    showToast(
        "Filter berhasil direset."
    );

}


/* =========================================================
   WISHLIST
   ========================================================= */

function isWishlist(
    productName
) {

    return wishlist.includes(
        productName
    );

}


function toggleWishlist(
    product
) {

    const index =
        wishlist.indexOf(
            product.name
        );


    if (
        index >=
        0
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
            product.name
        );


        showToast(
            `${product.name} masuk wishlist ❤️`
        );

    }


    saveWishlist();

    updateWishlistButtons();

}


/* =========================================================
   WISHLIST BUTTON
   ========================================================= */

function createWishlistButtons() {

    document
        .querySelectorAll(
            ".product-card"
        )
        .forEach(
            card => {

                if (
                    card.querySelector(
                        ".wishlist-button"
                    )
                ) {

                    return;

                }


                const product =
                    getProductFromCard(
                        card
                    );


                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "wishlist-button";


                button.dataset.product =
                    product.name;


                button.textContent =
                    isWishlist(
                        product.name
                    )
                        ? "♥"
                        : "♡";


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


/* =========================================================
   UPDATE WISHLIST
   ========================================================= */

function updateWishlistButtons() {

    document
        .querySelectorAll(
            ".wishlist-button"
        )
        .forEach(
            button => {

                const active =
                    isWishlist(
                        button.dataset.product
                    );


                button.textContent =
                    active
                        ? "♥"
                        : "♡";


                button.classList.toggle(
                    "active",
                    active
                );

            }
        );

}


/* =========================================================
   HERO
   ========================================================= */

document
    .querySelector(
        ".hero-button"
    )
    ?.addEventListener(
        "click",
        () => {

            document
                .querySelector(
                    ".products"
                )
                ?.scrollIntoView({
                    behavior:
                        "smooth"
                });

        }
    );


/* =========================================================
   VOUCHER
   ========================================================= */

document
    .querySelector(
        ".voucher-box button"
    )
    ?.addEventListener(
        "click",
        event => {

            event.currentTarget.textContent =
                "Voucher Diklaim ✓";


            showToast(
                "Voucher MAB-Store berhasil diklaim 🎟️"
            );

        }
    );


/* =========================================================
   FLASH SALE
   ========================================================= */

let remainingSeconds =
    2 * 60 * 60;


function updateCountdown() {

    if (!countdown) {
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
   CHECKOUT
   ========================================================= */

checkoutButton?.addEventListener(
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

            `Total belanja: ${rupiah(total)}\n\n` +

            "Checkout saat ini masih berupa simulasi."

        );

    }
);


/* =========================================================
   EXTRA CSS
   ========================================================= */

function injectMabCSS() {

    if (
        document.getElementById(
            "mabStep3CSS"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "mabStep3CSS";


    style.textContent = `

        .mab-filter-animation {

            animation:
                mabFilterAppear
                .35s ease both;

        }


        @keyframes mabFilterAppear {

            from {

                opacity:
                    0;

                transform:
                    translateY(15px);

            }

            to {

                opacity:
                    1;

                transform:
                    translateY(0);

            }

        }


        .mab-product-counter {

            margin:
                0 0 15px;

            font-size:
                14px;

            font-weight:
                600;

            opacity:
                .75;

        }


        .mab-no-results {

            grid-column:
                1 / -1;

            text-align:
                center;

            padding:
                55px 20px;

        }


        .no-result-icon {

            font-size:
                48px;

            margin-bottom:
                10px;

        }


        .mab-no-results button {

            border:
                0;

            padding:
                11px 20px;

            border-radius:
                10px;

            cursor:
                pointer;

            font-weight:
                700;

        }


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
                none;

            border-radius:
                50%;

            background:
                rgba(
                    255,
                    255,
                    255,
                    .95
                );

            cursor:
                pointer;

            font-size:
                21px;

            z-index:
                10;

            box-shadow:
                0 4px 12px
                rgba(
                    0,
                    0,
                    0,
                    .12
                );

            transition:
                .25s ease;

        }


        .wishlist-button:hover {

            transform:
                scale(1.12);

        }


        .wishlist-button.active {

            transform:
                scale(1.08);

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

            font-weight:
                700;

            transform:
                translateY(-2px);

        }


        @media (
            max-width: 700px
        ) {

            .sort-buttons {

                overflow-x:
                    auto;

                flex-wrap:
                    nowrap;

                padding-bottom:
                    5px;

            }


            .sort-buttons button {

                flex:
                    0 0 auto;

            }

        }

    `;


    document.head.appendChild(
        style
    );

}


/* =========================================================
   INITIALIZE
   ========================================================= */

injectMabCSS();

createSortButtons();

createWishlistButtons();

updateCategoryButtons();

updateSortButtons();

applyFilters();

updateCart();


console.log(
    "MAB-Store STEP 3 aktif 🚀"
);

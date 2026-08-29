/* =========================================
   MAB-STORE
   Product Detail + Cart + Search
   ========================================= */


/* =========================================
   ELEMENTS
   ========================================= */

const cartButton = document.getElementById("cartButton");
const closeCart = document.getElementById("closeCart");
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");

const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

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


/* =========================================
   CART STORAGE
   ========================================= */

const CART_KEY = "mabstore_cart_v2";

let cart = [];

try {

    const savedCart =
        localStorage.getItem(CART_KEY);

    cart = savedCart
        ? JSON.parse(savedCart)
        : [];

    if (!Array.isArray(cart)) {
        cart = [];
    }

} catch (error) {

    console.warn(
        "Gagal membaca data keranjang.",
        error
    );

    cart = [];

}


/* =========================================
   FORMAT RUPIAH
   ========================================= */

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


/* =========================================
   SAVE CART
   ========================================= */

function saveCart() {

    try {

        localStorage.setItem(
            CART_KEY,
            JSON.stringify(cart)
        );

    } catch (error) {

        console.warn(
            "Gagal menyimpan keranjang.",
            error
        );

    }

}


/* =========================================
   TOAST
   ========================================= */

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

                toast.classList.remove(
                    "show"
                );

            },
            2200
        );

}


/* =========================================
   OPEN CART
   ========================================= */

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


/* =========================================
   CLOSE CART
   ========================================= */

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


/* =========================================
   ADD TO CART
   ========================================= */

function addToCart(product) {

    const existing =
        cart.find(
            item =>
                item.name ===
                product.name
        );


    if (existing) {

        existing.quantity +=
            product.quantity || 1;


        if (product.image) {

            existing.image =
                product.image;

        }

    } else {

        cart.push({

            name:
                product.name,

            price:
                Number(product.price),

            image:
                product.image || "",

            quantity:
                product.quantity || 1

        });

    }


    saveCart();

    updateCart();

    showToast(
        `${product.name} ditambahkan ke keranjang.`
    );

}


/* =========================================
   UPDATE CART
   ========================================= */

function updateCart() {

    if (
        !cartItems ||
        !cartCount ||
        !cartTotal
    ) {

        return;

    }


    cartItems.innerHTML = "";


    /* EMPTY */

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


/* =========================================
   CART BUTTON
   ========================================= */

if (cartButton) {

    cartButton.addEventListener(
        "click",
        openCart
    );

}


/* =========================================
   CLOSE CART BUTTON
   ========================================= */

if (closeCart) {

    closeCart.addEventListener(
        "click",
        closeCartDrawer
    );

}


/* =========================================
   OVERLAY
   ========================================= */

if (overlay) {

    overlay.addEventListener(
        "click",
        closeCartDrawer
    );

}


/* =========================================
   CART ACTIONS
   ========================================= */

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
                !Number.isInteger(index) ||
                !cart[index]
            ) {

                return;

            }


            /* PLUS / MINUS */

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

                }


                else {

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


            /* REMOVE */

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

}


/* =========================================
   PRODUCT CARDS
   ========================================= */

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


            const image =
                card.querySelector(
                    ".product-photo"
                );


            function getProduct() {

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


                return {

                    name:
                        name,

                    price:
                        price,

                    image:
                        image?.src || "",

                    quantity:
                        1

                };

            }


            /* ADD BUTTON */

            if (addButton) {

                addButton.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        addToCart(
                            getProduct()
                        );

                    }
                );

            }


            /* PRODUCT DETAIL */

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


                    openProductModal(
                        getProduct(),
                        card
                    );

                }
            );

        }
    );


/* =========================================
   PRODUCT DETAIL MODAL
   ========================================= */

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
            aria-label="Detail produk"
        >


            <button
                class="product-modal-close"
                data-close-product
                aria-label="Tutup"
            >

                ✕

            </button>


            <div class="product-modal-grid">


                <!-- FOTO -->

                <div class="product-modal-image">

                    <img
                        id="detailProductImage"
                        src=""
                        alt=""
                    >

                </div>


                <!-- INFORMASI -->

                <div class="product-modal-info">


                    <span class="detail-badge">

                        MAB-Store

                    </span>


                    <h2
                        id="detailProductName"
                    ></h2>


                    <div class="detail-rating">

                        ⭐ 4.8

                        <span>
                            • Produk pilihan
                        </span>

                    </div>


                    <div
                        class="detail-price"
                        id="detailProductPrice"
                    ></div>


                    <p class="detail-stock">

                        ✓ Stok tersedia

                    </p>


                    <h3>

                        Deskripsi Produk

                    </h3>


                    <p
                        id="detailProductDescription"
                    >

                        Produk pilihan MAB-Store
                        dengan kualitas yang cocok
                        untuk kebutuhan sehari-hari.

                    </p>


                    <!-- JUMLAH -->

                    <div class="detail-quantity">


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


                    <!-- ACTION -->

                    <div class="detail-actions">


                        <button
                            id="detailAddCart"
                            class="detail-add-cart"
                        >

                            🛒
                            Tambah ke Keranjang

                        </button>


                        <button
                            id="detailBuyNow"
                            class="detail-buy-now"
                        >

                            ⚡
                            Beli Sekarang

                        </button>


                    </div>


                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    /* CLOSE */

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


/* =========================================
   PRODUCT DETAIL STATE
   ========================================= */

let selectedProduct =
    null;

let detailQuantity =
    1;


/* =========================================
   OPEN PRODUCT MODAL
   ========================================= */

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

        `${product.name} adalah salah satu ` +
        `produk pilihan di MAB-Store. ` +
        `Nikmati pengalaman belanja sederhana ` +
        `dengan informasi produk yang jelas.` +

        (
            oldPrice
                ? ` Harga sebelumnya ${oldPrice}.`
                : ""
        ) +

        (
            sold
                ? ` ${sold}.`
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


/* =========================================
   CLOSE PRODUCT MODAL
   ========================================= */

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


/* =========================================
   PRODUCT MODAL BUTTONS
   ========================================= */

document.addEventListener(
    "click",
    event => {


        /* PLUS */

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


        /* MINUS */

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


        /* ADD TO CART */

        if (
            event.target.id ===
                "detailAddCart" &&
            selectedProduct
        ) {

            addToCart({

                ...selectedProduct,

                quantity:
                    detailQuantity

            });


            closeProductModal();

            openCart();

        }


        /* BUY NOW */

        if (
            event.target.id ===
                "detailBuyNow" &&
            selectedProduct
        ) {

            addToCart({

                ...selectedProduct,

                quantity:
                    detailQuantity

            });


            closeProductModal();

            openCart();


            showToast(
                "Produk siap untuk checkout."
            );

        }

    }
);


/* =========================================
   ESCAPE KEY
   ========================================= */

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


/* =========================================
   SEARCH
   ========================================= */

function filterProducts() {

    if (!searchInput) return;


    const keyword =
        searchInput.value
            .trim()
            .toLowerCase();


    const products =
        document.querySelectorAll(
            ".product-card"
        );


    let found =
        false;


    products.forEach(
        card => {

            const name =
                card.querySelector(
                    "h3"
                )
                ?.textContent
                .toLowerCase() || "";


            const match =
                name.includes(
                    keyword
                );


            card.style.display =
                match
                    ? ""
                    : "none";


            if (match) {

                found =
                    true;

            }

        }
    );


    if (keyword) {

        if (found) {

            showToast(
                `Produk "${keyword}" ditemukan.`
            );

        } else {

            showToast(
                `Produk "${keyword}" tidak ditemukan.`
            );

        }

    }

}


/* =========================================
   SEARCH BUTTON
   ========================================= */

if (searchButton) {

    searchButton.addEventListener(
        "click",
        filterProducts
    );

}


/* =========================================
   SEARCH ENTER
   ========================================= */

if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Enter"
            ) {

                filterProducts();

            }

        }
    );

}


/* =========================================
   LIVE SEARCH
   ========================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            const keyword =
                searchInput.value
                    .trim()
                    .toLowerCase();


            document
                .querySelectorAll(
                    ".product-card"
                )
                .forEach(
                    card => {

                        const name =
                            card.querySelector(
                                "h3"
                            )
                            ?.textContent
                            .toLowerCase() || "";


                        card.style.display =
                            name.includes(
                                keyword
                            )
                                ? ""
                                : "none";

                    }
                );

        }
    );

}


/* =========================================
   HERO BUTTON
   ========================================= */

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


/* =========================================
   CATEGORY BUTTONS
   ========================================= */

document
    .querySelectorAll(
        ".category-card"
    )
    .forEach(
        category => {

            category.addEventListener(
                "click",
                () => {

                    const name =
                        category.querySelector(
                            "span"
                        )
                        ?.textContent ||
                        "Kategori";


                    showToast(
                        `Kategori ${name} dipilih.`
                    );

                }
            );

        }
    );


/* =========================================
   VOUCHER
   ========================================= */

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
                "Voucher MAB-Store berhasil diklaim."
            );

        }
    );

}


/* =========================================
   FLASH SALE COUNTDOWN
   ========================================= */

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


/* =========================================
   SORT PRODUCTS
   ========================================= */

document
    .querySelectorAll(
        ".sort-buttons button"
    )
    .forEach(
        (button, index) => {

            button.addEventListener(
                "click",
                () => {


                    /* ACTIVE */

                    document
                        .querySelectorAll(
                            ".sort-buttons button"
                        )
                        .forEach(
                            btn => {

                                btn.classList.remove(
                                    "active"
                                );

                            }
                        );


                    button.classList.add(
                        "active"
                    );


                    const grid =
                        document.querySelector(
                            ".products .product-grid"
                        );


                    if (!grid) return;


                    const cards =
                        [
                            ...grid.querySelectorAll(
                                ".product-card"
                            )
                        ];


                    /* TERLARIS */

                    if (
                        index === 1
                    ) {

                        cards.sort(
                            (a, b) => {

                                const soldA =
                                    Number(
                                        (
                                            a.querySelector(
                                                ".product-bottom span:last-child"
                                            )
                                            ?.textContent ||
                                            ""
                                        )
                                        .replace(
                                            /[^\d]/g,
                                            ""
                                        ) ||
                                        0
                                    );


                                const soldB =
                                    Number(
                                        (
                                            b.querySelector(
                                                ".product-bottom span:last-child"
                                            )
                                            ?.textContent ||
                                            ""
                                        )
                                        .replace(
                                            /[^\d]/g,
                                            ""
                                        ) ||
                                        0
                                    );


                                return (
                                    soldB -
                                    soldA
                                );

                            }
                        );

                    }


                    /* TERMURAH */

                    if (
                        index === 2
                    ) {

                        cards.sort(
                            (a, b) => {

                                const priceA =
                                    Number(
                                        (
                                            a.querySelector(
                                                ".price"
                                            )
                                            ?.textContent ||
                                            ""
                                        )
                                        .replace(
                                            /[^\d]/g,
                                            ""
                                        ) ||
                                        0
                                    );


                                const priceB =
                                    Number(
                                        (
                                            b.querySelector(
                                                ".price"
                                            )
                                            ?.textContent ||
                                            ""
                                        )
                                        .replace(
                                            /[^\d]/g,
                                            ""
                                        ) ||
                                        0
                                    );


                                return (
                                    priceA -
                                    priceB
                                );

                            }
                        );

                    }


                    cards.forEach(
                        card => {

                            grid.appendChild(
                                card
                            );

                        }
                    );


                    if (
                        index === 0
                    ) {

                        showToast(
                            "Menampilkan produk terbaru."
                        );

                    }


                    if (
                        index === 1
                    ) {

                        showToast(
                            "Menampilkan produk terlaris."
                        );

                    }


                    if (
                        index === 2
                    ) {

                        showToast(
                            "Menampilkan harga terendah."
                        );

                    }

                }
            );

        }
    );


/* =========================================
   CHECKOUT
   ========================================= */

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
                    ) => {

                        return (
                            sum +
                            (
                                item.price *
                                item.quantity
                            )
                        );

                    },
                    0
                );


            alert(

                "Checkout MAB-Store\n\n" +

                `Total belanja: ${rupiah(total)}\n\n` +

                "Ini masih simulasi checkout " +
                "untuk learning project."

            );

        }
    );

}


/* =========================================
   INITIALIZE
   ========================================= */

updateCart();

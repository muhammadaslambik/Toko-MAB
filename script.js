/* =========================================
   TOKO-MAB MARKETPLACE
   JavaScript
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       ELEMENTS
       ===================================== */

    const cartButton = document.getElementById("cartButton");
    const closeCart = document.getElementById("closeCart");
    const cartDrawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("overlay");

    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    const checkoutButton = document.getElementById("checkoutButton");

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    const toast = document.getElementById("toast");

    const countdown = document.getElementById("countdown");


    /* =====================================
       CART DATA
       ===================================== */

    let cart = [];


    /* =====================================
       FORMAT RUPIAH
       ===================================== */

    function formatRupiah(number) {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }).format(number);
    }


    /* =====================================
       SHOW TOAST
       ===================================== */

    function showToast(message) {

        if (!toast) return;

        toast.textContent = message;
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 2000);
    }


    /* =====================================
       OPEN CART
       ===================================== */

    function openCart() {

        if (!cartDrawer || !overlay) return;

        cartDrawer.classList.add("open");
        overlay.classList.add("active");
    }


    /* =====================================
       CLOSE CART
       ===================================== */

    function closeCartDrawer() {

        if (!cartDrawer || !overlay) return;

        cartDrawer.classList.remove("open");
        overlay.classList.remove("active");
    }


    /* =====================================
       ADD PRODUCT TO CART
       ===================================== */

    function addToCart(productName, productPrice, productImage) {

        const existingProduct = cart.find(
            item => item.name === productName
        );

        if (existingProduct) {

            existingProduct.quantity += 1;

        } else {

            cart.push({
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            });

        }

        updateCart();

        showToast(`${productName} ditambahkan ke keranjang.`);

    }


    /* =====================================
       UPDATE CART
       ===================================== */

    function updateCart() {

        if (!cartItems || !cartCount || !cartTotal) return;

        cartItems.innerHTML = "";

        if (cart.length === 0) {

            cartItems.innerHTML = `
                <p class="empty-cart">
                    Keranjang masih kosong.
                </p>
            `;

            cartCount.textContent = "0";
            cartTotal.textContent = "Rp0";

            return;
        }


        let total = 0;
        let totalQuantity = 0;


        cart.forEach((item, index) => {

            total += item.price * item.quantity;
            totalQuantity += item.quantity;


            const cartItem = document.createElement("div");

            cartItem.style.cssText = `
                display: flex;
                gap: 12px;
                padding: 14px 0;
                border-bottom: 1px solid #eeeeee;
                align-items: center;
            `;


            cartItem.innerHTML = `

                <div style="
                    width: 55px;
                    height: 55px;
                    background: #ffebee;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 28px;
                    flex-shrink: 0;
                ">
                    ${item.image}
                </div>

                <div style="flex: 1;">

                    <strong style="
                        display: block;
                        font-size: 14px;
                        margin-bottom: 4px;
                    ">
                        ${item.name}
                    </strong>

                    <div style="
                        color: #e53935;
                        font-weight: bold;
                        font-size: 14px;
                    ">
                        ${formatRupiah(item.price)}
                    </div>

                    <div style="
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        margin-top: 7px;
                    ">

                        <button
                            class="quantity-btn"
                            data-action="minus"
                            data-index="${index}"
                            style="
                                width: 25px;
                                height: 25px;
                                border: 1px solid #ddd;
                                background: white;
                                border-radius: 4px;
                            "
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
                            style="
                                width: 25px;
                                height: 25px;
                                border: 1px solid #ddd;
                                background: white;
                                border-radius: 4px;
                            "
                        >
                            +
                        </button>

                        <button
                            class="remove-item"
                            data-index="${index}"
                            style="
                                margin-left: auto;
                                background: transparent;
                                color: #e53935;
                                font-size: 12px;
                            "
                        >
                            Hapus
                        </button>

                    </div>

                </div>
            `;


            cartItems.appendChild(cartItem);

        });


        cartCount.textContent = totalQuantity;

        cartTotal.textContent = formatRupiah(total);

    }


    /* =====================================
       PRODUCT BUTTONS
       ===================================== */

    const addCartButtons = document.querySelectorAll(".add-cart");


    addCartButtons.forEach(button => {

        button.addEventListener("click", () => {

            const productCard = button.closest(".product-card");

            if (!productCard) return;


            const nameElement = productCard.querySelector("h3");
            const priceElement = productCard.querySelector(".price");
            const imageElement = productCard.querySelector(".product-image");


            if (!nameElement || !priceElement) return;


            const productName = nameElement.textContent.trim();


            const priceText = priceElement.textContent
                .replace(/[^\d]/g, "");


            const productPrice = Number(priceText);


            const productImage = imageElement
                ? imageElement.textContent.trim()
                : "🛍️";


            addToCart(
                productName,
                productPrice,
                productImage
            );

        });

    });


    /* =====================================
       CART BUTTON
       ===================================== */

    if (cartButton) {

        cartButton.addEventListener("click", () => {

            openCart();

        });

    }


    /* =====================================
       CLOSE CART
       ===================================== */

    if (closeCart) {

        closeCart.addEventListener("click", () => {

            closeCartDrawer();

        });

    }


    /* =====================================
       OVERLAY
       ===================================== */

    if (overlay) {

        overlay.addEventListener("click", () => {

            closeCartDrawer();

        });

    }


    /* =====================================
       CART ITEM ACTIONS
       ===================================== */

    if (cartItems) {

        cartItems.addEventListener("click", (event) => {

            const target = event.target;


            /* PLUS / MINUS */

            if (target.classList.contains("quantity-btn")) {

                const index = Number(target.dataset.index);
                const action = target.dataset.action;


                if (action === "plus") {

                    cart[index].quantity += 1;

                }


                if (action === "minus") {

                    cart[index].quantity -= 1;


                    if (cart[index].quantity <= 0) {

                        cart.splice(index, 1);

                    }

                }


                updateCart();

            }


            /* REMOVE */

            if (target.classList.contains("remove-item")) {

                const index = Number(target.dataset.index);

                const removedProduct = cart[index].name;

                cart.splice(index, 1);

                updateCart();

                showToast(`${removedProduct} dihapus dari keranjang.`);

            }

        });

    }


    /* =====================================
       SEARCH
       ===================================== */

    function searchProducts() {

        if (!searchInput) return;


        const keyword = searchInput.value
            .trim()
            .toLowerCase();


        const products = document.querySelectorAll(
            ".product-card"
        );


        let found = false;


        products.forEach(product => {

            const nameElement = product.querySelector("h3");

            if (!nameElement) return;


            const productName =
                nameElement.textContent.toLowerCase();


            if (
                keyword === "" ||
                productName.includes(keyword)
            ) {

                product.style.display = "";

                found = true;

            } else {

                product.style.display = "none";

            }

        });


        if (keyword !== "") {

            if (found) {

                showToast(`Produk untuk "${keyword}" ditemukan.`);

            } else {

                showToast(`Produk "${keyword}" tidak ditemukan.`);

            }

        }

    }


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            searchProducts
        );

    }


    if (searchInput) {

        searchInput.addEventListener("keydown", event => {

            if (event.key === "Enter") {

                searchProducts();

            }

        });

    }


    /* =====================================
       LIVE SEARCH
       ===================================== */

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const keyword = searchInput.value
                .trim()
                .toLowerCase();


            const products = document.querySelectorAll(
                ".product-card"
            );


            products.forEach(product => {

                const nameElement =
                    product.querySelector("h3");


                if (!nameElement) return;


                const name =
                    nameElement.textContent.toLowerCase();


                product.style.display =
                    name.includes(keyword)
                    ? ""
                    : "none";

            });

        });

    }


    /* =====================================
       COUNTDOWN FLASH SALE
       ===================================== */

    let remainingSeconds = 2 * 60 * 60;


    function updateCountdown() {

        if (!countdown) return;


        const hours =
            Math.floor(remainingSeconds / 3600);


        const minutes =
            Math.floor(
                (remainingSeconds % 3600) / 60
            );


        const seconds =
            remainingSeconds % 60;


        countdown.textContent =
            `${String(hours).padStart(2, "0")}:` +
            `${String(minutes).padStart(2, "0")}:` +
            `${String(seconds).padStart(2, "0")}`;


        if (remainingSeconds > 0) {

            remainingSeconds--;

        } else {

            remainingSeconds = 2 * 60 * 60;

        }

    }


    updateCountdown();

    setInterval(updateCountdown, 1000);


    /* =====================================
       HERO BUTTON
       ===================================== */

    const heroButton =
        document.querySelector(".hero-button");


    if (heroButton) {

        heroButton.addEventListener("click", () => {

            const productSection =
                document.querySelector(".products");


            if (productSection) {

                productSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    /* =====================================
       CATEGORY BUTTONS
       ===================================== */

    const categoryButtons =
        document.querySelectorAll(".category-card");


    categoryButtons.forEach(category => {

        category.addEventListener("click", () => {

            const categoryName =
                category.querySelector("span");


            if (!categoryName) return;


            showToast(
                `Kategori ${categoryName.textContent} dipilih.`
            );

        });

    });


    /* =====================================
       CHECKOUT
       ===================================== */

    if (checkoutButton) {

        checkoutButton.addEventListener("click", () => {

            if (cart.length === 0) {

                showToast(
                    "Keranjang masih kosong."
                );

                return;

            }


            const total = cart.reduce(
                (sum, item) =>
                    sum + item.price * item.quantity,
                0
            );


            alert(
                "Checkout Toko-MAB\n\n" +
                "Total belanja: " +
                formatRupiah(total) +
                "\n\n" +
                "Ini adalah simulasi checkout untuk belajar."
            );

        });

    }


    /* =====================================
       SORT PRODUCTS
       ===================================== */

    const sortButtons =
        document.querySelectorAll(
            ".sort-buttons button"
        );


    sortButtons.forEach((button, index) => {

        button.addEventListener("click", () => {

            sortButtons.forEach(btn =>
                btn.classList.remove("active")
            );


            button.classList.add("active");


            const productGrid =
                document.querySelector(
                    ".products .product-grid"
                );


            if (!productGrid) return;


            const products = [
                ...productGrid.querySelectorAll(
                    ".product-card"
                )
            ];


            if (index === 2) {

                /* HARGA TERENDAH */

                products.sort((a, b) => {

                    const priceA =
                        Number(
                            a.querySelector(".price")
                                .textContent
                                .replace(/[^\d]/g, "")
                        );


                    const priceB =
                        Number(
                            b.querySelector(".price")
                                .textContent
                                .replace(/[^\d]/g, "")
                        );


                    return priceA - priceB;

                });

            }


            products.forEach(product =>
                productGrid.appendChild(product)
            );


            if (index === 0) {

                showToast("Menampilkan produk terbaru.");

            }


            if (index === 1) {

                showToast("Menampilkan produk terlaris.");

            }


            if (index === 2) {

                showToast("Menampilkan harga terendah.");

            }

        });

    });


    /* =====================================
       INITIALIZE
       ===================================== */

    updateCart();

});

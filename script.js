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
        nameEn: "Smartphone Pro Max",
        descId: "Smartphone flagship dengan performa kencang, kamera jernih, dan desain premium untuk aktivitas harianmu.",
        descEn: "A flagship smartphone with fast performance, a sharp camera, and a premium design for your everyday activities.",
        category: "Elektronik",
        icon: "📱",
        price: 2999000,
        oldPrice: 3499000,
        rating: 4.9,
        sold: 120,
        image: "https://images.pexels.com/photos/215579/pexels-photo-215579.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: true,
        keywords: "smartphone hp ponsel android elektronik phone",
        variants: { Warna: ["Hitam", "Putih", "Biru"], Tipe: ["128GB", "256GB"] }
    },

    {
        id: 2,
        name: "Wireless Headphone",
        nameEn: "Wireless Headphone",
        descId: "Headphone nirkabel dengan suara jernih dan bass mantap, nyaman dipakai lama untuk musik maupun kerja.",
        descEn: "A wireless headphone with crisp sound and punchy bass, comfortable for long listening or work sessions.",
        category: "Elektronik",
        icon: "🎧",
        price: 399000,
        oldPrice: 599000,
        rating: 4.8,
        sold: 85,
        image: "https://images.pexels.com/photos/7772547/pexels-photo-7772547.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: true,
        keywords: "headphone headset audio musik wireless elektronik",
        variants: { Warna: ["Hitam", "Putih"] }
    },

    {
        id: 3,
        name: "Smartwatch Series 5",
        nameEn: "Smartwatch Series 5",
        descId: "Jam tangan pintar untuk memantau kesehatan dan notifikasi harian langsung dari pergelangan tanganmu.",
        descEn: "A smartwatch for tracking your health and daily notifications right from your wrist.",
        category: "Elektronik",
        icon: "⌚",
        price: 549000,
        oldPrice: 799000,
        rating: 4.7,
        sold: 64,
        image: "https://images.pexels.com/photos/14691505/pexels-photo-14691505.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: true,
        keywords: "smartwatch jam tangan elektronik watch",
        variants: { Warna: ["Hitam", "Silver"], Ukuran: ["40mm", "44mm"] }
    },

    {
        id: 4,
        name: "Tas Backpack Premium",
        nameEn: "Premium Backpack",
        descId: "Tas ransel premium dengan banyak kompartemen, cocok untuk kerja, sekolah, maupun jalan-jalan.",
        descEn: "A premium backpack with multiple compartments, perfect for work, school, or travel.",
        category: "Aksesoris",
        icon: "🎒",
        price: 249000,
        oldPrice: 399000,
        rating: 4.9,
        sold: 210,
        image: "https://images.pexels.com/photos/11726029/pexels-photo-11726029.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: true,
        keywords: "tas backpack fashion aksesoris sekolah bag",
        variants: { Warna: ["Hitam", "Navy", "Abu-abu"] }
    },

    {
        id: 5,
        name: "Sneakers Casual",
        nameEn: "Casual Sneakers",
        descId: "Sepatu sneakers kasual yang ringan dan nyaman, cocok dipakai untuk gaya harian maupun olahraga ringan.",
        descEn: "Lightweight and comfortable casual sneakers, great for everyday style or light workouts.",
        category: "Olahraga",
        icon: "👟",
        price: 329000,
        oldPrice: 0,
        rating: 4.8,
        sold: 98,
        image: "https://images.pexels.com/photos/797637/pexels-photo-797637.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: false,
        keywords: "sneakers sepatu olahraga fashion shoes",
        variants: { Warna: ["Hitam", "Putih"], Ukuran: ["39", "40", "41", "42", "43"] }
    },

    {
        id: 6,
        name: "Laptop Slim",
        nameEn: "Slim Laptop",
        descId: "Laptop tipis dan ringan dengan performa mumpuni untuk kerja, kuliah, maupun hiburan sehari-hari.",
        descEn: "A thin and light laptop with solid performance for work, study, or everyday entertainment.",
        category: "Elektronik",
        icon: "💻",
        price: 7999000,
        oldPrice: 0,
        rating: 4.9,
        sold: 41,
        image: "https://images.pexels.com/photos/3584974/pexels-photo-3584974.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: false,
        keywords: "laptop komputer notebook elektronik computer",
        variants: { Warna: ["Silver", "Space Gray"], Tipe: ["8GB/256GB", "16GB/512GB"] }
    },

    {
        id: 7,
        name: "T-Shirt Premium",
        nameEn: "Premium T-Shirt",
        descId: "Kaos premium berbahan katun combed yang lembut, adem, dan nyaman dipakai sepanjang hari.",
        descEn: "A premium t-shirt made of soft combed cotton, breathable and comfortable to wear all day.",
        category: "Fashion",
        icon: "👕",
        price: 129000,
        oldPrice: 0,
        rating: 4.7,
        sold: 340,
        image: "https://images.pexels.com/photos/12039633/pexels-photo-12039633.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: false,
        keywords: "kaos tshirt pakaian fashion shirt",
        variants: { Warna: ["Hitam", "Putih", "Merah"], Ukuran: ["S", "M", "L", "XL"] }
    },

    {
        id: 8,
        name: "Kursi Minimalis",
        nameEn: "Minimalist Chair",
        descId: "Kursi bergaya minimalis dengan konstruksi kokoh, cocok untuk ruang kerja maupun ruang tamu modern.",
        descEn: "A minimalist-style chair with sturdy construction, great for a home office or modern living room.",
        category: "Rumah",
        icon: "🪑",
        price: 499000,
        oldPrice: 0,
        rating: 4.6,
        sold: 56,
        image: "https://images.pexels.com/photos/21852582/pexels-photo-21852582.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: false,
        keywords: "kursi furniture rumah minimalis chair",
        variants: { Warna: ["Natural", "Hitam"] }
    },

    {
        id: 9,
        name: "Kamera Mirrorless",
        nameEn: "Mirrorless Camera",
        descId: "Kamera mirrorless dengan hasil foto tajam dan warna alami, andalan untuk hobi fotografi maupun konten kreator.",
        descEn: "A mirrorless camera with sharp photos and natural colors, a great pick for photography hobbyists and content creators.",
        category: "Elektronik",
        icon: "📷",
        price: 1299000,
        oldPrice: 0,
        rating: 4.8,
        sold: 72,
        image: "https://images.pexels.com/photos/15945023/pexels-photo-15945023.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: false,
        keywords: "kamera fotografi mirrorless elektronik camera",
        variants: { Warna: ["Hitam"], Tipe: ["Body Only", "Kit Lens"] }
    },

    {
        id: 10,
        name: "Parfum Premium",
        nameEn: "Premium Perfume",
        descId: "Parfum dengan aroma tahan lama dan karakter wangi yang elegan, cocok dipakai untuk aktivitas sehari-hari.",
        descEn: "A perfume with long-lasting, elegant scent character, perfect for everyday wear.",
        category: "Kecantikan",
        icon: "🌸",
        price: 279000,
        oldPrice: 0,
        rating: 4.9,
        sold: 188,
        image: "https://images.pexels.com/photos/16089870/pexels-photo-16089870.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: false,
        keywords: "parfum fragrance kecantikan perfume",
        variants: { Tipe: ["30ml", "50ml", "100ml"] }
    },

    {
        id: 11,
        name: "Mug Keramik",
        nameEn: "Ceramic Mug",
        descId: "Mug keramik berkualitas dengan desain simpel, pas untuk menikmati kopi atau teh favoritmu setiap hari.",
        descEn: "A quality ceramic mug with a simple design, perfect for enjoying your favorite coffee or tea every day.",
        category: "Rumah",
        icon: "☕",
        price: 89000,
        oldPrice: 0,
        rating: 4.7,
        sold: 415,
        image: "https://images.pexels.com/photos/4109750/pexels-photo-4109750.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: false,
        keywords: "mug gelas keramik rumah dapur cup",
        variants: { Warna: ["Putih", "Hitam", "Biru Tua"] }
    },

    {
        id: 12,
        name: "Keyboard Mechanical",
        nameEn: "Mechanical Keyboard",
        descId: "Keyboard mechanical dengan respons ketikan yang presisi dan tahan lama, favorit para gamer dan pengetik cepat.",
        descEn: "A mechanical keyboard with precise, durable keystroke response, a favorite among gamers and fast typists.",
        category: "Gaming",
        icon: "⌨️",
        price: 459000,
        oldPrice: 0,
        rating: 4.8,
        sold: 126,
        image: "https://images.pexels.com/photos/18114576/pexels-photo-18114576.jpeg?auto=compress&cs=tinysrgb&w=800",
        flash: false,
        keywords: "keyboard mechanical komputer gaming",
        variants: { Warna: ["Hitam", "Putih"], Tipe: ["Blue Switch", "Red Switch", "Brown Switch"] }
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
let selectedVariants = {};

let currentLang = localStorage.getItem("mabstore_lang") || "id";
let usdRate = Number(localStorage.getItem("mabstore_usd_rate")) || 15800;
let usdRateFetchedAt = Number(localStorage.getItem("mabstore_usd_rate_time")) || 0;


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

    if (currentLang === "en") {
        const usdValue = number / usdRate;
        return new Intl.NumberFormat(
            "en-US",
            {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        ).format(usdValue);
    }

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
   BAHASA & KURS MATA UANG (ID/EN — IDR/USD)
   ========================================================= */

async function fetchExchangeRate(force = false) {
    const oneHour = 60 * 60 * 1000;
    if (!force && Date.now() - usdRateFetchedAt < oneHour) return;

    try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await res.json();
        if (data && data.rates && data.rates.IDR) {
            usdRate = data.rates.IDR;
            usdRateFetchedAt = Date.now();
            localStorage.setItem("mabstore_usd_rate", String(usdRate));
            localStorage.setItem("mabstore_usd_rate_time", String(usdRateFetchedAt));
            if (currentLang === "en") refreshCurrentView();
        }
    } catch (error) {
        /* gagal fetch kurs — tetap pakai kurs cache/default, tidak mengganggu pengalaman pengguna */
    }
}


/* =========================================================
   AUTO-TRANSLATE (untuk produk baru — tidak perlu isi nameEn/descEn manual)
   ========================================================= */

let translationCache = JSON.parse(localStorage.getItem("mabstore_translation_cache") || "{}");
const translationPending = new Set();

function saveTranslationCache() {
    try {
        localStorage.setItem("mabstore_translation_cache", JSON.stringify(translationCache));
    } catch (error) {
        /* storage penuh — abaikan, cache di memori tetap jalan untuk sesi ini */
    }
}

async function fetchAutoTranslation(text) {
    try {
        const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=id|en`);
        const data = await res.json();
        const translated = data && data.responseData && data.responseData.translatedText;
        if (translated && translated.toLowerCase() !== "invalid" && !translated.startsWith("QUERY LENGTH")) {
            return translated;
        }
    } catch (error) {
        /* gagal terjemahkan — pakai teks asli sebagai fallback, tidak mengganggu pengalaman pengguna */
    }
    return text;
}

function ensureAutoTranslated(text) {
    if (!text || translationCache[text] || translationPending.has(text)) return;
    translationPending.add(text);

    fetchAutoTranslation(text).then(translated => {
        translationCache[text] = translated;
        translationPending.delete(text);
        saveTranslationCache();
        if (currentLang === "en") refreshCurrentView();
    });
}

/* Kembalikan terjemahan Indonesia→Inggris: pakai cache jika sudah ada,
   kalau belum, mulai proses terjemahan di latar belakang (hasilnya akan
   muncul otomatis begitu selesai) dan untuk sementara tampilkan teks asli. */
function autoText(text) {
    if (currentLang !== "en" || !text) return text;
    if (translationCache[text] !== undefined) return translationCache[text];
    ensureAutoTranslated(text);
    return text;
}

const categoryLabels = {
    id: { Elektronik: "Elektronik", Fashion: "Fashion", Rumah: "Rumah", Kecantikan: "Kecantikan", Gaming: "Gaming", Olahraga: "Olahraga", Buku: "Buku", Aksesoris: "Aksesoris" },
    en: { Elektronik: "Electronics", Fashion: "Fashion", Rumah: "Home", Kecantikan: "Beauty", Gaming: "Gaming", Olahraga: "Sports", Buku: "Books", Aksesoris: "Accessories" }
};

function categoryLabel(cat) {
    if (!cat) return cat;
    const known = categoryLabels[currentLang] && categoryLabels[currentLang][cat];
    if (known) return known;
    /* kategori baru yang belum ada di kamus tetap otomatis diterjemahkan */
    return autoText(cat);
}

function productName(product) {
    if (!product) return "";
    if (currentLang !== "en") return product.name;
    return product.nameEn || autoText(product.name);
}

function productDesc(product) {
    if (!product) return "";
    const idText = product.descId || product.name;
    if (currentLang !== "en") return idText;
    return product.descEn || autoText(idText);
}

function findProductById(id) {
    return products.find(p => p.id === id);
}

function productNameById(id, fallback) {
    const product = findProductById(id);
    return product ? productName(product) : (currentLang === "en" ? autoText(fallback || "") : (fallback || ""));
}

const colorLabels = {
    Hitam: "Black", Putih: "White", Biru: "Blue", Merah: "Red", Silver: "Silver",
    Navy: "Navy", "Abu-abu": "Grey", Natural: "Natural", "Biru Tua": "Dark Blue"
};

function variantValueLabel(value) {
    if (currentLang !== "en") return value;
    if (colorLabels[value]) return colorLabels[value];
    /* nilai varian baru (warna/tipe baru) ikut otomatis diterjemahkan */
    return autoText(value);
}

const variantKeyLabels = {
    Warna: { id: "Warna", en: "Color" },
    Tipe: { id: "Tipe", en: "Type" },
    Ukuran: { id: "Ukuran", en: "Size" }
};

function variantKeyLabel(key) {
    return (variantKeyLabels[key] && variantKeyLabels[key][currentLang]) || key;
}

/* Kamus untuk teks yang di-generate lewat JS (bukan teks statis di HTML) */
const t_dict = {
    addToCart: { id: "+ Keranjang", en: "+ Cart" },
    buyNow: { id: "⚡ Beli Sekarang", en: "⚡ Buy Now" },
    sold: { id: "Terjual", en: "Sold" },
    soldPercent: { id: "terjual", en: "sold" },
    reviewsSuffix: { id: "ulasan", en: "reviews" },
    inStockShip: { id: "✓ Stok tersedia \u00a0•\u00a0 Siap dikirim", en: "✓ In stock \u00a0•\u00a0 Ready to ship" },
    seeDetail: { id: "Lihat Detail", en: "View Detail" },
    hideDetail: { id: "Sembunyikan Detail", en: "Hide Detail" },
    updateStatus: { id: "Perbarui Status (Simulasi)", en: "Update Status (Simulation)" },
    buyAgain: { id: "Beli Lagi", en: "Buy Again" },
    items: { id: "barang", en: "items" },
    total: { id: "Total", en: "Total" },
    orderNoMatch: { id: "Tidak ada pesanan dengan status ini.", en: "No orders with this status." },
    noSimilarProducts: { id: "Belum ada produk serupa lainnya.", en: "No similar products yet." },
    noResultsFilter: { id: "Tidak ada produk yang cocok dengan filter ini.", en: "No products match this filter." },
    productsFound: { id: "produk ditemukan", en: "products found" },
    following: { id: "✓ Mengikuti", en: "✓ Following" },
    followStore: { id: "+ Ikuti Toko", en: "+ Follow Store" },
    payment: { id: "Pembayaran", en: "Payment" },
    voucherLabel: { id: "Voucher", en: "Voucher" },
    tracking: { id: { dibuat: "Pesanan Dibuat", diproses: "Diproses", dikirim: "Dikirim", selesai: "Selesai" }, en: { dibuat: "Order Placed", diproses: "Processing", dikirim: "Shipped", selesai: "Completed" } },
    orderStatus: { id: { diproses: "Diproses", dikirim: "Dikirim", selesai: "Selesai" }, en: { diproses: "Processing", dikirim: "Shipped", selesai: "Completed" } },
    specLabels: {
        id: { Merek: "Merek", Kategori: "Kategori", Bahan: "Bahan", Kondisi: "Kondisi", "Berat Satuan": "Berat Satuan", "Min. Pemesanan": "Min. Pemesanan", Etalase: "Etalase", Garansi: "Garansi", SKU: "SKU", "Dikirim Dari": "Dikirim Dari" },
        en: { Merek: "Brand", Kategori: "Category", Bahan: "Material", Kondisi: "Condition", "Berat Satuan": "Unit Weight", "Min. Pemesanan": "Min. Order", Etalase: "Showcase", Garansi: "Warranty", SKU: "SKU", "Dikirim Dari": "Shipped From" }
    },
    specValues: {
        Baru: "New",
        "Garansi Resmi 1 Tahun": "1-Year Official Warranty",
        "Garansi Kepuasan 7 Hari": "7-Day Satisfaction Warranty",
        "1 Buah": "1 Piece",
        "Jakarta Selatan": "South Jakarta",
        "MAB-Store": "MAB-Store",
        Pilihan: "Choice",
        "Plastik & Logam": "Plastic & Metal",
        "Katun Combed": "Combed Cotton",
        "Kayu & Keramik": "Wood & Ceramic",
        "Kaca & Cairan Parfum": "Glass & Perfume Liquid",
        "Plastik ABS & Logam": "ABS Plastic & Metal",
        "Kanvas & Karet": "Canvas & Rubber",
        Kertas: "Paper",
        "Kanvas & Kulit Sintetis": "Canvas & Synthetic Leather",
        "Campuran Berkualitas": "Quality Blend"
    }
};

function t(key) {
    const entry = t_dict[key];
    if (!entry) return key;
    return entry[currentLang] !== undefined ? entry[currentLang] : entry.id;
}

function specValueLabel(value) {
    if (currentLang !== "en") return value;
    if (t_dict.specValues[value]) return t_dict.specValues[value];
    if (value.endsWith(" Pilihan")) return `${categoryLabel(value.replace(" Pilihan", ""))} Choice`;
    /* nilai spesifikasi baru yang belum ada di kamus tetap otomatis diterjemahkan */
    return autoText(value);
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
                    ? `<img class="product-photo" src="${product.image}" alt="${productName(product)}" loading="lazy">`
                    : `<div class="product-placeholder">${product.icon}</div>`}
                <button class="wishlist-button ${liked ? "active" : ""}" data-wishlist-id="${product.id}" type="button" aria-label="Wishlist">
                    ${liked ? "♥" : "♡"}
                </button>
                ${product.flash ? `<span class="flash-badge">⚡ FLASH SALE</span>` : ""}
                ${product.flash && discount ? `<span class="flash-discount">-${discount}%</span>` : ""}
            </div>
            <div class="product-info">
                <h3>${productName(product)}</h3>
                <div class="price">${rupiah(product.price)}</div>
                ${product.oldPrice > 0 ? `<div class="old-price">${rupiah(product.oldPrice)}</div>` : `<div class="old-price" style="visibility:hidden">Rp0</div>`}
                <div class="product-bottom">
                    <span>⭐ ${product.rating}</span>
                    <span>${t("sold")} ${product.sold}</span>
                </div>
                ${product.flash ? `
                    <div class="flash-stock">
                        <div class="flash-stock-bar"><div class="flash-stock-progress" style="width:${stockPercent}%"></div></div>
                        <div class="flash-stock-text">${stockPercent}% ${t("soldPercent")}</div>
                    </div>` : ""}
                <button class="add-cart" data-cart-id="${product.id}" type="button">
                    ${product.flash ? t("buyNow") : t("addToCart")}
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

        ${product.nameEn || translationCache[product.name] || ""}

        ${product.category}

        ${categoryLabel(product.category)}

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


    if (productPage) {

        productPage.hidden = true;

        productPage.style.display =
            "none";

    }


    hideExtraPages();


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


        url.searchParams.delete(
            "product"
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

function hideExtraPages() {
    ["ordersPage", "storePage", "searchPage", "sellerDashboardPage"].forEach(id => {
        const page = document.getElementById(id);
        if (page) { page.hidden = true; page.style.display = "none"; }
    });
}

function hideAllMainPages() {
    ["homePage", "categoryPage", "productPage", "ordersPage", "storePage", "searchPage", "sellerDashboardPage"].forEach(id => {
        const page = document.getElementById(id);
        if (page) { page.hidden = true; page.style.display = "none"; }
    });
}

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


    if (productPage) {

        productPage.hidden = true;

        productPage.style.display =
            "none";

    }


    hideExtraPages();


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

        url.searchParams.delete(
            "product"
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

function defaultVariant(product) {
    if (!product.variants) return null;
    const keys = Object.keys(product.variants);
    if (!keys.length) return null;
    const variant = {};
    keys.forEach(key => { variant[key] = product.variants[key][0]; });
    return variant;
}

function addToCart(
    product,
    quantity = 1,
    variant = null
) {

    const variantKey =
        variant
            ? Object.keys(variant).sort().map(key => `${key}:${variant[key]}`).join("|")
            : "";

    const variantLabel =
        variant
            ? Object.values(variant).join(" / ")
            : "";

    const existing =
        cart.find(
            item =>
                item.id === product.id &&
                (item.variantKey || "") === variantKey
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
                quantity,

            variant:
                variant,

            variantKey:
                variantKey,

            variantLabel:
                variantLabel

        });

    }


    saveCart();

    updateCart();


    showToast(
        currentLang === "en" ? `${productName(product)} added to cart 🛒` : `${productName(product)} ditambahkan ke keranjang 🛒`
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
                    1,
                    defaultVariant(product)
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

                showProductDetail(
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
                        alt="${productNameById(item.id, item.name)}"
                    >

                </div>


                <div class="cart-product-details">

                    <strong>
                        ${productNameById(item.id, item.name)}
                    </strong>

                    ${item.variantLabel ? `<span class="cart-item-variant">${item.variantLabel}</span>` : ""}

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
        () => {
            closeCartDrawer();
            closeWishlistDrawer();
        }
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
            currentLang === "en" ? `${productName(product)} removed from wishlist.` : `${productName(product)} dihapus dari wishlist.`
        );

    }

    else {

        wishlist.push(
            product.id
        );


        showToast(
            currentLang === "en" ? `${productName(product)} added to wishlist ❤️` : `${productName(product)} masuk wishlist ❤️`
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
            <button class="wishlist-row-image" data-wishlist-product="${product.id}" type="button" aria-label="${currentLang === "en" ? "View" : "Lihat"} ${productName(product)}">
                <img src="${product.image}" alt="${productName(product)}">
            </button>
            <div class="wishlist-row-info">
                <h3>${productName(product)}</h3>
                <div class="wishlist-row-meta">⭐ ${product.rating} · ${product.sold} ${t("soldPercent")}</div>
                <strong>${rupiah(product.price)}</strong>
                <div class="wishlist-row-actions">
                    <button class="wishlist-cart-btn" data-wishlist-cart="${product.id}" type="button">🛒 ${currentLang === "en" ? "Cart" : "Keranjang"}</button>
                    <button class="wishlist-remove-btn" data-wishlist-remove="${product.id}" type="button">${currentLang === "en" ? "Remove" : "Hapus"}</button>
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
            if (product) { addToCart(product, 1, defaultVariant(product)); }
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
            if (product) { closeWishlistDrawer(); showProductDetail(product); }
        }
    });
}

/* =========================================================
   PRODUCT DETAIL PAGE (halaman penuh, bukan modal)
   ========================================================= */

function getProductGallery(product) {
    const base = product.image.split("?")[0];
    return [
        `${base}?auto=compress&cs=tinysrgb&w=800`,
        `${base}?auto=compress&cs=tinysrgb&w=800&h=900&fit=crop`,
        `${base}?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop`
    ];
}

function renderProductGallery(product) {
    const thumbs = document.getElementById("pdThumbs");
    const mainImage = document.getElementById("detailProductImage");
    if (!thumbs || !mainImage) return;

    const gallery = getProductGallery(product);
    mainImage.src = gallery[0];
    mainImage.alt = productName(product);

    thumbs.innerHTML = gallery.map((src, index) => `
        <button type="button" class="pd-thumb${index === 0 ? " active" : ""}" data-thumb-src="${src}">
            <img src="${src}" alt="${productName(product)} ${index + 1}">
        </button>
    `).join("");
}

document.addEventListener("click", event => {
    const thumb = event.target.closest("[data-thumb-src]");
    if (!thumb) return;

    const mainImage = document.getElementById("detailProductImage");
    if (mainImage) mainImage.src = thumb.dataset.thumbSrc;

    thumb.parentElement.querySelectorAll(".pd-thumb").forEach(t => t.classList.remove("active"));
    thumb.classList.add("active");
});

const productPage = document.getElementById("productPage");
const pdSpecsTable = document.getElementById("pdSpecsTable");
const pdRelatedProducts = document.getElementById("pdRelatedProducts");
const pdBreadcrumbCategory = document.getElementById("pdBreadcrumbCategory");
const pdBreadcrumbName = document.getElementById("pdBreadcrumbName");
const pdDiscountBadge = document.getElementById("pdDiscountBadge");
const backFromProductButton = document.getElementById("backFromProductButton");

const categoryWeights = {
    Elektronik: "350 gr",
    Fashion: "200 gr",
    Rumah: "800 gr",
    Kecantikan: "150 gr",
    Gaming: "400 gr",
    Olahraga: "450 gr",
    Buku: "300 gr",
    Aksesoris: "250 gr"
};

const categoryMaterials = {
    Elektronik: "Plastik & Logam",
    Fashion: "Katun Combed",
    Rumah: "Kayu & Keramik",
    Kecantikan: "Kaca & Cairan Parfum",
    Gaming: "Plastik ABS & Logam",
    Olahraga: "Kanvas & Karet",
    Buku: "Kertas",
    Aksesoris: "Kanvas & Kulit Sintetis"
};

function buildProductSpecs(product) {
    return [
        { label: "Merek", value: "MAB-Store" },
        { label: "Kategori", value: categoryLabel(product.category) },
        { label: "Bahan", value: specValueLabel(categoryMaterials[product.category] || "Campuran Berkualitas") },
        { label: "Kondisi", value: specValueLabel("Baru") },
        { label: "Berat Satuan", value: categoryWeights[product.category] || "300 gr" },
        { label: "Min. Pemesanan", value: specValueLabel("1 Buah") },
        { label: "Etalase", value: specValueLabel(`${product.category} Pilihan`) },
        { label: "Garansi", value: specValueLabel(["Elektronik", "Gaming"].includes(product.category) ? "Garansi Resmi 1 Tahun" : "Garansi Kepuasan 7 Hari") },
        { label: "SKU", value: `MAB-${String(product.id).padStart(4, "0")}` },
        { label: "Dikirim Dari", value: specValueLabel("Jakarta Selatan") }
    ];
}

function renderProductSpecs(product) {
    if (!pdSpecsTable) return;
    const labels = t_dict.specLabels[currentLang] || t_dict.specLabels.id;
    pdSpecsTable.innerHTML = buildProductSpecs(product)
        .map(row => `<tr><th>${labels[row.label] || row.label}</th><td>${row.value}</td></tr>`)
        .join("");
}

function renderRelatedProducts(product) {
    if (!pdRelatedProducts) return;
    const related = products
        .filter(item => item.category === product.category && item.id !== product.id)
        .slice(0, 4);

    pdRelatedProducts.innerHTML = related.length
        ? related.map(createProductCard).join("")
        : `<p class="no-reviews">Belum ada produk serupa lainnya.</p>`;
}

function renderProductVariants(product) {
    const section = document.getElementById("pdVariantSection");
    const box = document.getElementById("pdVariants");
    if (!box || !section) return;

    const variants = product.variants || {};
    const keys = Object.keys(variants);

    selectedVariants = {};

    if (!keys.length) {
        section.hidden = true;
        box.innerHTML = "";
        return;
    }

    keys.forEach(key => { selectedVariants[key] = variants[key][0]; });

    section.hidden = false;
    box.innerHTML = keys.map(key => `
        <div class="pd-variant-group">
            <span class="pd-variant-label">${variantKeyLabel(key)}: <b data-variant-selected="${key}">${variantValueLabel(variants[key][0])}</b></span>
            <div class="pd-variant-options">
                ${variants[key].map(opt => `
                    <button
                        type="button"
                        class="pd-variant-option${opt === variants[key][0] ? " active" : ""}"
                        data-variant-key="${key}"
                        data-variant-value="${opt}"
                    >${variantValueLabel(opt)}</button>
                `).join("")}
            </div>
        </div>
    `).join("");
}


/* =========================================================
   VOUCHER & PROMO (di halaman detail produk)
   ========================================================= */

const productPromos = [
    {
        code: "MABHEMAT",
        title: { id: "Diskon 10% Belanja", en: "10% Shopping Discount" },
        description: () => currentLang === "en"
            ? `10% off, up to ${rupiah(100000)}. Valid for all products.`
            : `Potongan 10%, maksimal ${rupiah(100000)}. Berlaku untuk semua produk.`
    },
    {
        code: "ONGKIRGRATIS",
        title: { id: "Gratis Ongkos Kirim", en: "Free Shipping" },
        description: () => currentLang === "en"
            ? "Free shipping cost for all delivery methods."
            : "Bebas biaya pengiriman untuk semua metode pengiriman."
    },
    {
        code: "MEMBERBARU",
        title: { id: `Diskon ${rupiah(20000)}`, en: `${rupiah(20000)} Discount` },
        description: () => currentLang === "en"
            ? `Instant discount of ${rupiah(20000)} for a minimum purchase of ${rupiah(150000)}.`
            : `Potongan langsung ${rupiah(20000)} untuk minimal belanja ${rupiah(150000)}.`
    }
];

function renderPromoList() {
    const list = document.getElementById("pdPromoList");
    if (!list) return;

    list.innerHTML = productPromos.map(promo => `
        <div class="pd-promo-item">
            <div class="pd-promo-icon">🎟️</div>
            <div class="pd-promo-text">
                <b>${typeof promo.title === "function" ? promo.title() : (promo.title[currentLang] || promo.title.id)}</b>
                <span>${promo.description()}</span>
            </div>
            <button type="button" class="pd-promo-copy" data-copy-voucher="${promo.code}">
                ${promo.code}
            </button>
        </div>
    `).join("");
}

function copyVoucherCode(code) {
    const finish = () => addNotification(
        currentLang === "en" ? "Voucher Code Copied 🎟️" : "Kode Voucher Disalin 🎟️",
        currentLang === "en" ? `Code ${code} is ready to use at checkout.` : `Kode ${code} siap dipakai saat checkout.`
    );

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(finish).catch(() => fallbackCopy(code, finish));
    } else {
        fallbackCopy(code, finish);
    }
}

function fallbackCopy(text, onDone) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try { document.execCommand("copy"); } catch (error) { /* ignore */ }
    document.body.removeChild(textarea);
    onDone();
}

document.addEventListener("click", event => {
    const copyBtn = event.target.closest("[data-copy-voucher]");
    if (copyBtn) copyVoucherCode(copyBtn.dataset.copyVoucher);
});

document.addEventListener("click", event => {
    const option = event.target.closest("[data-variant-key]");
    if (!option) return;

    const key = option.dataset.variantKey;
    const value = option.dataset.variantValue;

    selectedVariants[key] = value;

    option.closest(".pd-variant-group")
        .querySelectorAll("[data-variant-key]")
        .forEach(btn => btn.classList.toggle("active", btn.dataset.variantValue === value));

    const label = document.querySelector(`[data-variant-selected="${key}"]`);
    if (label) label.textContent = value;
});

function hasSelectedVariants() {
    return Object.keys(selectedVariants).length > 0;
}

function setupProductTabs() {
    const tabs = document.querySelectorAll("[data-pd-tab]");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            document.querySelectorAll("[data-pd-panel]").forEach(panel => {
                panel.hidden = panel.dataset.pdPanel !== tab.dataset.pdTab;
            });
        });
    });
}

function resetProductTabs() {
    document.querySelectorAll("[data-pd-tab]").forEach(t => t.classList.toggle("active", t.dataset.pdTab === "deskripsi"));
    document.querySelectorAll("[data-pd-panel]").forEach(panel => { panel.hidden = panel.dataset.pdPanel !== "deskripsi"; });
}

setupProductTabs();


/* =========================================================
   SHOW PRODUCT DETAIL PAGE
   ========================================================= */

function showProductDetail(product, updateUrl = true) {
    selectedProduct = product;
    detailQuantity = 1;

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

    renderProductGallery(product);

    set("detailProductName", productName(product));
    set("detailRating", `${product.rating} • ${product.sold} ${t("soldPercent")}`);
    set("detailCategory", categoryLabel(product.category));
    set("detailProductPrice", rupiah(product.price));
    set("detailOldPrice", product.oldPrice > product.price ? rupiah(product.oldPrice) : "");

    const discount = product.oldPrice > product.price ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
    set("detailDiscount", discount ? `-${discount}%` : "");
    if (pdDiscountBadge) {
        pdDiscountBadge.hidden = !discount;
        pdDiscountBadge.textContent = discount ? `-${discount}%` : "";
    }

    set("detailProductDescription", productDesc(product));
    set("detailRatingBox", `${product.rating}/5`);
    set("detailSoldBox", `${product.sold}+`);
    set("detailQuantity", "1");

    const updateWishlistButtons = () => {
        const liked = wishlist.includes(product.id);
        [document.getElementById("detailWishlistButton"), document.getElementById("detailWishlistFloat")].forEach(btn => {
            if (!btn) return;
            btn.classList.toggle("active", liked);
            if (btn.id === "detailWishlistButton") btn.textContent = liked
                ? (currentLang === "en" ? "♥ Saved to Wishlist" : "♥ Tersimpan di Wishlist")
                : (currentLang === "en" ? "♡ Save to Wishlist" : "♡ Simpan ke Wishlist");
            else btn.textContent = liked ? "♥" : "♡";
        });
    };
    updateWishlistButtons();

    if (pdBreadcrumbCategory) pdBreadcrumbCategory.textContent = categoryLabel(product.category);
    if (pdBreadcrumbName) pdBreadcrumbName.textContent = productName(product);

    renderProductSpecs(product);
    renderRelatedProducts(product);
    renderProductVariants(product);
    renderPromoList();
    resetProductTabs();

    selectedReviewStar = 0;
    document.querySelectorAll("#reviewStarInput button").forEach(b => b.classList.remove("active"));
    const reviewComment = document.getElementById("reviewComment");
    if (reviewComment) reviewComment.value = "";

    selectedReviewMedia = [];
    renderMediaPreview();

    const nameRow = document.getElementById("reviewNameRow");
    const nameInput = document.getElementById("reviewName");
    if (currentUser) {
        if (nameRow) nameRow.hidden = true;
        if (nameInput) nameInput.value = currentUser.name;
    } else {
        if (nameRow) nameRow.hidden = false;
        if (nameInput) nameInput.value = "";
    }

    renderReviews(product.id);

    if (homePage) { homePage.hidden = true; homePage.style.display = "none"; }
    if (categoryPage) { categoryPage.hidden = true; categoryPage.style.display = "none"; }
    hideExtraPages();
    if (productPage) { productPage.hidden = false; productPage.style.display = "block"; }

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (updateUrl) {
        const url = new URL(window.location.href);
        url.searchParams.delete("category");
        url.searchParams.set("product", product.id);
        history.pushState({ product: product.id }, "", url);
    }
}

if (backFromProductButton) {
    backFromProductButton.addEventListener("click", () => {
        if (selectedProduct && categoryInfo[selectedProduct.category]) showCategory(selectedProduct.category);
        else showHome();
    });
}

document.addEventListener("click", event => {
    if (event.target.closest("[data-pd-home]")) { showHome(); return; }

    if (event.target.id === "pdBreadcrumbCategory" && selectedProduct) {
        showCategory(selectedProduct.category);
        return;
    }

    if (event.target.id === "detailWishlistFloat" && selectedProduct) {
        toggleWishlist(selectedProduct);
        const liked = wishlist.includes(selectedProduct.id);
        event.target.textContent = liked ? "♥" : "♡";
        event.target.classList.toggle("active", liked);
        const mainBtn = document.getElementById("detailWishlistButton");
        if (mainBtn) { mainBtn.textContent = liked ? "♥ Tersimpan di Wishlist" : "♡ Simpan ke Wishlist"; mainBtn.classList.toggle("active", liked); }
    }

    if (event.target.id === "pdChatSellerButton" && selectedProduct) {
        openChatWithStore("MAB-Official Store", selectedProduct);
    }
});


/* =========================================================
   RATING & REVIEW (localStorage)
   ========================================================= */

const REVIEWS_KEY = "mabstore_reviews_v1";
let productReviews = JSON.parse(localStorage.getItem(REVIEWS_KEY) || "{}");
let selectedReviewStar = 0;

function saveReviews() {
    try {
        localStorage.setItem(REVIEWS_KEY, JSON.stringify(productReviews));
        return true;
    } catch (error) {
        console.warn("Reviews storage error:", error);
        return false;
    }
}

function getReviews(productId) {
    return productReviews[productId] || [];
}

function starString(value) {
    const rounded = Math.round(value);
    return "★".repeat(rounded) + "☆".repeat(5 - rounded);
}

function escapeReviewText(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

function setupReviewStarInput() {
    const box = document.getElementById("reviewStarInput");
    if (!box) return;
    const buttons = box.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            selectedReviewStar = Number(btn.dataset.star);
            buttons.forEach(b => b.classList.toggle("active", Number(b.dataset.star) <= selectedReviewStar));
        });
    });
}


/* =========================================================
   REVIEW MEDIA (FOTO & VIDEO)
   ========================================================= */

const REVIEW_MEDIA_MAX = 4;
const REVIEW_VIDEO_MAX_BYTES = 8 * 1024 * 1024;

let selectedReviewMedia = [];

function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function compressReviewImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => {
            const img = new Image();
            img.onload = () => {
                const maxWidth = 900;
                const scale = Math.min(1, maxWidth / img.width);
                const canvas = document.createElement("canvas");
                canvas.width = Math.round(img.width * scale);
                canvas.height = Math.round(img.height * scale);
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL("image/jpeg", 0.72));
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function setupReviewMediaInput() {
    const input = document.getElementById("reviewMediaFile");
    if (!input) return;
    input.addEventListener("change", async event => {
        const files = Array.from(event.target.files || []);

        for (const file of files) {
            if (selectedReviewMedia.length >= REVIEW_MEDIA_MAX) {
                showToast(`Maksimal ${REVIEW_MEDIA_MAX} lampiran foto/video per ulasan.`);
                break;
            }

            if (file.type.startsWith("image/")) {
                try {
                    const data = await compressReviewImage(file);
                    selectedReviewMedia.push({ type: "image", data });
                } catch (error) {
                    showToast("Gagal memproses foto.");
                }
            } else if (file.type.startsWith("video/")) {
                if (file.size > REVIEW_VIDEO_MAX_BYTES) {
                    showToast("Ukuran video maksimal 8MB.");
                    continue;
                }
                try {
                    const data = await readFileAsDataURL(file);
                    selectedReviewMedia.push({ type: "video", data });
                } catch (error) {
                    showToast("Gagal memproses video.");
                }
            }
        }

        input.value = "";
        renderMediaPreview();
    });
}

function renderMediaPreview() {
    const box = document.getElementById("reviewMediaPreview");
    if (!box) return;

    box.innerHTML = selectedReviewMedia.map((media, index) => `
        <div class="review-media-thumb">
            ${media.type === "image"
                ? `<img src="${media.data}" alt="Preview foto ulasan">`
                : `<video src="${media.data}" muted></video>`}
            <button type="button" class="review-media-remove" data-remove-media="${index}">✕</button>
        </div>
    `).join("");
}

function openMediaLightbox(src) {
    let overlay = document.getElementById("mediaLightbox");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "mediaLightbox";
        overlay.className = "media-lightbox";
        overlay.innerHTML = `<img id="mediaLightboxImg" src="" alt="Foto ulasan">`;
        overlay.addEventListener("click", () => overlay.classList.remove("show"));
        document.body.appendChild(overlay);
    }
    document.getElementById("mediaLightboxImg").src = src;
    overlay.classList.add("show");
}


function renderReviews(productId) {
    const reviews = getReviews(productId);
    const avgEl = document.getElementById("reviewsAvg");
    const starsEl = document.getElementById("reviewsStars");
    const countEl = document.getElementById("reviewsCount");
    const listEl = document.getElementById("reviewList");

    if (!reviews.length) {
        if (avgEl) avgEl.textContent = "—";
        if (starsEl) starsEl.textContent = "☆☆☆☆☆";
        if (countEl) countEl.textContent = "(0 ulasan)";
        if (listEl) listEl.innerHTML = `<p class="no-reviews">Belum ada ulasan. Jadilah yang pertama memberi ulasan!</p>`;
        return;
    }

    const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    if (avgEl) avgEl.textContent = avg.toFixed(1);
    if (starsEl) starsEl.textContent = starString(avg);
    if (countEl) countEl.textContent = `(${reviews.length} ulasan)`;

    if (listEl) {
        listEl.innerHTML = reviews
            .slice()
            .reverse()
            .map(r => `
                <div class="review-item">
                    <div class="review-item-head">
                        <strong>${escapeReviewText(r.name)}</strong>
                        <span class="review-item-stars">${starString(r.rating)}</span>
                    </div>
                    <p class="review-item-date">${escapeReviewText(r.date)}</p>
                    <p class="review-item-comment">${escapeReviewText(r.comment)}</p>
                    ${r.media && r.media.length ? `
                        <div class="review-item-media">
                            ${r.media.map(m => m.type === "image"
                                ? `<img src="${m.data}" alt="Foto ulasan" class="review-media-item" data-lightbox>`
                                : `<video src="${m.data}" controls class="review-media-item"></video>`
                            ).join("")}
                        </div>
                    ` : ""}
                </div>
            `).join("");
    }
}

function submitReview() {
    if (!selectedProduct) return;

    const commentEl = document.getElementById("reviewComment");
    const nameEl = document.getElementById("reviewName");
    const comment = commentEl ? commentEl.value.trim() : "";
    const name = currentUser ? currentUser.name : (nameEl ? nameEl.value.trim() : "");

    if (!selectedReviewStar) {
        showToast("Pilih rating bintang dulu ya.");
        return;
    }
    if (!name) {
        showToast("Isi nama kamu dulu ya.");
        return;
    }
    if (!comment) {
        showToast("Tulis ulasan kamu dulu ya.");
        return;
    }

    const list = getReviews(selectedProduct.id);
    list.push({
        name,
        rating: selectedReviewStar,
        comment,
        media: selectedReviewMedia.slice(),
        date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
    });
    productReviews[selectedProduct.id] = list;

    const saved = saveReviews();
    if (!saved) {
        list.pop();
        showToast("Penyimpanan browser penuh. Coba kurangi jumlah/ukuran foto atau video.");
        return;
    }

    renderReviews(selectedProduct.id);

    if (commentEl) commentEl.value = "";
    if (nameEl && !currentUser) nameEl.value = "";
    selectedReviewStar = 0;
    selectedReviewMedia = [];
    renderMediaPreview();
    document.querySelectorAll("#reviewStarInput button").forEach(b => b.classList.remove("active"));

    showToast("Terima kasih atas ulasannya! ⭐");
}


/* =========================================================
   PRODUCT DETAIL BUTTONS (jumlah, keranjang, wishlist, ulasan)
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
                detailQuantity,
                hasSelectedVariants() ? { ...selectedVariants } : null
            );


            openCart();

        }


        if (
            event.target.id ===
                "detailBuyNow" &&
            selectedProduct
        ) {

            addToCart(
                selectedProduct,
                detailQuantity,
                hasSelectedVariants() ? { ...selectedVariants } : null
            );


            openCart();

        }

        if (event.target.id === "detailWishlistButton" && selectedProduct) {
            toggleWishlist(selectedProduct);
            const btn=document.getElementById("detailWishlistButton");
            if(btn){const liked=wishlist.includes(selectedProduct.id);btn.textContent=liked?"♥ Tersimpan di Wishlist":"♡ Simpan ke Wishlist";btn.classList.toggle("active",liked);}
        }

        if (event.target.id === "submitReviewButton") {
            submitReview();
        }

        const removeMediaBtn = event.target.closest("[data-remove-media]");
        if (removeMediaBtn) {
            const index = Number(removeMediaBtn.dataset.removeMedia);
            selectedReviewMedia.splice(index, 1);
            renderMediaPreview();
        }

        if (event.target.matches("[data-lightbox]")) {
            openMediaLightbox(event.target.src);
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
let checkoutShipping=15000, checkoutDiscount=0, appliedVoucher="", checkoutFreeShipping=false;
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
function getShippingCost(){return checkoutFreeShipping ? 0 : checkoutShipping;}
function renderCheckout(){
    if(!checkoutItems)return;
    const subtotal=getCartSubtotal(), qty=cart.reduce((sum,item)=>sum+item.quantity,0), shippingCost=getShippingCost();
    if(checkoutProductCount)checkoutProductCount.textContent=`${qty} produk`;
    checkoutItems.innerHTML=cart.map(item=>`<div class="checkout-item"><div class="checkout-item-image"><img src="${item.image}" alt="${productNameById(item.id, item.name)}"></div><div><h3>${productNameById(item.id, item.name)}</h3>${item.variantLabel ? `<span class="checkout-item-variant">${item.variantLabel}</span>` : ""}<p>${rupiah(item.price)} × ${item.quantity}</p></div><strong>${rupiah(item.price*item.quantity)}</strong></div>`).join("");
    if(summarySubtotal)summarySubtotal.textContent=rupiah(subtotal); if(summaryShipping)summaryShipping.textContent=checkoutFreeShipping ? "Rp0 (Gratis Ongkir)" : rupiah(shippingCost); if(summaryDiscount)summaryDiscount.textContent=`-${rupiah(checkoutDiscount)}`; if(summaryTotal)summaryTotal.textContent=rupiah(Math.max(0,subtotal+shippingCost-checkoutDiscount));
}
function openCheckout(){
    if(!cart.length){showToast("Keranjang masih kosong.");return;}
    closeCartDrawer();
    if(checkoutPage){
        checkoutPage.hidden=false;
        renderCheckout();
        requestAnimationFrame(()=>checkoutPage.classList.add("show"));
        document.body.classList.add("modal-open");
    }
}
function closeCheckout(){
    if(checkoutPage){
        checkoutPage.classList.remove("show");
        document.body.classList.remove("modal-open");
        setTimeout(()=>{ if(!checkoutPage.classList.contains("show")) checkoutPage.hidden=true; },320);
    }
}
if(checkoutButton)checkoutButton.addEventListener("click",openCheckout);
if(backToCartButton)backToCartButton.addEventListener("click",()=>{closeCheckout();openCart();});
document.addEventListener("click",(event)=>{ if(event.target.closest("[data-close-checkout]")) closeCheckout(); });
document.querySelectorAll('input[name="shipping"]').forEach(input=>input.addEventListener("change",()=>{checkoutShipping=Number(input.value);document.querySelectorAll(".shipping-option").forEach(el=>el.classList.remove("selected"));input.closest(".shipping-option")?.classList.add("selected");renderCheckout();}));
document.querySelectorAll('input[name="payment"]').forEach(input=>input.addEventListener("change",()=>{document.querySelectorAll(".payment-option").forEach(el=>el.classList.remove("selected"));input.closest(".payment-option")?.classList.add("selected");}));
if(applyVoucherButton)applyVoucherButton.addEventListener("click",()=>{const code=(checkoutVoucher?.value||"").trim().toUpperCase(),subtotal=getCartSubtotal();voucherMessage.style.color="";if(code==="MABHEMAT"){checkoutDiscount=Math.min(100000,Math.round(subtotal*.10));checkoutFreeShipping=false;appliedVoucher=code;voucherMessage.textContent=`✓ Voucher ${code} berhasil digunakan. Hemat ${rupiah(checkoutDiscount)}.`;}else if(code==="ONGKIRGRATIS"){checkoutDiscount=0;checkoutFreeShipping=true;appliedVoucher=code;voucherMessage.textContent=`✓ Voucher ${code} berhasil digunakan. Ongkos kirim jadi gratis.`;}else if(code==="MEMBERBARU"){if(subtotal>=150000){checkoutDiscount=20000;checkoutFreeShipping=false;appliedVoucher=code;voucherMessage.textContent=`✓ Voucher ${code} berhasil digunakan. Hemat ${rupiah(checkoutDiscount)}.`;}else{checkoutDiscount=0;checkoutFreeShipping=false;appliedVoucher="";voucherMessage.textContent="Minimal belanja Rp150.000 untuk voucher ini.";voucherMessage.style.color="#d34b4b";}}else if(!code){checkoutDiscount=0;checkoutFreeShipping=false;appliedVoucher="";voucherMessage.textContent="Masukkan kode voucher terlebih dahulu.";}else{const sv=getSellerVouchers().find(v=>v.code===code);if(sv&&subtotal>=(sv.min||0)){if(sv.type==="ongkir"){checkoutDiscount=0;checkoutFreeShipping=true;}else if(sv.type==="persen"){checkoutDiscount=Math.round(subtotal*(sv.value/100));checkoutFreeShipping=false;}else{checkoutDiscount=Math.min(sv.value,subtotal);checkoutFreeShipping=false;}appliedVoucher=code;voucherMessage.textContent=`✓ Voucher ${code} berhasil digunakan.`+(checkoutFreeShipping?" Ongkos kirim jadi gratis.":` Hemat ${rupiah(checkoutDiscount)}.`);}else if(sv){checkoutDiscount=0;checkoutFreeShipping=false;appliedVoucher="";voucherMessage.textContent=`Minimal belanja ${rupiah(sv.min||0)} untuk voucher ini.`;voucherMessage.style.color="#d34b4b";}else{checkoutDiscount=0;checkoutFreeShipping=false;appliedVoucher="";voucherMessage.textContent="Kode voucher tidak ditemukan.";voucherMessage.style.color="#d34b4b";}}renderCheckout();});
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
            const total = Math.max(0, getCartSubtotal() + getShippingCost() - checkoutDiscount);
            const orderCode = `MAB-${Date.now().toString().slice(-8)}`;

            saveOrder({
                code: orderCode,
                date: Date.now(),
                items: cart.map(item => ({ ...item })),
                subtotal: getCartSubtotal(),
                shipping: getShippingCost(),
                discount: checkoutDiscount,
                total: total,
                payment: payment,
                voucher: appliedVoucher,
                address: { ...checkoutAddress },
                status: "diproses"
            });

            addNotification(
                currentLang === "en" ? "Order Created 🎉" : "Pesanan Dibuat 🎉",
                currentLang === "en" ? `Order ${orderCode} created successfully, total ${rupiah(total)}.` : `Pesanan ${orderCode} berhasil dibuat, total ${rupiah(total)}.`
            );

            const success = document.createElement("div");
            success.className = "order-success";
            success.innerHTML = `<div class="order-success-card"><div class="success-icon">✓</div><h2>Pesanan Berhasil Dibuat!</h2><p>Terima kasih. Pesanan kamu sudah tercatat di MAB-Store.</p><div class="order-code">${orderCode}</div><p>Total <b>${rupiah(total)}</b> • Pembayaran: <b>${payment}</b></p><button type="button" id="continueShoppingAfterOrder">Kembali Belanja</button><button type="button" id="viewOrdersAfterOrder">Lihat Pesanan Saya</button></div>`;
            document.body.appendChild(success);

            cart = [];
            saveCart();
            updateCart();
            closeCheckout();
            checkoutDiscount = 0;
            checkoutFreeShipping = false;
            appliedVoucher = "";

            placeOrderButton.disabled = false;
            placeOrderButton.classList.remove("loading");
            placeOrderButton.innerHTML = 'Buat Pesanan <span>→</span>';

            success.querySelector("#continueShoppingAfterOrder").addEventListener("click", () => {
                success.remove();
                showHome(true);
            });

            success.querySelector("#viewOrdersAfterOrder").addEventListener("click", () => {
                success.remove();
                showOrdersPage();
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
                currentLang === "en" ? "Voucher Claimed ✓" : "Voucher Berhasil Diklaim ✓";


            addNotification(
                currentLang === "en" ? "Voucher Claimed 🎟️" : "Voucher Diklaim 🎟️",
                currentLang === "en"
                    ? "MAB-Store voucher successfully claimed. Check product pages for more promo codes."
                    : "Voucher MAB-Store berhasil diklaim. Cek halaman produk untuk kode promo lainnya."
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

    const productId =
        Number(
            params.get(
                "product"
            )
        );

    const view =
        params.get(
            "view"
        );


    const product =
        productId
            ? products.find(item => item.id === productId)
            : null;


    if (product) {

        showProductDetail(
            product,
            false
        );

    }

    else if (
        category &&
        categoryInfo[category]
    ) {

        showCategory(
            category,
            false
        );

    }

    else if (view === "orders") {

        showOrdersPage(false);

    }

    else if (view === "store") {

        showStorePage(false);

    }

    else if (view === "search") {

        showSearchPage("", false);

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

        const productId =
            Number(
                params.get(
                    "product"
                )
            );

        const view =
            params.get(
                "view"
            );

        const product =
            productId
                ? products.find(item => item.id === productId)
                : null;


        if (product) {

            showProductDetail(
                product,
                false
            );

        }

        else if (
            category &&
            categoryInfo[category]
        ) {

            showCategory(
                category,
                false
            );

        }

        else if (view === "orders") {

            showOrdersPage(false);

        }

        else if (view === "store") {

            showStorePage(false);

        }

        else if (view === "search") {

            showSearchPage("", false);

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
   sellerButton.addEventListener("click", () => {
        openAuthModal();

        authTabs.forEach(t => t.classList.remove("active"));
        const registerTab = document.querySelector('[data-auth-tab="register"]');
        if (registerTab) registerTab.classList.add("active");

        loginForm.style.display = "none";
        registerForm.style.display = "grid";

        const sellerRadio = document.querySelector('input[name="registerRole"][value="seller"]');
        if (sellerRadio) sellerRadio.checked = true;
    });
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

    const isSeller = !!(currentUser && currentUser.role === "seller");
    const dashTop = document.getElementById("sellerDashboardTopButton");
    const dashMobile = document.getElementById("mobileSellerDashboardButton");
    if (dashTop) dashTop.hidden = !isSeller;
    if (dashMobile) dashMobile.hidden = !isSeller;
}

function openAuthModal() {
      if (authModal) authModal.style.display = "flex";
}

function closeAuth() {
     if (authModal) authModal.style.display = "none";
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

if (authModal) authModal.style.display = "none";
updateAccountUI();


/* =========================================================
   NOTIFIKASI (dipicu dari pesanan & promo)
   ========================================================= */

let notifications = JSON.parse(localStorage.getItem("mabstore_notifications") || "[]");

function saveNotifications() {
    localStorage.setItem("mabstore_notifications", JSON.stringify(notifications));
}

function timeAgo(timestamp) {
    const diff = Math.max(0, Date.now() - timestamp);
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "Baru saja";
    if (mins < 60) return `${mins} menit lalu`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours} jam lalu`;
    const days = Math.floor(hours / 24);
    return `${days} hari lalu`;
}

function addNotification(title, message) {
    notifications.unshift({
        id: Date.now() + Math.random(),
        title,
        message,
        time: Date.now(),
        read: false
    });

    notifications = notifications.slice(0, 30);
    saveNotifications();
    renderNotifications();
    showToast(`${title} — ${message}`);
}

function renderNotifications() {
    const list = document.getElementById("notifList");
    const count = document.getElementById("notifCount");
    if (!list || !count) return;

    const unread = notifications.filter(n => !n.read).length;
    count.hidden = unread === 0;
    count.textContent = unread;

    list.innerHTML = notifications.length
        ? notifications.map(n => `
            <div class="notif-item${n.read ? "" : " unread"}">
                <b>${n.title}</b>
                <p>${n.message}</p>
                <span>${timeAgo(n.time)}</span>
            </div>
        `).join("")
        : `<p class="notif-empty">Belum ada notifikasi.</p>`;
}

const notifButton = document.getElementById("notifButton");
const notifDropdown = document.getElementById("notifDropdown");
const clearNotifButton = document.getElementById("clearNotifButton");

if (notifButton) {
    notifButton.addEventListener("click", event => {
        event.stopPropagation();
        const willOpen = notifDropdown.hidden;
        notifDropdown.hidden = !willOpen;
        if (willOpen) {
            notifications.forEach(n => { n.read = true; });
            saveNotifications();
            renderNotifications();
        }
    });
}

if (clearNotifButton) {
    clearNotifButton.addEventListener("click", event => {
        event.stopPropagation();
        notifications = [];
        saveNotifications();
        renderNotifications();
    });
}

document.addEventListener("click", event => {
    if (notifDropdown && !notifDropdown.hidden && !notifDropdown.contains(event.target) && event.target !== notifButton) {
        notifDropdown.hidden = true;
    }
});


/* =========================================================
   PESANAN SAYA (order history + tracking simulasi)
   ========================================================= */

let orders = JSON.parse(localStorage.getItem("mabstore_orders") || "[]");
let activeOrderFilter = "semua";

const orderStatusLabels = {
    diproses: "Diproses",
    dikirim: "Dikirim",
    selesai: "Selesai"
};

const orderStatusSteps = ["dibuat", "diproses", "dikirim", "selesai"];

function saveOrders() {
    localStorage.setItem("mabstore_orders", JSON.stringify(orders));
}

function saveOrder(order) {
    orders.unshift(order);
    saveOrders();
}

function nextOrderStatus(status) {
    if (status === "diproses") return "dikirim";
    if (status === "dikirim") return "selesai";
    return "selesai";
}

function sellerAdvanceOrder(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order || order.status === "dibatalkan") return;
    order.status = nextOrderStatus(order.status);
    saveOrders();
    renderDashOrderList();
    renderDashboardStats();
    renderDashboardTodo();
    renderPrintResiList();
}

function sellerCancelOrder(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    if (!confirm("Batalkan / proses retur pesanan #" + orderId + "?")) return;
    order.status = "dibatalkan";
    saveOrders();
    renderDashOrderList();
    renderDashboardStats();
    renderDashboardTodo();
}

function renderDashOrderList() {
    const wrap = document.getElementById("dashOrderList");
    if (!wrap) return;
    const filtered = activeOrderFilter === "semua" ? orders : orders.filter(o => o.status === activeOrderFilter);

    if (!filtered.length) {
        wrap.innerHTML = `<p class="dash-empty-text">Belum ada pesanan pada kategori ini.</p>`;
        return;
    }

    const statusLabelSeller = { diproses: "🟡 Baru Diproses", dikirim: "🔵 Dikirim", selesai: "🟢 Selesai", dibatalkan: "🔴 Dibatalkan/Retur" };

    wrap.innerHTML = filtered.map(order => `
        <div class="dash-order-item">
            <div class="dash-order-item-head">
                <b>#${order.id}</b>
                <span class="dash-order-status">${statusLabelSeller[order.status] || order.status}</span>
            </div>
            <p class="dash-order-item-buyer">👤 ${order.address?.name || "Pembeli"} — ${new Date(order.date).toLocaleDateString("id-ID")}</p>
            <p class="dash-order-item-products">${order.items.slice(0, 2).map(i => i.name).join(", ")}${order.items.length > 2 ? ` +${order.items.length - 2} lainnya` : ""}</p>
            <p class="dash-order-item-total">Total: <b>${rupiah(order.total)}</b></p>
            <div class="dash-order-item-actions">
                ${order.status === "diproses" ? `<button type="button" data-order-advance="${order.id}">📦 Tandai Dikirim</button>` : ""}
                ${order.status === "dikirim" ? `<button type="button" data-order-advance="${order.id}">✅ Tandai Selesai</button>` : ""}
                ${order.status !== "selesai" && order.status !== "dibatalkan" ? `<button type="button" class="dash-order-cancel-btn" data-order-cancel="${order.id}">✕ Batalkan/Retur</button>` : ""}
            </div>
        </div>
    `).join("");
}

document.getElementById("dashOrderFilters")?.addEventListener("click", event => {
    const btn = event.target.closest("[data-order-filter]");
    if (!btn) return;
    activeOrderFilter = btn.dataset.orderFilter;
    document.querySelectorAll("[data-order-filter]").forEach(b => b.classList.toggle("active", b === btn));
    renderDashOrderList();
});

document.getElementById("dashOrderList")?.addEventListener("click", event => {
    const advBtn = event.target.closest("[data-order-advance]");
    if (advBtn) { sellerAdvanceOrder(advBtn.dataset.orderAdvance); return; }
    const cancelBtn = event.target.closest("[data-order-cancel]");
    if (cancelBtn) { sellerCancelOrder(cancelBtn.dataset.orderCancel); return; }
});

function renderDashboardTodo() {
    const wrap = document.getElementById("dashTodoList");
    if (!wrap) return;
    const newOrders = orders.filter(o => o.status === "diproses").length;
    const shippingOrders = orders.filter(o => o.status === "dikirim").length;
    const unreadChats = chatConversations.reduce((sum, c) => sum + (c.unread || 0), 0);

    const todos = [
        { icon: "🧾", text: `Pesanan baru menunggu diproses`, count: newOrders, tab: "pesanan" },
        { icon: "🚚", text: `Pesanan dalam pengiriman`, count: shippingOrders, tab: "pesanan" },
        { icon: "💬", text: `Pesan pembeli belum dibalas`, count: unreadChats, tab: "pelayanan" }
    ];

    wrap.innerHTML = todos.map(item => `
        <button type="button" class="dash-todo-item" data-todo-tab="${item.tab}">
            <span>${item.icon} ${item.text}</span>
            <b class="${item.count > 0 ? "dash-todo-count-active" : ""}">${item.count}</b>
        </button>
    `).join("");
}

document.getElementById("dashTodoList")?.addEventListener("click", event => {
    const btn = event.target.closest("[data-todo-tab]");
    if (!btn) return;
    document.querySelector(`[data-dash-tab="${btn.dataset.todoTab}"]`)?.click();
});


/* =========================================================
   PENGIRIMAN (dashboard seller)
   ========================================================= */

function getShippingSettings() {
    return JSON.parse(localStorage.getItem("mabstore_shipping_settings") || "null") || {
        couriers: ["JNE", "J&T Express", "SiCepat"],
        pickupAddress: ""
    };
}

function renderShippingSettings() {
    const settings = getShippingSettings();
    document.querySelectorAll("#dashShippingCouriers input[type=checkbox]").forEach(cb => {
        cb.checked = settings.couriers.includes(cb.value);
    });
    document.getElementById("dashPickupAddress").value = settings.pickupAddress || "";
    renderPrintResiList();
}

document.getElementById("dashShippingForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const couriers = Array.from(document.querySelectorAll("#dashShippingCouriers input:checked")).map(cb => cb.value);
    const pickupAddress = document.getElementById("dashPickupAddress").value.trim();
    localStorage.setItem("mabstore_shipping_settings", JSON.stringify({ couriers, pickupAddress }));
    alert("Pengaturan pengiriman disimpan.");
});

function renderPrintResiList() {
    const wrap = document.getElementById("dashPrintResiList");
    if (!wrap) return;
    const pending = orders.filter(o => o.status === "diproses");
    wrap.innerHTML = pending.length
        ? pending.map(o => `<div class="dash-print-resi-item"><input type="checkbox" checked data-resi-order="${o.id}"> #${o.id} — ${o.address?.name || "Pembeli"} (${o.items.length} produk)</div>`).join("")
        : `<p class="dash-empty-text">Tidak ada pesanan yang menunggu resi.</p>`;
}

document.getElementById("dashPrintResiBtn")?.addEventListener("click", () => {
    const checked = Array.from(document.querySelectorAll("[data-resi-order]:checked")).map(cb => cb.dataset.resiOrder);
    const toPrint = orders.filter(o => checked.includes(String(o.id)));
    if (!toPrint.length) { alert("Tidak ada resi yang dipilih."); return; }
    const win = window.open("", "_blank");
    win.document.write(`
        <html><head><title>Cetak Resi</title><style>
            body{font-family:sans-serif;padding:20px;} .resi{border:1px dashed #333;padding:14px;margin-bottom:14px;page-break-inside:avoid;}
            .resi b{font-size:16px;}
        </style></head><body>
        ${toPrint.map(o => `
            <div class="resi">
                <p><b>MAB-Official Store</b> → <b>${o.address?.name || "Pembeli"}</b></p>
                <p>No. Pesanan: #${o.id}</p>
                <p>Alamat: ${o.address?.address || "-"}</p>
                <p>Isi: ${o.items.map(i => `${i.name} x${i.quantity}`).join(", ")}</p>
                <p>Total: ${rupiah(o.total)}</p>
            </div>
        `).join("")}
        <script>window.print();<\/script>
        </body></html>
    `);
    win.document.close();
});


/* =========================================================
   PUSAT PROMOSI — voucher toko dinamis
   ========================================================= */

function getSellerVouchers() {
    return JSON.parse(localStorage.getItem("mabstore_seller_vouchers") || "[]");
}

function saveSellerVouchers(list) {
    localStorage.setItem("mabstore_seller_vouchers", JSON.stringify(list));
}

function renderVoucherList() {
    const wrap = document.getElementById("dashVoucherList");
    if (!wrap) return;
    const builtin = [
        { code: "MABHEMAT", type: "persen", value: 10, min: 0, builtin: true },
        { code: "ONGKIRGRATIS", type: "ongkir", value: 0, min: 0, builtin: true },
        { code: "MEMBERBARU", type: "nominal", value: 20000, min: 150000, builtin: true }
    ];
    const list = [...builtin, ...getSellerVouchers()];
    const typeLabel = { persen: v => `Diskon ${v.value}%`, nominal: v => `Potongan ${rupiah(v.value)}`, ongkir: () => "Gratis Ongkir" };

    wrap.innerHTML = list.map(v => `
        <div class="dash-voucher-item">
            <div>
                <b>${v.code}</b> — ${typeLabel[v.type](v)}
                ${v.min ? `<span class="dash-voucher-min"> (min. belanja ${rupiah(v.min)})</span>` : ""}
                ${v.builtin ? `<span class="dash-voucher-tag">bawaan</span>` : ""}
            </div>
            ${!v.builtin ? `<button type="button" data-delete-voucher="${v.code}">🗑️</button>` : ""}
        </div>
    `).join("");
}

document.getElementById("dashVoucherType")?.addEventListener("change", event => {
    document.getElementById("dashVoucherValueWrap").hidden = event.target.value === "ongkir";
});

document.getElementById("dashVoucherForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const code = document.getElementById("dashVoucherCode").value.trim().toUpperCase();
    const type = document.getElementById("dashVoucherType").value;
    const value = Number(document.getElementById("dashVoucherValue").value) || 0;
    const min = Number(document.getElementById("dashVoucherMin").value) || 0;
    if (!code) return;

    const list = getSellerVouchers();
    if (list.some(v => v.code === code)) { alert("Kode voucher sudah dipakai."); return; }
    list.push({ code, type, value, min });
    saveSellerVouchers(list);
    renderVoucherList();
    event.target.reset();
    document.getElementById("dashVoucherValueWrap").hidden = false;
});

document.getElementById("dashVoucherList")?.addEventListener("click", event => {
    const btn = event.target.closest("[data-delete-voucher]");
    if (!btn) return;
    saveSellerVouchers(getSellerVouchers().filter(v => v.code !== btn.dataset.deleteVoucher));
    renderVoucherList();
});


/* =========================================================
   KEUANGAN — saldo, rekening bank, pencairan dana
   ========================================================= */

const PLATFORM_FEE_RATE = 0.025;

function computeFinance() {
    const completed = orders.filter(o => o.status === "selesai");
    const grossRevenue = completed.reduce((sum, o) => sum + o.total, 0);
    const netRevenue = Math.round(grossRevenue * (1 - PLATFORM_FEE_RATE));
    const withdrawals = getWithdrawals();
    const totalWithdrawn = withdrawals.reduce((sum, w) => sum + w.amount, 0);
    const inShipping = orders.filter(o => o.status === "dikirim").reduce((sum, o) => sum + o.total, 0);
    return {
        available: Math.max(0, netRevenue - totalWithdrawn),
        pending: Math.round(inShipping * (1 - PLATFORM_FEE_RATE)),
        totalWithdrawn
    };
}

function getWithdrawals() {
    return JSON.parse(localStorage.getItem("mabstore_withdrawals") || "[]");
}

function saveWithdrawals(list) {
    localStorage.setItem("mabstore_withdrawals", JSON.stringify(list));
}

function getBankAccount() {
    return JSON.parse(localStorage.getItem("mabstore_bank_account") || "null") || { bank: "", number: "", holder: "" };
}

function renderFinance() {
    const finance = computeFinance();
    const grid = document.getElementById("dashFinanceStatGrid");
    if (grid) {
        grid.innerHTML = `
            <div class="dash-stat-card"><span class="dash-stat-label">Saldo Tersedia</span><b class="dash-stat-value">${rupiah(finance.available)}</b></div>
            <div class="dash-stat-card"><span class="dash-stat-label">Dalam Proses (Dikirim)</span><b class="dash-stat-value">${rupiah(finance.pending)}</b></div>
            <div class="dash-stat-card"><span class="dash-stat-label">Total Sudah Dicairkan</span><b class="dash-stat-value">${rupiah(finance.totalWithdrawn)}</b></div>
        `;
    }
    const bank = getBankAccount();
    document.getElementById("dashBankName").value = bank.bank || "";
    document.getElementById("dashBankNumber").value = bank.number || "";
    document.getElementById("dashBankHolder").value = bank.holder || "";
    renderWithdrawHistory();
}

document.getElementById("dashBankForm")?.addEventListener("submit", event => {
    event.preventDefault();
    localStorage.setItem("mabstore_bank_account", JSON.stringify({
        bank: document.getElementById("dashBankName").value.trim(),
        number: document.getElementById("dashBankNumber").value.trim(),
        holder: document.getElementById("dashBankHolder").value.trim()
    }));
    alert("Rekening bank disimpan.");
});

document.getElementById("dashWithdrawForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const amount = Number(document.getElementById("dashWithdrawAmount").value) || 0;
    const finance = computeFinance();
    const bank = getBankAccount();
    if (!bank.number) { alert("Simpan rekening bank terlebih dahulu."); return; }
    if (amount <= 0 || amount > finance.available) { alert("Jumlah penarikan melebihi saldo tersedia."); return; }

    const list = getWithdrawals();
    list.unshift({ id: "w" + Date.now(), amount, date: Date.now(), bank: bank.bank, status: "diproses" });
    saveWithdrawals(list);
    renderFinance();
    event.target.reset();
});

function renderWithdrawHistory() {
    const wrap = document.getElementById("dashWithdrawHistory");
    if (!wrap) return;
    const list = getWithdrawals();
    wrap.innerHTML = list.length
        ? list.map(w => `<div class="dash-withdraw-item"><span>${new Date(w.date).toLocaleDateString("id-ID")} — ${w.bank}</span><b>${rupiah(w.amount)}</b></div>`).join("")
        : `<p class="dash-empty-text">Belum ada riwayat pencairan.</p>`;
}


/* =========================================================
   PERKEMBANGAN PENJUAL
   ========================================================= */

function renderPerforma() {
    const completed = orders.filter(o => o.status === "selesai").length;
    const cancelled = orders.filter(o => o.status === "dibatalkan").length;
    const totalOrders = orders.length || 1;
    const completionRate = Math.round((completed / totalOrders) * 100);

    const grid = document.getElementById("dashPerformaStatGrid");
    if (grid) {
        grid.innerHTML = `
            <div class="dash-stat-card"><span class="dash-stat-label">Rating Toko</span><b class="dash-stat-value">4.9 ⭐</b></div>
            <div class="dash-stat-card"><span class="dash-stat-label">Tingkat Penyelesaian Pesanan</span><b class="dash-stat-value">${completionRate}%</b></div>
            <div class="dash-stat-card"><span class="dash-stat-label">Kecepatan Balas Chat</span><b class="dash-stat-value">&lt; 5 menit</b></div>
            <div class="dash-stat-card"><span class="dash-stat-label">Poin Penalti</span><b class="dash-stat-value">0</b></div>
        `;
    }

    const health = document.getElementById("dashPerformaHealth");
    if (health) {
        health.innerHTML = `
            <div class="dash-performa-row"><span>Pesanan Dibatalkan/Retur</span><b>${cancelled} dari ${orders.length}</b></div>
            <div class="dash-performa-row"><span>Status Toko</span><b style="color:#1c8a4a;">🟢 Toko Sehat — Sesuai Standar Layanan</b></div>
        `;
    }

    const achievements = document.getElementById("dashPerformaAchievements");
    if (achievements) {
        achievements.innerHTML = `
            <div class="dash-performa-badge">🏅 Respon Cepat</div>
            <div class="dash-performa-badge">📦 Pengiriman Tepat Waktu</div>
            <div class="dash-performa-badge">⭐ Rating Tinggi</div>
        `;
    }
}


/* =========================================================
   PELAYANAN PEMBELI — dashboard chat seller (balas manual asli)
   ========================================================= */

let activeDashChatConvId = null;

function renderDashChatUnreadBadge() {
    const badge = document.getElementById("dashChatUnreadBadge");
    if (!badge) return;
    const unread = chatConversations.reduce((sum, c) => sum + (c.unread || 0), 0);
    badge.hidden = unread === 0;
    badge.textContent = unread;
}

function renderDashChatConvList() {
    const wrap = document.getElementById("dashChatConvList");
    if (!wrap) return;
    if (!chatConversations.length) {
        wrap.innerHTML = `<p class="dash-empty-text">Belum ada percakapan.</p>`;
        return;
    }
    wrap.innerHTML = chatConversations.map(conv => {
        const last = conv.messages[conv.messages.length - 1];
        return `
            <button type="button" class="dash-chat-conv-item${conv.id === activeDashChatConvId ? " active" : ""}" data-dash-conv-id="${conv.id}">
                <span class="dash-chat-conv-avatar">${conv.avatar}</span>
                <span class="dash-chat-conv-info">
                    <b>${conv.storeName === "MAB-Official Store" ? "Pembeli (Percakapan Toko)" : conv.storeName}</b>
                    <span>${last ? (last.text || "[media]").slice(0, 30) : "Belum ada pesan"}</span>
                </span>
                ${conv.unread ? `<span class="dash-chat-conv-badge">${conv.unread}</span>` : ""}
            </button>
        `;
    }).join("");
}

function renderDashChatMessages() {
    const conv = chatConversations.find(c => c.id === activeDashChatConvId);
    const wrap = document.getElementById("dashChatMessages");
    if (!wrap || !conv) return;
    wrap.innerHTML = conv.messages.map(msg => {
        if (msg.type === "system") return `<div class="chat-bubble-row system"><div class="chat-bubble">${escapeHtml(msg.text)}</div></div>`;
        let inner = "";
        if (msg.type === "text") inner = `<div>${escapeHtml(msg.text)}</div>`;
        else if (msg.type === "image") inner = `<img class="chat-msg-image" src="${msg.mediaUrl}" alt="foto">`;
        else if (msg.type === "video") inner = `<video class="chat-msg-video" src="${msg.mediaUrl}" controls></video>`;
        else if (msg.type === "product") inner = `<div class="chat-product-card"><img src="${msg.product.image}" alt=""><div><b>${msg.product.name}</b><span>${rupiah(msg.product.price)}</span></div></div>${msg.text ? `<div style="margin-top:6px;">${escapeHtml(msg.text)}</div>` : ""}`;
        // Dari sudut pandang dashboard seller: pesan "me" (pembeli) tampil di kiri, pesan "seller" (kita) tampil di kanan.
        const rowClass = msg.from === "me" ? "seller-view-buyer" : "seller-view-mine";
        return `<div class="chat-bubble-row ${rowClass}"><div class="chat-bubble">${inner}<time>${formatChatTime(msg.time)}</time></div></div>`;
    }).join("");
    wrap.scrollTop = wrap.scrollHeight;
}

function openDashConversation(convId) {
    activeDashChatConvId = convId;
    const conv = chatConversations.find(c => c.id === convId);
    if (!conv) return;
    conv.unread = 0;
    saveChats();

    document.getElementById("dashChatEmpty").hidden = true;
    document.getElementById("dashChatActive").hidden = false;
    document.getElementById("dashChatPeerName").textContent = "Pembeli";

    document.querySelectorAll("#dashChatModeSwitch [data-chat-mode]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.chatMode === (conv.adminMode || "asli"));
    });

    renderDashChatMessages();
    renderDashChatConvList();
    renderDashChatUnreadBadge();
}

document.getElementById("dashChatConvList")?.addEventListener("click", event => {
    const btn = event.target.closest("[data-dash-conv-id]");
    if (!btn) return;
    openDashConversation(btn.dataset.dashConvId);
});

document.getElementById("dashChatModeSwitch")?.addEventListener("click", event => {
    const btn = event.target.closest("[data-chat-mode]");
    if (!btn || !activeDashChatConvId) return;
    const conv = chatConversations.find(c => c.id === activeDashChatConvId);
    if (!conv) return;
    conv.adminMode = btn.dataset.chatMode;
    saveChats();
    document.querySelectorAll("#dashChatModeSwitch [data-chat-mode]").forEach(b => b.classList.toggle("active", b === btn));
});

document.getElementById("dashChatReplyForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const input = document.getElementById("dashChatReplyInput");
    const text = input.value.trim();
    if (!text || !activeDashChatConvId) return;
    appendMessage(activeDashChatConvId, { from: "seller", type: "text", text });
    renderDashChatMessages();
    input.value = "";
});

function renderOrderTracking(order) {
    const currentIndex = orderStatusSteps.indexOf(order.status === "diproses" ? "diproses" : order.status);
    const stepLabels = t_dict.tracking[currentLang] || t_dict.tracking.id;

    return `
        <div class="order-tracking">
            ${orderStatusSteps.map((step, index) => `
                <div class="order-track-step${index <= currentIndex ? " done" : ""}">
                    <span class="order-track-dot">${index <= currentIndex ? "✓" : ""}</span>
                    <span class="order-track-label">${stepLabels[step]}</span>
                </div>
            `).join("")}
        </div>
    `;
}

function renderOrders() {
    const list = document.getElementById("ordersList");
    const empty = document.getElementById("ordersEmpty");
    if (!list || !empty) return;

    const statusLabels = t_dict.orderStatus[currentLang] || t_dict.orderStatus.id;
    const filtered = activeOrderFilter === "semua" ? orders : orders.filter(o => o.status === activeOrderFilter);

    if (!orders.length) {
        list.innerHTML = "";
        empty.hidden = false;
        return;
    }

    empty.hidden = true;

    list.innerHTML = filtered.length ? filtered.map(order => `
        <div class="order-card" data-order-code="${order.code}">
            <div class="order-card-header">
                <div>
                    <b>${order.code}</b>
                    <span>${new Date(order.date).toLocaleString(currentLang === "en" ? "en-US" : "id-ID")}</span>
                </div>
                <span class="order-status-badge status-${order.status}">${statusLabels[order.status] || order.status}</span>
            </div>

            <div class="order-card-items">
                ${order.items.slice(0, 3).map(item => `
                    <img src="${item.image}" alt="${productNameById(item.id, item.name)}">
                `).join("")}
                ${order.items.length > 3 ? `<span class="order-more-items">+${order.items.length - 3}</span>` : ""}
            </div>

            <p class="order-card-summary">${order.items.reduce((sum, i) => sum + i.quantity, 0)} ${t("items")} &nbsp;•&nbsp; ${t("total")} <b>${rupiah(order.total)}</b></p>

            ${renderOrderTracking(order)}

            <div class="order-card-actions">
                <button type="button" class="order-toggle-detail" data-order-toggle="${order.code}">${t("seeDetail")}</button>
                ${order.status !== "selesai" ? `<button type="button" class="order-simulate-button" data-order-advance="${order.code}">${t("updateStatus")}</button>` : ""}
                <button type="button" class="order-buy-again" data-order-buyagain="${order.code}">${t("buyAgain")}</button>
            </div>

            <div class="order-detail-panel" data-order-detail="${order.code}" hidden>
                ${order.items.map(item => `
                    <div class="order-detail-item">
                        <img src="${item.image}" alt="${productNameById(item.id, item.name)}">
                        <div>
                            <b>${productNameById(item.id, item.name)}</b>
                            ${item.variantLabel ? `<span>${item.variantLabel}</span>` : ""}
                            <span>${rupiah(item.price)} × ${item.quantity}</span>
                        </div>
                    </div>
                `).join("")}
                <p class="order-detail-address">📍 ${order.address?.name || "-"} — ${order.address?.address || "-"}</p>
                <p class="order-detail-payment">💳 ${t("payment")}: ${order.payment}${order.voucher ? ` &nbsp;•&nbsp; 🎟️ ${t("voucherLabel")}: ${order.voucher}` : ""}</p>
            </div>
        </div>
    `).join("") : `<p class="no-reviews">${t("orderNoMatch")}</p>`;
}

function showOrdersPage(updateUrl = true) {
    hideAllMainPages();

    if (ordersPage) { ordersPage.hidden = false; ordersPage.style.display = "block"; }

    renderOrders();
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (updateUrl) {
        const url = new URL(window.location.href);
        url.searchParams.set("view", "orders");
        history.pushState({ view: "orders" }, "", url);
    }
}

const ordersPage = document.getElementById("ordersPage");
const ordersNavButton = document.getElementById("ordersNavButton");
const backFromOrdersButton = document.getElementById("backFromOrdersButton");
const ordersEmptyShopButton = document.getElementById("ordersEmptyShopButton");

if (ordersNavButton) ordersNavButton.addEventListener("click", () => showOrdersPage());
if (backFromOrdersButton) backFromOrdersButton.addEventListener("click", () => showHome());
if (ordersEmptyShopButton) ordersEmptyShopButton.addEventListener("click", () => showHome());

document.querySelectorAll("[data-order-filter]").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll("[data-order-filter]").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        activeOrderFilter = tab.dataset.orderFilter;
        renderOrders();
    });
});

document.addEventListener("click", event => {
    const toggleBtn = event.target.closest("[data-order-toggle]");
    if (toggleBtn) {
        const panel = document.querySelector(`[data-order-detail="${toggleBtn.dataset.orderToggle}"]`);
        if (panel) {
            panel.hidden = !panel.hidden;
            toggleBtn.textContent = panel.hidden ? t("seeDetail") : t("hideDetail");
        }
        return;
    }

    const advanceBtn = event.target.closest("[data-order-advance]");
    if (advanceBtn) {
        const order = orders.find(o => o.code === advanceBtn.dataset.orderAdvance);
        if (order) {
            order.status = nextOrderStatus(order.status);
            saveOrders();
            renderOrders();
            addNotification(
                currentLang === "en" ? "Order Update 📦" : "Update Pesanan 📦",
                currentLang === "en"
                    ? `Order ${order.code} is now "${(t_dict.orderStatus.en)[order.status]}".`
                    : `Pesanan ${order.code} sekarang berstatus "${(t_dict.orderStatus.id)[order.status]}".`
            );
        }
        return;
    }

    const buyAgainBtn = event.target.closest("[data-order-buyagain]");
    if (buyAgainBtn) {
        const order = orders.find(o => o.code === buyAgainBtn.dataset.orderBuyagain);
        if (order) {
            order.items.forEach(item => {
                const product = products.find(p => p.id === item.id);
                if (product) addToCart(product, item.quantity, item.variant || null);
            });
            showToast("Semua barang dari pesanan ini ditambahkan ke keranjang.");
            openCart();
        }
    }
});


/* =========================================================
   TOKO / PENJUAL (simulasi)
   ========================================================= */

const storePage = document.getElementById("storePage");
const backFromStoreButton = document.getElementById("backFromStoreButton");
const storeFollowButton = document.getElementById("storeFollowButton");
const storeProducts = document.getElementById("storeProducts");

let followingStore = localStorage.getItem("mabstore_following") === "1";

function renderStorePage() {
    if (storeProducts) storeProducts.innerHTML = products.map(createProductCard).join("");
    const statProducts = document.getElementById("storeStatProducts");
    if (statProducts) statProducts.textContent = products.length;
    updateStoreFollowButton();
}

function updateStoreFollowButton() {
    if (!storeFollowButton) return;
    storeFollowButton.textContent = followingStore ? t("following") : t("followStore");
    storeFollowButton.classList.toggle("following", followingStore);

    const followers = document.getElementById("storeFollowers");
    if (followers) followers.textContent = followingStore ? "2.451" : "2.450";
}

function showStorePage(updateUrl = true) {
    hideAllMainPages();

    if (storePage) { storePage.hidden = false; storePage.style.display = "block"; }

    renderStorePage();
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (updateUrl) {
        const url = new URL(window.location.href);
        url.searchParams.set("view", "store");
        history.pushState({ view: "store" }, "", url);
    }
}

if (backFromStoreButton) backFromStoreButton.addEventListener("click", () => showHome());

if (storeFollowButton) {
    storeFollowButton.addEventListener("click", () => {
        followingStore = !followingStore;
        localStorage.setItem("mabstore_following", followingStore ? "1" : "0");
        updateStoreFollowButton();
        if (followingStore) addNotification(
            currentLang === "en" ? "Following Store 🏬" : "Mengikuti Toko 🏬",
            currentLang === "en" ? "You'll get the latest promo updates from MAB-Official Store." : "Kamu akan mendapat info promo terbaru dari MAB-Official Store."
        );
    });
}

document.addEventListener("click", event => {
    if (event.target.closest("#pdVisitStoreButton")) showStorePage();
});


/* =========================================================
   PENCARIAN & FILTER LANJUTAN (standalone, client-side)
   ========================================================= */

const searchPage = document.getElementById("searchPage");
const advancedSearchButton = document.getElementById("advancedSearchButton");
const backFromSearchButton = document.getElementById("backFromSearchButton");

function setupAdvancedSearchCategories() {
    const box = document.getElementById("advSearchCategories");
    if (!box) return;
    const categories = [...new Set(products.map(p => p.category))];
    const checkedValues = [...box.querySelectorAll(".adv-category-check:checked")].map(c => c.value);
    box.innerHTML = categories.map(cat => `
        <label><input type="checkbox" value="${cat}" class="adv-category-check" ${checkedValues.includes(cat) ? "checked" : ""}> ${categoryLabel(cat)}</label>
    `).join("");
}

function runAdvancedSearch() {
    const keyword = (document.getElementById("advSearchKeyword")?.value || "").trim().toLowerCase();
    const checkedCategories = [...document.querySelectorAll(".adv-category-check:checked")].map(c => c.value);
    const minPrice = Number(document.getElementById("advSearchMinPrice")?.value) || 0;
    const maxPrice = Number(document.getElementById("advSearchMaxPrice")?.value) || Infinity;
    const minRating = Number(document.querySelector('input[name="advRating"]:checked')?.value) || 0;
    const sortMode = document.getElementById("advSearchSort")?.value || "relevansi";

    let results = products.filter(p => {
        const matchKeyword = !keyword || p.name.toLowerCase().includes(keyword) || (p.keywords || "").includes(keyword);
        const matchCategory = !checkedCategories.length || checkedCategories.includes(p.category);
        const matchPrice = p.price >= minPrice && p.price <= maxPrice;
        const matchRating = p.rating >= minRating;
        return matchKeyword && matchCategory && matchPrice && matchRating;
    });

    if (sortMode === "harga-rendah") results.sort((a, b) => a.price - b.price);
    else if (sortMode === "harga-tinggi") results.sort((a, b) => b.price - a.price);
    else if (sortMode === "rating") results.sort((a, b) => b.rating - a.rating);
    else if (sortMode === "terlaris") results.sort((a, b) => b.sold - a.sold);

    const resultsBox = document.getElementById("advSearchResults");
    const countLabel = document.getElementById("advSearchCount");
    if (countLabel) countLabel.textContent = `${results.length} ${t("productsFound")}`;
    if (resultsBox) resultsBox.innerHTML = results.length ? results.map(createProductCard).join("") : `<p class="no-reviews">${t("noResultsFilter")}</p>`;
}

function showSearchPage(prefillKeyword = "", updateUrl = true) {
    hideAllMainPages();

    if (searchPage) { searchPage.hidden = false; searchPage.style.display = "block"; }

    const keywordInput = document.getElementById("advSearchKeyword");
    if (keywordInput) keywordInput.value = prefillKeyword;

    runAdvancedSearch();
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (updateUrl) {
        const url = new URL(window.location.href);
        url.searchParams.set("view", "search");
        history.pushState({ view: "search" }, "", url);
    }
}

setupAdvancedSearchCategories();

if (advancedSearchButton) {
    advancedSearchButton.addEventListener("click", () => showSearchPage(searchInput?.value || ""));
}

if (backFromSearchButton) backFromSearchButton.addEventListener("click", () => showHome());

["advSearchKeyword", "advSearchMinPrice", "advSearchMaxPrice", "advSearchSort"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", runAdvancedSearch);
});

document.addEventListener("change", event => {
    if (event.target.classList.contains("adv-category-check") || event.target.name === "advRating") {
        runAdvancedSearch();
    }
});

const advSearchReset = document.getElementById("advSearchReset");
if (advSearchReset) {
    advSearchReset.addEventListener("click", () => {
        document.getElementById("advSearchKeyword").value = "";
        document.getElementById("advSearchMinPrice").value = "";
        document.getElementById("advSearchMaxPrice").value = "";
        document.getElementById("advSearchSort").value = "relevansi";
        document.querySelectorAll(".adv-category-check").forEach(c => { c.checked = false; });
        const allRating = document.querySelector('input[name="advRating"][value="0"]');
        if (allRating) allRating.checked = true;
        runAdvancedSearch();
    });
}


/* =========================================================
   TERJEMAHAN TEKS STATIS (TreeWalker, tanpa perlu ubah HTML)
   ========================================================= */

const idToEnDictionary = {
    "Jadi Seller": "Become a Seller",
    "Bantuan": "Help",
    "Toko MAB-Store": "MAB-Store Shop",
    "Menu": "Menu",
    "Notifikasi": "Notifications",
    "Masuk": "Login",
    "Keluar": "Logout",
    "Hapus semua": "Clear all",
    "SELAMAT DATANG DI MAB-STORE": "WELCOME TO MAB-STORE",
    "Belanja Mudah.": "Easy Shopping.",
    "Harga Bersahabat.": "Friendly Prices.",
    "Temukan berbagai produk pilihan\n                        dengan harga terbaik.": "Discover a variety of curated products at the best prices.",
    "Belanja Sekarang": "Shop Now",
    "Kategori": "Category",
    "Elektronik": "Electronics",
    "Rumah": "Home",
    "Kecantikan": "Beauty",
    "Olahraga": "Sports",
    "Buku": "Books",
    "Aksesoris": "Accessories",
    "Lihat Semua →": "See All →",
    "Voucher MAB-Store": "MAB-Store Voucher",
    "Hemat lebih banyak pada pembelian berikutnya.": "Save more on your next purchase.",
    "Klaim Voucher": "Claim Voucher",
    "Produk Untukmu": "Products For You",
    "Terbaru": "Newest",
    "Terlaris": "Best Selling",
    "Harga Terendah": "Lowest Price",
    "⭐ Rating Tertinggi": "⭐ Highest Rating",
    "💎 Termahal": "💎 Most Expensive",
    "← Kembali ke Beranda": "← Back to Home",
    "KATEGORI MAB-STORE": "MAB-STORE CATEGORY",
    "Temukan produk pilihan\n                            dalam kategori ini.": "Find selected products in this category.",
    "Produk": "Products",
    "← Kembali": "← Back",
    "Beranda": "Home",
    "Pengiriman Cepat": "Fast Shipping",
    "Dari gudang MAB-Store": "From MAB-Store warehouse",
    "Pembayaran Aman": "Secure Payment",
    "Berbagai metode": "Various methods",
    "Garansi 7 Hari": "7-Day Warranty",
    "Barang tidak sesuai": "If item doesn't match",
    "✓ Produk Pilihan": "✓ Featured Product",
    "✓ Stok tersedia \u00a0•\u00a0 Siap dikirim": "✓ In stock \u00a0•\u00a0 Ready to ship",
    "🎟️ Voucher & Promo": "🎟️ Vouchers & Promos",
    "Pilih Varian": "Select Variant",
    "Jumlah": "Quantity",
    "🛒 Tambah ke Keranjang": "🛒 Add to Cart",
    "♡ Simpan ke Wishlist": "♡ Save to Wishlist",
    "⭐ 4.9 \u00a0•\u00a0 98% Ulasan Positif \u00a0•\u00a0 Jakarta Selatan": "⭐ 4.9 \u00a0•\u00a0 98% Positive Reviews \u00a0•\u00a0 South Jakarta",
    "🏬 Kunjungi Toko": "🏬 Visit Store",
    "💬 Chat": "💬 Chat",
    "Deskripsi": "Description",
    "Spesifikasi": "Specifications",
    "Ulasan": "Reviews",
    "⭐ Rating": "⭐ Rating",
    "🛍 Terjual": "🛍 Sold",
    "🔒 Aman": "🔒 Safe",
    "Transaksi": "Transaction",
    "Rating & Ulasan Pembeli": "Buyer Ratings & Reviews",
    "(0 ulasan)": "(0 reviews)",
    "Bagikan pendapatmu tentang produk ini": "Share your thoughts about this product",
    "📷 Tambah Foto / Video": "📷 Add Photo / Video",
    "Kirim Ulasan": "Submit Review",
    "Produk Serupa": "Similar Products",
    "Pesanan Saya": "My Orders",
    "Semua": "All",
    "Diproses": "Processing",
    "Dikirim": "Shipped",
    "Selesai": "Completed",
    "🧾 Kamu belum memiliki pesanan.": "🧾 You don't have any orders yet.",
    "Mulai Belanja": "Start Shopping",
    "Pengikut \u00a0•\u00a0 Jakarta Selatan": "Followers \u00a0•\u00a0 South Jakarta",
    "Bergabung sejak 2021 \u00a0•\u00a0 Respon cepat \u00a0•\u00a0 98% Ulasan Positif": "Joined since 2021 \u00a0•\u00a0 Fast response \u00a0•\u00a0 98% Positive Reviews",
    "+ Ikuti Toko": "+ Follow Store",
    "Rating Toko": "Store Rating",
    "Respon Chat": "Chat Response",
    "Waktu Balas": "Response Time",
    "Semua Produk Toko": "All Store Products",
    "Pencarian & Filter Lanjutan": "Advanced Search & Filter",
    "Kata Kunci": "Keyword",
    "Rentang Harga": "Price Range",
    "Rating Minimum": "Minimum Rating",
    "Semua Rating": "All Ratings",
    "4.5 ke atas": "4.5 and above",
    "4.0 ke atas": "4.0 and above",
    "3.0 ke atas": "3.0 and above",
    "Urutkan": "Sort By",
    "Relevansi": "Relevance",
    "Harga Tertinggi": "Highest Price",
    "Rating Tertinggi": "Highest Rating",
    "Reset Filter": "Reset Filter",
    "← Kembali ke Keranjang": "← Back to Cart",
    "1 Keranjang": "1 Cart",
    "2 Checkout": "2 Checkout",
    "3 Selesai": "3 Done",
    "Checkout": "Checkout",
    "Periksa kembali alamat, pengiriman, dan pembayaran sebelum membuat pesanan.": "Double-check your address, shipping, and payment before placing your order.",
    "Alamat Pengiriman": "Shipping Address",
    "Pesanan akan dikirim ke alamat berikut.": "Your order will be shipped to the address below.",
    "Ubah": "Change",
    "Batal": "Cancel",
    "Simpan Alamat": "Save Address",
    "Produk yang Dibeli": "Items Purchased",
    "Pengiriman": "Shipping",
    "Pilih layanan pengiriman yang kamu inginkan.": "Choose your preferred shipping service.",
    "Reguler": "Regular",
    "2–4 hari kerja": "2–4 business days",
    "Express": "Express",
    "1–2 hari kerja": "1–2 business days",
    "Same Day": "Same Day",
    "Tiba hari ini": "Arrives today",
    "Voucher": "Voucher",
    "Gunakan voucher untuk mendapatkan potongan harga.": "Use a voucher to get a discount.",
    "Pakai": "Apply",
    "Metode Pembayaran": "Payment Method",
    "Pilih metode pembayaran yang tersedia.": "Choose an available payment method.",
    "Scan dari aplikasi pembayaran": "Scan from your payment app",
    "Transfer Bank": "Bank Transfer",
    "Virtual Account bank pilihan": "Your chosen bank's virtual account",
    "Bayar saat barang diterima": "Pay when item is received",
    "Ringkasan Belanja": "Order Summary",
    "Total Produk": "Item Total",
    "Diskon Voucher": "Voucher Discount",
    "Total Pembayaran": "Total Payment",
    "Buat Pesanan": "Place Order",
    "🔒 Transaksi aman & data pembayaran terlindungi.": "🔒 Secure transaction & protected payment data.",
    "Wishlist Saya": "My Wishlist",
    "Belum ada produk di wishlist.": "No products in wishlist yet.",
    "Lanjut Belanja →": "Continue Shopping →",
    "Keranjang Saya": "My Cart",
    "Keranjang masih kosong.": "Your cart is empty.",
    "Total:": "Total:",
    "Marketplace sederhana untuk belajar\n                    membangun aplikasi e-commerce.": "A simple marketplace for learning to build e-commerce apps.",
    "Layanan": "Services",
    "Pembayaran": "Payment",
    "Tentang": "About",
    "Tentang MAB-Store": "About MAB-Store",
    "Karier": "Careers",
    "Kontak": "Contact",
    "Daftar": "Register",
    "Pembeli": "Buyer",
    "Penjual": "Seller"
};

const idToEnPlaceholders = {
    "Cari produk di MAB-Store...": "Search products on MAB-Store...",
    "Nama kamu": "Your name",
    "Tulis ulasan kamu di sini...": "Write your review here...",
    "Cari produk...": "Search products...",
    "Nama Penerima": "Recipient Name",
    "Nomor HP": "Phone Number",
    "Alamat lengkap (jalan, kecamatan, kota, kode pos)": "Full address (street, district, city, postal code)",
    "Masukkan kode voucher, contoh: MABHEMAT": "Enter voucher code, e.g. MABHEMAT",
    "Email": "Email",
    "Kata Sandi": "Password",
    "Nama Lengkap": "Full Name"
};

const enToIdDictionary = Object.fromEntries(Object.entries(idToEnDictionary).map(([id, en]) => [en, id]));
const enToIdPlaceholders = Object.fromEntries(Object.entries(idToEnPlaceholders).map(([id, en]) => [en, id]));

function translateStaticText(lang) {
    const dict = lang === "en" ? idToEnDictionary : enToIdDictionary;
    const placeholderDict = lang === "en" ? idToEnPlaceholders : enToIdPlaceholders;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) nodes.push(node);

    nodes.forEach(textNode => {
        const trimmed = textNode.nodeValue.trim();
        if (!trimmed) return;
        if (dict[trimmed] !== undefined) {
            textNode.nodeValue = textNode.nodeValue.replace(trimmed, dict[trimmed]);
        }
    });

    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(el => {
        const current = el.getAttribute("placeholder");
        if (placeholderDict[current] !== undefined) el.setAttribute("placeholder", placeholderDict[current]);
    });

    document.querySelectorAll("option").forEach(opt => {
        const trimmed = opt.textContent.trim();
        if (dict[trimmed] !== undefined) opt.textContent = dict[trimmed];
    });
}

function updateShippingLabels() {
    const reg = document.getElementById("shipCostReguler");
    const exp = document.getElementById("shipCostExpress");
    const same = document.getElementById("shipCostSameDay");
    if (reg) reg.textContent = rupiah(15000);
    if (exp) exp.textContent = rupiah(25000);
    if (same) same.textContent = rupiah(35000);
}

function refreshCurrentView() {
    renderFlashSale();
    renderHomeProducts();
    updateCart();
    renderWishlist();
    updateShippingLabels();
    setupAdvancedSearchCategories();

    if (categoryPage && !categoryPage.hidden && activeCategory) renderCategoryProducts();
    if (productPage && !productPage.hidden && selectedProduct) showProductDetail(selectedProduct, false);
    if (checkoutPage && !checkoutPage.hidden) renderCheckout();
    if (ordersPage && !ordersPage.hidden) renderOrders();
    if (storePage && !storePage.hidden) renderStorePage();
    if (searchPage && !searchPage.hidden) runAdvancedSearch();
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("mabstore_lang", lang);

    translateStaticText(lang);
    updateLangToggleButton();
    refreshCurrentView();
}

function updateLangToggleButton() {
    const btn = document.getElementById("langToggleButton");
    if (!btn) return;
    btn.textContent = currentLang === "en" ? "🇬🇧 EN" : "🇮🇩 ID";
    btn.title = currentLang === "en" ? "Switch to Indonesian" : "Ganti ke Bahasa Inggris";
}

const langToggleButton = document.getElementById("langToggleButton");
if (langToggleButton) {
    langToggleButton.addEventListener("click", () => {
        applyLanguage(currentLang === "en" ? "id" : "en");
    });
}


/* =========================================================
   HAMBURGER MENU (mobile)
   ========================================================= */

const hamburgerButton = document.getElementById("hamburgerButton");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuBackdrop = document.getElementById("mobileMenuBackdrop");
const closeMobileMenuButton = document.getElementById("closeMobileMenuButton");
const mobileMenuCategories = document.getElementById("mobileMenuCategories");
const mobileSellerButton = document.getElementById("mobileSellerButton");
const mobileHelpButton = document.getElementById("mobileHelpButton");
const mobileLangButton = document.getElementById("mobileLangButton");

function renderMobileMenuCategories() {
    if (!mobileMenuCategories) return;
    const categories = [...new Set(products.map(p => p.category))];
    mobileMenuCategories.innerHTML = categories.map(cat => `
        <button type="button" data-mobile-category="${cat}">${categoryLabel(cat)}</button>
    `).join("");
}

function updateMobileLangLabel() {
    const label = document.getElementById("mobileLangLabel");
    if (label) label.textContent = currentLang === "en" ? "Language: English" : "Bahasa: Indonesia";
}

function openMobileMenu() {
    renderMobileMenuCategories();
    updateMobileLangLabel();
    if (mobileMenu) mobileMenu.hidden = false;
    if (mobileMenuBackdrop) mobileMenuBackdrop.hidden = false;
    document.body.classList.add("modal-open");
}

function closeMobileMenu() {
    if (mobileMenu) mobileMenu.hidden = true;
    if (mobileMenuBackdrop) mobileMenuBackdrop.hidden = true;
    document.body.classList.remove("modal-open");
}

if (hamburgerButton) hamburgerButton.addEventListener("click", openMobileMenu);
if (closeMobileMenuButton) closeMobileMenuButton.addEventListener("click", closeMobileMenu);
if (mobileMenuBackdrop) mobileMenuBackdrop.addEventListener("click", closeMobileMenu);

if (mobileSellerButton) {
    mobileSellerButton.addEventListener("click", () => {
        closeMobileMenu();
        document.getElementById("sellerButton")?.click();
    });
}

if (mobileHelpButton) {
    mobileHelpButton.addEventListener("click", () => {
        closeMobileMenu();
        showToast(currentLang === "en" ? "Help center coming soon 🙌" : "Pusat bantuan segera hadir 🙌");
    });
}

if (mobileLangButton) {
    mobileLangButton.addEventListener("click", () => {
        applyLanguage(currentLang === "en" ? "id" : "en");
        updateMobileLangLabel();
    });
}

document.addEventListener("click", event => {
    const navBtn = event.target.closest("[data-mobile-nav]");
    if (navBtn) {
        closeMobileMenu();
        const target = navBtn.dataset.mobileNav;
        if (target === "home") showHome();
        else if (target === "chat") showChatPage();
        else if (target === "orders") showOrdersPage();
        else if (target === "wishlist") openWishlist();
        else if (target === "search") showSearchPage();
        else if (target === "store") showStorePage();
        return;
    }

    const catBtn = event.target.closest("[data-mobile-category]");
    if (catBtn) {
        closeMobileMenu();
        showCategory(catBtn.dataset.mobileCategory);
    }
});




/* =========================================================================
   FITUR BARU #1: CHAT WIDGET PENJUAL & PEMBELI
   (mengambang di atas halaman, dukung teks/foto/video/tag produk,
    + alih Admin Asli <-> Admin AI yang menjawab otomatis & akurat)
   ========================================================================= */

let chatConversations = JSON.parse(localStorage.getItem("mabstore_chats") || "null");
let activeChatConvId = null;
let chatTaggedProduct = null;

function seedDefaultChats() {
    const now = Date.now();
    return [
        {
            id: "conv-mab-official",
            storeName: "MAB-Official Store",
            avatar: "🏬",
            unread: 1,
            adminMode: "asli",
            contextProduct: null,
            messages: [
                {
                    id: "m1", from: "seller", type: "text",
                    text: "Halo! Terima kasih sudah mengunjungi MAB-Official Store 🙏 Ada yang bisa kami bantu?",
                    time: now - 1000 * 60 * 40
                }
            ]
        }
    ];
}

function loadChats() {
    if (!chatConversations || !Array.isArray(chatConversations) || !chatConversations.length) {
        chatConversations = seedDefaultChats();
        saveChats();
    }
    chatConversations.forEach(c => {
        if (!c.adminMode) c.adminMode = "asli";
        if (c.contextProduct === undefined) c.contextProduct = null;
    });
}

function saveChats() {
    localStorage.setItem("mabstore_chats", JSON.stringify(chatConversations));
}

function findOrCreateConversation(storeName) {
    let conv = chatConversations.find(c => c.storeName === storeName);
    if (!conv) {
        conv = {
            id: "conv-" + storeName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            storeName, avatar: "🏬", unread: 0, adminMode: "asli", contextProduct: null, messages: []
        };
        chatConversations.unshift(conv);
        saveChats();
    }
    return conv;
}

function formatChatTime(ts) {
    const d = new Date(ts);
    const now = new Date();
    const sameDay = d.toDateString() === now.toDateString();
    return sameDay
        ? d.toLocaleTimeString(currentLang === "en" ? "en-US" : "id-ID", { hour: "2-digit", minute: "2-digit" })
        : d.toLocaleDateString(currentLang === "en" ? "en-US" : "id-ID", { day: "2-digit", month: "short" });
}

function updateChatUnreadBadge() {
    const badge = document.getElementById("chatUnreadCount");
    if (!badge) return;
    const total = chatConversations.reduce((sum, c) => sum + (c.unread || 0), 0);
    if (total > 0) { badge.hidden = false; badge.textContent = total > 9 ? "9+" : String(total); }
    else badge.hidden = true;
}

function renderChatConvList() {
    const list = document.getElementById("chatConvList");
    if (!list) return;
    list.innerHTML = chatConversations.map(conv => {
        const last = conv.messages[conv.messages.length - 1];
        let preview = "Belum ada pesan";
        if (last) {
            if (last.type === "text") preview = last.text;
            else if (last.type === "image") preview = "📷 Foto";
            else if (last.type === "video") preview = "🎬 Video";
            else if (last.type === "product") preview = "🏷️ " + last.product.name;
            else if (last.type === "system") preview = last.text;
        }
        return `
            <button type="button" class="chat-conv-item${conv.id === activeChatConvId ? " active" : ""}" data-conv-id="${conv.id}">
                <div class="chat-conv-avatar">${conv.avatar}</div>
                <div class="chat-conv-meta">
                    <b>${conv.storeName}</b>
                    <span>${preview}</span>
                </div>
                <div class="chat-conv-side">
                    ${last ? `<time>${formatChatTime(last.time)}</time>` : ""}
                    ${conv.unread ? `<span class="chat-conv-unread">${conv.unread}</span>` : ""}
                </div>
            </button>
        `;
    }).join("");

    updateChatUnreadBadge();
}

function renderChatMessages() {
    const wrap = document.getElementById("chatMessages");
    const conv = chatConversations.find(c => c.id === activeChatConvId);
    if (!wrap || !conv) return;

    wrap.innerHTML = conv.messages.map(msg => {
        if (msg.type === "system") {
            return `<div class="chat-bubble-row system"><div class="chat-bubble">${escapeHtml(msg.text)}</div></div>`;
        }

        let inner = "";
        if (msg.type === "text") {
            inner = `<div>${escapeHtml(msg.text)}</div>`;
        } else if (msg.type === "image") {
            inner = `<img class="chat-msg-image" src="${msg.mediaUrl}" alt="foto">`;
        } else if (msg.type === "video") {
            inner = `<video class="chat-msg-video" src="${msg.mediaUrl}" controls></video>`;
        } else if (msg.type === "product") {
            inner = `
                <div class="chat-product-card" data-chat-product-id="${msg.product.id}">
                    <img src="${msg.product.image}" alt="">
                    <div>
                        <b>${msg.product.name}</b>
                        <span>${rupiah(msg.product.price)}</span>
                    </div>
                </div>
                ${msg.text ? `<div style="margin-top:6px;">${escapeHtml(msg.text)}</div>` : ""}
            `;
        }

        const rowClass = msg.from === "me" ? "me" : (msg.viaAI ? "ai" : "seller");
        return `
            <div class="chat-bubble-row ${rowClass}">
                <div class="chat-bubble">
                    ${inner}
                    <time>${formatChatTime(msg.time)}</time>
                </div>
            </div>
        `;
    }).join("");

    wrap.scrollTop = wrap.scrollHeight;
}

function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

function updateAdminSwitchUI(conv) {
    document.querySelectorAll(".chat-admin-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.adminMode === conv.adminMode);
    });
    const statusEl = document.getElementById("chatThreadStatus");
    const nameEl = document.getElementById("chatThreadName");
    const avatarEl = document.getElementById("chatThreadAvatar");
    if (conv.adminMode === "ai") {
        if (nameEl) nameEl.textContent = "Admin AI — " + conv.storeName;
        if (avatarEl) avatarEl.textContent = "🤖";
        if (statusEl) statusEl.textContent = "Selalu online • dibantu AI";
    } else if (conv.adminMode === "live") {
        if (nameEl) nameEl.textContent = conv.storeName;
        if (avatarEl) avatarEl.textContent = conv.avatar;
        if (statusEl) statusEl.textContent = "Dibalas manual oleh penjual";
    } else {
        if (nameEl) nameEl.textContent = conv.storeName;
        if (avatarEl) avatarEl.textContent = conv.avatar;
        if (statusEl) statusEl.textContent = "Online";
    }
}

function openConversation(convId) {
    activeChatConvId = convId;
    const conv = chatConversations.find(c => c.id === convId);
    if (!conv) return;
    conv.unread = 0;
    saveChats();

    document.getElementById("chatThreadEmpty").hidden = true;
    document.getElementById("chatThreadActive").hidden = false;
    document.querySelector(".chat-shell")?.classList.add("thread-open");

    updateAdminSwitchUI(conv);
    renderChatMessages();
    renderChatConvList();
}

function appendMessage(convId, msg) {
    const conv = chatConversations.find(c => c.id === convId);
    if (!conv) return null;
    msg.id = "m" + Date.now() + Math.random().toString(36).slice(2, 6);
    msg.time = Date.now();
    conv.messages.push(msg);
    saveChats();
    if (convId === activeChatConvId) renderChatMessages();
    renderChatConvList();
    return msg;
}

function simulateHumanAdminReply(convId, userMsg) {
    setTimeout(() => {
        const conv = chatConversations.find(c => c.id === convId);
        if (!conv || conv.adminMode !== "asli") return;
        let reply = "Baik, terima kasih infonya! Tim kami akan segera membalas 🙏";
        if (userMsg.type === "product") reply = `Untuk produk "${userMsg.product.name}" masih ready stock kak, silakan langsung checkout ya 😊`;
        else if (userMsg.type === "image") reply = "Foto sudah kami terima, akan segera kami cek ya kak 📷";
        else if (userMsg.type === "video") reply = "Video sudah kami terima, terima kasih kak 🎬";
        else if (/ongkir|ongkos|kirim/i.test(userMsg.text || "")) reply = "Ongkos kirim mengikuti kurir yang dipilih saat checkout ya kak 🚚";
        else if (/stok|ready|ada/i.test(userMsg.text || "")) reply = "Stok masih tersedia kak, silakan order 🙏";

        conv.messages.push({ id: "m" + Date.now(), from: "seller", type: "text", text: reply, time: Date.now() });
        if (convId !== activeChatConvId) conv.unread = (conv.unread || 0) + 1;
        saveChats();
        if (convId === activeChatConvId) renderChatMessages();
        renderChatConvList();
    }, 900 + Math.random() * 900);
}


/* ---------------------------------------------------------------------
   MESIN JAWABAN ADMIN AI — akurat berdasarkan data produk asli (nama,
   kategori, deskripsi, harga, varian, rating, terjual), bukan jawaban
   generik. Menjawab dengan bahasa sopan & menyesuaikan jenis pertanyaan.
   --------------------------------------------------------------------- */

function detectProductFromText(text) {
    const lower = text.toLowerCase();
    let best = null, bestScore = 0;
    products.forEach(p => {
        const nameWords = p.name.toLowerCase().split(/\s+/).filter(w => w.length > 2);
        let score = 0;
        nameWords.forEach(w => { if (lower.includes(w)) score++; });
        if (score > bestScore) { bestScore = score; best = p; }
    });
    return bestScore > 0 ? best : null;
}

function resolveAIContextProduct(conv, text) {
    const fromText = detectProductFromText(text);
    if (fromText) {
        conv.contextProduct = { id: fromText.id };
        saveChats();
        return fromText;
    }
    if (conv.contextProduct) {
        const found = products.find(p => p.id === conv.contextProduct.id);
        if (found) return found;
    }
    return null;
}

function describeVariants(product) {
    const entries = Object.entries(product.variants || {});
    if (!entries.length) return "Produk ini hanya tersedia dalam satu varian standar.";
    return entries.map(([label, values]) => `${label}: ${values.join(", ")}`).join(" | ");
}

function generateAIReply(userText, conv) {
    const text = (userText || "").toLowerCase().trim();
    const product = resolveAIContextProduct(conv, userText || "");
    const storeName = conv.storeName;

    const greet = /\b(halo|hai|hi|permisi|selamat (pagi|siang|sore|malam)|min|admin)\b/;
    const askPrice = /\b(harga|berapa (harga|duit|rupiah)|price|worth)\b/;
    const askStock = /\b(stok|ready|tersedia|ada (ga|gak|nggak|tidak)|masih ada)\b/;
    const askVariant = /\b(warna|varian|pilihan|tipe|opsi|model)\b/;
    const askSize = /\b(ukuran|size|muat|nomor sepatu)\b/;
    const askSpec = /\b(spek|spesifikasi|detail|fitur|bahan|material|kapasitas)\b/;
    const askShipping = /\b(ongkir|ongkos|kirim|pengiriman|sampai|estimasi|berapa hari)\b/;
    const askWarranty = /\b(garansi|warranty|rusak|resmi)\b/;
    const askPayment = /\b(bayar|pembayaran|cod|transfer|cicilan|kredit)\b/;
    const askReview = /\b(rating|ulasan|review|testimoni|terjual|laku)\b/;
    const askUsage = /\b(cara pakai|cara penggunaan|cara menggunakan|panduan|cara setting)\b/;
    const askRecommend = /\b(rekomendasi|bagus (ga|gak|nggak)|worth it|cocok (buat|untuk)|recommended)\b/;
    const thanks = /\b(terima kasih|makasih|thanks|thx)\b/;

    // Tidak ada produk yang teridentifikasi sama sekali
    if (!product) {
        if (greet.test(text)) {
            return `Halo, selamat datang di ${storeName} 🙏 Saya Admin AI yang siap membantu menjawab pertanyaan seputar produk kami secara otomatis dan akurat. Produk apa yang ingin kakak tanyakan? Kakak juga bisa tag produk lewat ikon 🏷️ di bawah supaya saya bisa jawab lebih detail.`;
        }
        if (thanks.test(text)) {
            return "Sama-sama, senang bisa membantu 🙏 Kalau ada pertanyaan lain seputar produk kami, jangan ragu untuk bertanya lagi ya.";
        }
        return `Mohon maaf, saya belum tahu produk mana yang kakak maksud 🙏 Bisa disebutkan nama produknya, atau tag langsung produknya lewat ikon 🏷️ di kolom chat supaya saya bisa berikan jawaban yang akurat sesuai spesifikasinya.`;
    }

    const productName = productNameById(product.id, product.name);
    const parts = [];

    if (greet.test(text) && text.length < 40) {
        parts.push(`Halo, terima kasih sudah menghubungi ${storeName} 🙏 Ada yang ingin ditanyakan seputar ${productName}?`);
    }

    if (askPrice.test(text)) {
        let priceInfo = `${productName} saat ini dibanderol seharga ${rupiah(product.price)}`;
        if (product.oldPrice && product.oldPrice > product.price) {
            const diskon = Math.round((1 - product.price / product.oldPrice) * 100);
            priceInfo += ` (harga normal ${rupiah(product.oldPrice)}, hemat ${diskon}%)`;
        }
        parts.push(priceInfo + ".");
    }

    if (askStock.test(text)) {
        parts.push(`Untuk stok, ${productName} saat ini tersedia dan siap dikirim ya kak. Total sudah ${product.sold || 0} terjual, jadi kualitasnya sudah teruji banyak pembeli.`);
    }

    if (askVariant.test(text) || askSize.test(text)) {
        const entries = Object.entries(product.variants || {});
        if (entries.length) {
            parts.push(`Varian yang tersedia untuk ${productName}: ${describeVariants(product)}. Kakak bisa pilih sesuai kebutuhan saat checkout.`);
        } else {
            parts.push(`${productName} tersedia dalam satu varian standar tanpa pilihan warna/ukuran tambahan.`);
        }
    }

    if (askSpec.test(text)) {
        parts.push(`Berikut detail ${productName} (kategori ${product.category}): ${product.descId || "deskripsi lengkap dapat dilihat di halaman produk."} ${Object.keys(product.variants || {}).length ? "Varian tersedia: " + describeVariants(product) + "." : ""}`);
    }

    if (askShipping.test(text)) {
        parts.push(`Untuk pengiriman, ${productName} akan dikemas rapi dan dikirim setelah pesanan dikonfirmasi. Estimasi tiba mengikuti kurir yang dipilih saat checkout (reguler 2-4 hari, ekspres 1-2 hari), dan kakak bisa pantau posisinya lewat menu "Lacak Pesanan" setelah status berubah menjadi Dikirim.`);
    }

    if (askWarranty.test(text)) {
        const isElektronik = /elektronik|gaming/i.test(product.category);
        parts.push(isElektronik
            ? `${productName} adalah produk resmi bergaransi toko selama 7 hari untuk kerusakan pabrik (dead on arrival). Jika ada kendala setelah barang diterima, silakan hubungi kami dengan menyertakan foto/video unboxing.`
            : `Untuk kategori ${product.category}, kami menjamin barang sesuai deskripsi saat diterima. Jika ada cacat produksi, bisa diajukan komplain maksimal 2x24 jam setelah barang diterima.`);
    }

    if (askPayment.test(text)) {
        parts.push("Pembayaran bisa melalui transfer bank, e-wallet, kartu kredit/debit, hingga COD (tergantung lokasi), semua bisa dipilih langsung di halaman checkout.");
    }

    if (askReview.test(text)) {
        parts.push(`${productName} memiliki rating ${product.rating || "4.8"} dari pembeli dan sudah terjual ${product.sold || 0}+ unit, jadi kualitasnya sudah terbukti di lapangan.`);
    }

    if (askUsage.test(text)) {
        parts.push(`Untuk cara penggunaan ${productName}, secara umum ikuti buku panduan/kemasan yang disertakan. Jika kakak butuh panduan spesifik (misalnya cara pairing, cara perawatan, atau cara setting awal), boleh disebutkan detailnya supaya saya bisa bantu jelaskan lebih spesifik.`);
    }

    if (askRecommend.test(text)) {
        parts.push(`${productName} cocok untuk kebutuhan sehari-hari di kategori ${product.category}, dengan rating ${product.rating || "4.8"} dan sudah ${product.sold || 0}+ terjual — jadi cukup direkomendasikan berdasarkan histori penjualan dan ulasan pembeli.`);
    }

    if (thanks.test(text)) {
        parts.push("Sama-sama kak, senang bisa membantu 🙏 Ada lagi yang ingin ditanyakan?");
    }

    if (!parts.length) {
        // Fallback cerdas: rangkum info penting produk agar tetap relevan & akurat
        parts.push(
            `Baik kak, mengenai ${productName}: ${product.descId || "produk ini tersedia di kategori " + product.category + "."} ` +
            `Harganya ${rupiah(product.price)}, rating ${product.rating || "4.8"}, dan sudah ${product.sold || 0}+ terjual. ` +
            `${Object.keys(product.variants || {}).length ? "Varian tersedia: " + describeVariants(product) + ". " : ""}` +
            `Kalau ada pertanyaan lebih spesifik (stok, ongkir, garansi, cara pakai, dsb) silakan tanyakan ya 🙏`
        );
    }

    return parts.join(" ");
}

function simulateAIReply(convId, userText) {
    const conv = chatConversations.find(c => c.id === convId);
    if (!conv || conv.adminMode !== "ai") return;

    const typingEl = document.getElementById("chatAiTyping");
    if (convId === activeChatConvId && typingEl) typingEl.hidden = false;

    const minDelay = 500 + Math.random() * 400;

    const finish = (replyText) => {
        setTimeout(() => {
            if (convId === activeChatConvId && typingEl) typingEl.hidden = true;
            conv.messages.push({ id: "m" + Date.now(), from: "seller", viaAI: true, type: "text", text: replyText, time: Date.now() });
            if (convId !== activeChatConvId) conv.unread = (conv.unread || 0) + 1;
            saveChats();
            if (convId === activeChatConvId) renderChatMessages();
            renderChatConvList();
        }, minDelay);
    };

    const llmConfig = getAiLlmConfig();
    if (llmConfig && llmConfig.enabled && llmConfig.apiKey) {
        const product = resolveAIContextProduct(conv, userText || "");
        const systemPrompt = buildProductSystemPrompt(product, conv.storeName);
        callExternalLLM(llmConfig, systemPrompt, userText || "(pembeli mengirim lampiran)")
            .then(text => finish(text && text.trim() ? text.trim() : generateAIReply(userText, conv)))
            .catch(err => {
                console.warn("Panggilan LLM eksternal gagal, fallback ke mesin logika:", err);
                finish(generateAIReply(userText, conv));
            });
    } else {
        finish(generateAIReply(userText, conv));
    }
}


/* ---------------------------------------------------------------------
   KONEKSI KE LLM EKSTERNAL SUNGGUHAN (Gemini / Claude / ChatGPT / DeepSeek
   / lainnya) — dikonfigurasi penjual di Dashboard > Admin AI (LLM).
   CATATAN JUJUR: karena situs ini statis (tanpa backend), key hanya
   tersimpan di localStorage PERANGKAT INI, jadi hanya berfungsi ketika
   yang chat memakai perangkat yang sama dengan tempat key disimpan.
   --------------------------------------------------------------------- */

const AI_LLM_STORAGE_KEY = "mabstore_ai_llm_config";

const AI_PROVIDER_DEFAULTS = {
    gemini: { label: "Google Gemini", defaultModel: "gemini-2.0-flash" },
    anthropic: { label: "Anthropic Claude", defaultModel: "claude-3-5-haiku-20241022" },
    openai: { label: "OpenAI ChatGPT", defaultModel: "gpt-4o-mini" },
    deepseek: { label: "DeepSeek", defaultModel: "deepseek-chat" },
    custom: { label: "Lainnya (OpenAI-compatible)", defaultModel: "" }
};

function getAiLlmConfig() {
    return JSON.parse(localStorage.getItem(AI_LLM_STORAGE_KEY) || "null");
}

function saveAiLlmConfig(config) {
    localStorage.setItem(AI_LLM_STORAGE_KEY, JSON.stringify(config));
}

function buildProductSystemPrompt(product, storeName) {
    let prompt = `Kamu adalah Admin AI toko "${storeName}" di marketplace MAB-Store. Jawab pertanyaan pembeli dengan sopan, ramah, singkat-padat, dan berbahasa Indonesia. Hanya gunakan informasi produk yang diberikan di bawah ini — jangan mengarang spesifikasi yang tidak disebutkan.`;

    if (product) {
        prompt += `\n\nData produk yang sedang ditanyakan:
- Nama: ${productNameById(product.id, product.name)}
- Kategori: ${product.category}
- Harga: ${rupiah(product.price)}${product.oldPrice ? ` (harga normal ${rupiah(product.oldPrice)})` : ""}
- Rating: ${product.rating || "4.8"} dari ${product.sold || 0}+ terjual
- Deskripsi: ${product.descId || "-"}
- Varian tersedia: ${describeVariants(product)}`;
    } else {
        prompt += `\n\nBelum ada produk spesifik yang ditandai dalam percakapan ini. Jika pembeli bertanya tentang produk tertentu, minta mereka menyebut nama produknya atau memakai tombol tag produk (🏷️).`;
    }

    return prompt;
}

function callExternalLLM(config, systemPrompt, userMessage) {
    const { provider, apiKey, model, customUrl } = config;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);

    let url, options;

    if (provider === "gemini") {
        const m = model || AI_PROVIDER_DEFAULTS.gemini.defaultModel;
        url = `https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${encodeURIComponent(apiKey)}`;
        options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ role: "user", parts: [{ text: systemPrompt + "\n\nPertanyaan pembeli: " + userMessage }] }] }),
            signal: controller.signal
        };
    } else if (provider === "anthropic") {
        url = "https://api.anthropic.com/v1/messages";
        options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey,
                "anthropic-version": "2023-06-01",
                "anthropic-dangerous-direct-browser-access": "true"
            },
            body: JSON.stringify({
                model: model || AI_PROVIDER_DEFAULTS.anthropic.defaultModel,
                max_tokens: 500,
                system: systemPrompt,
                messages: [{ role: "user", content: userMessage }]
            }),
            signal: controller.signal
        };
    } else if (provider === "openai" || provider === "deepseek" || provider === "custom") {
        const endpoints = { openai: "https://api.openai.com/v1/chat/completions", deepseek: "https://api.deepseek.com/chat/completions" };
        url = provider === "custom" ? customUrl : endpoints[provider];
        options = {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + apiKey },
            body: JSON.stringify({
                model: model || (provider === "openai" ? AI_PROVIDER_DEFAULTS.openai.defaultModel : AI_PROVIDER_DEFAULTS.deepseek.defaultModel),
                messages: [{ role: "system", content: systemPrompt }, { role: "user", content: userMessage }],
                max_tokens: 500
            }),
            signal: controller.signal
        };
    } else {
        return Promise.reject(new Error("Provider tidak dikenali"));
    }

    return fetch(url, options)
        .then(res => {
            clearTimeout(timeout);
            if (!res.ok) return res.text().then(t => { throw new Error(`HTTP ${res.status}: ${t.slice(0, 200)}`); });
            return res.json();
        })
        .then(data => {
            if (provider === "gemini") return data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
            if (provider === "anthropic") return data?.content?.[0]?.text || "";
            return data?.choices?.[0]?.message?.content || "";
        })
        .finally(() => clearTimeout(timeout));
}


function replyForUserMessage(convId, userMsg) {
    const conv = chatConversations.find(c => c.id === convId);
    if (!conv) return;
    if (conv.adminMode === "live") {
        // Mode balas manual: tidak ada auto-reply, menunggu penjual asli membalas dari Dashboard > Pelayanan Pembeli.
        conv.unread = (conv.unread || 0) + 1;
        saveChats();
        renderDashChatConvList();
        renderDashChatUnreadBadge();
        return;
    }
    if (conv.adminMode === "ai") {
        let text = userMsg.text || "";
        if (userMsg.type === "product") text = `Tanya tentang produk ${userMsg.product.name}. ${userMsg.text || ""}`;
        else if (userMsg.type === "image") text = "kirim foto";
        else if (userMsg.type === "video") text = "kirim video";
        simulateAIReply(convId, text);
    } else {
        simulateHumanAdminReply(convId, userMsg);
    }
}

function openChatWithStore(storeName, product) {
    loadChats();
    const conv = findOrCreateConversation(storeName);
    if (product) conv.contextProduct = { id: product.id };
    saveChats();
    openChatWidget();
    openConversation(conv.id);
    if (product) {
        chatTaggedProduct = { id: product.id, name: productNameById(product.id, product.name), image: product.image, price: product.price };
        renderChatProductPreview();
    }
}

function renderChatProductPreview() {
    const bar = document.getElementById("chatProductPreview");
    if (!bar) return;
    if (!chatTaggedProduct) { bar.hidden = true; return; }
    bar.hidden = false;
    document.getElementById("chatProductPreviewImg").src = chatTaggedProduct.image;
    document.getElementById("chatProductPreviewName").textContent = chatTaggedProduct.name;
    document.getElementById("chatProductPreviewPrice").textContent = rupiah(chatTaggedProduct.price);
}

function renderChatProductPicker(keyword = "") {
    const list = document.getElementById("chatProductPickerList");
    if (!list) return;
    const kw = keyword.trim().toLowerCase();
    const filtered = products.filter(p => !kw || p.name.toLowerCase().includes(kw) || (p.keywords || "").includes(kw));
    list.innerHTML = filtered.slice(0, 30).map(p => `
        <button type="button" class="chat-picker-item" data-pick-product="${p.id}">
            <img src="${p.image}" alt="">
            <div>
                <b>${productNameById(p.id, p.name)}</b>
                <span>${rupiah(p.price)}</span>
            </div>
        </button>
    `).join("");
}

/* Buka/tutup widget chat mengambang (bukan halaman penuh) */
function openChatWidget() {
    loadChats();
    const widget = document.getElementById("chatPage");
    const backdrop = document.getElementById("chatWidgetBackdrop");
    if (widget) { widget.hidden = false; }
    if (backdrop && window.innerWidth <= 780) backdrop.hidden = false;
    renderChatConvList();
}

function closeChatWidget() {
    const widget = document.getElementById("chatPage");
    const backdrop = document.getElementById("chatWidgetBackdrop");
    if (widget) widget.hidden = true;
    if (backdrop) backdrop.hidden = true;
}

// Kompatibilitas dengan pemanggilan lama (mis. mobile menu "chat")
function showChatPage() { openChatWidget(); }

const chatNavButton = document.getElementById("chatNavButton");
const backFromChatButton = document.getElementById("backFromChatButton");
const backToConvListButton = document.getElementById("backToConvListButton");
const chatInputForm = document.getElementById("chatInputForm");
const chatTextInput = document.getElementById("chatTextInput");
const chatImageInput = document.getElementById("chatImageInput");
const chatVideoInput = document.getElementById("chatVideoInput");

if (chatNavButton) chatNavButton.addEventListener("click", () => openChatWidget());
if (backFromChatButton) backFromChatButton.addEventListener("click", () => closeChatWidget());
document.getElementById("chatWidgetCloseInThread")?.addEventListener("click", () => closeChatWidget());
document.getElementById("chatWidgetBackdrop")?.addEventListener("click", () => closeChatWidget());
if (backToConvListButton) backToConvListButton.addEventListener("click", () => document.querySelector(".chat-shell")?.classList.remove("thread-open"));

document.addEventListener("click", event => {
    const convBtn = event.target.closest("[data-conv-id]");
    if (convBtn) { openConversation(convBtn.dataset.convId); return; }

    if (event.target.closest("#chatVisitStoreFromThread")) {
        closeChatWidget();
        showStorePage();
        return;
    }

    const chatProdCard = event.target.closest("[data-chat-product-id]");
    if (chatProdCard) {
        const product = products.find(p => p.id === Number(chatProdCard.dataset.chatProductId));
        if (product) { closeChatWidget(); showProductDetail(product); }
        return;
    }
});

document.getElementById("chatAdminSwitch")?.addEventListener("click", event => {
    const btn = event.target.closest("[data-admin-mode]");
    if (!btn || !activeChatConvId) return;
    const conv = chatConversations.find(c => c.id === activeChatConvId);
    if (!conv || conv.adminMode === btn.dataset.adminMode) return;

    conv.adminMode = btn.dataset.adminMode;
    saveChats();
    updateAdminSwitchUI(conv);

    const noticeText = conv.adminMode === "ai"
        ? "🤖 Kamu beralih bicara dengan Admin AI — akan menjawab otomatis seputar produk"
        : "👤 Kamu beralih bicara dengan Admin Asli — mohon tunggu balasan dari tim kami";
    conv.messages.push({ id: "m" + Date.now(), from: "system", type: "system", text: noticeText, time: Date.now() });
    saveChats();
    renderChatMessages();
});

if (chatInputForm) {
    chatInputForm.addEventListener("submit", event => {
        event.preventDefault();
        if (!activeChatConvId) return;
        const text = chatTextInput.value.trim();
        let sentMsg = null;

        if (chatTaggedProduct) {
            sentMsg = appendMessage(activeChatConvId, { from: "me", type: "product", product: chatTaggedProduct, text });
            chatTaggedProduct = null;
            renderChatProductPreview();
        } else if (text) {
            sentMsg = appendMessage(activeChatConvId, { from: "me", type: "text", text });
        } else {
            return;
        }

        replyForUserMessage(activeChatConvId, sentMsg);
        chatTextInput.value = "";
    });
}

document.getElementById("chatAttachImageBtn")?.addEventListener("click", () => chatImageInput?.click());
document.getElementById("chatAttachVideoBtn")?.addEventListener("click", () => chatVideoInput?.click());

if (chatImageInput) {
    chatImageInput.addEventListener("change", () => {
        const file = chatImageInput.files[0];
        if (!file || !activeChatConvId) return;
        const reader = new FileReader();
        reader.onload = () => {
            const msg = appendMessage(activeChatConvId, { from: "me", type: "image", mediaUrl: reader.result });
            replyForUserMessage(activeChatConvId, msg);
        };
        reader.readAsDataURL(file);
        chatImageInput.value = "";
    });
}

if (chatVideoInput) {
    chatVideoInput.addEventListener("change", () => {
        const file = chatVideoInput.files[0];
        if (!file || !activeChatConvId) return;
        if (file.size > 15 * 1024 * 1024) {
            showToast("Video terlalu besar untuk demo ini (maks 15MB).");
            chatVideoInput.value = "";
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            const msg = appendMessage(activeChatConvId, { from: "me", type: "video", mediaUrl: reader.result });
            replyForUserMessage(activeChatConvId, msg);
        };
        reader.readAsDataURL(file);
        chatVideoInput.value = "";
    });
}

document.getElementById("chatTagProductBtn")?.addEventListener("click", () => {
    document.getElementById("chatProductPicker").hidden = false;
    renderChatProductPicker();
    document.getElementById("chatProductPickerSearch").value = "";
});

document.querySelectorAll("[data-close-product-picker]").forEach(btn => {
    btn.addEventListener("click", () => { document.getElementById("chatProductPicker").hidden = true; });
});

document.getElementById("chatProductPickerSearch")?.addEventListener("input", event => {
    renderChatProductPicker(event.target.value);
});

document.getElementById("chatProductPickerList")?.addEventListener("click", event => {
    const btn = event.target.closest("[data-pick-product]");
    if (!btn) return;
    const product = products.find(p => p.id === Number(btn.dataset.pickProduct));
    if (product) {
        chatTaggedProduct = { id: product.id, name: productNameById(product.id, product.name), image: product.image, price: product.price };
        renderChatProductPreview();
        const conv = chatConversations.find(c => c.id === activeChatConvId);
        if (conv) { conv.contextProduct = { id: product.id }; saveChats(); }
    }
    document.getElementById("chatProductPicker").hidden = true;
});

document.getElementById("chatProductPreviewRemove")?.addEventListener("click", () => {
    chatTaggedProduct = null;
    renderChatProductPreview();
});



/* =========================================================================
   FITUR BARU #2: DASHBOARD PENJUAL LENGKAP
   ========================================================================= */

let sellerAds = JSON.parse(localStorage.getItem("mabstore_ads") || "[]");
let sellerStoreProfile = JSON.parse(localStorage.getItem("mabstore_seller_profile") || "null") || {
    name: "MAB-Official Store",
    desc: "Toko resmi MAB-Store — produk original dengan harga bersahabat.",
    location: "Jakarta Selatan",
    avatar: "🏬"
};
let sellerProductMedia = JSON.parse(localStorage.getItem("mabstore_product_media") || "{}");
let sellerBanner = JSON.parse(localStorage.getItem("mabstore_banner") || "null") || {
    title: "Belanja Mudah.<br>Harga Bersahabat.",
    subtitle: "Temukan berbagai produk pilihan dengan harga terbaik.",
    color: "#0f3d2e"
};

function saveSellerAds() { localStorage.setItem("mabstore_ads", JSON.stringify(sellerAds)); }
function saveSellerStoreProfile() { localStorage.setItem("mabstore_seller_profile", JSON.stringify(sellerStoreProfile)); }
function saveSellerProductMedia() { localStorage.setItem("mabstore_product_media", JSON.stringify(sellerProductMedia)); }
function saveSellerBanner() { localStorage.setItem("mabstore_banner", JSON.stringify(sellerBanner)); }

function getProductDisplayImage(product) {
    const media = sellerProductMedia[product.id];
    return (media && media.mainImage) ? media.mainImage : product.image;
}

function applyStoreProfileToUI() {
    const nameEls = [document.getElementById("storePageName"), document.getElementById("pdSellerName")];
    nameEls.forEach(el => { if (el) el.textContent = sellerStoreProfile.name; });

    const avatarEls = [document.getElementById("storePageAvatar"), document.getElementById("pdSellerAvatar")];
    avatarEls.forEach(el => {
        if (!el) return;
        if (sellerStoreProfile.avatar && sellerStoreProfile.avatar.startsWith("http")) {
            el.innerHTML = `<img src="${sellerStoreProfile.avatar}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;">`;
        } else {
            el.textContent = sellerStoreProfile.avatar || "🏬";
        }
    });

    const locEls = [document.getElementById("storePageLocation"), document.getElementById("pdSellerLocation")];
    locEls.forEach(el => { if (el) el.textContent = sellerStoreProfile.location; });

    const descEl = document.getElementById("storePageDesc");
    if (descEl) descEl.textContent = sellerStoreProfile.desc;
}

function applyBannerToUI() {
    const heroSection = document.getElementById("heroSection");
    const heroTitle = document.getElementById("heroTitle");
    const heroSubtitle = document.getElementById("heroSubtitle");
    if (heroTitle) heroTitle.innerHTML = sellerBanner.title;
    if (heroSubtitle) heroSubtitle.textContent = sellerBanner.subtitle;
    if (heroSection) heroSection.style.background = `linear-gradient(120deg, ${sellerBanner.color}, ${sellerBanner.color}cc)`;
}

function renderBannerPreview() {
    const prev = document.getElementById("dashBannerPreview");
    if (!prev) return;
    prev.style.background = sellerBanner.color;
    prev.innerHTML = `<h3>${sellerBanner.title.replace(/<br\s*\/?>/gi, " ")}</h3><p>${sellerBanner.subtitle}</p>`;
}

function getDashSeed() {
    let seed = JSON.parse(localStorage.getItem("mabstore_dash_seed") || "null");
    if (!seed) {
        seed = { traffic: Array.from({ length: 30 }, () => 40 + Math.round(Math.random() * 160)) };
        localStorage.setItem("mabstore_dash_seed", JSON.stringify(seed));
    }
    return seed;
}

function renderDashboardStats() {
    const grid = document.getElementById("dashStatGrid");
    if (!grid) return;
    const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
    const totalOrders = orders.length;
    const avgOrder = totalOrders ? Math.round(totalRevenue / totalOrders) : 0;
    const totalVisitors = getDashSeed().traffic.reduce((a, b) => a + b, 0);

    const stats = [
        { label: "Total Pendapatan", value: rupiah(totalRevenue), delta: "+12%", up: true },
        { label: "Total Pesanan", value: totalOrders, delta: "+8%", up: true },
        { label: "Rata-rata Nilai Pesanan", value: rupiah(avgOrder), delta: "+3%", up: true },
        { label: "Pengunjung Toko (30 hari)", value: totalVisitors.toLocaleString("id-ID"), delta: "-2%", up: false }
    ];

    grid.innerHTML = stats.map(s => `
        <div class="dash-stat-card">
            <span class="dash-stat-label">${s.label}</span>
            <b class="dash-stat-value">${s.value}</b>
            <span class="dash-stat-delta ${s.up ? "up" : "down"}">${s.delta}</span>
        </div>
    `).join("");
}

function renderDashboardSalesChart() {
    const wrap = document.getElementById("dashSalesChart");
    if (!wrap) return;
    const days = [];
    const dayLabels = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const dayTotal = orders
            .filter(o => new Date(o.date).toDateString() === d.toDateString())
            .reduce((sum, o) => sum + (o.total || 0), 0);
        days.push({ label: dayLabels[d.getDay()], value: dayTotal || Math.round(150000 + Math.random() * 400000) });
    }

    const max = Math.max(...days.map(d => d.value), 1);
    wrap.innerHTML = days.map(d => `
        <div class="dash-bar-col">
            <div class="dash-bar" style="height:${Math.max(6, (d.value / max) * 100)}%;" title="${rupiah(d.value)}"></div>
            <span class="dash-bar-label">${d.label}</span>
        </div>
    `).join("");
}

function renderDashboardTopProducts() {
    const wrap = document.getElementById("dashTopProducts");
    if (!wrap) return;
    const top = [...products].sort((a, b) => (b.sold || 0) - (a.sold || 0)).slice(0, 5);
    wrap.innerHTML = top.map(p => `
        <div class="dash-top-product-row">
            <img src="${getProductDisplayImage(p)}" alt="">
            <div>
                <b>${productNameById(p.id, p.name)}</b>
                <span>${p.sold || 0} terjual &nbsp;•&nbsp; ${rupiah(p.price)}</span>
            </div>
        </div>
    `).join("");
}

function renderDashboardTrafficChart() {
    const wrap = document.getElementById("dashTrafficChart");
    if (!wrap) return;
    const data = getDashSeed().traffic;
    const max = Math.max(...data);
    const w = 600, h = 140, stepX = w / (data.length - 1);
    const points = data.map((v, i) => `${(i * stepX).toFixed(1)},${(h - (v / max) * (h - 10) - 5).toFixed(1)}`).join(" ");

    wrap.innerHTML = `
        <svg viewBox="0 0 ${w} ${h}" width="100%" height="100%" preserveAspectRatio="none">
            <polyline points="${points}" fill="none" stroke="#16a34a" stroke-width="2.5" />
            <polygon points="0,${h} ${points} ${w},${h}" fill="#16a34a22" />
        </svg>
    `;
}

function renderDashboardAdsForm() {
    const select = document.getElementById("dashAdProduct");
    if (!select) return;
    select.innerHTML = products.map(p => `<option value="${p.id}">${productNameById(p.id, p.name)}</option>`).join("");
}

function renderDashboardAdsList() {
    const wrap = document.getElementById("dashAdsList");
    if (!wrap) return;
    if (!sellerAds.length) { wrap.innerHTML = `<p class="no-reviews">Belum ada iklan yang berjalan.</p>`; return; }

    wrap.innerHTML = sellerAds.map(ad => `
        <div class="dash-ad-row">
            <img src="${ad.productImage}" alt="">
            <div class="dash-ad-info">
                <b>${ad.productName}</b>
                <span>Anggaran ${rupiah(ad.budget)}/hari &nbsp;•&nbsp; ${ad.duration} hari &nbsp;•&nbsp; 👁️ ${ad.impressions.toLocaleString("id-ID")} dilihat &nbsp;•&nbsp; 🖱️ ${ad.clicks} klik</span>
            </div>
            <span class="dash-ad-status">${ad.status}</span>
            ${ad.status === "aktif" ? `<button type="button" class="dash-ad-stop" data-stop-ad="${ad.id}">Hentikan</button>` : ""}
        </div>
    `).join("");
}

function populateProductMediaSelect() {
    const select = document.getElementById("dashProductSelect");
    if (!select) return;
    select.innerHTML = products.map(p => `<option value="${p.id}">${productNameById(p.id, p.name)}</option>`).join("");
    loadProductMediaEditor(Number(select.value));
}

function loadProductMediaEditor(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const media = sellerProductMedia[productId] || { mainImage: product.image, gallery: [], video: "" };

    document.getElementById("dashProductMainImg").src = media.mainImage || product.image;
    document.getElementById("dashProductMainImgInput").value = media.mainImage || product.image;
    document.getElementById("dashProductVideoInput").value = media.video || "";
    renderGalleryList(media.gallery || []);
}

function renderGalleryList(gallery) {
    const wrap = document.getElementById("dashProductGalleryList");
    if (!wrap) return;
    wrap.innerHTML = gallery.map((url, i) => `
        <div class="dash-gallery-item">
            <img src="${url}" alt="">
            <button type="button" data-remove-gallery="${i}">✕</button>
        </div>
    `).join("");
}

function renderDashboardAll() {
    renderDashboardStats();
    renderDashboardTodo();
    renderDashboardSalesChart();
    renderDashboardTopProducts();
    renderDashboardTrafficChart();
    renderDashboardAdsForm();
    renderDashboardAdsList();
    renderDashOrderList();
    renderShippingSettings();
    renderVoucherList();
    renderFinance();
    renderPerforma();
    renderDashChatConvList();
    renderDashChatUnreadBadge();

    document.getElementById("dashStoreName").value = sellerStoreProfile.name;
    document.getElementById("dashStoreDesc").value = sellerStoreProfile.desc;
    document.getElementById("dashStoreLocation").value = sellerStoreProfile.location;
    document.getElementById("dashStoreAvatar").value = sellerStoreProfile.avatar;

    populateProductMediaSelect();

    document.getElementById("dashBannerTitle").value = sellerBanner.title.replace(/<br\s*\/?>/gi, " ");
    document.getElementById("dashBannerSubtitle").value = sellerBanner.subtitle;
    document.getElementById("dashBannerColor").value = sellerBanner.color;
    renderBannerPreview();

    renderAiLlmSettings();
}

function renderAiLlmSettings() {
    const config = getAiLlmConfig() || { provider: "gemini", model: "", apiKey: "", customUrl: "", enabled: false };

    document.getElementById("dashAiProvider").value = config.provider || "gemini";
    document.getElementById("dashAiModel").value = config.model || "";
    document.getElementById("dashAiApiKey").value = config.apiKey || "";
    document.getElementById("dashAiCustomUrl").value = config.customUrl || "";
    document.getElementById("dashAiEnableToggle").checked = !!config.enabled;
    document.getElementById("dashAiCustomUrlWrap").hidden = config.provider !== "custom";
    document.getElementById("dashAiModel").placeholder = "Otomatis: " + (AI_PROVIDER_DEFAULTS[config.provider || "gemini"].defaultModel || "(isi manual)");

    renderAiLlmStatusBox(config);
}

function renderAiLlmStatusBox(config) {
    const box = document.getElementById("dashAiStatusBox");
    if (!box) return;
    const providerLabel = AI_PROVIDER_DEFAULTS[config.provider]?.label || "-";
    const maskedKey = config.apiKey ? config.apiKey.slice(0, 4) + "••••••••" + config.apiKey.slice(-4) : "(belum diisi)";

    box.innerHTML = `
        Status Admin AI eksternal: <b class="${config.enabled && config.apiKey ? "on" : "off"}">${config.enabled && config.apiKey ? "AKTIF ✅" : "NONAKTIF"}</b><br>
        Provider: <b>${providerLabel}</b><br>
        Model: <b>${config.model || AI_PROVIDER_DEFAULTS[config.provider]?.defaultModel || "-"}</b><br>
        API Key: <code>${maskedKey}</code><br>
        <span style="color:var(--muted);font-size:12px;">*Hanya aktif untuk chat yang dibuka dari perangkat/browser ini. Kalau nonaktif atau key tidak valid, Admin AI otomatis memakai mesin logika bawaan.</span>
    `;
}

document.getElementById("dashAiProvider")?.addEventListener("change", event => {
    const provider = event.target.value;
    document.getElementById("dashAiCustomUrlWrap").hidden = provider !== "custom";
    document.getElementById("dashAiModel").placeholder = "Otomatis: " + (AI_PROVIDER_DEFAULTS[provider].defaultModel || "(isi manual)");
});

document.getElementById("dashAiKeyToggle")?.addEventListener("click", () => {
    const input = document.getElementById("dashAiApiKey");
    input.type = input.type === "password" ? "text" : "password";
});

function readAiLlmFormValues() {
    return {
        provider: document.getElementById("dashAiProvider").value,
        model: document.getElementById("dashAiModel").value.trim(),
        apiKey: document.getElementById("dashAiApiKey").value.trim(),
        customUrl: document.getElementById("dashAiCustomUrl").value.trim(),
        enabled: document.getElementById("dashAiEnableToggle").checked
    };
}

document.getElementById("dashAiTestBtn")?.addEventListener("click", () => {
    const config = readAiLlmFormValues();
    const resultBox = document.getElementById("dashAiTestResult");
    if (!config.apiKey) { showToast("Isi API key terlebih dahulu."); return; }
    if (config.provider === "custom" && !config.customUrl) { showToast("Isi Base URL untuk provider custom."); return; }

    resultBox.hidden = false;
    resultBox.className = "dash-ai-test-result loading";
    resultBox.textContent = "🔄 Menghubungi provider...";

    callExternalLLM(config, "Kamu adalah asisten uji koneksi. Balas singkat saja.", "Halo, ini tes koneksi. Balas dengan satu kalimat pendek konfirmasi.")
        .then(text => {
            resultBox.className = "dash-ai-test-result ok";
            resultBox.textContent = "✅ Koneksi berhasil! Balasan model: \u201c" + (text || "(kosong)").slice(0, 160) + "\u201d";
        })
        .catch(err => {
            resultBox.className = "dash-ai-test-result error";
            resultBox.textContent = "❌ Gagal terhubung: " + err.message + " — periksa API key, model, atau kemungkinan provider memblokir panggilan langsung dari browser (CORS).";
        });
});

document.getElementById("dashAiLlmForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const config = readAiLlmFormValues();
    saveAiLlmConfig(config);
    renderAiLlmStatusBox(config);
    showToast("Pengaturan Admin AI (LLM) tersimpan di perangkat ini ✅");
});

function showSellerDashboard(updateUrl = true) {
    hideAllMainPages();
    const page = document.getElementById("sellerDashboardPage");
    if (page) { page.hidden = false; page.style.display = "block"; }
    renderDashboardAll();
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (updateUrl) {
        const url = new URL(window.location.href);
        url.searchParams.set("view", "seller-dashboard");
        history.pushState({ view: "seller-dashboard" }, "", url);
    }
}

document.getElementById("sellerDashboardTopButton")?.addEventListener("click", () => showSellerDashboard());
document.getElementById("mobileSellerDashboardButton")?.addEventListener("click", () => { closeMobileMenu(); showSellerDashboard(); });
document.getElementById("backFromDashboardButton")?.addEventListener("click", () => showHome());

document.getElementById("dashboardTabs")?.addEventListener("click", event => {
    const tab = event.target.closest("[data-dash-tab]");
    if (!tab) return;
    document.querySelectorAll(".dashboard-tab").forEach(b => b.classList.remove("active"));
    tab.classList.add("active");
    const key = tab.dataset.dashTab;
    document.querySelectorAll("[data-dash-panel]").forEach(panel => {
        panel.hidden = panel.dataset.dashPanel !== key;
    });
});

document.getElementById("dashAdForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const productId = Number(document.getElementById("dashAdProduct").value);
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const budget = Number(document.getElementById("dashAdBudget").value) || 10000;
    const duration = Number(document.getElementById("dashAdDuration").value);

    sellerAds.unshift({
        id: "ad" + Date.now(),
        productId,
        productName: productNameById(product.id, product.name),
        productImage: getProductDisplayImage(product),
        budget, duration,
        status: "aktif",
        impressions: Math.round(budget / 50 * duration * (0.8 + Math.random() * 0.5)),
        clicks: Math.round(budget / 2000 * duration * (0.6 + Math.random() * 0.6))
    });
    saveSellerAds();
    renderDashboardAdsList();
    showToast("Iklan berhasil dijalankan 🚀");
    event.target.reset();
});

document.getElementById("dashAdsList")?.addEventListener("click", event => {
    const btn = event.target.closest("[data-stop-ad]");
    if (!btn) return;
    const ad = sellerAds.find(a => a.id === btn.dataset.stopAd);
    if (ad) { ad.status = "dihentikan"; saveSellerAds(); renderDashboardAdsList(); }
});

document.getElementById("dashStoreForm")?.addEventListener("submit", event => {
    event.preventDefault();
    sellerStoreProfile = {
        name: document.getElementById("dashStoreName").value.trim() || sellerStoreProfile.name,
        desc: document.getElementById("dashStoreDesc").value.trim(),
        location: document.getElementById("dashStoreLocation").value.trim() || sellerStoreProfile.location,
        avatar: document.getElementById("dashStoreAvatar").value.trim() || "🏬"
    };
    saveSellerStoreProfile();
    applyStoreProfileToUI();
    showToast("Profil toko berhasil diperbarui ✅");
});

document.getElementById("dashProductSelect")?.addEventListener("change", event => {
    loadProductMediaEditor(Number(event.target.value));
});

document.getElementById("dashProductMainImgInput")?.addEventListener("input", event => {
    document.getElementById("dashProductMainImg").src = event.target.value;
});

document.getElementById("dashGalleryAddBtn")?.addEventListener("click", () => {
    const input = document.getElementById("dashGalleryUrlInput");
    const url = input.value.trim();
    if (!url) return;
    const productId = Number(document.getElementById("dashProductSelect").value);
    const media = sellerProductMedia[productId] || { mainImage: "", gallery: [], video: "" };
    media.gallery = media.gallery || [];
    media.gallery.push(url);
    sellerProductMedia[productId] = media;
    renderGalleryList(media.gallery);
    input.value = "";
});

document.getElementById("dashProductGalleryList")?.addEventListener("click", event => {
    const btn = event.target.closest("[data-remove-gallery]");
    if (!btn) return;
    const productId = Number(document.getElementById("dashProductSelect").value);
    const media = sellerProductMedia[productId];
    if (!media) return;
    media.gallery.splice(Number(btn.dataset.removeGallery), 1);
    renderGalleryList(media.gallery);
});

document.getElementById("dashProductMediaSave")?.addEventListener("click", () => {
    const productId = Number(document.getElementById("dashProductSelect").value);
    const existing = sellerProductMedia[productId] || { gallery: [] };
    sellerProductMedia[productId] = {
        mainImage: document.getElementById("dashProductMainImgInput").value.trim(),
        gallery: existing.gallery || [],
        video: document.getElementById("dashProductVideoInput").value.trim()
    };
    saveSellerProductMedia();
    renderDashboardTopProducts();
    showToast("Media produk berhasil disimpan 🖼️");
});

document.getElementById("dashBannerTitle")?.addEventListener("input", () => renderBannerPreview());
document.getElementById("dashBannerSubtitle")?.addEventListener("input", () => renderBannerPreview());
document.getElementById("dashBannerColor")?.addEventListener("input", () => renderBannerPreview());

document.getElementById("dashBannerSave")?.addEventListener("click", () => {
    sellerBanner = {
        title: document.getElementById("dashBannerTitle").value.trim() || "Belanja Mudah.",
        subtitle: document.getElementById("dashBannerSubtitle").value.trim(),
        color: document.getElementById("dashBannerColor").value
    };
    saveSellerBanner();
    applyBannerToUI();
    showToast("Banner beranda berhasil diperbarui 🎨");
});


/* =========================================================================
   FITUR BARU #3: PELACAKAN PESANAN REAL-TIME (simulasi rute peta)
   ========================================================================= */

let trackingTimer = null;
let trackingRouteProgress = 0;
const trackingCourierNames = ["Budi Kurir", "Andi Ekspedisi", "Siti Antar", "Rudi Cepat"];

const trackingRoutePoints = [
    { x: 40, y: 210 },
    { x: 90, y: 150 },
    { x: 150, y: 165 },
    { x: 210, y: 95 },
    { x: 270, y: 110 },
    { x: 330, y: 55 },
    { x: 365, y: 40 }
];

function pointOnRoute(progress) {
    const totalSegments = trackingRoutePoints.length - 1;
    const pos = Math.min(progress, 0.999) * totalSegments;
    const segIndex = Math.floor(pos);
    const segT = pos - segIndex;
    const a = trackingRoutePoints[segIndex];
    const b = trackingRoutePoints[segIndex + 1] || a;
    return { x: a.x + (b.x - a.x) * segT, y: a.y + (b.y - a.y) * segT };
}

function drawTrackingMap(progress) {
    const svg = document.getElementById("trackingMapSvg");
    if (!svg) return;
    const pathD = "M " + trackingRoutePoints.map(p => `${p.x},${p.y}`).join(" L ");
    const cur = pointOnRoute(progress);
    const start = trackingRoutePoints[0];
    const end = trackingRoutePoints[trackingRoutePoints.length - 1];

    svg.innerHTML = `
        <rect x="0" y="0" width="400" height="260" fill="#e7efe9"></rect>
        ${Array.from({ length: 9 }).map((_, i) => `<line x1="${i * 45}" y1="0" x2="${i * 45}" y2="260" stroke="#d6e3da" stroke-width="1"></line>`).join("")}
        ${Array.from({ length: 7 }).map((_, i) => `<line x1="0" y1="${i * 40}" x2="400" y2="${i * 40}" stroke="#d6e3da" stroke-width="1"></line>`).join("")}
        <path d="${pathD}" fill="none" stroke="#0f3d2e" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.25"></path>
        <path d="${pathD}" fill="none" stroke="#16a34a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
              stroke-dasharray="1000" stroke-dashoffset="${1000 - progress * 1000}"></path>
        <circle cx="${start.x}" cy="${start.y}" r="7" fill="#0f3d2e"></circle>
        <text x="${start.x + 10}" y="${start.y + 4}" font-size="11" fill="#0f3d2e" font-weight="700">Gudang</text>
        <circle cx="${end.x}" cy="${end.y}" r="7" fill="#e63946"></circle>
        <text x="${end.x - 46}" y="${end.y - 10}" font-size="11" fill="#e63946" font-weight="700">Tujuan</text>
        <text x="${cur.x - 10}" y="${cur.y - 14}" font-size="18">🛵</text>
        <circle cx="${cur.x}" cy="${cur.y}" r="5" fill="#0f3d2e"></circle>
    `;
}

function trackingStatusToProgress(status) {
    if (status === "diproses") return 0.08;
    if (status === "dikirim") return null;
    if (status === "selesai") return 1;
    return 0;
}

function renderTrackingTimeline(order, currentEtaMinutes) {
    const wrap = document.getElementById("trackingTimeline");
    if (!wrap) return;
    const stepLabels = t_dict.tracking[currentLang] || t_dict.tracking.id;
    const currentIndex = orderStatusSteps.indexOf(order.status === "diproses" ? "diproses" : order.status);

    const descriptions = {
        dibuat: "Pesanan telah diterima penjual",
        diproses: "Penjual sedang menyiapkan pesananmu",
        dikirim: currentEtaMinutes != null ? `Kurir dalam perjalanan • estimasi ${currentEtaMinutes} menit` : "Kurir dalam perjalanan menuju alamatmu",
        selesai: "Pesanan telah sampai tujuan"
    };

    wrap.innerHTML = orderStatusSteps.map((step, i) => `
        <div class="tracking-timeline-step${i < currentIndex ? " done" : ""}${i === currentIndex ? " current" : ""}">
            <div class="tracking-timeline-dot">${i <= currentIndex ? "✓" : ""}</div>
            <div class="tracking-timeline-text">
                <b>${stepLabels[step]}</b>
                <span>${descriptions[step]}</span>
            </div>
        </div>
    `).join("");
}

function openOrderTracking(orderCode) {
    const order = orders.find(o => o.code === orderCode);
    if (!order) return;

    document.getElementById("trackingOrderCode").textContent = order.code;
    document.getElementById("trackingOverlay").hidden = false;

    const courierName = trackingCourierNames[Math.abs(hashCode(order.code)) % trackingCourierNames.length];
    document.getElementById("trackingCourierName").textContent = courierName;

    if (trackingTimer) clearInterval(trackingTimer);

    if (order.status === "selesai") {
        trackingRouteProgress = 1;
        drawTrackingMap(1);
        document.getElementById("trackingEta").textContent = "Sudah tiba";
        document.getElementById("trackingCourierStatus").textContent = "Pengiriman selesai";
        renderTrackingTimeline(order, 0);
        return;
    }

    if (order.status === "diproses") {
        trackingRouteProgress = 0.05;
        drawTrackingMap(trackingRouteProgress);
        document.getElementById("trackingEta").textContent = "Menunggu pengiriman";
        document.getElementById("trackingCourierStatus").textContent = "Sedang menyiapkan paket";
        renderTrackingTimeline(order, null);
        return;
    }

    // status "dikirim" → jalankan simulasi rute real-time
    trackingRouteProgress = 0.12;
    document.getElementById("trackingCourierStatus").textContent = "Sedang menuju alamatmu";

    trackingTimer = setInterval(() => {
        trackingRouteProgress = Math.min(1, trackingRouteProgress + 0.015);
        drawTrackingMap(trackingRouteProgress);
        const etaMinutes = Math.max(1, Math.round((1 - trackingRouteProgress) * 45));
        document.getElementById("trackingEta").textContent = `${etaMinutes} menit lagi`;
        renderTrackingTimeline(order, etaMinutes);

        if (trackingRouteProgress >= 1) {
            clearInterval(trackingTimer);
            document.getElementById("trackingEta").textContent = "Paket telah tiba!";
            document.getElementById("trackingCourierStatus").textContent = "Pesanan sampai tujuan";

            if (order.status !== "selesai") {
                order.status = "selesai";
                saveOrders();
                renderOrders();
                addNotification("Pesanan Tiba 📦", `Pesanan ${order.code} telah sampai di alamatmu.`);
            }
        }
    }, 800);

    drawTrackingMap(trackingRouteProgress);
    renderTrackingTimeline(order, Math.round((1 - trackingRouteProgress) * 45));
}

function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) { hash = (hash << 5) - hash + str.charCodeAt(i); hash |= 0; }
    return hash;
}

function closeOrderTracking() {
    document.getElementById("trackingOverlay").hidden = true;
    if (trackingTimer) clearInterval(trackingTimer);
}

document.querySelectorAll("[data-close-tracking]").forEach(el => el.addEventListener("click", closeOrderTracking));

// Tambahkan tombol "Lacak Pesanan" secara dinamis ke setiap kartu pesanan
const originalRenderOrders = renderOrders;
renderOrders = function () {
    originalRenderOrders();
    document.querySelectorAll(".order-card").forEach(card => {
        const code = card.dataset.orderCode;
        const actions = card.querySelector(".order-card-actions");
        const order = orders.find(o => o.code === code);
        if (actions && order && order.status !== "diproses" && !actions.querySelector("[data-track-order]")) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "order-track-more-button";
            btn.dataset.trackOrder = code;
            btn.textContent = "🗺️ Lacak Pesanan";
            actions.appendChild(btn);
        }
    });
};

document.addEventListener("click", event => {
    const trackBtn = event.target.closest("[data-track-order]");
    if (trackBtn) openOrderTracking(trackBtn.dataset.trackOrder);
});


loadStorage();

renderFlashSale();

renderHomeProducts();

updateCart();
updateWishlistCount();
renderWishlist();
renderNotifications();

applyLanguage(currentLang);
fetchExchangeRate();

loadCategoryFromURL();

loadChats();
updateChatUnreadBadge();
applyStoreProfileToUI();
applyBannerToUI();
updateAccountUI();


console.log(
    "MAB-Store berhasil dijalankan 🚀"
);

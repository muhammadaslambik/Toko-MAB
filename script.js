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
    ["ordersPage", "storePage", "searchPage"].forEach(id => {
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

    if (event.target.id === "pdChatSellerButton") {
        showToast("Fitur chat penjual belum tersedia di demo ini.");
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
if(applyVoucherButton)applyVoucherButton.addEventListener("click",()=>{const code=(checkoutVoucher?.value||"").trim().toUpperCase(),subtotal=getCartSubtotal();voucherMessage.style.color="";if(code==="MABHEMAT"){checkoutDiscount=Math.min(100000,Math.round(subtotal*.10));checkoutFreeShipping=false;appliedVoucher=code;voucherMessage.textContent=`✓ Voucher ${code} berhasil digunakan. Hemat ${rupiah(checkoutDiscount)}.`;}else if(code==="ONGKIRGRATIS"){checkoutDiscount=0;checkoutFreeShipping=true;appliedVoucher=code;voucherMessage.textContent=`✓ Voucher ${code} berhasil digunakan. Ongkos kirim jadi gratis.`;}else if(code==="MEMBERBARU"){if(subtotal>=150000){checkoutDiscount=20000;checkoutFreeShipping=false;appliedVoucher=code;voucherMessage.textContent=`✓ Voucher ${code} berhasil digunakan. Hemat ${rupiah(checkoutDiscount)}.`;}else{checkoutDiscount=0;checkoutFreeShipping=false;appliedVoucher="";voucherMessage.textContent="Minimal belanja Rp150.000 untuk voucher ini.";voucherMessage.style.color="#d34b4b";}}else if(!code){checkoutDiscount=0;checkoutFreeShipping=false;appliedVoucher="";voucherMessage.textContent="Masukkan kode voucher terlebih dahulu.";}else{checkoutDiscount=0;checkoutFreeShipping=false;appliedVoucher="";voucherMessage.textContent="Kode voucher tidak ditemukan.";voucherMessage.style.color="#d34b4b";}renderCheckout();});
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
    [homePage, categoryPage, productPage, storePage, searchPage].forEach(page => {
        if (page) { page.hidden = true; page.style.display = "none"; }
    });

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
    [homePage, categoryPage, productPage, ordersPage, searchPage].forEach(page => {
        if (page) { page.hidden = true; page.style.display = "none"; }
    });

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
    [homePage, categoryPage, productPage, ordersPage, storePage].forEach(page => {
        if (page) { page.hidden = true; page.style.display = "none"; }
    });

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


console.log(
    "MAB-Store berhasil dijalankan 🚀"
);

// Fungsi untuk menambahkan 5 produk ke keranjang
function tambahKeKeranjangBanyak() {
    let keranjang = [];
    let produkIds = ['produk1', 'produk2', 'produk3', 'produk4', 'produk5'];

    produkIds.forEach(id => {
        let produk = document.getElementById(id);
        if (produk.checked) {
            let produkData = {
                nama: produk.dataset.nama,
                harga: produk.dataset.harga
            };
            keranjang.push(produkData);
        }
    });

    if (keranjang.length > 0) {
        alert("Produk yang ditambahkan ke keranjang: " + keranjang.map(p => p.nama).join(", "));
    } else {
        alert("Pilih minimal satu produk.");
    }
}
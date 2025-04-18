function addToCart(productName) {
    alert(productName + ' telah ditambahkan ke keranjang!');
    
    // Menampilkan tombol "Beli Sekarang" untuk produk yang ditambahkan
    const productElements = document.querySelectorAll('.product');
    productElements.forEach(product => {
        const productTitle = product.querySelector('h3').innerText;
        if (productTitle === productName) {
            product.querySelector('.buy-now').style.display = 'block';
        }
    });
}

function buyNow() {
    // Arahkan pengguna ke WhatsApp
    window.location.href = 'https://wa.me/0123456789'; // Ganti dengan nomor WhatsApp Anda
}
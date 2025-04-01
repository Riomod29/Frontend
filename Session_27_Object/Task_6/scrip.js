// reduce được sử dụng để tính tổng tiền.
// total là giá trị tích lũy, bắt đầu từ 0.
// item.price * item.quantity tính tiền cho từng sản phẩm.
// (30000 * 2) + (5000 * 1) + (15000 * 3) = 60000 + 5000 + 45000 = 110000
function calculateTotal(cart) {
    return cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

//Sử dụng hàm tính tổng tiền
const cart = [
    { name: "Mèn mén", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1 },
    { name: "Bánh bao", price: 15000, quantity: 3 }
];

const total = calculateTotal(cart);
console.log("Tổng tiền trong giỏ hàng là:", total);

// ===================
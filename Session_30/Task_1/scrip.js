// Viết chương trình  cho phép người dùng:
// Hiển thị các sản phẩm theo tên danh mục.
// Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
// Sản phẩm không có trong cửa hàng hiển thị thông báo.
// Sản phẩm có trong cửa hàng
// Cho người dùng nhập số lượng sản phẩm muốn mua, mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
// Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
// Sắp xếp các sản phẩm trong cửa hàng theo giá:
// Tăng dần.
// Giảm dần.
// Tính số tiền thanh toán trong giỏ hàng.
// Thoát.

let products = [{ // Danh sách sản phẩm
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },{
        id: 2,
        name: "mức",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },{
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },{
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }];

let cart = []; // Giỏ hàng

function showMenu(){
    let str = products.map((item) => { //
        return `${item.id},${item.name},${item.price},${item.quantity},${item.category}\n`
    });
    alert(str);
    }

function choiceSp(){
    let id = +prompt("Nhập vào id sản phẩm bạn muốn mua");
    let product = products.find((item) => item.id == id);
    if (product) {
        let quantity = +prompt("Nhập vào số lượng sản phẩm bạn muốn mua");
        if (product.quantity >= quantity) {
            product.quantity -= quantity;
            cart.push({ ...product, quantity });
            alert(`Bạn đã mua ${quantity} ${product.name}`);
        } else {
            alert("Số lượng sản phẩm không đủ");
        }
    } else {
        alert("Sản phẩm không có trong cửa hàng");
    }
}
function sortPrice() {
    let choice;
    do {
        choice = +prompt(
            "-----------------------------------------------------\n"
            +"1. Sắp xếp theo giá tăng dần.\n"
            +"2. Sắp xếp theo giá giảm dần.\n"
            +"3. Thoát.\n"
            +"-----------------------------------------------------"
        );
        switch (choice) {
            case 1:
                products.sort((a, b) => a.price - b.price);
                alert("Sắp xếp thành công");
                let str = products.map((item) => {
                    return `${item.id},${item.name},${item.price},${item.quantity},${item.category}\n`
                });
                alert(str);
                break;
            case 2:
                products.sort((a, b) => b.price - a.price);
                alert("Sắp xếp thành công");
                let str2 = products.map((item) => {
                    return `${item.id},${item.name},${item.price},${item.quantity},${item.category}\n`
                });
                alert(str2);
                break;
            case 3:
                break;
            default:
                alert("Khong co lua chon nay");
                break;
        }
    } while (choice != 3);
}
// Tính số tiền thanh toán trong giỏ hàng
function totalPrice() {
    let total = 0; // Khai báo biến total để tính tổng tiền
    // và tính tổng tiền bằng cách nhân giá sản phẩm với số lượng
    cart.forEach((item) => { // Duyệt qua từng sản phẩm trong giỏ hàng
        // Tính tổng tiền bằng cách nhân giá sản phẩm với số lượng
        total += item.price * item.quantity; // Cộng dồn vào biến total
        // item.price là giá sản phẩm
        // item.quantity là số lượng sản phẩm
        // total += item.price * item.quantity; // Cộng dồn vào biến total
    });
    alert(`Tổng tiền thanh toán là: ${total}`);
}


function menu(){
    let choice;
    do {
        alert(
            "-----------------------------------------------------\n"
            +"1. Hiển thị các sản phẩm theo tên danh mục.\n"
            +"2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.\n"
            // Sản phẩm không có trong cửa hàng",
            // Sản phẩm có trong cửa hàng
            // Cho người dùng nhập số lượng sản phẩm muốn mua
            // ,mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
            // Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
            +"3. Sắp xếp các sản phẩm trong cửa hàng theo giá:\n"
            // Tăng dần.
            // Giảm dần.
            +"4. Tính số tiền thanh toán trong giỏ hàng.\n"
            +"5. Thoát.\n"
            +"-----------------------------------------------------"
        )
    choice = +prompt("Nhập vào lựa chọn của bạn");
    switch (choice) {
        case 1:
            showMenu();
            break;
        case 2:
            choiceSp();
            break;
        case 3:
            sortPrice();
            break;
        case 4:
            totalPrice();
            break;
        case 5:
            break;
        default:
            alert("Khong co lua chon nay");
            break;
        }
    } while (choice != 5);
}
menu();
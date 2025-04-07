// Mô tả
// Viết chương trình quản lý cửa hàng điện thoại, với mỗi điện thoại gồm các thông tin như sau:

// id : number (mã điện thoại)
// name : string (tên điện thoại)
// price : number (giá tiền điện thoại)
// quantity : number (số lượng điện thoại)
// company : string (tên hãng điện thoại)
// Khởi tạo giỏ hàng let cart=[ ]

// Yêu cầu:
// Hiển thị danh sách điện thoại theo hãng (Ví dụ: Samsung, Apple, Xiaomi…)
// Thêm điện thoại mới vào cửa hàng (Nhập thông tin: id, tên điện thoại, giá, số lượng, hãng)
// Tìm kiếm điện thoại theo tên hoặc id
// Mua điện thoại (Nhập id điện thoại cần mua và số lượng, cập nhật lại cửa hàng)
// Thanh toán tất cả điện thoại trong giỏ hàng (Thông báo thanh toán thành công, và xóa toàn bộ giỏ hàng)
// Sắp xếp điện thoại theo giá:
// Tăng dần
// Giảm dần
// Hiển thị tổng số tiền của các điện thoại trong kho
// Hiển thị tổng số lượng điện thoại theo từng hàng (VD: samsung - 5,iphone - 3,...)
// Thoát chương trình

// Chương trình Quản lý Cửa hàng Điện thoại

// Khởi tạo danh sách điện thoại và giỏ hàng
let phoneStore = [
    { id: 1, name: "Samsung Galaxy S21", price: 799.99, quantity: 10, company: "Samsung" },
    { id: 2, name: "iPhone 12", price: 999.99, quantity: 5, company: "Apple" },
    { id: 3, name: "Xiaomi Mi 11", price: 749.99, quantity: 8, company: "Xiaomi" },
    { id: 4, name: "OnePlus 9", price: 699.99, quantity: 6, company: "OnePlus" },
];
let cart = [];

// Hiển thị danh sách điện thoại theo hãng
function displayPhonesByCompany(company) {
    let filteredPhones = phoneStore.filter(phone => phone.company.toLowerCase() === company.toLowerCase());
    if (filteredPhones.length > 0) {
        console.log(`Danh sách điện thoại của hãng ${company}:`);
        filteredPhones.forEach(phone => {
            console.log(`ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}`);
        });
    } else {
        console.log(`Không có điện thoại nào thuộc hãng ${company}.`);
    }
}

// Thêm điện thoại mới vào cửa hàng
function addPhone() {
    let id = +prompt("Nhập ID điện thoại:");
    let name = prompt("Nhập tên điện thoại:");
    let price = +prompt("Nhập giá điện thoại:");
    let quantity = +prompt("Nhập số lượng điện thoại:");
    let company = prompt("Nhập hãng điện thoại:");
    phoneStore.push({ id, name, price, quantity, company });
    console.log(`Thêm điện thoại mới thành công: ${name}`);
}

// Tìm kiếm điện thoại theo tên hoặc ID
function searchPhoneByIdOrName() {
    let searchTerm = prompt("Nhập tên hoặc ID điện thoại cần tìm:");
    let foundPhones = phoneStore.filter(phone =>
        phone.id == searchTerm || phone.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (foundPhones.length > 0) {
        console.log("Kết quả tìm kiếm:");
        foundPhones.forEach(phone => {
            console.log(`ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}`);
        });
    } else {
        console.log("Không tìm thấy điện thoại nào.");
    }
}

// Mua điện thoại
function buyPhone() {
    let id = +prompt("Nhập ID điện thoại cần mua:");
    let quantity = +prompt("Nhập số lượng cần mua:");
    let phoneToBuy = phoneStore.find(phone => phone.id === id);
    if (phoneToBuy && phoneToBuy.quantity >= quantity) {
        phoneToBuy.quantity -= quantity;
        let cartItem = cart.find(item => item.id === id);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ id: phoneToBuy.id, name: phoneToBuy.name, price: phoneToBuy.price, quantity });
        }
        console.log(`Mua ${quantity} chiếc ${phoneToBuy.name} thành công.`);
    } else {
        console.log("Không đủ số lượng hoặc không tìm thấy điện thoại.");
    }
}

// Thanh toán giỏ hàng
function checkout() {
    if (cart.length > 0) {
        let totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        console.log(`Tổng số tiền cần thanh toán: ${totalAmount}`);
        cart = [];
        console.log("Thanh toán thành công. Giỏ hàng đã được xóa.");
    } else {
        console.log("Giỏ hàng rỗng.");
    }
}

// Sắp xếp điện thoại theo giá
function sortPhonesByPrice() {
    let order = prompt("Nhập 'asc' để sắp xếp tăng dần hoặc 'desc' để sắp xếp giảm dần:");
    if (order === "asc") {
        phoneStore.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
        phoneStore.sort((a, b) => b.price - a.price);
    } else {
        console.log("Lựa chọn không hợp lệ.");
        return;
    }
    console.log("Danh sách điện thoại sau khi sắp xếp:");
    phoneStore.forEach(phone => {
        console.log(`ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}`);
    });
}

// Hiển thị tổng số tiền của các điện thoại trong kho
function displayTotalAmount() {
    let totalAmount = phoneStore.reduce((total, phone) => total + phone.price * phone.quantity, 0);
    console.log(`Tổng số tiền của các điện thoại trong kho: ${totalAmount}`);
}

// Hiển thị tổng số lượng điện thoại theo từng hãng
function displayTotalQuantityByCompany() {
    let quantityByCompany = {};
    phoneStore.forEach(phone => {
        if (!quantityByCompany[phone.company]) {
            quantityByCompany[phone.company] = 0;
        }
        quantityByCompany[phone.company] += phone.quantity;
    });
    console.log("Tổng số lượng điện thoại theo từng hãng:");
    for (let company in quantityByCompany) {
        console.log(`${company} - ${quantityByCompany[company]}`);
    }
}

// Thoát chương trình
function exitProgram() {
    console.log("Thoát chương trình.");
}

// Menu chính
function menu() {
    let choice;
    do {
        choice = +prompt(
            "-----------------------------------------------------\n" +
            "1. Hiển thị danh sách điện thoại theo hãng.\n" +
            "2. Thêm điện thoại mới vào cửa hàng.\n" +
            "3. Tìm kiếm điện thoại theo tên hoặc ID.\n" +
            "4. Mua điện thoại.\n" +
            "5. Thanh toán giỏ hàng.\n" +
            "6. Sắp xếp điện thoại theo giá.\n" +
            "7. Hiển thị tổng số tiền của các điện thoại trong kho.\n" +
            "8. Hiển thị tổng số lượng điện thoại theo từng hãng.\n" +
            "9. Thoát.\n" +
            "-----------------------------------------------------"
        );

        switch (choice) {
            case 1:
                let company = prompt("Nhập tên hãng điện thoại:");
                displayPhonesByCompany(company);
                break;
            case 2:
                addPhone();
                break;
            case 3:
                searchPhoneByIdOrName();
                break;
            case 4:
                buyPhone();
                break;
            case 5:
                checkout();
                break;
            case 6:
                sortPhonesByPrice();
                break;
            case 7:
                displayTotalAmount();
                break;
            case 8:
                displayTotalQuantityByCompany();
                break;
            case 9:
                exitProgram();
                return;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    } while (choice !== 9);
}

// Chạy chương trình
menu();
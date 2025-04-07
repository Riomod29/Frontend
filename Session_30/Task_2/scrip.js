// Mô tả
// Viết chương trình quản lý sách gồm các thông tin như sau:
// id : number (mã sách)
// name : string (tên sách)
// price : number (giá sách)
// quantity : number (số lượng sách)
// category : string (tên thể loại sách)

// Khởi tạo giỏ hàng let cart=[ ]

// Yêu cầu:
// Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
// Thêm sách mới vào kho
// Tìm kiếm sách theo tên hoặc id.
// Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
// Sắp xếp sách theo giá:
//      Tăng dần.
//      Giảm dần.
// Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
// Hiển thị tổng số lượng sách trong kho.
// Thoát chương trình.


// Chương trình Quản lý Sách

// Khởi tạo danh sách sách và giỏ hàng
let books = [];
let cart = [];

// Hàm hiển thị danh sách sách theo thể loại
function showBookByCategory(category) {
    let filteredBooks = books.filter(book => book.category.toLowerCase() === category.toLowerCase());
    if (filteredBooks.length > 0) {
        let str = filteredBooks.map(item => {
            return `ID: ${item.id}, Tên: ${item.name}, Giá: ${item.price}, Số lượng: ${item.quantity}, Thể loại: ${item.category}`;
        }).join("\n");
        alert("Danh sách sách thuộc thể loại " + category + ":\n" + str);
    } else {
        alert("Không có sách nào trong thể loại này.");
    }
}

// Hàm thêm sách mới vào kho
function addBook() {
    let id = +prompt("Nhập vào ID sách:");
    let name = prompt("Nhập vào tên sách:");
    let price = +prompt("Nhập vào giá sách:");
    let quantity = +prompt("Nhập vào số lượng sách:");
    let category = prompt("Nhập vào thể loại sách:");
    let book = { id, name, price, quantity, category };
    books.push(book);
    alert("Thêm sách thành công!");
}

// Hàm tìm kiếm sách theo tên hoặc ID
function searchBook() {
    let searchTerm = prompt("Nhập tên sách hoặc ID sách cần tìm:");
    let foundBooks = books.filter(book =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) || book.id.toString() === searchTerm
    );
    if (foundBooks.length > 0) {
        let str = foundBooks.map(item => {
            return `ID: ${item.id}, Tên: ${item.name}, Giá: ${item.price}, Số lượng: ${item.quantity}, Thể loại: ${item.category}`;
        }).join("\n");
        alert("Kết quả tìm kiếm:\n" + str);
    } else {
        alert("Không tìm thấy sách nào.");
    }
}

// Hàm mua sách
function buyBook() {
    let bookId = +prompt("Nhập ID sách cần mua:");
    let quantity = +prompt("Nhập số lượng cần mua:");
    let book = books.find(book => book.id === bookId);

    if (book) {
        if (book.quantity >= quantity) {
            book.quantity -= quantity;
            let cartItem = cart.find(item => item.id === bookId);
            if (cartItem) {
                cartItem.quantity += quantity;
            } else {
                cart.push({ id: book.id, name: book.name, price: book.price, quantity });
            }
            alert(`Đã mua ${quantity} cuốn sách "${book.name}".`);
        } else {
            alert("Số lượng sách trong kho không đủ.");
        }
    } else {
        alert("Không tìm thấy sách với ID này.");
    }
}

// Hàm sắp xếp sách theo giá
function sortPrice() {
    let order = prompt("Nhập 'asc' để sắp xếp tăng dần hoặc 'desc' để sắp xếp giảm dần:");
    if (order === 'a') {
        books.sort((a, b) => a.price - b.price);
        alert("Danh sách sách đã được sắp xếp tăng dần theo giá.");
    } else if (order === 'b') {
        books.sort((a, b) => b.price - a.price);
        alert("Danh sách sách đã được sắp xếp giảm dần theo giá.");
    } else {
        alert("Lựa chọn không hợp lệ.");
    }
}

// Hàm tính tổng số lượng sách đã mua và tổng tiền
function totalPrice() {
    let totalQuantity = 0;
    let totalCost = 0;

    cart.forEach(item => {
        totalQuantity += item.quantity;
        totalCost += item.price * item.quantity;
    });

    alert(`Tổng số lượng sách đã mua: ${totalQuantity}\nTổng tiền: ${totalCost}`);
}

// Hàm hiển thị tổng số lượng sách trong kho
function showTotalBooks() {
    let total = books.reduce((sum, book) => sum + book.quantity, 0);
    alert(`Tổng số lượng sách trong kho: ${total}`);
}

// Hàm menu chính
function menu() {
    let choice;
    do {
        choice = +prompt(
            "-----------------------------------------------------\n" +
            "1. Hiển thị các sản phẩm theo thể loại.\n" +
            "2. Thêm sách mới.\n" +
            "3. Tìm kiếm sách theo tên hoặc ID.\n" +
            "4. Mua sách.\n" +
            "5. Sắp xếp sách theo giá.\n" +
            "6. Tổng số lượng sách đã mua và tổng tiền.\n" +
            "7. Hiển thị tổng số lượng sách trong kho.\n" +
            "8. Thoát.\n" +
            "-----------------------------------------------------"
        );

        switch (choice) {
            case 1:
                let category = prompt("Nhập thể loại sách:");
                showBookByCategory(category);
                break;
            case 2:
                addBook();
                break;
            case 3:
                searchBook();
                break;
            case 4:
                buyBook();
                break;
            case 5:
                sortPrice();
                break;
            case 6:
                totalPrice();
                break;
            case 7:
                showTotalBooks();
                break;
            case 8:
                alert("Cảm ơn bạn đã sử dụng chương trình!");
                break;
            default:
                alert("Lựa chọn không hợp lệ.");
        }
    } while (choice !== 8);
}

// Chạy chương trình
menu();
// Danh sách sách
let bookList = [];

// Hàm hiển thị danh sách sách
function displayBooks() {
    console.clear(); // Xóa console để hiển thị danh sách mới
    if (bookList.length === 0) {
        console.log("Thư viện hiện không có sách nào."); // Thông báo nếu danh sách trống
        return;
    }

    console.log("Danh sách sách trong thư viện:");
    console.log("====================================");
    bookList.forEach((book, index) => {
        console.log(
            `STT: ${index + 1}, ID: ${book.id}, Tên: ${book.title}, Tác giả: ${book.author}, Năm: ${book.year}, Giá: ${book.price}, Trạng thái: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`
        );
    });
    console.log("====================================");
}

// Hàm thêm sách mới
function addBook() {
    const newBook = {
        id: Date.now(), // Tạo mã sách tự động
        title: prompt("Nhập tên sách:"),
        author: prompt("Nhập tên tác giả:"),
        year: +prompt("Nhập năm xuất bản:"),
        price: +prompt("Nhập giá sách:"),
        isAvailable: true // Mặc định sách có sẵn
    };

    if (!newBook.title || !newBook.author || isNaN(newBook.year) || isNaN(newBook.price)) {
        alert("Dữ liệu không hợp lệ. Vui lòng thử lại!");
        return;
    }

    bookList.push(newBook);
    alert("Thêm sách mới thành công!");
    displayBooks();
}

// Hàm tìm kiếm sách theo tiêu đề
function searchBookByTitle() {
    const searchTitle = prompt("Nhập tiêu đề sách cần tìm:").toLowerCase();
    if (!searchTitle) {
        alert("Vui lòng nhập tiêu đề sách!");
        return;
    }

    const foundBooks = bookList.filter(book => book.title.toLowerCase().includes(searchTitle));
    if (foundBooks.length > 0) {
        console.log("Kết quả tìm kiếm:");
        foundBooks.forEach(book => {
            console.log(`ID: ${book.id}, Tên: ${book.title}, Tác giả: ${book.author}, Năm: ${book.year}, Giá: ${book.price}, Trạng thái: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`);
        });
    } else {
        alert("Không tìm thấy sách với tiêu đề đã nhập!");
    }
}

// Hàm cập nhật trạng thái mượn/trả sách
function updateBookStatus() {
    const bookId = +prompt("Nhập ID sách cần cập nhật trạng thái:");
    if (isNaN(bookId)) {
        alert("ID không hợp lệ. Vui lòng nhập lại!");
        return;
    }

    const book = bookList.find(book => book.id === bookId);
    if (book) {
        book.isAvailable = !book.isAvailable;
        alert(`Trạng thái sách đã được cập nhật thành: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`);
        displayBooks();
    } else {
        alert("Không tìm thấy sách với ID đã nhập!");
    }
}

// Hàm xóa sách theo ID
function deleteBookById() {
    const bookId = +prompt("Nhập ID sách cần xóa:");
    if (isNaN(bookId)) {
        alert("ID không hợp lệ. Vui lòng nhập lại!");
        return;
    }

    const bookIndex = bookList.findIndex(book => book.id === bookId);
    if (bookIndex !== -1) {
        const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa sách: ${bookList[bookIndex].title}?`);
        if (confirmDelete) {
            bookList.splice(bookIndex, 1);
            alert("Xóa sách thành công!");
            displayBooks();
        }
    } else {
        alert("Không tìm thấy sách với ID đã nhập!");
    }
}

// Hàm sắp xếp sách theo giá tăng dần
function sortBooksByPrice() {
    if (bookList.length === 0) {
        alert("Thư viện không có sách để sắp xếp!");
        return;
    }

    bookList.sort((a, b) => a.price - b.price);
    alert("Sách đã được sắp xếp theo giá tăng dần!");
    displayBooks();
}

// Hàm thoát chương trình
function exit() {
    alert("Thoát chương trình quản lý sách!");
}

// Menu chính
function mainMenu() {
    let choice;
    do {
        choice = +prompt(
            "Chọn chức năng:\n" +
            "1. Thêm sách mới\n" +
            "2. Hiển thị danh sách sách\n" +
            "3. Tìm kiếm sách theo tiêu đề\n" +
            "4. Cập nhật trạng thái mượn/trả sách\n" +
            "5. Xóa sách theo ID\n" +
            "6. Sắp xếp sách theo giá tăng dần\n" +
            "7. Thoát"
        );

        switch (choice) {
            case 1:
                addBook();
                break;
            case 2:
                displayBooks();
                break;
            case 3:
                searchBookByTitle();
                break;
            case 4:
                updateBookStatus();
                break;
            case 5:
                deleteBookById();
                break;
            case 6:
                sortBooksByPrice();
                break;
            case 7:
                exit();
                break;
            default:
                alert("Vui lòng chọn chức năng hợp lệ!");
        }
    } while (choice !== 7);
}

// Chạy chương trình
mainMenu();
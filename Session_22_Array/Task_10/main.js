let array = []; // Khởi tạo mảng rỗng

function showMenu() {
  console.log(`
    MENU
    1. Nhập vào mảng
    2. Hiển thị mảng
    3. Thêm phần tử
    4. Sửa phần tử
    5. Xóa phần tử
    6. Thoát
    `);
}

function inputArray() {
  let input = prompt("Nhập các phần tử của mảng, cách nhau bằng dấu phẩy (,):");
  array = input.split(",").map(Number); // Chuyển chuỗi thành mảng số
}

function displayArray() {
  if (array.length === 0) {
    console.log("Mảng hiện đang trống.");
  } else {
    console.log("Mảng hiện tại:", array);
  }
}

function addElement() {
  let element = parseInt(prompt("Nhập phần tử muốn thêm:"), 10);
  array.push(element);
  console.log(`Đã thêm phần tử ${element} vào mảng.`);
}

function editElement() {
  let index = parseInt(prompt("Nhập vị trí muốn sửa (bắt đầu từ 0):"), 10);
  if (index >= 0 && index < array.length) {
    let newValue = parseInt(prompt("Nhập giá trị mới:"), 10);
    array[index] = newValue;
    console.log(`Đã sửa phần tử tại vị trí ${index} thành ${newValue}.`);
  } else {
    console.log("Vị trí không hợp lệ.");
  }
}

function deleteElement() {
  let index = parseInt(prompt("Nhập vị trí muốn xóa (bắt đầu từ 0):"), 10);
  if (index >= 0 && index < array.length) {
    let removed = array.splice(index, 1);
    console.log(`Đã xóa phần tử ${removed} tại vị trí ${index}.`);
  } else {
    console.log("Vị trí không hợp lệ.");
  }
}

function main() {
  let choice;
  do {
    showMenu();
    choice = parseInt(prompt("Lựa chọn của bạn:"), 10);
    switch (choice) {
      case 1:
        inputArray();
        break;
      case 2:
        displayArray();
        break;
      case 3:
        addElement();
        break;
      case 4:
        editElement();
        break;
      case 5:
        deleteElement();
        break;
      case 6:
        console.log("Thoát chương trình.");
        break;
      default:
        console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
  } while (choice !== 6);
}

main();

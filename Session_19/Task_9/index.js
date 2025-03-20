// 1. Kết quả: "javascript5"
// Giải thích: Toán tử `+` khi sử dụng với chuỗi sẽ thực hiện phép nối chuỗi.
// Số `5` được chuyển thành chuỗi và nối với "javascript".
let result = "javascript" + 5;

// 2. Kết quả: NaN
// Giải thích: Toán tử `-` không được định nghĩa cho chuỗi.
// JavaScript cố gắng chuyển "javascript" thành số, nhưng thất bại, dẫn đến kết quả là `NaN`.
let result = "javascript" - 1;

// 3. Kết quả: "32"
// Giải thích: Toán tử `+` thực hiện phép nối chuỗi khi một trong hai toán hạng là chuỗi.
// Số `2` được chuyển thành chuỗi và nối với "3".
let result = "3" + 2;

// 4. Kết quả: 1
// Giải thích: Toán tử `-` buộc JavaScript chuyển chuỗi "5" thành số.
// Sau đó thực hiện phép trừ: 5 - 4 = 1.
let result = "5" - 4;

// 5. Kết quả: false
// Giải thích: Hàm `isNaN` kiểm tra giá trị có phải là "không phải số" hay không.
// Chuỗi "123" có thể được chuyển thành số hợp lệ, nên kết quả là `false`.
let result = isNaN("123");

// 6. Kết quả: true
// Giải thích: Chuỗi "hello" không thể được chuyển thành số hợp lệ,
// nên `isNaN` trả về `true`.
let result = isNaN("hello");

// 7. Kết quả: false
// Giải thích: `Number.isNaN` nghiêm ngặt hơn `isNaN`.
// Nó chỉ trả về `true` nếu giá trị chính xác là `NaN`.
// Vì "123" không phải là `NaN`, kết quả là `false`.
let result = Number.isNaN("123");

// 8. Kết quả: true
// Giải thích: `Number.isNaN` trả về `true` chỉ khi giá trị chính xác là `NaN`.
// Vì giá trị là `NaN`, kết quả là `true`.
let result = Number.isNaN(NaN);

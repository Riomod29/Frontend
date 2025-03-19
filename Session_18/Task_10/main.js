let number = parseInt(prompt("Nhập một số nguyên từ 0 đến 999:"));

if (number < 0 || number > 999 || isNaN(number)) {
    console.log("Dữ liệu không hợp lệ. Vui lòng nhập một số từ 0 đến 999.");
} else {
    // Hàm chuyển đổi số thành chữ
    function numberToWords(num) {
        const ones = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
        const tens = ["", "", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
        
        if (num === 0) return "không";

        let words = "";

        // Hàng trăm
        if (Math.floor(num / 100) > 0) {
            words += ones[Math.floor(num / 100)] + " trăm";
            num %= 100;
            if (num > 0) words += " ";
        }

        // Hàng chục
        if (num >= 20) {
            words += tens[Math.floor(num / 10)];
            num %= 10;
            if (num > 0) words += " ";
        } else if (num >= 10) {
            const teen = ["mười", "mười một", "mười hai", "mười ba", "mười bốn", "mười lăm", "mười sáu", "mười bảy", "mười tám", "mười chín"];
            words += teen[num - 10];
            num = 0;
        } else if (num > 0 && words !== "") {
            words += "lẻ ";
        }

        // Hàng đơn vị
        if (num > 0) {
            words += ones[num];
        }

        return words;
    }

    console.log(`Số ${number} được đọc là: ${numberToWords(number)}`);
}
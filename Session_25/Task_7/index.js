function capitalizeWords(str) {
    // Tách chuỗi thành mảng các từ
    const words = str.toLowerCase().split(" ");

    // Biến đổi mỗi từ: viết hoa chữ cái đầu tiên
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Ghép lại thành chuỗi
    return capitalizedWords.join(" ");
}

// Test cases
console.log(capitalizeWords("hello WORLD"));    // Output: "Hello World"
console.log(capitalizeWords("rIKKei acaDEMy")); // Output: "Rikkei Academy"
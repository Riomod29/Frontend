let moth = prompt("Nhập vào một tháng trong năm: ");
let days;
switch (moth.toLowerCase()) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        days = 31;
        break;
    case "4":
    case "6":
    case "9":
    case "11":
    case "april":
    case "june":
    case "september":
    case "november":
        days = 30;
        break;
    case "2":
    case "february":
        days = "28 hoặc 29 (năm nhuận)";
        break;
    default:
        days = "Tháng không hợp lệ";
}

alert(`Tháng ${moth} có ${days} ngày.`);
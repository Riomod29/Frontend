let arr = [];

function menu() {
    return parseInt(prompt(
        "1.Nhập mảng \n" + 
        "2.Hiển Thị Mảng \n" + 
        "3.Tìm Phần Tử Lớn Nhất Và In ra Chỉ Số Của Nó \n" + 
        "4.Tính Tổng Và Trung Bình Cộng Của Các Số Dương Trong mảng \n" + 
        "5.Đảo Ngược Mảng \n" + 
        "6.Kiểm Tra Mảng Có Đối Xững Không \n" + 
        "7.Thoát Chương Trình " + 
        "Vui lòng chọn một chức năng (1-7):"
    ));
    }   

function nhapMang() {
    let n=parse (prompt("Nhập Số Phần Tử Của Mảng:"));
    if(isNaN(n) || n<=0 || Number.isInteger(n)===false){
        alert("Vui lòng nhập một số nguyên dương!");
        return;
    }
    else{
        arr =[];
        for(let i=0;i<arr.length;i++){
            let value=parseInt(prompt("Nhập Phần Tử Thứ "+(i+1)+" :"));
            if(isNaN(value)){
                alert("Vui lòng nhập số hợp lệ!");
                i--;
            }
            else{
                arr.push(value);
            }
        }
    }
}

function hienThiMang(){
    if(arr.length===0){
        alert("Mảng rỗng!");
    }else{
        alert("Mảng: "+arr.join(", "));
    }
}

function timMax(){
    let max=arr[0];
    let index=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
            index=i;
        }
    }
    alert("Phần tử lớn nhất trong mảng: "+max+" ở vị trí thứ "+index);
}

function tinhTongVaTrungBinh(){
    let sum=0;
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            sum+=arr[i];
            count++;
        }
    }
    if(count===0){
        alert("Không có số dương trong mảng!");
    }else{
        alert("Tổng các số dương trong mảng: "+sum+"\nTrung bình cộng các số dương trong mảng: "+(sum/count));
    }
}

function daoNguocMang(){
    let newArr=[];
    for(let i=arr.length-1;i>=0;i--){
        newArr.push(arr[i]);
    }
    arr=newArr;
    alert("Mảng sau khi đảo ngược: "+arr.join(", "));
}

function kiemTraDoiXung(){
    let flag=true;
    for(let i=0;i<arr.length/2;i++){
        if(arr[i]!==arr[arr.length-1-i]){
            flag=false;
            break;
        }
    }
    if(flag){
        alert("Mảng đối xứng!");
    }else{
        alert("Mảng không đối xứng!");
    }
}

function main(){
    let choose =menu();
    do{
        switch(choose){
            case 1:
                nhapMang();
                break;
            case 2:
                hienThiMang();
                break;
            case 3:
                timMax();
                break;
            case 4:
                tinhTongVaTrungBinh();
                break;
            case 5:
                daoNguocMang();
                break;
            case 6:
                kiemTraDoiXung();
                break;
            case 7:
                alert("Thoát chương trình!");
                return;
            default:
                alert("Vui lòng chọn chức năng từ 1-7!");
                break;
        }
    }
    while(choose !=7);
}

main();



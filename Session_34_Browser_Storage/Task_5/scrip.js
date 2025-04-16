document.addEventListener('DOMContentLoaded', function () {
    hienThiDanhSach();
});

function themNhanVien() {
    const tenNhanVien = document.getElementById('tenNhanVien').value.trim();
    const chucVu = document.getElementById('chucVu').value.trim();

    if (!tenNhanVien || !chucVu) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }

    let danhSachNhanVien = JSON.parse(localStorage.getItem('danhSachNhanVien')) || [];

    const nhanVienMoi = {
        ten: tenNhanVien,
        chucVu: chucVu
    };

    danhSachNhanVien.push(nhanVienMoi);

    localStorage.setItem('danhSachNhanVien', JSON.stringify(danhSachNhanVien));

    document.getElementById('tenNhanVien').value = '';
    document.getElementById('chucVu').value = '';

    hienThiDanhSach();
}

function hienThiDanhSach() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    const danhSachNhanVien = JSON.parse(localStorage.getItem('danhSachNhanVien')) || [];

    danhSachNhanVien.forEach((nhanVien, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${nhanVien.ten}</td>
            <td>${nhanVien.chucVu}</td>
        `;
        tableBody.appendChild(row);
    });
}
/**Tính lương nhân viên */
const luongNgay = 100000;
const tinhLuong = document.getElementById("tinhLuong");
tinhLuong.onclick = function () {
    const soNgay = document.getElementById("soNgay").value * 1;
    let tinhLuong = 0;
    tinhLuong = luongNgay * soNgay;
    const formatter = new Intl.NumberFormat('vi-VN', {style:"currency" , currency:"VND"});
    const rsTinhLuong = "Tổng tiền lương là: " + formatter.format(tinhLuong);
    const tienLuong = document.getElementById("tienLuong");
    tienLuong.innerHTML = rsTinhLuong;
}

/**Tính giá trị trung bình */
const tinhTrungBinh = document.getElementById("tinhTrungBinh");
    tinhTrungBinh.onclick = function () {
        const soMot = document.getElementById("soMot").value * 1;
        const soHai = document.getElementById("soHai").value * 1;
        const soBa = document.getElementById("soBa").value * 1;
        const soBon = document.getElementById("soBon").value * 1;
        const soNam = document.getElementById("soNam").value * 1;
        let tinhTrungBinh = 0;
        tinhTrungBinh = (soMot + soHai + soBa + soBon + soNam) / 5;
        const rsTrungBinh = "Giá trị trung bình là : " + tinhTrungBinh ;
        const inTrungBinh = document.getElementById("inTrungBinh");
        inTrungBinh.innerHTML = rsTrungBinh;
    }

/** Đổi VNĐ */
const doiTien = document.getElementById("doiTien");
    doiTien.onclick = function () {
        const tienUsd = document.getElementById("tienUsd").value * 1;
        let doiTien = 0;
        doiTien = tienUsd * 23500;
        const formatter = new Intl.NumberFormat('vi-VN', {style:"currency" , currency:"VND"});
        const rsDoitien = "Số tiền quy đổi là : " + formatter.format(doiTien);
        const soVnd = document.getElementById("soVnd");
        soVnd.innerHTML = rsDoitien;
    }

/** Tính S và P */
const tinhChuNhat = document.getElementById("tinhChuNhat");
    tinhChuNhat.onclick = function () {
        const chieuDai = document.getElementById("chieuDai").value * 1;
        const chieuRong = document.getElementById("chieuRong").value * 1;
        let  tinhDienTich = 0;
        let tinhChuVi = 0;
        tinhDienTich = chieuDai * chieuRong;
        tinhChuVi = (chieuDai + chieuRong)    * 2;
        
        const rsDienTich = "Diện tích là: " + tinhDienTich;
        const rsChuVi = "Chu vi là: " + tinhChuVi;

        const inDienTich = document.getElementById("inDienTich");
        inDienTich.innerHTML = rsDienTich;
        const inChuvi = document.getElementById("inChuVi");
        inChuvi.innerHTML = rsChuVi;

    }
/** Tính tổng 2 ky  */
    const btnSum2ky = document.getElementById("btnSum2ky");
    btnSum2ky.onclick = function () {
    const number2ky = document.getElementById("number2ky").value * 1;
    

    const numberChuc = Math.floor(number2ky / 10);

    const numberDon = number2ky % 10;

    const sumDonChuc = numberChuc + numberDon;

    const resultDonChuc = `Tong 2 ky so la : ${sumDonChuc}`; // string template

    const pInfo2ky = document.getElementById("pSum2ky");
    pInfo2ky.innerHTML = resultDonChuc;
    
}
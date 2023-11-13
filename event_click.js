
// function suKien1() {
//     alert("Lập trình JavaScript căn bản!");
//  StyleSheet
// }

// function suKien2() {
//     alert("Thêm sự kiện thành công");
//     StyleSheet
// }
// // Chọn đến nút có id là btn
// let x = document.getElementById("doi-mk");

// // Thêm sự kiện
// x.addEventListener("click", suKien1);
// x.addEventListener("click", suKien2);

document.addEventListener("DOMContentLoaded", function () {
    // Lấy thẻ checkbox và khối cần ẩn hiện
    var toggleCheckbox = document.getElementById("doi-mk");//id input//
    var hiddenBlock = document.getElementById("An-MK");//id class can an//

    // Gán sự kiện cho checkbox khi thay đổi trạng thái
    toggleCheckbox.addEventListener("change", function () {
        // Nếu checkbox được chọn, hiển thị khối; ngược lại ẩn đi
        hiddenBlock.style.display = toggleCheckbox.checked ? "block" : "none";
    });
});


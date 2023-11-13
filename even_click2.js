document.addEventListener("DOMContentLoaded", function () {
    // Lấy thẻ checkbox và khối cần ẩn hiện
    var toggleCheckbox = document.getElementById("cl2");//id input//
    var hiddenBlock = document.getElementById("div-an-2");//id class can an//

    // Gán sự kiện cho checkbox khi thay đổi trạng thái
    toggleCheckbox.addEventListener("change", function () {
        // Nếu checkbox được chọn, hiển thị khối; ngược lại ẩn đi
        hiddenBlock.style.display = toggleCheckbox.checked ? "block" : "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Lấy thẻ checkbox và khối cần ẩn hiện
    var toggleCheckbox = document.getElementById("cl1");//id input//
    var hiddenBlock = document.getElementById("div-an-1");//id class can an//

    // Gán sự kiện cho checkbox khi thay đổi trạng thái
    toggleCheckbox.addEventListener("change", function () {
        // Nếu checkbox được chọn, hiển thị khối; ngược lại ẩn đi
        hiddenBlock.style.display = toggleCheckbox.checked ? "block" : "none";
    });
});


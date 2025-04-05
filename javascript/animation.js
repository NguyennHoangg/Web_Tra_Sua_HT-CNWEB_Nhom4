const imageList = [
    "../IMAGE/poster_giamgia_binhgiangsinh.jpg",
    "../IMAGE/poster_giamgia4.png",
    "../IMAGE/poster_giamgia3.jpg",
    "../IMAGE/poster_giamgia6.jpg",
    "../IMAGE/poster_giamgia7.jpg",
    "../IMAGE/poster-giamgia8.jpg"
];

let currentIndex = 0;
const imageElement = document.getElementById("slider-img");

// Ensure the image element exists
if (imageElement) {
    function changeImage() {
        // Làm mờ ảnh trước khi đổi
        imageElement.style.transition = "transform 0.6s ease-in-out, opacity 0.6s ease-in-out";
        imageElement.style.opacity = "0";
        imageElement.style.transform = "translateX(-100%)";

        setTimeout(() => {
            // Cập nhật ảnh mới
            currentIndex = (currentIndex + 1) % imageList.length;
            imageElement.src = imageList[currentIndex];

            // Đưa ảnh mới vào từ bên phải
            imageElement.style.transition = "none";
            imageElement.style.transform = "translateX(100%)";

            setTimeout(() => {
                imageElement.style.transition = "transform 0.6s ease-in-out, opacity 0.6s ease-in-out";
                imageElement.style.transform = "translateX(0)";
                imageElement.style.opacity = "1";
            }, 50);
        }, 600); // Chờ hiệu ứng cũ hoàn tất
    }

    // Start the interval for changing images
    setInterval(changeImage, 4000); // Đổi ảnh mỗi 4 giây
} else {
    console.error("Element with ID 'slider-img' not found.");
}
/*regex */
document.addEventListener('DOMContentLoaded', () => {
    // Regex patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Kiểm tra email hợp lệ
    const nameRegex = /^[a-zA-ZÀ-ỹ\s]{2,50}$/; // Kiểm tra họ tên (chỉ chữ cái, khoảng trắng, độ dài 2-50 ký tự)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Kiểm tra mật khẩu (ít nhất 6 ký tự)

    // Kiểm tra input khi rời khỏi trường
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('blur', () => {
            const value = input.value.trim();
            let errorMessage = '';

            // Kiểm tra từng trường input
            if (input.type === 'email') {
                if (!emailRegex.test(value)) {
                    errorMessage = 'Email không hợp lệ!';
                }
            } else if (input.type === 'text' && input.id === 'name') {
                if (!nameRegex.test(value)) {
                    errorMessage = 'Họ và tên không hợp lệ!';
                }
            } else if (input.type === 'password') {
                if (!passwordRegex.test(value)) {
                    errorMessage = 'Mật khẩu có độ dài tối thiểu là 8 ký tự và chỉ chứa các ký tự chữ cái (A-Z, a-z), chữ số (0-9), và các ký tự đặc biệt trong nhóm @$!%*?&';
                }
            }

            // Hiển thị hoặc xóa lỗi
            if (errorMessage) {
                input.classList.add('is-invalid');
                if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
                    const error = document.createElement('div');
                    error.className = 'error-message text-danger mt-1';
                    error.textContent = errorMessage;
                    input.parentNode.appendChild(error);
                }
            } else {
                input.classList.remove('is-invalid');
                if (input.nextElementSibling && input.nextElementSibling.classList.contains('error-message')) {
                    input.nextElementSibling.remove();
                }
            }
        });
    });
});
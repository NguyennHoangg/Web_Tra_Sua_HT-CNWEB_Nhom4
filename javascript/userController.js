// Mảng lưu trữ thông tin người dùng
const users = [];

// Xử lý đăng ký
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();

    // Kiểm tra email đã tồn tại chưa
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('Email đã được sử dụng!');
        return;
    }


    // Thêm người dùng vào mảng
    users.push({ name, email, password });
    alert('Đăng ký thành công!');
    document.getElementById('registerForm').reset();

    // Đóng modal đăng ký
    const authModal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
    authModal.hide();
});

// Xử lý đăng nhập
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    // Kiểm tra thông tin đăng nhập
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        // Hiển thị tên người dùng bên cạnh biểu tượng person
        document.getElementById('user-name').textContent = user.name;

        // Đóng modal đăng nhập
        const authModal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
        authModal.hide();

        alert('Đăng nhập thành công!');
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }

    document.getElementById('loginForm').reset();
});
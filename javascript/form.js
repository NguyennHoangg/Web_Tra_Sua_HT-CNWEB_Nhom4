/*gio hang*/
const cart = [];

        function updateCartModal() {
            const cartItems = document.getElementById('cartItems');
            const cartEmptyMessage = document.getElementById('cartEmptyMessage');
            const cartCount = document.getElementById('cart-count');
            cartItems.innerHTML = '';

            if (cart.length === 0) {
                cartEmptyMessage.style.display = 'block';
            } else {
                cartEmptyMessage.style.display = 'none';
                cart.forEach((item, index) => {
                    const div = document.createElement('div');
                    div.className = 'cart-item-card';
                    div.innerHTML = `
                        <img src="${item.imageSrc}" alt="${item.title}">
                        <span class="cart-item-title">${item.title}</span>
                        <button class="remove-item" data-index="${index}">Xóa</button>
                    `;
                    cartItems.appendChild(div);
                });

                document.querySelectorAll('.remove-item').forEach(button => {
                    button.addEventListener('click', () => {
                        const index = button.getAttribute('data-index');
                        cart.splice(index, 1);
                        updateCartModal();
                    });
                });
            }

            cartCount.textContent = cart.length; // Update the cart count dynamically
        }

        /*Button search */
        document.addEventListener('DOMContentLoaded', () => {
            const searchBtn = document.getElementById('search-btn');
            const searchField = document.getElementById('search-field');
        
            searchBtn.addEventListener('click', () => {
                if (searchField.classList.contains('hidden')) {
                    searchField.classList.remove('hidden');
                    searchField.classList.add('visible');
                } else {
                    searchField.classList.remove('visible');
                    searchField.classList.add('hidden');
                }
            });
        });
document.addEventListener('DOMContentLoaded', () => {
    
    const list_products = document.getElementById('products');

    async function loadProducts() {
        const response = await fetch('./products.json');
        const data = await response.json();
        return data.products;
    }

    loadProducts().then(products => {

        products.forEach(product => {

            let item_product = document.createElement('div');

            let item_input = document.createElement('input');
            item_input.type = 'checkbox';
            item_input.id = product.id;
            item_input.name = 'product';
            item_input.value = product.id;

            let item_label = document.createElement('label');
            item_label.htmlFor = product.id;
            item_label.textContent = product.name.fr;

            item_product.appendChild(item_input);
            item_product.appendChild(item_label);
            list_products.appendChild(item_product);            
        });
    });
});
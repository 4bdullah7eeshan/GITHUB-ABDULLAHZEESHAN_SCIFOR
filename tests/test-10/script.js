function fetchProducts() {
    const outputDiv = document.getElementById('output');
    
    outputDiv.innerHTML = '<div class="col-12 text-center my-5"><h3>🎉 Hang tight! We’re fetching some top products for you...</h3></div>';

    fetch("https://dummyjson.com/products?limit=12")
        .then(res => res.json())
        .then(data => {
            outputDiv.innerHTML = '';

            data.products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('col-md-4', 'mb-4');

                productCard.innerHTML = `
                    <div class="card h-100 shadow-sm">
                        <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description.substring(0, 100)}...</p>
                            <p class="text-success"><strong>Price:</strong> $${product.price}</p>
                        </div>
                    </div>
                `;
                outputDiv.appendChild(productCard);
            });
        })
        .catch(error => {
            outputDiv.innerHTML = '<div class="col-12 text-center my-5"><h3>Error fetching products. Please try again.</h3></div>';
            console.error('Error fetching products:', error);
        });
}

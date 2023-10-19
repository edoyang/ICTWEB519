// Initial values
let total = 0;
let itemCount = 0;

// Function to add to cart
function addToCart(price, productName) {
    total += price;
    itemCount += 1;

    // Check if product name is already in the purchased items list
    const existingItem = [...document.querySelectorAll('#purchasedItemsList li')].find(li => li.dataset.productName === productName);

    if (existingItem) {
        // If product is already in the list, update its quantity
        existingItem.dataset.quantity = Number(existingItem.dataset.quantity) + 1;
        existingItem.textContent = `${productName} x${existingItem.dataset.quantity}`;
    } else {
        // Otherwise, add a new list item for the product
        const listItem = document.createElement('li');
        listItem.dataset.productName = productName;
        listItem.dataset.quantity = 1;
        listItem.textContent = `${productName} x1`;
        document.querySelector('#purchasedItemsList').appendChild(listItem);
    }

    // Update the UI
    document.querySelector('#cartTotal').textContent = `Cart sub-total: $${total}`;
    document.querySelector('#itemCount').textContent = `${itemCount} items`;
    document.querySelector('#itemCountBadge').textContent = itemCount;
    
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.addToCart').forEach(button => {
    button.addEventListener('click', function() {
        const price = parseFloat(this.parentElement.querySelector('.price').textContent);
        const productName = this.parentElement.querySelector('.title').textContent;
        addToCart(price, productName);
    });
});

document.querySelector("#checkoutButton").addEventListener("click", function() {
    // Reset the cart first
    resetCart();

    // Display the purchase modal
    const modal = document.getElementById('purchaseModal');
    modal.style.display = 'block';

    // After 2 seconds, hide the modal
    setTimeout(function() {
        modal.style.display = 'none';
    }, 1500);
});

function resetCart() {
    total = 0;
    itemCount = 0;
    document.querySelector('#cartTotal').textContent = `Cart sub-total: $${total}`;
    document.querySelector('#itemCount').textContent = `${itemCount} items`;
    document.querySelector('#itemCountBadge').textContent = '0';  // Added this line
    document.querySelector('#purchasedItemsList').innerHTML = '';
}

document.getElementById("floatingSVG").addEventListener("click", function() {
    const aside = document.querySelector(".aside");
    
    if (aside.classList.contains("show")) {
        aside.classList.remove("show");
    } else {
        aside.classList.add("show");
    }
});

document.getElementById("closeIcon").addEventListener("click", function() {
    const aside = document.querySelector(".aside");
    aside.classList.remove("show");
});

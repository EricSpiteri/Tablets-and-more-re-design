const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const products = document.querySelectorAll('.Product');
const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');

priceRange.addEventListener('input', function() {
    const selectedPrice = parseInt(this.value);
    priceValue.textContent = selectedPrice;
    let topPostion = 20;

    //The loop that goes through each product card individually
    for(let i=1; i<=19; i++){
        const card = document.getElementById(`Product${i}`);
        const cardPrice = parseInt(card.dataset.price);

         //Compare card prices with selected prices
         if(cardPrice<=selectedPrice) {

            card.style.display = "block";
         } else{
            card.style.display = 'none';
         }
        }
    });

//Search button
searchInput.addEventListener('input', function(){
    const searchText = this.value.trim().toLowerCase();
    Array.from(products).forEach(card => {
        const cardName = card.dataset.Product.toLowerCase();

        if (cardName.includes(searchText)) {
            card.style.display = "block"
        } else {
            card.style.display = 'none';
        }
    });
})

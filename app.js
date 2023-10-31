
let addDress = document.querySelector(".main-options");
let bag = [];
let innerHTML = '';

dataItems.forEach((item)=>{
    innerHTML +=`<div class="shirt-items">
    <a href="#"><img class="offer_items" src =${item.image}></a>
    <div class="item-contents">
        <div class="company-name"> ${item.companyName}</div>
        <div class="item-name"> ${item.itemName}</div>
        <div class="price">
            <span class="current-price">Rs ${item.price.currentPrice}</span>
            <span class="discount-price">Rs ${item.price.discount}</span>
            <span class="discount">(50% Off)</span>
        </div>
    </div>
    </div>`
})


addDress.innerHTML = innerHTML;


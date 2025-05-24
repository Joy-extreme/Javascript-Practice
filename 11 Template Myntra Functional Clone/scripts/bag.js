onLoad();
function onLoad()
{
  displayBagitems();
  displayPriceDetails();
}

function displayBagitems()
{
  let innerHtml="";
  bagItems.forEach(index => {
    innerHtml +=`
          <div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${items[index-1].imageSrc} ">
            </div>
            <div class="item-right-part">
              <div class="company">${items[index-1].brand}</div>
              <div class="item-name">${items[index-1].itemName}</div>
              <div class="price-container">
                <span class="current-price">Rs ${items[index-1].price-(items[index-1].price * items[index-1].discount/100)}</span>
                <span class="original-price">Rs ${items[index-1].price}</span>
                <span class="discount-percentage">(${items[index-1].discount}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${items[index-1].returnDays} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${items[index-1].date}</span>
              </div>
            </div>
            <div class="remove-from-cart" onclick="removeItems(${index});">X</div>
          </div>
          `;
    
  });
  
  document.querySelector(".bag-items-container").innerHTML= innerHtml;
}

function removeItems(element)
{
  bagItems= bagItems.filter(item=> item != element);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  onLoad();
  displayAddToBagItems();
}
function displayPriceDetails()
{
  let bagSummary = document.querySelector(".bag-summary");
  let totalMRP = 0;
  let afterDiscountMRP = 0;
  let discount = 0;
  const convenienceFees = 99;

  bagItems.forEach(element => {
    totalMRP += items[element-1].price;
    afterDiscountMRP += items[element-1].price-(items[element-1].price * items[element-1].discount/100);
  });
  discount= totalMRP - afterDiscountMRP;
  bagSummary.innerHTML = `
          <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${bagItems.length} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs ${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs${discount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs ${convenienceFees}</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${afterDiscountMRP + convenienceFees}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
          `;
}
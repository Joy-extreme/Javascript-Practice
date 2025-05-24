let bagItems=[];
onLoad();
function onLoad()
{
  displayItems();
  bagItems = JSON.parse(localStorage.getItem("bagItems")) || [];
  displayAddToBagItems();
}

function addToBag(itemsId)
{
  bagItems.push(itemsId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayAddToBagItems();
}
function displayAddToBagItems()
{
  if(bagItems.length > 0)
  {
    document.querySelector(".add-to-bag-count").style.visibility = 'visible';
    document.querySelector(".add-to-bag-count").innerText= bagItems.length;
  }
  else
  {
    document.querySelector(".add-to-bag-count").style.visibility = 'hidden';
  }
}

function displayItems()
{
  if(!document.querySelector('.items-container'))
    return;
  let innerHTML= ``;
  items.forEach(item => {
    innerHTML+=`
                <div class="item-container"> 
                  <img class="item-img" src=${item.imageSrc} alt="item-image">
                  <div class="item-rating">
                  ${item.ratings}⭐| ${item.likes}K
                  </div> 
                  <div class="brand-name">
                    ${item.brand}
                  </div>
                  <div class="item-name">
                    ${item.itemName}
                  </div> 
                  <div class="item-price">
                    <span class="current-price"> Tk ${item.price-(item.price * item.discount/100)}</span>
                    <span class="Original-price"> Tk ${item.price}</span>  
                    <span class="discount">(${item.discount}% OFF)</span>  
                  </div>
                  <button class="add-to-bag-button" onclick="addToBag(${item.id});">Add to Bag</button> 
                </div>`;
  });
  document.querySelector('.items-container').innerHTML= innerHTML;

}

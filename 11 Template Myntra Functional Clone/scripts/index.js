items=[
  {
    imageSrc:"images/1.jpg",
    ratings : 4.5,
    likes: 1.4,
    brand: "Gucci",
    itemName: "Red dress",
    price: 1000,
    discount:25,
  },
  {
    imageSrc:"images/2.jpg",
    ratings : 4.2,
    likes: 0,
    brand: "CUKOO",
    itemName: "Women Padded Halter Neck Swimming Dress",
    price: 5000,
    discount: 30,
  },
  {
    imageSrc:"images/3.jpg",
    ratings : 4.1,
    likes: 1.4,
    brand: "NUEVOSDAMAS",
    itemName: "Women Red & White Printed A-Line Knee-Length Skirts",
    price: 100,
    discount: 20,
  },
  {
    imageSrc:"images/4.jpg",
    ratings : 4.5,
    likes: 1.4,
    brand: "ADIDAS",
    itemName: "Indian Cricket ODI Jersey",
    price: 1000,
    discount:25,
  },
  {
    imageSrc:"images/5.jpg",
    ratings : 0,
    likes: 0,
    brand: "Roadster",
    itemName: "Pure Cotton T-shirt",
    price: 1000,
    discount:25,
  },
  {
    imageSrc:"images/6.jpg",
    ratings : 4.5,
    likes: 1.4,
    brand: "Nike",
    itemName: "Men ReactX Running Shoes",
    price: 1000,
    discount:0,
  },
  {
    imageSrc:"images/7.jpg",
    ratings : 0,
    likes: 2,
    brand: "The Indian Garage Co",
    itemName: "Men Slim Fit Regular Shorts",
    price: 1000,
    discount:25,
  },
  {
    imageSrc:"images/8.jpg",
    ratings : 3.9,
    likes: 0.8,
    brand: "Nivea",
    itemName: "Men Fresh Deodrant 150ml",
    price: 1000,
    discount:25,
  },
];
let innerHTML= ``;
items.forEach(item => {
  innerHTML+=

             `<div class="item-container"> 
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
                <button class="add-to-bag-button">Add to Bag</button> 
              </div>`;
});
document.querySelector('.items-container').innerHTML= innerHTML;
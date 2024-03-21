let data = [{
  title : "Cashew Chicken",
  image: "./assets/cashew.jpg",
  price: "₹400/-"
},
{
  title : "Crispy Pepperoni Chicken",
  image: "./assets/Crispy.jpg",
  price: "₹300/-"
},
{
  title : "Fried Chicken",
  image: "./assets/Fried.jpg",
  price: "₹250/-"
},
{
  title : "Green Lemon Chicken",
  image: "./assets/Green.jpg",
  price: "₹480/-"
},
{
  title : "Grilled Chicken",
  image: "./assets/Grilled.jpg",
  price: "₹150/-"
},
{
  title : "Chicken Lollipop",
  image: "./assets/lollipop.jpg",
  price: "₹150/-"
},
{
  title : "Orange Spicy Chicken",
  image: "./assets/orange.jpg",
  price: "₹290/-"
},
{
  title : "Roasted Half Chicken",
  image: "./assets/Roasted.jpg",
  price: "₹320/-"
},
{
  title : "Soy Sauce Grilled Chicken",
  image: "./assets/soy.jpg",
  price: "₹500/-"
},
{
  title : "Tandoori Chicken",
  image: "./assets/Tandoori.jpg",
  price: "₹600/-"
},
]

data.forEach((element, i)=> {
  
  const mainDiv = document.querySelector('.main');
  
  //creating div for card
  const card = document.createElement('div');
  card.className = 'food-card';
  
  //card image and title info..
  
  const foodCard = `
  <img class ="food-image" src=${data[i].image} alt="${data[i].title}">
  <div class = "title">
  <h3>${data[i].title}</h3>
  <p>${data[i].price}</p>
  </div>
  `;
  
  card.innerHTML += foodCard;
  mainDiv.append(card);
});

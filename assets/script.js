const orders =[
    {dish: "kala vuna", price: 150 ,spicy : true, qty:10},
    {dish: "fish" , price: 300 ,spicy : true, qty:10},
    {dish: "biriyani" , price: 100 , qty:3},
    {dish: "vorta" , price: 10 ,spicy : true, qty:2},
    {dish: "salad" , price: 5 , qty:5},
];

const myForeach = orders.forEach((orders,index) => {
    console.table(`#${index+1}:${orders.qty}x ${orders.dish}`);  
}) 

const myMap =orders.map((o)=>`${o.dish}: $${o.qty * o. price}`)
console.table(myMap);

const myFilter = orders.filter((o)=> o.spicy + o.price)
console.table(myFilter);


let voice = document.getElementById("voice");
let text = document.getElementById("text");

voice.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(utterance);
});
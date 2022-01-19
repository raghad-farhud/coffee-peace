let liOtherLinks = document.querySelector('header .content ul.links li:last-child');
let closeOtherLinks = document.querySelector('header .other-links .close-links');
let otherLinks = document.querySelector('header .container li:last-child .other-links');
let landing = document.querySelector('.container-to-close-links');
let galleryBox = document.querySelectorAll('.gallery .boxes .box ');

liOtherLinks.onclick = ()=>{
    otherLinks.classList.add('activelinks')
}
landing.onclick = ()=>{
    otherLinks.classList.remove('activelinks')
}

window.addEventListener('scroll' , slide);

function slide(){
    let slides = document.querySelectorAll('.slide');

    for (let i = 0; i < slides.length; i++){
        let windowHeight = window.innerHeight;
        let slideTop = slides[i].getBoundingClientRect().top;
        let slidePoint = 150 ;

        if ( slideTop < windowHeight - slidePoint){
            slides[i].classList.add('active');
        }
        else{
            slides[i].classList.remove('active');

        }
    }
}
// start menu 
let hotDrinks = [ 'americano', 'esperesso' , 'latte machiato', 'hot chocolate', 'turkish coffee', 'tea', 'coffee late', 'cappucino', 'mocha'];
let hotDrinksPrices = [ '2.50 $' , '3.75 $' , '4.25 $', '3.75 $', '4.28 $', '2.00 $', '4.75 $', '2.45 $', '5.20 $'];

let coldDrinks = [ 'ice tea', 'ice mocha', 'orange juice', 'apple juice', 'smoothie', 'ice late', 'milk shake' ];
let coldDrinksPrices = [ '1.75 $', '5.23 $', '7.34 $',' 6.50 $', '9.50 $', '4.23 $',' 5.32 $' ];

let desserts = [ 'cheese cake', 'cup cake', 'crip', 'waffle' ,'cookies'];
let dessertsPrices = [ '10.23 $', '8.25 $', '12.42 $', '7.99 $', '4.32 $'];

// icons 



let menuContent = document.querySelector('.menu .content');


for(let i = 0; i<hotDrinks.length; i++){
    let box = document.createElement('div');
    box.classList.add('box');
    box.classList.add('hot');
    menuContent.appendChild(box);
    
    let innerBox = document.createElement('div');
    innerBox.classList.add('innerBox');
    box.appendChild(innerBox);

    let hotCupI = document.createElement('i');
    hotCupI.classList.add('fa-mug-hot')
    hotCupI.classList.add('fas')

    let hotDrink = document.createElement('div');
    hotDrink.textContent = hotDrinks[i];
    innerBox.appendChild(hotCupI)
    innerBox.appendChild(hotDrink);

    let price = document.createElement('span');
    price.textContent = hotDrinksPrices[i];
    box.appendChild(price);
}

for(let i = 0; i<coldDrinks.length; i++){
    let box = document.createElement('div');
    box.classList.add('box');
    box.classList.add('cold');
    menuContent.appendChild(box);
        
    let innerBox = document.createElement('div');
    innerBox.classList.add('innerBox');
    box.appendChild(innerBox);
    
    let coldCupI = document.createElement('i');
    coldCupI.classList.add('fa-coffee')
    coldCupI.classList.add('fas')


    let coldDrink = document.createElement('div');
    coldDrink.textContent = coldDrinks[i];
    innerBox.appendChild(coldCupI);
    innerBox.appendChild(coldDrink);

    let price = document.createElement('span');
    price.textContent = coldDrinksPrices[i];
    box.appendChild(price);
}
for(let i = 0; i<desserts.length; i++){
    let box = document.createElement('div');
    box.classList.add('box');
    box.classList.add('dessert');
    menuContent.appendChild(box);
    
    let innerBox = document.createElement('div');
    innerBox.classList.add('innerBox');
    box.appendChild(innerBox);

    let dessertI = document.createElement('i');
    dessertI.classList.add('fa-cookie')
    dessertI.classList.add('fas')

    let dessert = document.createElement('div');
    dessert.textContent = desserts[i];
    innerBox.appendChild(dessertI);
    innerBox.appendChild(dessert)

    let price = document.createElement('span');
    price.textContent = dessertsPrices[i];
    box.appendChild(price);
}

document.querySelector('.menu ul.list li.all').classList.add('active')
let allItem = document.querySelectorAll('.menu .content .box');
let hotItem = document.querySelectorAll('.menu .content .box.hot');
let coldItem = document.querySelectorAll('.menu .content .box.cold');
let dessertItem = document.querySelectorAll('.menu .content .box.dessert');
allItem.forEach((a)=>{
    a.classList.add('activeItem');
})
// end menu 
// start menu list filter
let allMenuList = document.querySelector('.menu ul.list li.all');
let hotMenuList = document.querySelector('.menu ul.list li.hot');
let coldMenuList = document.querySelector('.menu ul.list li.cold');
let dessertMenuList = document.querySelector('.menu ul.list li.dessert');

allMenuList.addEventListener('click', ()=>{
    let allLists = document.querySelectorAll('.menu ul.list li');
    allLists.forEach(a =>{
        a.classList.remove('active')
    })
    document.querySelector('.menu ul.list li.all').classList.add('active')
    allItem.forEach((a)=>{
        a.classList.add('activeItem');
    })
})

hotMenuList.addEventListener('click', ()=>{
    let allLists = document.querySelectorAll('.menu ul.list li');
    allLists.forEach(a =>{
        a.classList.remove('active')
    })
    document.querySelector('.menu ul.list li.hot').classList.add('active')
    allItem.forEach((a)=>{
        a.classList.remove('activeItem');
    })
    hotItem.forEach((a)=>{
        a.classList.add('activeItem');
    })
})

coldMenuList.addEventListener('click', ()=>{
    let allLists = document.querySelectorAll('.menu ul.list li');
    allLists.forEach(a =>{
        a.classList.remove('active')
    })
    document.querySelector('.menu ul.list li.cold').classList.add('active')
    allItem.forEach((a)=>{
        a.classList.remove('activeItem');
    })
    coldItem.forEach((a)=>{
        a.classList.add('activeItem');
    })
})

dessertMenuList.addEventListener('click', ()=>{
    let allLists = document.querySelectorAll('.menu ul.list li');
    allLists.forEach(a =>{
        a.classList.remove('active')
    })
    document.querySelector('.menu ul.list li.dessert').classList.add('active')
    allItem.forEach((a)=>{
        a.classList.remove('activeItem');
    })
    dessertItem.forEach((a)=>{
        a.classList.add('activeItem');
    })
})
// end menu list filter

// start video //
let videosList = Array.from(document.querySelectorAll('.video .content .list ul li'));
let videos = Array.from(document.querySelectorAll('.video .content .videos iframe'));

videosList.forEach(elm => {
    elm.addEventListener('click', (e)=>{
        
        videosList.forEach(elm => {
            elm.classList.remove('active');
        })
        e.currentTarget.classList.add('active')
        
        videos.forEach(vid =>{
            vid.classList.remove('active-video')
        })
        document.querySelector(e.currentTarget.dataset.vid).classList.add('active-video')
    })
})
// end video //













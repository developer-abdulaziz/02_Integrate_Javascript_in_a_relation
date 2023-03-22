
// 1. where to add
const placesList = document.getElementById('places_list');
// 2. what to added 
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

// 3. add the child
placesList.appendChild(li);




// 1. where to add
const mainContainer = document.getElementById('main_container');
// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);


//=============================
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biryani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li2.innerText = 'salad';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'tomatto';
ul.appendChild(li4);

const li5 = document.createElement('li');
li5.innerText = 'kacha morich';
ul.appendChild(li5);

section.appendChild(ul);
mainContainer.appendChild(section);


// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress section </h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>sando genji</li>
</ul>
`;

mainContainer.appendChild(sectionDress);
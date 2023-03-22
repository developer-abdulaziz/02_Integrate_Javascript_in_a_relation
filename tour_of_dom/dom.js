
const liCollection = document.getElementsByTagName('li');
/*
for(let i = 0; i < liCollection.length; i++){
    const index = i;
    const element = liCollection[index];
    console.log(index, element.innerText);
}
*/
// for(const element of liCollection){
//     console.log(element.innerText);
// }





//getElementsByTagName
const allHeadings = document.getElementsByTagName('h1');
/*
for(let i = 0; i < allHeadings.length; i++){
    const index = i;
    const element = allHeadings[index];
    console.log(index, element.innerText);
}
*/
/*
for(const element of allHeadings){
    console.log(element.innerText);
}
*/

//getElementById
// const fruits = document.getElementById('fruits_title');
// console.log(fruits.innerText='My Tour List');


//===================
const fruitsTitle = document.getElementById('fruits_title');

fruitsTitle.innerText = 'Fruits changed by JS'

//getElementsByClassName
const places = document.getElementsByClassName('important_places');

/*
for(let i = 0; i < places.length; i++){
    const index = i;
    const place = places[index];
    console.log(place);
}
*/
/*
for(const place of places){
    console.log(place.innerText);
}
*/


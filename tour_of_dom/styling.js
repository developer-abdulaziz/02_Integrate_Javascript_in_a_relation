
const sections = document.querySelectorAll('section');
/*
for(let i = 0; i < sections.length; i++){
    let index = i;
    let section = sections[index];
    console.log(section.style.border = '2px solid red');
}
*/
for (const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.padding = '10px';
    section.style.borderRadius = '15px';
    section.style.background = 'lightgray';
    section.style.fonts
}




// const placesContainer = document.getElementById('places_container');
// // placesContainer.style.backgroundColor = 'orange';
// placesContainer.childNodes;
// console.log(placesContainer);
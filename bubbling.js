const grandParent=document.getElementById('grandparent');
const parentDiv=document.getElementById('parent');
const child=document.getElementById('child');

// bubbling up -> false (by default)
// trickle down -> true

// grandParent.addEventListener('click',()=>{
//     console.log('gp has been clicked');
// },true);

// parentDiv.addEventListener('click',()=>{
//     console.log('parent has been clicked');
// },true);

// child.addEventListener('click',()=>{
//     console.log('child has been clicked');
// },true);

grandParent.addEventListener('click',(event)=>{
    event.stopPropagation();
    console.log('gp has been clicked');
});

parentDiv.addEventListener('click',(event)=>{
    event.stopPropagation();
    console.log('parent has been clicked');
})

child.addEventListener('click',(event)=>{
    event.stopPropagation();
    console.log('child has been clicked');
});
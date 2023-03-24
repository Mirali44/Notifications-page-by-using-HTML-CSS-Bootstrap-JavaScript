const mark=document.querySelector('.right');
const toggle=document.querySelector('.toggle');
const dot=document.querySelectorAll('.dot');
const unread=document.querySelectorAll('.unread');

mark.addEventListener('click',()=>{
    dot.forEach(elements=>{
        elements.getAttribute('dot');
        elements.setAttribute('style','display:none');
    })
toggle.textContent='0';
unread.forEach(elements=>{
    elements.getAttribute('unread');
    elements.setAttribute('style','background-color:white');
})
})

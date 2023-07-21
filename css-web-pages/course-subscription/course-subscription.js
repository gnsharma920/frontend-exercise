
const modal=document.querySelector('.modal');
const chooseButton=document.querySelectorAll('.selectButton button');
const negativeButton=document.querySelector('.modal-action__negative');

chooseButton.forEach(button => button.addEventListener('click',function(){
    backdrop.classList.add('open');
    modal.classList.add('open');
}));

negativeButton.addEventListener('click',function(){
    backdrop.classList.remove('open');
    modal.classList.remove('open');
});


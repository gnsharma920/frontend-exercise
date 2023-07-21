const backdrop=document.querySelector('.backdrop');
const toggleButton=document.querySelector('.toggle-button');
const sideNav=document.querySelector('.side-nav');
const closeButton=document.querySelector('.side-nav .closeButton ');

toggleButton.addEventListener('click',function(){
    sideNav.classList.add('open');
    backdrop.classList.add('open');
});

closeButton.addEventListener('click',function(){
    sideNav.classList.remove('open');
    backdrop.classList.remove('open');
})


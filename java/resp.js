burger=document.querySelector('.burger')
ig1=document.querySelector('.ig1')
nav=document.querySelector('.nav')
click=document.querySelector('.click')

burger.addEventListener('click',()=>{
    ig1.classList.toggle('resp-ig1')
    nav.classList.toggle('resp-nav')
    click.classList.toggle('resp-click')
})
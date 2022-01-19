const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const footer = document.querySelector('footer')
const body = document.querySelector('body')
const dark = 'dark-mode'

button.addEventListener('click',()=>{
   button.classList.toggle(dark)
   h1.classList.toggle(dark)
   body.classList.toggle(dark)
   footer.classList.toggle(dark)
   if (button.className == 'dark-mode') {
       h1.innerHTML = 'Dark mode ON'
       button.innerHTML = 'Light Mode'
   }else{
    h1.innerHTML = 'Light mode ON'
    button.innerHTML = 'Dark Mode'
   }
})
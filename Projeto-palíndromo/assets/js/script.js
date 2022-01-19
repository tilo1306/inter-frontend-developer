const button = document.querySelector('.button')
const inputText = document.getElementById('input')

button.addEventListener('click',(event)=>{
 event.preventDefault()
 checkPalindrome(inputText.value)
});

function checkPalindrome(text) {
  let checkText = text.split("").reverse().join("");
  if (Number(text)) {
    return alert('Por favor, digitar somente letras!!');
  }
  if (checkText.toUpperCase().replace(/[^a-zA-Z0-9]/g, '') === text.toUpperCase().replace(/[^a-zA-Z0-9]/g, '') ) {
    return alert (
    `O texto digitado e um Palindrome.\n
    Que invertido ficaria assim:\n
    ${checkText}
    `);
  }
}


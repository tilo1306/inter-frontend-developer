const description = document.getElementById("description");
const button = document.getElementById("button");
const section = document.querySelector(".container1");
const newSection = document.querySelector('.list')



button.addEventListener("click", () => {
  const div = document.createElement("div");
  newSection.appendChild(div);
  div.innerHTML = createCheckbox();
});

function createCheckbox() {
  return `
    <input type="checkbox" class= "checkbox" onclick="finished()">
    <span> ${description.value}</span>
    `;
}

function finished() {
  const checkbox = document.querySelectorAll(".checkbox");
  const span = document.getElementsByTagName('span')
  checkbox.forEach(( element,index) =>{
    checkbox[index].checked == true ? span[index].classList.add("finished") :span[index].classList.remove("finished")
  });
}


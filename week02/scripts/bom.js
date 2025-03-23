let input = document.querySelector("#favchap");
let button = document.querySelector("button");
let list = document.querySelector("____");
const li = document.createElement("li");
const deleteButton = document.createElement("button")

li.innerHTML = input.value;
deleteButton.textContent = "❌";
li.append(deleteButton);
list.append(li);

button.addEventListener("click", function(){

    if (input.value.trim() !== "") {
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);
    };

})
deleteButton.addEventListener("click", function() {
    list.removeChild(li);
    input.focus();
    input.value = "";
})
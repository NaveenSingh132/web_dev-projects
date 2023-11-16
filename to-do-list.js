const inputBox = document.querySelector('input');
const listContainer = document.querySelector('.list-container');
let btn = document.querySelector('button');

btn.addEventListener("click", function() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        const li = document.createElement('li');
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        const span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
});

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();



// In JavaScript, the setItem() function is used to store a key-value pair in the web browser's
// local storage. Local storage is a simple way to store data on the client side, 
// making it available even after the user closes the browser or navigates away from the web page. 
// The data stored in local storage is associated with a specific domain, and it's available across sessions.
// The setItem() function is part of the localStorage object and takes two arguments:
// A key: This is a string that acts as the identifier for the data you want to store. You use this key to retrieve the data later.
// A value: This is the actual data you want to store. It can be a string, number, boolean, or any serializable data.

// localStorage.setItem('username', 'john_doe');

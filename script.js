//your code here!

// script.js
document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("infi-list");

    // Function to add list items
    function addItems(count) {
        for (let i = 0; i < count; i++) {
            const li = document.createElement("li");
            li.textContent = "List item " + (list.children.length + 1);
            list.appendChild(li);
        }
    }

    // Add 10 list items by default
    addItems(10);

    // Event listener to check when user scrolls to the end of the list
    list.addEventListener("scroll", function () {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            // Add 2 more list items when user reaches the end
            addItems(2);
        }
    });
});

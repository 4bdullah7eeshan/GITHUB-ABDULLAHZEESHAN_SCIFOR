
const form = document.querySelector('form');
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const p = document.createElement("p");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (a.value > b.value && a.value > c.value) {
        p.textContent = "A is the largest."
    } else if (a.value < b.value || b.value < c.value) {
        p.textContent = "Either A is less than B, OR B is less than C."
    } else if (a.value != c.value) {
        p.textContent = "A and C are not equal."
    }
    document.body.appendChild(p);

})




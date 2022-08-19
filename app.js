const toDo = document.querySelector("#Todo");
const type = document.querySelector("#task");
const names = document.querySelector(".NOC");
const delet = document.querySelector("#clear");
const theme = document.querySelector(".btn-to-switch")

const bdy = document.querySelector("body");
const ctn = document.querySelector(".contener");

theme.addEventListener("click", function() {
    bdy.classList.toggle("dark-body")
    ctn.classList.toggle("dark-contener")
    theme.classList.toggle("dark-btn");
    const todo_p = document.querySelectorAll("p");
    for (let p of todo_p) {
        if (bdy.classList.contains("dark-body") == true) {
            p.classList.add("dark-darkP");
            names.classList.add("dark-contener");
        } else {
            p.classList.remove("dark-darkP");
            names.classList.remove("dark-contener");
        }
    }
})

toDo.addEventListener("submit", function(e) {
    e.preventDefault();
    if (type.value != "") {
        console.log(type.value);

        const actualtodo = document.createElement("p");
        actualtodo.classList.add("darkP");

        if (bdy.classList.contains("dark-body") == true) {
            actualtodo.classList.add("dark-darkP");
            names.classList.add("dark-contener");
        } else {
            actualtodo.classList.remove("dark-darkP");
            names.classList.remove("dark-contener");
        }

        const delBtn = document.createElement("button");
        const spn = document.createElement("span");

        spn.innerText = type.value;

        delBtn.innerHTML = `<img src="deletBtn.svg" alt="" height="30" width="30">`

        delBtn.addEventListener("click", function() {
            delt();
        })

        spn.addEventListener("click", function() {
            console.log("Strike");
            spn.classList.toggle("strike");
        })

        function delt() {
            delBtn.parentElement.remove();
        }
        actualtodo.append(spn)
        actualtodo.append(delBtn);
        names.append(actualtodo);
        type.value = "";
    }
})


delet.addEventListener("click", function() {
    const lists = document.querySelectorAll("p");
    for (let list of lists) {
        list.remove();
    }
})
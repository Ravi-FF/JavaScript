let first = document.querySelector("#firstinput")
let span = document.querySelector("span")
first.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        clickFun();
    }
})
let clickFun = () => {
    let input = document.querySelector("#firstinput");
    let pera;
    if (input.value == "") {
        alert("please enter value")
        return;
    }
    let checkinput = document.querySelectorAll(".show_res");
    for (const iterator of checkinput) {
        if (iterator.value == input.value) {
            span.innerText = "*value already exists"
        } else {
            span.innerText = ""
        }
    }
    let ul = document.querySelector("ul");
    pera = document.createElement("li");
    let text = `<input type="checkbox" class="check" onchange="checkoneBox(this)">
            <div class="input-div">
                <input type="text" class="show_res" value="${input.value}" disabled>
            </div>
            <div class="icon">
                <i class="fa-solid fa-pen-to-square" onclick="edit_Fun(this)"></i>
                <i class="fa-solid fa-trash delete" onclick="delete_Fun(this)"></i>
            </div>`
    pera.innerHTML = text;
    ul.append(pera);
    pera.querySelector(".check").checked = true;
    if (!input.value == "") {
        input.value = ""
    }
}

let edit_Fun = (getitem) => {
    let getli = getitem.parentElement.parentElement.querySelector(".show_res");
    let getCheck = getitem.parentElement.parentElement.querySelector(".check");
    getli.toggleAttribute("disabled");
    getli.focus();
    getli.hasAttribute("disabled") ? getCheck.checked = true : getCheck.checked = false
}
let delete_Fun = (getitem) => {
    let getli = getitem.parentElement.parentElement;
    getli.remove()
}

let checkoneBox = (getInput) => {
    let input = getInput.parentElement.querySelector(".show_res");
    input.toggleAttribute("disabled")
    input.focus();
}
let topBox = (getbox) => {
    let boxes = document.querySelectorAll(".check");
    let inputes = document.querySelectorAll(".show_res");
    if (getbox.checked == true) {
        for (const iterator of boxes) {
            iterator.checked = true;
        }
        for (const iterator of inputes) {
            iterator.setAttribute("disabled", "disabled")
        }


    } else {
        for (const iterator of boxes) {
            iterator.checked = false;
        }
        for (const iterator of inputes) {
            iterator.removeAttribute("disabled")
        }

    }
}
let deleteAll = () => {
    let inputes = document.querySelectorAll("li");
    let firstCheck = document.querySelector("#firstbox")
    for (const iterator of inputes) {
        iterator.remove()
    }
    span.innerText=""
    firstCheck.checked = false;
}
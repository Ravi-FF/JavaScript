let span = document.querySelector("span");
let input = document.querySelector("#firstinput");
let funRun = () => {
    if (input.value == "") {
        alert("please enter value");
        span.innerHTML = ""
    }
    else {
        clickFun()
        if (!input.value == "") {
            input.value = ""
        }
    }

}

let clickFun = () => {
    let Invalue = JSON.parse(localStorage.getItem("value")) ?? []
    let checkStatus = 0
    for (v of Invalue) {
        if (v.value == input.value) {
            checkStatus = 1;
            break;
        }
    }
    if (checkStatus === 1) {
        span.innerHTML = "Value already exists"
    } else {
        Invalue.push({
            'value': input.value
        })
        span.innerHTML = ""
        localStorage.setItem("value", JSON.stringify(Invalue))
        createItem()
    }
}

function createItem() {
    let Invalue = JSON.parse(localStorage.getItem("value")) ?? []
    let ul = document.querySelector("ul");
    ul.innerHTML = ''
    Invalue.forEach((element, i) => {
        ul.innerHTML += `<li><input type="checkbox" class="check" onchange="checkoneBox(this)">
            <div class="input-div">
                <input type="text" class="show_res" value="${element.value}" disabled>
            </div>
            <div class="icon">
                <i class="fa-solid fa-pen-to-square" onclick="edit_Fun(${i},event)"></i>
                <i class="fa-solid fa-trash delete" onclick="delete_Fun(${i})"></i>
            </div></li>`

    });
}
createItem()

let edit_Fun = (getitem, e) => {
    let x = e.target.parentElement.parentElement.querySelector(".show_res")
    let Invalue = JSON.parse(localStorage.getItem("value")) ?? []
    Invalue[0].value = x.value
    localStorage.setItem("value", JSON.stringify(Invalue))
    x.toggleAttribute("disabled");
    x.focus();
}

let delete_Fun = (getitem) => {
    let Invalue = JSON.parse(localStorage.getItem("value")) ?? []
    Invalue.splice(getitem, 1)
    localStorage.setItem("value", JSON.stringify(Invalue))
    span.innerHTML = ""
    createItem()
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
    let Invalue = JSON.parse(localStorage.getItem("value")) ?? []
    Invalue.splice(Invalue)
    localStorage.setItem("value", JSON.stringify(Invalue))
    span.innerHTML = ""
    createItem()
}


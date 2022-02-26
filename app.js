
// looping through the to do list

let getTodo = JSON.parse(localStorage.getItem("Todo-list"))
console.log(getTodo)
let display = document.querySelector('.display')
for(let t in getTodo) {
    console.log(getTodo[t])
    display.innerHTML +=`
    <div class="content">
        <div class="close"><span>&times;</span></div>
        <div class="check-container">
            <input type="checkbox" class="checkmate">
        </div>
        <div class="text-content">
            ${getTodo[t]}
        </div>
    </div>
    `
}

// close btn
let big = Array.from(document.querySelectorAll('.close'));
console.log(big)
big.map(span => {
    span.addEventListener('click', (e)=>{
        e.target.closest('.content').style.display="none";
    })
})


let check = Array.from(document.querySelectorAll('.checkmate'));
console.log(check)
check.map(sam => {
    sam.addEventListener('click', (e)=>{
        if(e.target.checked === true ) {
            e.target.closest('.content').style.textDecoration ="line-through";
        }else if (e.target.checked === false) {
            e.target.closest('.content').style.textDecoration ="none";
        }

    })
})

// check submit button
let toDo =[]
let toDoInput = document.querySelector('#todo')
let submit = document.querySelector('#submit')
submit.addEventListener('click', (e)=>{

    if(toDoInput.value === "") {
        alert("This can't be empty")
    }else {
            toDo.push(toDoInput.value)
            //console.log(toDo)
            localStorage.setItem('Todo-list', JSON.stringify(toDo))
    }
    let raid = document.querySelector('#todo').value="";

    // looping through the to do list

    let getTodo = JSON.parse(localStorage.getItem("Todo-list"))
    console.log(getTodo)
    let display = document.querySelector('.display')
    for(let t in getTodo) {
        console.log(getTodo[t])
        display.innerHTML +=`
        <div class="content">
            <div class="close"><span>&times;</span></div>
            <div class="check-container">
                <input type="checkbox" class="checkmate">
            </div>
            <div class="text-content">
                ${getTodo[t]}
            </div>
        </div>
        `
    }
})

//const addbutton = document.getElementById('addbutton');
const inputBox = document.getElementById('inputBox');
const taskList = document.getElementById('taskList');
const pendingNumb = document.getElementById('pendingNumb');
const deletAllButton = document.getElementById('deletAllButton');
let selectedIndex;
let tasks = [];
pendingNumb.innerHTML = tasks.length
function deleteTask(index) {
    tasks.splice(index, 1);
    updateTasks();
}
function edittext(index){
    let editbtn=document.getElementById("Savebutton");
    let addbtn=document.getElementById("addbutton");
    addbtn.disabled=true;
    editbtn.disabled=false;
    inputBox.value=tasks[index]
    selectedIndex = index;
    updateTasks();
    
}
function addbutton(tag) {
    
    if(tag === 'add') {
        if(inputBox.value !== ''){
            tasks.push(inputBox.value)
        }
        else{
            alert("invalid")
        }
        inputBox.value = null;
        console.log(tasks)
        updateTasks();
    } else {
        if(inputBox.value !== ''){
            tasks[selectedIndex] = inputBox.value
        updateTasks()
        console.log(tasks)
        let addbtn=document.getElementById("addbutton");
        addbtn.disabled=false;
        let editbtn=document.getElementById("Savebutton");
        editbtn.disabled=true;
        inputBox.value='';
        }
     else{
        alert("invalid")
     }
    }
}
// const letsmove = (e) => {
//     tasks.push(inputBox.value)
//     inputBox.value = null;
//     console.log(tasks)
//     updateTasks()
// }

function updateTasks() {
    taskList.innerHTML = '';
    tasks.map((item,i)=>{
        let span = document.createElement('span');
        let li = document.createElement('li');
        let div = document.createElement('div');
        let text = document.createTextNode(item);
        const input = document.createElement('input');
        input.setAttribute('type','checkbox');
        input.setAttribute('onclick','doalert(this)');
        span.appendChild(input);
        span.appendChild(text);
        // span.style.textDecoration='line-through';
        div.appendChild(span);
        const button = document.createElement('button');
        const buttoned = document.createElement('button');
        let secondtext = document.createTextNode('Delete');
        let edittext = document.createTextNode('edit');
        button.appendChild(secondtext)
        buttoned.appendChild(edittext)
        div.classList.add('div-li');
        button.classList.add('btn');
        button.classList.add('btn-danger');
        // button.classList.edit('btn-edit');
        button.setAttribute('onClick', `deleteTask(${i})`)
        buttoned.setAttribute('onClick', `edittext(${i})`)
        div.appendChild(button)
        div.appendChild(buttoned)
        // buttoned.style.color='#ADD8E6;'
        li.appendChild(div)
        li.style.marginTop= '10px';

        taskList.append(li);
        buttoned.style.color='#FFFFFF'
        buttoned.style.backgroundColor='#000000'
        buttoned.style.width='50px'
    })
    // for (let i = 0; i < tasks.length; i++) {
    //     let span = document.createElement('span');
    //     let li = document.createElement('li');
    //     let div = document.createElement('div');
    //     let text = document.createTextNode(tasks[i]);
    //     const input = document.createElement('input');
    //     input.setAttribute('type','checkbox');
    //     input.setAttribute('onclick','doalert(this)');
    //     span.appendChild(input);
    //     span.appendChild(text);
    //     // span.style.textDecoration='line-through';
    //     div.appendChild(span);
         
    //     const button = document.createElement('button');
    //     const buttoned = document.createElement('button');
    //     let secondtext = document.createTextNode('Delete');
    //     let edittext = document.createTextNode('edit');
    //     button.appendChild(secondtext)
    //     buttoned.appendChild(edittext)
    //     div.classList.add('div-li');
    //     button.classList.add('btn');
    //     button.classList.add('btn-danger');
    //     // button.classList.edit('btn-edit');
    //     button.setAttribute('onClick', `deleteTask(${i})`)
    //     buttoned.setAttribute('onClick', `edittext(${i})`)
    //     div.appendChild(button)
    //     div.appendChild(buttoned)
    //     // buttoned.style.color='#ADD8E6;'
    //     li.appendChild(div)
    //     li.style.marginTop= '10px';

    //     taskList.append(li);
    //     buttoned.style.color='#FFFFFF'
    //     buttoned.style.backgroundColor='#000000'
    //     buttoned.style.width='50px'
    // }     
}

function doalert(checkboxElem) {

    if (checkboxElem.checked) {
        checkboxElem.parentNode.style.textDecoration='line-through';
    } else {
        checkboxElem.parentNode.style.textDecoration='none';
    }
  }

function showTasks() {
    let getlocalstorage = localStorage.getItem("New Todo"); //getting localstorage
    if (getlocalstorage == null) { //if localstorage is null
        listArr = []; //creating a blank array
    } else {
        listArr = JSON.parse(getlocalstorage); //transforming js string into js object
    }
    let newLiTag = '';
    listArr.array.forEach((element, index) => {
        newLiTag += `<li> ${element}<span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span> </li>`;
    });
    let edittext = '';
    listArr.array.forEach((element, index) => {
        newLiTag += `<li> ${element}<span onclick="edittext(${index})"; ><i class="fa fa-edit"></i></span> </li>`;
    });
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
    inputBox.value = ""; //once task added leave the input field blank
}
//delete all tasks function
deletAllButton.onclick = () => {
    tasks = []
    let addbtn=document.getElementById("addbutton");
        addbtn.disabled=false;
        let editbtn=document.getElementById("Savebutton");
        editbtn.disabled=true;
        inputBox.value='';
    updateTasks()
    // listArr = []; //empty an array
    // //after delete all task again update the local storage
    // localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a js string
    // showTasks(); //calling showTasks function
}

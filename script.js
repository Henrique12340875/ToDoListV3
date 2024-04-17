const localStorageKey = "Tasks"
function add(){
    let title = document.getElementById("title");

    if(!title.value){
        alert("Digite uma tarefa!");
    }

    let json = localStorage.getItem(localStorageKey)
    let tasks = json ? JSON.parse(json):[];

    tasks.push({
        title:title.value
    })

    localStorage.setItem(localStorageKey,JSON.stringify(tasks))

    alert("A tarefa foi adicionada!");
    
    showValue()
}
function showValue(){
    let tasksElement = document.getElementById("listTask");
    let json = localStorage.getItem(localStorageKey);
    let tasks =json ? JSON.parse(json):[];

    tasksElement.innerHTML = "";

    for(let c= 0;c<tasks.length;c++){
        tasksElement.innerHTML += `<li class="task">${tasks[c].title} <button class="remove" onclick="remove('${tasks[c].title}')"><i class='bx bx-check'></i></button></li>`;
    }
}
function remove(data){
    let json = localStorage.getItem(localStorageKey);
    let tasks =json ? JSON.parse(json):[];

    let c = tasks.findIndex(tasks=>tasks.title == data);
    tasks.splice(c,1);

    localStorage.setItem(localStorageKey,JSON.stringify(tasks));
    showValue();
}
showValue()
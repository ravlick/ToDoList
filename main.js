
function toDoList(nodeSelector) {

	//Массив заданий
	this.tasks = [];
	this.node = document.body.querySelector(nodeSelector);

}

HTMLElement.prototype.prepend = function(node) {
	this.insertBefore(node, this.firstChild);
}

//Для добавления заданий
toDoList.prototype.addTask = function (name){
	let li = document.createElement("li");
	li.innerText = name;

	let box = document.createElement("input");
	box.type = "checkbox";

	let close = document.createElement("button");
	close.innerText = "X";

	li.appendChild(box);
	li.appendChild(close);

	//li.prepend(close);

	let newTask = {
		taskName: name,
		taskNode: li,
		taskIsDone: false
	};

	box.addEventListener("change", ()=>{
		newTask.taskIsDone = box.checked;
		li.style.textDecoration = (box.checked) ? "line-through" : "";
	});

	close.addEventListener("click", ()=>{
		let index = this.tasks.indexOf(newTask);
		this.tasks.splice(index, 1);
		this.render();
	});

	this.tasks.push(newTask);
	this.render();
}

//Для того чтобы рисовать
toDoList.prototype.render = function(){
	this.node.innerHTML = "";
	this.tasks.forEach(
		(item)=>{
			this.node.appendChild(item.taskNode);
		}
	);
}

let manager = new toDoList("#todo ul");
manager.addTask("Task 1");
manager.addTask("Task 456");
manager.addTask("Task 345");
manager.addTask("Task dsg");

//console.log(manager);
let bt = document.getElementById("add");
let input = document.getElementById("name");

bt.addEventListener("click", ()=>{
	if (input.value) manager.addTask(input.value);
});


let buttons = document.getElementsByTagName('button');


for(let i=0; i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
    	console.log(buttons[i].parentElement.children[1].style.textDecoration);
    	console.log(buttons[i].parentElement.children);

    	if (buttons[i].parentElement.children[1].style.textDecoration === "line-through") {
        	buttons[i].parentElement.children[1].style.textDecoration = "none";
        }
        else{
        	buttons[i].parentElement.children[1].style.textDecoration = "line-through"
        }
    });
}


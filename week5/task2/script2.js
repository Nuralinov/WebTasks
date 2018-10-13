let imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++ ){
    imgs[i].addEventListener('click',task2);
}

function task2(e){	
    document.getElementsByTagName("img")[0].setAttribute("src",e.currentTarget.getAttribute("src"));
}

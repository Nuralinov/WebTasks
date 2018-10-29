let cars = [{brand:'Toyota',model:'Camry','year':1999,'price':20000,image_url:"https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"},{brand:'BMW',model:'X6',year:2014,price:25000,image_url:"https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"},{brand:'Daewoo',model:'Nexia',year:2007,price:15000,image_url:"https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"}];

let sum = document.getElementById("sum");
let items = document.getElementById("items");
let carsElement = document.getElementById("cars");


for(let i=0;i<cars.length;i++){
    carsElement.innerHTML += '  <div class="card"><div class="basket"><img src="http://iseekmate.com/uploads/posts/2015-03/1425558596_unnamed.png"></div><img src="'+cars[i]["image_url"]+'" alt=""><h4>'+cars[i]["brand"]+ ' ' + cars[i]["model"] +'</h4></div>';
}


let baskets = document.getElementsByClassName("basket");
for(let j=0;j<baskets.length;j++){
    baskets[j].addEventListener("click",function(){

    	console.log(this.className);

        if(this.classList.value === 'basket1'){
            items.innerHTML = parseInt(items.innerHTML) - 1;
            this.className = "basket";
            this.children[0].setAttribute("src","http://iseekmate.com/uploads/posts/2015-03/1425558596_unnamed.png"); 
            sum.innerHTML = parseInt(sum.innerHTML) - parseInt(cars[j]["price"]);    
        }
        else{
            items.innerHTML = parseInt(items.innerHTML) + 1;
            this.className= "basket1";
            this.children[0].setAttribute("src","https://image.flaticon.com/icons/png/512/21/21004.png"); 
            sum.innerHTML = parseInt(sum.innerHTML) + parseInt(cars[j]["price"]);    
        } 
    }); 
}

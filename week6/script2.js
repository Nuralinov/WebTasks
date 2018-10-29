let x = [1,2,3,4,5];
for (let i = 0; i<x.lenght; i++){
	alert(x[i]);
}

let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

/* Write your code here */

let countriesElement = document.getElementById("countries");  
let citiesElement = document.getElementById("cities");

for(let i=0;i<countries.length;i++){
    countriesElement.innerHTML += "<option>"+ countries[i] +"</option>" //add countries
}

function CityChanges(event){ //<select>
	console.log(event);
    let indexOfSelected = event.selectedIndex; // indexOfchoosenSelected
    let nameOfCountry =  event.options[indexOfSelected].text; //Kazakhstan
    citiesElement.innerHTML = ""; // zanovo
    for(let j=0;j<cities_by_country[countriesElement.value].length;j++){
        citiesElement.innerHTML += "<option>"+ cities_by_country[nameOfCountry][j] +"</option>" // add cities
    }

}


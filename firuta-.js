let boxstyle = document.querySelectorAll(".box");

let chickennuggetsSwitch = false;
let ChickenNuggets = document.querySelector(".chickennuggets");
ChickenNuggets.onclick = ChickenNuggetsSearchOn;

function ChickenNuggetsSearchOn(){
    if(!chickennuggetsSwitch){
        ChickenNuggets.style.backgroundColor = "#b4b4b4";
        chickennuggetsSwitch = true;
        for(let i=0; i<boxstyle.length; i++){
            let discountText = boxstyle[i].innerHTML;
            let Searchkeyword = discountText.search("雞塊");
            if(Searchkeyword < 0){
                boxstyle[i].style.display = "none";
            }
        }
    }else {
        ChickenNuggets.style.backgroundColor = "white";
        chickennuggetsSwitch = false;
        for(let i=0; i<boxstyle.length; i++){
            boxstyle[i].style.display = "block";
        }
    }
}

let friesSwitch = false;
let fries = document.querySelector(".fries");
fries.onclick = friesSearchOn;

function friesSearchOn(){
    if(!friesSwitch){
        fries.style.backgroundColor = "#b4b4b4";
        friesSwitch = true;
        for(let i=0; i<boxstyle.length; i++){
            let discountText = boxstyle[i].innerHTML;
            let Searchkeyword = discountText.search("薯");
            if(Searchkeyword < 0){
                boxstyle[i].style.display = "none";
            }
        }
    }else {
        fries.style.backgroundColor = "white";
        friesSwitch = false;
        for(let i=0; i<boxstyle.length; i++){
            boxstyle[i].style.display = "block";
        }
    }
}

let friedchickenSwitch = false;
let friedchicken = document.querySelector(".friedchicken");
friedchicken.onclick = friedchickenSearchOn;

function friedchickenSearchOn(){
    if(!friedchickenSwitch){
        friedchicken.style.backgroundColor = "#b4b4b4";
        friedchickenSwitch = true;
        for(let i=0; i<boxstyle.length; i++){
            let discountText = boxstyle[i].innerHTML;
            let Searchkeyword = discountText.search("炸雞");
            if(Searchkeyword < 0){
                boxstyle[i].style.display = "none";
            }
        }
    }else {
        friedchicken.style.backgroundColor = "white";
        friedchickenSwitch = false;
        for(let i=0; i<boxstyle.length; i++){
            boxstyle[i].style.display = "block";
        }
    }
}

let drinkSwitch = false;
let drink = document.querySelector(".drink");
drink.onclick = drinkSearchOn;

function drinkSearchOn(){
    if(!drinkSwitch){
        drink.style.backgroundColor = "#b4b4b4";
        drinkSwitch = true;
        for(let i=0; i<boxstyle.length; i++){
            let discountText = boxstyle[i].innerHTML;
            let Searchkeyword = discountText.search("飲");
            if(Searchkeyword < 0){
                boxstyle[i].style.display = "none";
            }
        }
    }else {
        drink.style.backgroundColor = "white";
        drinkSwitch = false;
        for(let i=0; i<boxstyle.length; i++){
            boxstyle[i].style.display = "block";
        }
    }
}
let boxstyle = document.querySelectorAll(".box");


let ChickenNuggets = document.querySelector(".chickennuggets");
let fries = document.querySelector(".fries");
let friedchicken = document.querySelector(".friedchicken");
let drink = document.querySelector(".drink");

let chickennuggetsSwitch = false;
let friesSwitch = false;
let friedchickenSwitch = false;
let drinkSwitch = false;

ChickenNuggets.onclick = chickennuggetsSearchOn;
fries.onclick = friesSearchOn;
friedchicken.onclick = friedchickenSearchOn;
drink.onclick = drinkSearchOn;

function SearchKeyWords(keywords) {
    for(let i=0; i<boxstyle.length; i++){
        let discountText = boxstyle[i].innerHTML;
        let Searchkeyword = discountText.search(keywords);
        if(Searchkeyword < 0){
            boxstyle[i].style.display = "none";
        }
    }
}

function hide(){
    for(let i=0; i<boxstyle.length; i++){
        boxstyle[i].style.display = "block";
    }
}

function ColorChangeOn(food){
    food.style.backgroundColor = "#b4b4b4";
}

function ColorChangeOff(food){
    food.style.backgroundColor = "";
}

function chickennuggetsSearchOn(){
    if(!chickennuggetsSwitch){
        SearchKeyWords("雞塊");
        ColorChangeOn(ChickenNuggets);
        chickennuggetsSwitch = true;
    } else {
        ColorChangeOff(ChickenNuggets);
        chickennuggetsSwitch = false;
        hide();
    }
}

function friesSearchOn(){
    if(!friesSwitch){
        fries.style.backgroundColor = "#b4b4b4";
        friesSwitch = true;
        SearchKeyWords("薯");
    }else {
        fries.style.backgroundColor = "";
        friesSwitch = false;
        hide();
    }
}

function friedchickenSearchOn(){
    if(!friedchickenSwitch){
        friedchicken.style.backgroundColor = "#b4b4b4";
        friedchickenSwitch = true;
        SearchKeyWords("炸雞");
    }else {
        friedchicken.style.backgroundColor = "";
        friedchickenSwitch = false;
        hide();
    }
}

function drinkSearchOn(){
    if(!drinkSwitch){
        drink.style.backgroundColor = "#b4b4b4";
        drinkSwitch = true;
        SearchKeyWords("飲");
    }else {
        drink.style.backgroundColor = "";
        drinkSwitch = false;
        hide();
    }
}
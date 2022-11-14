let boxstyle = document.querySelectorAll(".box");

let chickennuggetsSwitch = {switch:false};
let friesSwitch = {switch:false};
let friedchickenSwitch = {switch:false};
let hamburgerSwitch = {switch:false};

let chickennuggets = document.querySelector(".chickennuggets");
let fries = document.querySelector(".fries");
let friedchicken = document.querySelector(".friedchicken");
let hamburger = document.querySelector(".hamburger");

chickennuggets.addEventListener("click", function() {
    colorChange(chickennuggetsSwitch, chickennuggets, '雞塊');
});

fries.addEventListener("click", function() {
    colorChange(friesSwitch, fries, '薯');
});

friedchicken.addEventListener("click", function() {
    colorChange(friedchickenSwitch, friedchicken, '炸雞');
});

hamburger.addEventListener("click", function() {
    colorChange(hamburgerSwitch, hamburger, '堡');
});

function colorChange(foodSwitch, food, keywords) {
    if (!foodSwitch.switch) {
        food.style.backgroundColor = "#b4b4b4";
        foodSwitch.switch = true;
        searchKeyWords(keywords);
    } else {
        food.style.backgroundColor = "";
        foodSwitch.switch = false;
        hide();
    }
}

function searchKeyWords(keywords) {
    for (let i = 0; i < boxstyle.length; i++) {
        let discountText = boxstyle[i].innerHTML;
        let Searchkeyword = discountText.search(keywords);
        if (Searchkeyword < 0) {
            boxstyle[i].style.display = "none";
        }
    }
}

function hide() {
    for (let i = 0; i < boxstyle.length; i++) {
        boxstyle[i].style.display = "block";
    }
}
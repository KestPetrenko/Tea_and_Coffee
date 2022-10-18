let main1 = document.querySelector(".main_stock_1");
let main2 = document.querySelector(".main_stock_2");
let main3 = document.querySelector(".main_stock_3");
let mainMenu = document.querySelector(".main_menu");
let btn_stock_1 = document.querySelector(".btn_stock_1").addEventListener("click", function () {
    main1.style.display = "block";
    main1.classList.add('square-animation');
})
let btn_stock_2 = document.querySelector(".btn_stock_2").addEventListener("click", function () {
    main2.style.display = "block";
    main2.classList.add('square-animation');
})
let btn_stock_3 = document.querySelector(".btn_stock_3").addEventListener("click", function () {
    main3.style.display = "block";
    main3.classList.add('square-animation');
})

let stock_exit = document.querySelectorAll(".stock_exit");
for (let i of stock_exit) {
    i.addEventListener("click", function (event) {
        if (event.target.tagName == "SPAN") {
            this.style.display = "none";
        }
    })
}

(function () {
    let sq = document.querySelectorAll(".square");
    for (let square of sq) {
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                    return;
                }

                if (entry.isIntersecting) {
                    entry.target.classList.add('square-animation');
                }
            });
        });
        observer.observe(square);
    }
})();

let listMenu = document.querySelector(".button-71");
listMenu.addEventListener("click", function () {
    mainMenu.style.display = "block";
    listMenu.style.display = "none";
});

let productTea = document.querySelector(".product_tea");
let productCoffee = document.querySelector(".product_coffee");
let sort_tea = document.querySelector(".sort_tea");
let sort_coffee = document.querySelector(".sort_coffee");

let elem = document.querySelector(".h1_product");
elem.addEventListener("click", function () {
    productTea.style.display = "block";
    productCoffee.style.display = "block";
});

productTea.addEventListener("click", function () {
    sort_tea.style.display = "block";
});
productCoffee.addEventListener("click", function () {
    sort_coffee.style.display = "block";
});

let btn_close = document.querySelector(".btn_close").addEventListener("click", function () {
    mainMenu.style.display = "none";
    listMenu.style.display = "block";
});


const form = document.forms[0];

form.addEventListener("submit", function (e) {
    alert("Форма отправлена");
});

form.addEventListener("change", eventHandler)
form.addEventListener("invalid", eventHandler, true); 

function eventHandler(e) {
    if (e.target.tagName != "INPUT") {
        return;
    }

    checkErrorAndSetMessage(e.target);
}

function checkErrorAndSetMessage(input) {
    if (input.validity.valueMissing) {
        input.setCustomValidity("Будь ласка, заповніть це поле");
    }
    else if (input.validity.typeMismatch) {
        input.setCustomValidity("Будь ласка, вкажіть правильний телефон");
    }
    else if (input.validity.tooShort) {
                input.setCustomValidity("Значенння не может бути менше 9 символов");
            }
            else if (input.validity.tooLong) {
                input.setCustomValidity("Значення не може бути більше 13 символов");
            }
    else {
        input.setCustomValidity("");
    }
}


let addBg = document.querySelector("#addBg");

let stock_exit1 = document.querySelectorAll(".btn_buy");
for (let i of stock_exit1) {
    i.addEventListener("click", function (event) {
        let target = event.target;
        let price = target.closest('div').querySelector('.price').textContent;
        let name = target.closest('div').querySelector('.title').textContent;
        console.log(price);
        console.log(name);
        addBg.style.display = "block";
        function showMessage() {
            addBg.style.display = "none";
        }
        setTimeout(showMessage, 1500);
    })
}
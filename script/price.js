let addBg = document.querySelector("#addBg");
let name1;
let price;
let arrayOrder = [];
let stock_exit1 = document.querySelectorAll(".btn_buy");
for (let i of stock_exit1) {
    i.addEventListener("click", function (event) {
        let target = event.target;
        price = target.closest('div').querySelector('.price').textContent;
        name1 = target.closest('div').querySelector('.title').textContent;

        console.log(price);
        console.log(name1);
       
        arrayOrder.push([name1, price]);

        localStorage.setItem("order", JSON.stringify(arrayOrder))

        addBg.style.display = "block";
        function showMessage() {
            addBg.style.display = "none";
        }
        setTimeout(showMessage, 1500);
    })
}

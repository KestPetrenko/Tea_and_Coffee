class CatalogItem {
    template;
    imagePath;

    constructor(image, tempalteSelector) {
        this.imagePath = image;
        this.template = document.querySelector(tempalteSelector).innerHTML;
    }

    renderIn(element) {
        let html = Mustache.render(this.template, this);
        element.innerHTML += html;
    }
}

class Product extends CatalogItem {
    price;
    title;
    id;

    constructor(imageaPath, price, title, id) {
        super(imageaPath, "#product");
        this.price = price;
        this.title = title;
        this.id = id;
    }
}

class Catalog {
    items = [];
    element;

    constructor(elementSelector) {
        this.element = document.querySelector(elementSelector);
    }

    add(item) {
        this.items.push(item);
    }


    show() {
        this.items.forEach(item => {
            item.renderIn(this.element);
        });

    }
}


let catalog_all_tea = new Catalog("#catalog_all_tea");
let catalog_black_tea = new Catalog("#catalog_black_tea");
let catalog_green_tea = new Catalog("#catalog_green_tea");
let catalog_red_tea = new Catalog("#catalog_red_tea");
let catalog_white_tea = new Catalog("#catalog_white_tea");

let catalog_beans_coffee = new Catalog("#catalog_beans_coffee");
let catalog_ground_coffee = new Catalog("#catalog_ground_coffee");
let catalog_instans_coffee = new Catalog("#catalog_instans_coffee");
let catalog_sublimated_coffee = new Catalog("#catalog_sublimated_coffee");
let catalog_all_coffee = new Catalog("#catalog_all_coffee");
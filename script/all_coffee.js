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



let catalog_beans_coffee = new Catalog("#catalog_beans_coffee");
let catalog_ground_coffee = new Catalog("#catalog_ground_coffee");
let catalog_instans_coffee = new Catalog("#catalog_instans_coffee");
let catalog_sublimated_coffee = new Catalog("#catalog_sublimated_coffee");
let catalog_all_coffee = new Catalog("#catalog_all_coffee");

let arrayBeansCoffee = 
[["img/beans coffee/1.jpg", 179, "Кава Gimoka Rosso Gran Bar у зернах 500 г", 1],
["img/beans coffee/2.jpg", 250, "Кава Gimoka Gran Festa у зернах 1000 г", 2],
["img/beans coffee/3.jpg", 300, "Кава Gimoka Caffe Classico у зернах 1000 г", 3],
["img/beans coffee/4.jpg", 250, "Кава Gimoka Bianco у зернах 1000 г", 4],
["img/beans coffee/5.jpg", 250, "Кава Gimoka Gran Bar у зернах 1000 г" ,5 ],
["img/beans coffee/6.jpg", 284, "Кава Gimoka Dolcevita у зернах 1000 г", 6],
["img/beans coffee/7.jpg", 286, "Кава Gimoka Aroma Classico у зернах 1 кг", 7],
["img/beans coffee/8.jpg", 301, "Кава Ambassador Espresso Bar у зернах 1 кг", 8],
["img/beans coffee/9.jpg", 302, "Кава Garibaldi Versilia у зернах 1 кг", 9],
["img/beans coffee/10.jpg", 323, "Кава ALVORADA Brasil у зернах 1 кг", 10],
["img/beans coffee/11.jpg", 327, "Кава Gimoka Armonioso у зернах 1 кг", 11],
];

let arrayGroundCoffee = 
[["img/coffee ground/1.jpg", 63, "Кава G.Monti Classic мелена 250 г", 101],
["img/coffee ground/2.jpg", 63, "Кава AYO мелена 250 г", 102],
["img/coffee ground/3.jpg", 76, "Кава Gimoka Armonioso мелена 250 г", 103],
["img/coffee ground/4.jpg", 77, "Кава Gimoka Gran Gusto мелена 250 г", 104],
["img/coffee ground/5.gif", 81, "Кава Віденська кава Львівська Family мелена 250 г", 105],
["img/coffee ground/6.jpg", 81, "Кава Gimoka Bianko мелена 250 г", 106],
["img/coffee ground/7.jpg", 82, "Кава Віденська кава Львівська ранкова мелена 250 г" , 107],
["img/coffee ground/8.jpg", 83, "Кава Gimoka Gran Festa мелена 250 г", 108],
["img/coffee ground/9.jpg", 86, "Кава Segafredo Intermezzo мелена 250 г", 109],
["img/coffee ground/10.jpg", 90, "Кава Gimoka Gran Gala мелена 250 г", 110],
["img/coffee ground/11.jpg", 92, "Кава Tchibo Family мелена 250 г", 111],
];

let arrayInstansCoffee = 
[["img/instant coffee/1.jpg", 316, "Кава JJDarboven EILLES Gourmet Cafe розчинна 200 г", 201],
["img/instant coffee/2.jpg", 190, "Кава Goldbach Tradition розчинна 200 г", 202],
["img/instant coffee/3.jpg", 311, "Кава Movenpick Gold Intense розчинна 200 г", 203],
["img/instant coffee/4.jpg", 225, "Кава Dallmayr Gold розчинна 200 г", 204],
["img/instant coffee/5.jpg", 250, "Кава Tchibo Gold Selection розчинна 200 г", 205],
["img/instant coffee/6.jpg", 261, "Кава Goldbach Selection розчинна 200 г", 206],
["img/instant coffee/7.jpg", 133, "Кава JJDarboven IDEE Gold Express розчинна 100 г", 207],
["img/instant coffee/8.jpg", 315, "Кава Movenpick Gold Original розчинна 200 г", 208],
["img/instant coffee/9.jpg", 256, "Кава Goldbach Colombian розчинна 200 г", 209],
["img/instant coffee/10.jpg", 173, "Кава DeMontre Intensive розчинна 200 г", 210],
["img/instant coffee/11.jpg", 161, "Кава Movenpick Gold Original розчинна 100 г", 211],
];

let arrayOrganicCoffee = 
[["img/sublimated coffee/1.png", 174, "Кава Lavazza Tierra Bio Organic мелена 180 г", 301],
["img/sublimated coffee/2.jpg", 210, "Кава JJ Darboven Caffe Intencion Ecologico мелена 250 г", 302],
["img/sublimated coffee/3.jpg", 225, "Кава Movenpick El Autentico мелена 500 г", 303],
["img/sublimated coffee/4.jpg", 278, "Кава в капсулах NESCAFE Dolce Gusto Americano Mexico Chiapas - 12 шт", 304],
["img/sublimated coffee/5.jpg", 570, "Кава Movenpick El Autentico у зернах 1 кг", 305],
["img/sublimated coffee/6.jpg", 614, "Кава Lavazza Tierra Bio Organic Expert у зернах 1 кг", 306],
["img/sublimated coffee/7.jpg", 690, "Кава Lavazza Alteco Bio Organic Premium Blend у зернах 1 кг", 307],
["img/sublimated coffee/8.jpg", 698, "Кава JJDarboven Caffe Intencion Ecologico у зернах 1 кг", 308],
["img/sublimated coffee/9.jpg", 699, "Кава Lavazza Tierra Brazil 100% у зернах 1 кг", 309],
["img/sublimated coffee/10.jpg", 710, "Кава Lavazza Tierra Brazil Intense у зернах 1 кг", 310],
["img/sublimated coffee/11.jpg", 775, "Кава Caffe Molinari Arabica 100% Bio Organic Fairtrade у зернах 500 г", 311],
]

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

let arrayBlackTea = 
[["img/black tea/1.jpg", 107, "Чорний чай Akbar Pekoe 100 г", 401],
["img/black tea/2.jpg", 111, "Чорний чай Akbar Gold Earl Grey 80 г", 402],
["img/black tea/3.jpg", 240, "Чорний чай Akbar Gold у пакетиках 100 шт", 403],
["img/black tea/4.jpg", 112, "Чорний чай Akbar Gold 100 г", 404],
["img/black tea/5.png", 900, "Чорний чай Grunheim Assam Mangalam 250 г", 405],
["img/black tea/6.png", 500, "Чорний чай Grunheim Azeri Thyme 250 г", 406],
["img/black tea/7.png", 300, "Чорний чай Grunheim Blueberry Mango у пакетиках 20 шт", 407],
["img/black tea/8.jpg", 57, "Чорний чай Lovare Дикі Ягоди в пакетиках 24 шт", 408],
["img/black tea/9.jpg", 109, "Чорний чай Lovare Страсний фрукт 80 г", 409],
["img/black tea/10.jpg", 57, "Черный чай Lovare Цейлонский в пакетиках 24 шт", 410],
["img/black tea/11.jpg", 69, "Чорний чай Lovare Асорті Бергамот у пакетиках 32 шт", 411],
];

let arrayGreenTea = 
[["img/green tea/1.png", 280, "Зелений чай Grunheim Milk Oolong у пакетиках 20 шт", 501],
["img/green tea/2.png", 300, "Зеленый чай Grunheim China Special Gunpowder в пакетиках 20 шт", 502],
["img/green tea/3.png", 300, "Зелений чай Grunheim Japan Sencha у пакетиках 20 шт", 503],
["img/green tea/4.png", 300, "Зелений чай Grunheim Chinese Jasmine у пакетиках 20 шт", 504],
["img/green tea/5.jpg", 57, "Купаж чорного та зеленого чаю Lovare Бризки Шампанського в пакетиках 24 шт", 505],
["img/green tea/6.jpg", 57, "Зелений чай Lovare Ніч Клеопатри в пакетиках 24 шт", 506],
["img/green tea/7.jpg", 57, "Купаж зеленого та трав'яного чаю Lovare Цитрус Меліса в пакетиках 24 шт", 507],
["img/green tea/8.jpg", 57, "Купаж черного и зеленого чая Lovare 1001 Ночь в пакетиках 24 шт", 508],
["img/green tea/9.jpg", 148, "Японський чай матчу ТЕТ Matcha Latte Classic у стиках 10 шт", 509],
["img/green tea/10.jpg", 148, "Японский чай матча ТЕТ Matcha Latte Banana&Vanilla в стиках 10 шт", 510],
["img/green tea/11.jpg", 148, "Японский чай матча ТЕТ Matcha Latte Turmeric&Ginger в стиках 10 шт", 511],
];

let arrayRedTea =
[["img/red tea/1.jpg", 406, "Червоний чай Teahouse №320 Англійський колоніальний 250 г", 601],
["img/red tea/2.jpg", 435, "Червоний чай Teahouse №506 Імператор 250 г", 602],
["img/red tea/3.jpg", 460, "Червоний чай Teahouse №308 Шу Пуер класичний 250 г", 603],
["img/red tea/4.jpg", 545, "Червоний чай Dammann Freres 0 - Ерл Грей Ін Зен з/б 100 г", 604],
["img/red tea/5.jpg", 599, "Чорний чай Dammann Freres 496 - Смоки Лапсанг з/б 100 г", 605],
["img/red tea/6.jpg", 616, "Червоний чай Teahouse №306 Червоний дракон (Золотий равлик) 250 г", 606],
["img/red tea/7.jpg", 619, "Червоний чай Teahouse №318 Кімум 250 г", 607],
["img/red tea/8.jpg", 689, "Червоний чай Teahouse №326 Золота мавпа 250 г", 608],
["img/red tea/9.jpg", 723, "Чорний чай Dammann Freres 1 - Душка ж/б 100 г", 609],
["img/red tea/10.jpg", 825, "Чорний чай Dammann Freres Ерл Грей Ін Зен у пакетиках 50 шт", 610],
["img/red tea/11.jpg", 820, "Червоний чай Teahouse №327 Червоний Маофен 250 г", 611],
];

let arrayWhiteTea = 
[["img/white tea/1.jpg", 989, "Білий чай Dammann Freres 20 - Квіткова пристрасть з/б 60 г", 701],
["img/white tea/2.png", 878, "Білий органічний чай Kusmi Tea Anastasia з/б 90 г", 702],
["img/white tea/3.png", 1283, "Білий чай Mariage Freres Paris Provence у пакетиках 30 шт", 703],
["img/white tea/4.jpg", 1085, "Білий чай Млісна Срібний FBOP Special з/б 25 г", 704],
["img/white tea/5.png", 1018, "Білий чай Dammann Freres Квіткова пристрасть у пакетиках 24 шт", 705],
["img/white tea/6.png", 1319, "Білий чай Mariage Freres Ivory Himalaya 50 г", 706],
["img/white tea/7.jpg", 617, "Білий чай Млісна Срібний FBOP Special д/к 200 г", 707],
["img/white tea/8.jpg", 1035, "Білий чай Dammann Freres Квіткова пристрасть у пакетиках 25 шт", 708],
["img/white tea/9.jpg", 499, "Білий органічний чай Kusmi Tea Anastasia у пакетиках 20 шт", 709],
["img/white tea/10.png", 1004, "Білий чай Mariage Freres White Rhapsody з/б 50 г", 710],
["img/white tea/11.jpg", 165, "Білий чай Basilur картон 100 г", 711],
]

export class Item {
    id: string;
    name: string;
    price: number;

    constructor(name, price) {
        this.id = (Math.random() * 10 ** 6 + 1) + '';
        this.name = name;
        this.price = price;
    }
}

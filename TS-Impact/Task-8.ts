class Product
{
    id:number;
    name:string;
    city:string;
    constructor(id:number=0,name:string="",city:string="")
    {
        this.id=id;
        this.name=name;
        this.city=city;
    }

    ShowDetails():void
    {
        console.log(`Customer Details :: Id : ${this.id}, Name : ${this.name}, City : ${this.city}`)
    }

}

let p1:Product = new Product();
let p2:Product = new Product(10256);
let p3:Product = new Product(10256, "Scott");
let p4:Product = new Product(10256, "Scott", "Hyd");

p1.ShowDetails();
p2.ShowDetails();
p3.ShowDetails();
p4.ShowDetails();
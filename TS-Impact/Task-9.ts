class Product
{
    private productId:number;
    private productName:string;
    private unitPrice:number;
    private qty:number;

    constructor(productId:number=0)
    {
        this.productId=productId;
    }

    set prodId(productId:number)
    {
        this.productId=productId;
    }

    set prodName(productName:string)
    {
        this.productName=productName;
    }

    get prodName():string
    {
        return this.productName;
    }

    set price(unotPrice:number)
    {
        this.unitPrice=unotPrice;
    }

    get price():number
    {
        return this.unitPrice;
    }

    set quantity(qty:number)
    {
        this.qty=qty;
    }

    get quantity():number
    {
        return this.qty;
    }

    showDetails():void
    {
        console.log(`Prod ID : ${this.productId} Prod Name : ${this.prodName} Prod Price : ${this.unitPrice} Prod Quantity : ${this.qty}` );
    }
}

let p1:Product = new Product(123);
p1.prodName = "Mobile";
p1.price = 1000;
p1.quantity = 10;
p1.showDetails();

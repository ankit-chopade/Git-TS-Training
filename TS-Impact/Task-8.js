var Product = /** @class */ (function () {
    function Product(id, name, city) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ""; }
        if (city === void 0) { city = ""; }
        this.id = id;
        this.name = name;
        this.city = city;
    }
    Product.prototype.ShowDetails = function () {
        console.log("Customer Details :: Id : ".concat(this.id, ", Name : ").concat(this.name, ", City : ").concat(this.city));
    };
    return Product;
}());
var p1 = new Product();
var p2 = new Product(10256);
var p3 = new Product(10256, "Scott");
var p4 = new Product(10256, "Scott", "Hyd");
p1.ShowDetails();
p2.ShowDetails();
p3.ShowDetails();
p4.ShowDetails();

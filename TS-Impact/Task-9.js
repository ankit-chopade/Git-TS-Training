var Product = /** @class */ (function () {
    function Product(productId) {
        if (productId === void 0) { productId = 0; }
        this.productId = productId;
    }
    Object.defineProperty(Product.prototype, "prodId", {
        set: function (productId) {
            this.productId = productId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "prodName", {
        get: function () {
            return this.productName;
        },
        set: function (productName) {
            this.productName = productName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this.unitPrice;
        },
        set: function (unotPrice) {
            this.unitPrice = unotPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "quantity", {
        get: function () {
            return this.qty;
        },
        set: function (qty) {
            this.qty = qty;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.showDetails = function () {
        console.log("Prod ID : ".concat(this.productId, " Prod Name : ").concat(this.prodName, " Prod Price : ").concat(this.unitPrice, " Prod Quantity : ").concat(this.qty));
    };
    return Product;
}());
var p1 = new Product(123);
p1.prodName = "Mobile";
p1.price = 1000;
p1.quantity = 10;
p1.showDetails();

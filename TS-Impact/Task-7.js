var Color;
(function (Color) {
    Color[Color["RED"] = 1] = "RED";
    Color[Color["YELLOW"] = 2] = "YELLOW";
})(Color || (Color = {}));
var myColor = Color.RED;
console.log(myColor);
var tupleex = [10, "even"];
tupleex.push(2);
tupleex.push(2);
tupleex.push(2);
console.log(tupleex);

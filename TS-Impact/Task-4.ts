const numbers = [65, 44, 12, 4];
console.log(
    numbers.map(function(x:number){
        return x*10;
    })
)

console.log(
    numbers.map((x:number) => x*10)
)
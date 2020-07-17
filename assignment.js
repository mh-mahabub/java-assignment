//brickCalculator
function brickCalculator (tenFloor,twentyFloor,thirtyFloor){
    var tenFloor = 10 * 15 * 1000;
    var twentyFloor = 10 * 12 * 1000;
    var thirtyFloor = 10 * 10 * 1000;
    var totalBrick = tenFloor + twentyFloor + thirtyFloor;
    return totalBrick;
}
var brickResult = brickCalculator(30);
console.log(brickResult);
 
 
 
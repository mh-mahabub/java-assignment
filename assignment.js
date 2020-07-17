 //feetToMile
 function feetToMile (feet) {
    var mile = feet/5280;
    return mile;
}
var mhFeet = feetToMile (105600);
console.log(mhFeet);

//woodCalculator
function woodCalculator (chair, table, bed){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var woodResult = woodCalculator(50, 20, 10);
console.log(woodResult);

//brickCalculator
//tinyCalculator

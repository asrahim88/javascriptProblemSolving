
    // feetToMile

function feetToMile(feet) {
    var mile = feet/5280;
        mile = mile.toFixed(2);
        return mile;
}
var convertFeet = feetToMile(50000);
console.log(' The convert number of feetToMile is: ',convertFeet);


    // woodCalculator

function woodCalculator(chair, table, khat) {
        var chairCount   = chair * 3;
        var tableCount   = table * 3;
        var khatcount    = khat  * 3;
        var totalAmount  = chairCount + tableCount + khatcount;
        return totalAmount;
}
var chairTableKhat = woodCalculator(10, 6, 8);
console.log("Total feet of woodCalculator is: ",chairTableKhat);




  // tinyFriend
                                                     
var friendName = ["mamun", "mahmud", "Abdur Rahman", "Hasib Al Asad", "Muhibuullah Naim Al Madani", "Habibullah Misbah", "Kolimullah", "Hasnat Al Madani"];

function tinyFriend(name) {
    var tempName = 0;
    var biggestName;
    for (var i = 0; i<name.length; i++){
        if (name[i].length > tempName){
            tempName = name[i].length;
            biggestName = name[i];
        }
    }
    return biggestName;
}
var resultstr = tinyFriend(friendName);
console.log("The biggest name of tinyFriend is: ", resultstr);



 // brickCalculator

function brickCalculator(getFloor) {
    var eachFeet     = 1000;
    var totalFeet10Floor = eachFeet*15;
    var totalFeet20Floor = eachFeet*12;
    var totalFeetMoreThan21 = eachFeet*10;
    var first10Floor = 10;
    var second10Floor = 10;
    
    if (getFloor<=10) {
        var resultBrick = getFloor * totalFeet10Floor;
    } else if (getFloor <= 20){
        var firstPart = first10Floor * totalFeet10Floor;
        var secondPart = (getFloor - first10Floor) * totalFeet20Floor;
        var resultBrick = secondPart + firstPart;
    } else {
        var firstPart =  first10Floor * totalFeet10Floor;
        var secondPart = second10Floor * totalFeet20Floor;
        var thirdPart =  (getFloor - 20) * totalFeetMoreThan21;
        var resultBrick = firstPart + secondPart + thirdPart;
    }
    return resultBrick;
}

var brick = brickCalculator(22);
console.log("Total Brick Pice is: ",brick);


var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 100;
var packedwell = false;

// if(danishPrice < myBudget){
//     console.log('Danish kyeye danish jabo');
// }
// else if(butterBreadPrice < myBudget){
//     console.log('Butter bon diya cha khamu');
// }
// else if(toastBiscuitPrice < myBudget){
//     console.log('toast biscuit khamu');
// }
// else{
//     console.log('Batasha diya cha khamu');
// }

if(danishPrice < myBudget){
    if(packedwell == true){
        console.log('danish khabo');
    }
    else{
        console.log('danish khamu na');
    }
}
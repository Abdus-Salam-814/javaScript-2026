


const myMoney = 1000;
const applePrice = 300;
const orangePrice = 400;


function returnTaka(myMoney, applePrice, orangePrice){

    const returnTaka = myMoney - (applePrice + orangePrice);

    return returnTaka;
}




const result = returnTaka(myMoney, applePrice, orangePrice);

console.log(result);
var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    var ip = initialPrice.value;
    var qty = stocksQuantity.value;
    var curr = currentPrice.value;
    if((ip<=0 || qty<=0 || curr<=0)){
        outputBox.innerHTML =`Please enter a valid input!`;
    }
    else
     calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = ((loss / initial) * 100).toFixed(1);

        outputBox.innerHTML =`Oh no!📉📉 <br>
        You made a loss of ${loss}, yielding ${lossPercentage}% loss.`;
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = ((profit / initial) * 100).toFixed(1);

        outputBox.innerHTML =`Congratulations!! 📈📈<br>
        You made a profit of ${profit}, yielding ${profitPercentage}% profit.`;
    } else {
        outputBox.innerHTML =`You managed to balance your profit and loss :)`;
    }
}

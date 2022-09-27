var amountInvested = document.querySelector(".amount");
var rateOfReturn = document.querySelector(".rate");
var time = document.querySelector(".Years");

function calculateResult() {
    var monthlyRate = rateOfReturn.value / 12 / 100;
    var months = time.value * 12;
    var futureValue = 0;


    if (Sip.checked) {
        futureValue = amountInvested.value * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
        var amountTotalInvested = amountInvested.value * months;

    }
    else if (Lumpsum.checked) {
        futureValue = Math.round(Math.pow(1 + monthlyRate, months) * amountInvested.value);
        var amountTotalInvested = amountInvested.value;
    }

    document.getElementById("amountI").innerHTML = amountTotalInvested + " ₹ ";
    document.getElementById("futureValue").innerHTML = Math.round(futureValue > 0 ? futureValue : 0) + " ₹ ";
}

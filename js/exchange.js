(function(){
    var pricePounds1;
    var exchangeRate1;
    var priceEuros1;

    var convertForm = document.getElementById("myForm");
    var msg = document.getElementById("msg");

    convertForm.addEventListener("submit", function(ev){
        ev.preventDefault();
        priceEuros1 = 0;
        exchangeRate1 = 0.87;
        pricePounds1 = parseFloat(document.getElementById("pounds").value)

        if (isNaN(pricePounds1)){
            msg.style.display = "block";
            msg.innerHTML = "You must enter a number.";
            msg.setAttribute("class", "error");
        }
        else{
            if (pricePounds1 == 0){
                msg.style.display= "block";
                msg.innerHTML = "You must enter more than zero.";
                msg.setAttribute("class", "error");
            }
            else{
                priceEuros1 = pricePounds1 * exchangeRate1;
                msg.style.display = "block";
                priceEuros1 = priceEuros1.toFixed(2);
                msg.innerHTML = "You will get &euro;" + priceEuros1;
                msg.removeAttribute("class");
            }
        }
    })

    document.getElementById("pounds").addEventListener("focus", function(){
        this.value = "";
        msg.innerHTML = "";
        msg.removeAttribute("class");
    })

    var priceEuros2;
    var pricePounds2;
    var exchangeRate2;

    var convertForm = document.getElementById("euroConverter")
    

})()
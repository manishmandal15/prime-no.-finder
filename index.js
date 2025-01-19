function checkprime(num){
    if(num <= 1){
        return false;
    }

    for(let i=2; i<=Math.sqrt(num); i++){
        if (num % i ===0){
            return false;
        }
    }
    return true;
}

 

document.getElementById("sub-id").addEventListener("click", function(){
    let num = document.getElementById("input-id").value;
    let result = checkprime(num);

    if(result){
        document.getElementById("dom-message").innerHTML = num  + " is a prime number.";
    }

    else{
        document.getElementById("dom-message").innerHTML = num  + "is not a prime number."; 
    }
});

document.getElementById("id-clear").addEventListener("click", () => {
    document.getElementById("input-id").value = "";
    document.getElementById("dom-message").innerHTML = "Result";
})




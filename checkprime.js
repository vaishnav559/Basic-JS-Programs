function isPrime(num){
    var fact=0;
    for(var i=1;i<=num;i++){
        if(num%i==0){
            fact+=1;
        }
    }
    if(fact==2){
        console.log("It is a prime number")
    }
    else{
        console.log("Not a prime")
    }
}
isPrime(456)
isPrime(13)
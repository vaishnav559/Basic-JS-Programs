function fibonacci(a,b,n)
{
    for(i=0;i<n;i++){
        c = a+b;
        console.log(a)
        a=b;
        b=c;
    }
}
fibonacci(0,1,5)
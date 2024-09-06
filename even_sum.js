let sum=0;
let num =1;
while(num<10){
    num++;
    if(num%2==1){
        console.log("before",num);
        continue;
    }
    sum=sum+num;
    console.log(num);
    console.log("total",sum);``
}
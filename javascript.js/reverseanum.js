let num=546
let rev=0
let sum=0
while(num/10!=0){
	sum=num%10
	rev=rev*10+sum
	num=parseInt(num/10)
}
console.log(rev)
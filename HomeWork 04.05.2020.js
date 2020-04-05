// Check the number even or odd (without checking not number cases)
let checkNum = num =>{return num%2===0?"even":"odd"}
// Check whether two number are divisible
let checkDivisible= (num1, num2)=> {return num1%num2===0||num2%num1===0?1:0}
// Third angle of the triangle with sides a, b, c
let angleCalculator = (ab, bc)=>{return 180-ab-bc}
// Concat numbers n, nn, nnn
let numbersConcat = n=>{return `${n}${2*n}${3*n}`}
// Bring last number to the beginning, checks end with 0, and one-digit number TODO weird behavior on long digits
let lastToFirst=n=>{return n%10===0||n/10<1?n:parseInt(`${n%10}${Math.floor(n/10)}`)}
// Count average of five numbers
let averageOfFive = (n1, n2, n3, n4, n5)=>{return (n1+n2+n3+n4+n5)/5}
// Check whether the num is dividable to 3, 5, 7
let divadibility = num =>{
	let div_3_5_7 = num%3===0 && num%5===0 && num%7===0;
	let div_3_5 = num%3===0&& num%5===0;
	let div_3_7= num%3===0&&num%7===0;
	let div_5_7 = num%5===0&&num%7===0	;

	if(div_3_5_7){
		console.log(`${num} is a multiple of 3, 5 and 7`);
	}else if(div_3_7){
		console.log(`${num} is a multiple of 3 and 7`);
	}else if(div_3_5){
		console.log(`${num} is a multiple of 3 and 5`);
	}else if(div_5_7){
		console.log(`${num} is a multiple of 5 and 7`);
	}else if(num%7===0){
		console.log(`${num} is a multiple of 7`);
	}else if(num%5===0){
		console.log(`${num} is a multiple of 5`);
	}else if(num%3===0){
		console.log(`${num} is a multiple of 3`);
	}else {
		console.log(`${num} is not a multiple of 3, 5 or 7`);
	}
}
// Check socially acceptable age of human
let checkAgeName = (value, unitOfMeasurement)=>{
	if(unitOfMeasurement==='months') value/=12;
	let ageName = '';
	if(value<1){
		ageName='baby';
	}else if(value<3){
		ageName='toddler';
	}else if(value<13){
		ageName='child';
	}else if(value<18){
		ageName='teenager';
	}else if(value>=18){
		ageName='adult';
	}
	return ageName;
}
// Ascending sorting of 3 numbers
let sortAscending = (num1, num2, num3)=>{
	let numArray = [num1, num2, num3];
	return numArray.sort(function(a, b){return a-b});
}
// Check student exam compliance
let passChecker = (exam1, exam2, exam3)=>{
	let passed1 = exam1>=40;
	let passed2 = exam2>=40;
	let passed3 = exam3>=40;
	let totalPassed = passed1&&passed2&&passed3;
	let alternativePassed = (exam1+exam2+exam3)/3>=50&&
	((passed1&&passed2)||(passed1&&passed3)||(passed2&&passed3));
	if(totalPassed || alternativePassed){
		return 'Passed';
	}else {
		return 'Not Passed';
	}
}
// Check sign without multiplication
let checkSign= (num1, num2, num3)=>{
	let isZero = num1===0||num2===0||num3===0;
	let isMin = (num1<0&&num2<0&&num3<0)||(num1<0&&num2>0&&num3>0)||(num2<0&&num1>0&&num3>0)||(num3<0&&num2>0&&num1>0);
	if(isZero){
		return 'unsigned';
	}else if(isMin){
		return '-';
	}else{
		return '+';
	}
}
// Solve quadratic equation
let quadraticSolver = (a, b, c)=>{
  let underSqrtValue = Math.pow(b, 2)-4*a*c;
  if(a===0){
    return 'Enter valid constants';
  }else if (underSqrtValue<0){
    return 'Solution does not exist';
  }
  let resWithMin = (-b-Math.sqrt(underSqrtValue))/(2*a);
  let resWithPlus = (-b+Math.sqrt(underSqrtValue))/(2*a);
  if(resWithPlus!==resWithMin){
    return `Solutions are ${resWithPlus} and ${resWithMin}`;
  }else{
    return `Solution is ${resWithPlus}`;
  }
}
// Use logical operator
var n=+prompt();
var i = 0;
var j = 0;
if(n%2===0&&!Math.floor(n/10)){
	i+=1;
}
if(n%3===0 || n%10===1){
	j+=1;
}
// Check including
let checkIncluding = (a, b)=>{
	return b.toString().includes(a.toString())?'Yes':'No'
}
// Reverse first and last digits TODO ask about else if with log
let firstAndLastReverser=ntr =>{
	let numberOfDigits = parseInt(Math.log10(ntr));
	let lastDigit = ntr%10;
	let firstDitig = parseInt(ntr/Math.pow(10, numberOfDigits));
	let removedFirstAndLast = String(ntr).substring(1, String(ntr).length-1);
	if(numberOfDigits===0){
		return ntr;
	}else if(ntr.toString().lenght===2){
		ntr = ntr.toString().split('').reverse().join('');
		return Number(ntr);
	}else{
		return Number(lastDigit+removedFirstAndLast+firstDitig);
	}
}
// Calculate the area of shape
let shapeAreaCalculator = (shape, a, b)=>{
	if(a<1||b<1){
		return 'Please enter only positives';
	}else{
		switch(shape){
			case 'triangle': return `Square of the ${shape} is `+ a*b/2;
			break;
			case 'rectangle': return `Sqare of the ${shape} is ` + a*b;
			break;
			default:
		}
	}
}
// Diff between min and max values
let difMinMax = inpt =>{
	let inputAr = inpt.toString().split('');
	let inputArNum = [];
	for(let i=0; i<inputAr.length; i++){
		inputArNum[i]=Number(inputAr[i]);
	}
	return Math.max(...inputArNum)-Math.min(...inputArNum);
}
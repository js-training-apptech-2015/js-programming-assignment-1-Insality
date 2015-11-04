;function solution1(A, B, C){
	return Math.ceil((B-A)/C);
}

console.log(solution1(10, 20, 3)); //4
console.log(solution1(0, 20, 3)); //7
console.log(solution1(0, 20, 5)); //4
console.log(solution1(10, 20, 30)); //1
;
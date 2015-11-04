;function solution2(A, B){
	var maxXOR = 0;

	for (var i=A; i<=B; i++){
		for (var j=i; j<=B; j++){
			maxXOR = (i^j) > maxXOR ? i^j : maxXOR;
		}
	}

	return maxXOR;
};

console.log(solution2(1, 10).toString(2)); //15, 1111
console.log(solution2(1, 2).toString(2)); //3, 11
console.log(solution2(3, 4).toString(2)); //7, 111
;
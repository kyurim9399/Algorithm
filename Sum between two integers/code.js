/*
Complete a solution, a function that returns the sum of all integers between a and b given two integers a and b.
For example, if a = 3, b = 5, 3 + 4 + 5 = 12, so 12 is returned.
*/
function solution(a, b) {
    return (a+b)*(Math.abs(a-b)+1)/2;
}
console.log(solution(3,5));
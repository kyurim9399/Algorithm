function solution(arr)
{
    return arr.filter((val,i) => val != arr[i+1]);
}

var arr= [1,1,3,3,0,1,1];
console.log(solution(arr));
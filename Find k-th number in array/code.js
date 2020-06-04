function solution(array, commands) {
    var answer = [];
    var valid = true;
    
    if(array.length>=1&& array.length<=100 && 
        commands.length >=1 && commands.length<=100){
        for(var i = 0; i<array.length; i++){
            if(array[i]<1 || array>100){
                valid = false;
                break;
            }
        }
        for(var i = 0; i < commands.lenght ; i++){
            if(commands[i].lenght != 3){
                valid = false;
                break;
            }
        }
    }
    
    if(valid){
        for(var i = 0; i<commands.length; i++){
            var arr = array.slice(commands[i][0]-1,commands[i][1]);
            arr.sort(function(a,b){
                return a-b;
            })
            answer.push(arr[commands[i][2]-1]);
        }
    }
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));

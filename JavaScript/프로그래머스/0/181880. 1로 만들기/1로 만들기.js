function solution(num_list) {
    let result = 0;
    function count(a){
        let num = 0;
        while(a!=1){
            if(a%2){
                a = (a-1)/2;
            }else{
                a /= 2;
            }
            num += 1;
        }
        result += num;
    }
    num_list.forEach((num)=>count(num));
    return result;
}
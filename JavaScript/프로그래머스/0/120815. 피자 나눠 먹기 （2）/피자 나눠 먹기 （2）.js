function solution(n) {
    for(let pizza=1; pizza<=100; pizza++){
        if((6*pizza)%n === 0){
            return pizza;
        }
    }
}
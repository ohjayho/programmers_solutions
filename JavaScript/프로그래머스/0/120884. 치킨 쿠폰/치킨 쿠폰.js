function solution(chicken) {
    let chickens = 0;
    function freeChicken(n){
        const receivedChicken = Math.floor(n/10);
        chickens += receivedChicken;
        n = receivedChicken + (n-receivedChicken*10);
        if(n>=10){
            freeChicken(n);
        }
        return;
    }
    freeChicken(chicken);
    return chickens;
}
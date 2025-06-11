function solution(quiz) {
    const mathExpression = (a,b,math) => {
        const numA = parseInt(a);
        const numbB = parseInt(b);
        switch(math){
            case '-':
                return numA-numbB;
            case '*':
                return numA*numbB;
            case '+':
                return numA+numbB;
        }

    }
    const results = quiz.map((math)=>{
        const characters = math.split(' ');
        const resultNum = parseInt(characters[characters.length-1]);
        if(mathExpression(characters[0],characters[2],characters[1])===resultNum){
            return 'O';
        } else {
            return 'X';
        }
    })
    
    return results;
    
    
}
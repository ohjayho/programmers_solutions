function solution(numbers) {
    const nums = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        zero: 0
    }
    let num = '';
    let result = '';
    numbers.split('').map((a)=>{
        num+=a;
        if(!isNaN(nums[num])){
            result+=nums[num];
            num='';
        }
    });
    return +result;
}
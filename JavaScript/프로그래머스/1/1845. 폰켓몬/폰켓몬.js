function solution(nums) {
    const numbers = new Set(nums).size;
    const maxPonkemons = nums.length / 2;
    return numbers < maxPonkemons ? numbers : maxPonkemons;
}
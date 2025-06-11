function solution(nums) {
    let numSet = new Set(nums);
    const pokemonCount = nums.length/2;
    return Math.min(numSet.size, pokemonCount);
}
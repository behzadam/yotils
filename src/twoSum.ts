function twoSum(nums: Required<number[]>, target: Required<number>): number[] {
  const memo: Record<number, number>= {};
  for (let i = 0; i < nums.length; i++){
    const current = nums[i] as number;
    if(current in memo) {
      return [memo[current] as number, i]
    }
    memo[target - current] = i; 
  }
  return []
};

export default twoSum;
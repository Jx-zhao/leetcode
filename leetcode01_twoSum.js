/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums,target){
  let obj = {}
  for(let i=0;i<nums.length;i++){
    let num = nums[i];
    let n = target - num;
    if(num in obj){
      return [i,obj[num]]
    } else{
      obj[n] = i;
    }
  }
}
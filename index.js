// 1929. Concatenation of Array

var getConcatenation = function(nums) {
    return [...nums, ...nums]
};



// 20. Build Array from Permutation

var buildArray = function(nums) {
    return nums.map((item, index) => nums[nums[index]])
};
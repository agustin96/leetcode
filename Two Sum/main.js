/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. */

/* let nums = [2, 7, 11, 15]
let target = 9 */

/* let nums = [3, 2, 4]
let target = 6 */

let nums = [3, 3]
let target = 6

const twoSum = () => {
    for(let i = 0; nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [
                    i,
                    j
                ]
            }
        }
    }
}

/* const twoSum = () => {
    let map = {}
    nums.forEach((e, i) => {
        map[e] = i;
    })

    let array = []
    for(let i = 0; i < nums.length; i++) {
        console.log(map[target - nums[i]])
        if (map[target - nums[i]] !== undefined && map[target - nums[i]] !== i) {
            array.push(map[target - nums[i]])
            if (array.length === 2) {
                return array
            }
        }
    }
} */

console.log(twoSum())
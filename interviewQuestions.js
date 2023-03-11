// Linked List Cycle II

var detectCycle = function (head) {
  if (!head) return null
  if (!head.next) return null
  let fast = head
  let slow = head
  let pointer = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) break
  }
  if (fast !== slow) return null
  while (pointer !== slow) {
    pointer = pointer.next
    slow = slow.next
  }
  return slow
}

// twoSum

function twoSum(arr, target) {
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i]
    let num2 = target - num1
    if (map.has(num2)) {
      return [i, map.get(num2)]
    }
    map.set(num1, i)
  }
}

console.log(twoSum([2, 7, 11, 15], 9))

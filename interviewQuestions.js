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

// add Two Numbers

function addTwoNumbers(l1, l2) {
  const List = new ListNode(0)
  let head = List
  let sum = 0
  let carry = 0
  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val
      l1 = l1.next
    }
    if (l2 !== null) {
      sum = sum + l2.val
      l2 = l2.next
    }
    if (sum >= 10) {
      carry = 1
      sum = sum - 10
    }
    head.next = new ListNode(sum)
    head = head.next
    sum = carry
    carry = 0
  }
  return List.next
}

// LongestSubString -- Sliding Window

function longestSubString(str) {
  const seen = {}
  let longest = 0
  let start = 0
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (seen[char]) {
      start = Math.max(start, seen[char])
    }
    longest = Math.max(longest, i - start + 1)
    seen[char] = i + 1
  }
  return longest
}

console.log(longestSubString('pinky'))

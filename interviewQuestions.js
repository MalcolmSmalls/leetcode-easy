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

// Reverse Integer

var reverse = function (x) {
  const numReversed = Math.abs(x).toString().split('').reverse().join('')
  if (numReversed > 2 ** 31 || numReversed < -(2 ** 31)) return 0
  return numReversed * Math.sign(x)
}

console.log(reverse(1563847412))

// Longest Palindromic String

function longestPalindrome(str) {
  if (str.length < 1 && str === null) return ''
  let longest = ''
  for (let i = 0; i < str.length; i++) {
    const oddPalindrome = expandFromCenter(str, i, i)
    const evenPalindrome = expandFromCenter(str, i - 1, i)
    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome
    }
    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome
    }
  }
  return longest
}

function expandFromCenter(str, left, right) {
  let i = 0
  while (str[left - i] && str[left - i] === str[right + i]) {
    i++
  }
  i--
  return str.slice(left - i, right + i + 1)
}

console.log(longestPalindrome('cbbd'))

// String to Integer (atoi)
// var myAtoi = function (s) {
//   if (isNaN(parseInt(s))) return 0
//   let sign = s.includes('-')
//   if (!sign && parseInt(s) > 2 ** 31 - 1) return 2 ** 31 - 1
//   if (sign && parseInt(s) < -(2 ** 31)) return -(2 ** 31)
//   return sign ? -parseInt(s) * -1 : parseInt(s)
// }

var myAtoi = function (str) {
  const firstNonWhitespaceSequence = str.trim().split(' ')[0]
  const isCorrectlyFormatted =
    firstNonWhitespaceSequence.match(/^[+-]{0,1}[0-9]+/)
  if (!isCorrectlyFormatted) return 0
  let numericValue = isCorrectlyFormatted[0]
  const signMultiplier = numericValue[0] === '-' ? -1 : 1
  numericValue = isNaN(Number(numericValue[0]))
    ? numericValue.slice(1)
    : numericValue
  const INT_MAX = Math.pow(2, 31) - 1
  const INT_MIN = -Math.pow(2, 31)
  if (numericValue.length > 10) {
    return signMultiplier === -1 ? INT_MIN : INT_MAX
  }
  numericValue = Number(numericValue) * signMultiplier
  if (numericValue > INT_MAX) return INT_MAX
  if (numericValue < INT_MIN) return INT_MIN
  return numericValue
}

// console.log(myAtoi())

// Container with Most Water

var maxArea = function (height) {
  let leftPointer = 0
  let rightPointer = height.length - 1
  let maxAreaCalculated = findArea(leftPointer, rightPointer, height)
  while (leftPointer < rightPointer) {
    if (height[leftPointer] < height[rightPointer]) {
      leftPointer++
    } else {
      rightPointer--
    }
    const currentArea = findArea(leftPointer, rightPointer, height)
    maxAreaCalculated = Math.max(maxAreaCalculated, currentArea)
  }
  return maxAreaCalculated
}

var findArea = function (leftPointer, rightPointer, height) {
  const width = rightPointer - leftPointer
  const length = Math.min(height[leftPointer], height[rightPointer])
  const area = width * length
  return area
}

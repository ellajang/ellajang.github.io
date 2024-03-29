---
date: '2023-08-07'
title: '백준-정렬(단계13)'
categories: ['algorithm']
summary: '이 게시글은 백준 정렬 단계 중 1번부터 11번에 해당하는 문제를 JavaScript(NodeJS)언어로 풀이 방법에 대한 내용입니다.	배열의 원소를 순서대로 나열하는 알고리즘을 배웁니다. '
thumbnail: '../baekjoon.jpeg'
---

> 백준 정렬 단계 중 1번부터 11번 문제에 대한 풀이입니다. 사용한 언어는 **_JavaScript(NodeJS)_** 입니다.

## 단계 1. 수 정렬하기 (문제번호 : 2750)

#### \* 문제 : N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

\*\*시간 복잡도가 O(n²)인 정렬 알고리즘으로 풀 수 있습니다. 예를 들면 삽입 정렬, 거품 정렬 등이 있습니다.

- 입력 : 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

- 출력 : 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N = parseInt(inputData[0])

let numArray = inputData.slice(1).map(Number)

for (let i = 1; i < N; i++) {
  let key = numArray[i]
  let j = i - 1
  while (j >= 0 && numArray[j] > key) {
    numArray[j + 1] = numArray[j]
    j = j - 1
  }
  numArray[j + 1] = key
}

for (let i = 0; i < N; i++) {
  console.log(numArray[i])
}
```

<br/>

#### \* 문제 풀이

1. 배열의 두 번째 요소(인덱스 1)부터 배열의 끝까지 모든 요소를 복사하여 새 배열을 생성합니다.

```javascript
let numArray = inputData.slice(1).map(Number)
```

2. while문은 두 가지 조건을 확인합니다. 첫 번째 조건인 j >= 0은 j가 0 이상, 즉 유효한 배열 인덱스인지 확인하는 것입니다. 두 번째 조건인 numArray[j] > key는 j가 가리키는 요소가 key보다 큰지 확인하는 것입니다. key보다 큰 요소를 만나면, 그 요소는 key 뒤로 이동해야 합니다.

```javascript
while (j >= 0 && numArray[j] > key) {
  numArray[j + 1] = numArray[j]
  j = j - 1
}
```

결과 : `성공`

## 단계 2. 대표값2 (문제번호 : 2587)

#### \* 문제 : 어떤 수들이 있을 때, 그 수들을 대표하는 값으로 가장 흔하게 쓰이는 것은 평균이다. 평균은 주어진 모든 수의 합을 수의 개수로 나눈 것이다. 예를 들어 10, 40, 30, 60, 30의 평균은 (10 + 40 + 30 + 60 + 30) / 5 = 170 / 5 = 34가 된다. 평균 이외의 또 다른 대표값으로 중앙값이라는 것이 있다. 중앙값은 주어진 수를 크기 순서대로 늘어 놓았을 때 가장 중앙에 놓인 값이다. 예를 들어 10, 40, 30, 60, 30의 경우, 크기 순서대로 늘어 놓으면

**10 30 30 40 60**

#### 이 되고 따라서 중앙값은 30이 된다. 다섯 개의 자연수가 주어질 때 이들의 평균과 중앙값을 구하는 프로그램을 작성하시오.

- 입력 : 첫째 줄부터 다섯 번째 줄까지 한 줄에 하나씩 자연수가 주어진다. 주어지는 자연수는 100 보다 작은 10의 배수이다.

- 출력 : 첫째 줄에는 평균을 출력하고, 둘째 줄에는 중앙값을 출력한다. 평균과 중앙값은 모두 자연수이다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')

let numArray = inputData.slice(0).map(Number)

numArray.sort((a, b) => a - b)

let average = 0

for (i = 0; i < 5; i++) {
  average += numArray[i]
}

console.log(average / 5)
console.log(numArray[2])
```

<br/>

#### \* 문제 풀이

1. ((a, b) => a - b) 함수를 통해 a-b의 결과를 반환하게 하고, sort() 메서드가 a,b의 순서를 정하게 합니다. a-b의 값이 0보다 작다면 a가 b보다 작다는 의미이므로 앞에 위치합니다. 0을 반환하면 같다는 의미이므로 위치를 바꾸지 않습니다. 0보다 큰 값을 반환하면, a가 b보다 크다는 의미이므로 뒤에 위치합니다. 이러한 방법으로 배열을 만들어줍니다. 또한
   Array.prototype.sort() 메서드는 내부적으로 배열의 모든 요소를 순회하면서 비교 함수를 이용해 정렬을 순회합니다. 'for'반복문이 배열의 요소를 순회하는 것과 유사하게 동작합니다.

```javascript
numArray.sort((a, b) => a - b)
```

<br/>

결과 : `성공`
<br/>

## 단계 3. 커트라인 (문제번호 : 25305)

#### \* 문제 : 2022 연세대학교 미래캠퍼스 슬기로운 코딩생활에 N명의 학생들이 응시했다. 이들 중 점수가 가장 높은 k명은 상을 받을 것이다. 이 때, 상을 받는 커트라인이 몇 점인지 구하라. 커트라인이란 상을 받는 사람들 중 점수가 가장 가장 낮은 사람의 점수를 말한다.

- 입력 : 첫째 줄에는 응시자의 수 N과 상을 받는 사람의 수 k가 공백을 사이에 두고 주어진다. 둘째 줄에는 각 학생의 점수 x가 공백을 사이에 두고 주어진다.
- 출력 : 상을 받는 커트라인을 출력하라.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const [N, k] = inputData[0].split(' ').map(Number)

let numArray = inputData[1].split(' ').map(Number)

numArray.sort((a, b) => b - a)

console.log(numArray[k - 1])
```

<br/>

#### \* 문제 풀이

1. 이미 정렬되어 있기 때문에 slice() 메서드가 필요없습니다.

```javascript
let numArray = inputData[1].split(' ').map(Number)
```

2. b-a로 순서를 바꿔서 내림차순으로 만들어줄 수 있습니다. 또는 reverse()메서드를 사용하여 순서를 반대로 바꿔 내림차순으로 만들어 줄 수도 있습니다.

```javascript
numArray.sort((a, b) => b - a)
```

<br/>

결과 : `성공`
<br/>

## 단계 4. 수 정렬하기 2 (문제번호 : 2751)

#### \* 문제 : N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

\*\*시간 복잡도가 O(nlogn)인 정렬 알고리즘으로 풀 수 있습니다. 예를 들면 병합 정렬, 힙 정렬 등이 있지만, 어려운 알고리즘이므로 지금은 언어에 내장된 정렬 함수를 쓰는 것을 추천드립니다.

- 입력 : 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.
- 출력 : 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N = parseInt(inputData[0])

let numArray = inputData.slice(1).map(Number)

numArray.sort((a, b) => a - b)

console.log(numArray.join('\n'))
```

<br/>

#### \* 문제 풀이

1. Array.prototype.sort가 팀소트(TimSort) 알고리즘을 사용하여 O(n log n)의 시간 복잡도를 갖습니다.

```javascript
numArray.sort((a, b) => a - b)
```

2. 첫번째를 사용하여 문제를 풀었으나 **시간초과**가 나왔습니다. 느린 입출력 함수이기 때문이라고 생각합니다. 그래서 두번쨰 방법인 Array.prototype.join 메서드를 사용해서, 배열의 모든 요소를 한 번에 문자열로 연결할 수 있게했습니다. 이렇게 하면 console.log 함수를 한 번만 호출하면 되므로 효율적인 방법이 됩니다.

```javascript
for (i = 0; i < N; i++) {
  console.log(numArray[i])
}
```

```javascript
console.log(numArray.join('\n'))
```

결과 : `성공`

## 단계 5. 수 정렬하기 3 (문제번호 : 10989)

#### \* 문제 : N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

\*\*수의 범위가 작다면 카운팅 정렬을 사용하여 더욱 빠르게 정렬할 수 있습니다.

- 입력 : 첫째 줄에 수의 개수 N(1 ≤ N ≤ 10,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 10,000보다 작거나 같은 자연수이다.
- 출력 : 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

**이 문제는 node.js로는 메모리 문제로 인해 풀 수 없는 문제라고 합니다.**

<br/>

#### \* 문제 풀이

1. 카운팅 정렬의 기본 아이디어는 다음과 같습니다:<br/> 1) 입력값 중 가장 큰 정수를 찾습니다. 이 값을 배열의 크기로 사용합니다.<br/> 2) 배열의 인덱스를 입력값으로 하고, 해당 입력값의 등장 횟수를 배열의 값으로 저장합니다.<br/> 3)누적합을 계산하여 각 값이 정렬된 결과에서 어디에 위치해야 하는지를 결정합니다.
   <br/>
   <br/>

결과 : `성공`

## 단계 6. 소트인사이드 (문제번호 : 1427)

#### \* 문제 : 배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.

- 입력 : 첫째 줄에 정렬하려고 하는 수 N이 주어진다. N은 1,000,000,000보다 작거나 같은 자연수이다.
- 출력 : 첫째 줄에 자리수를 내림차순으로 정렬한 수를 출력한다.

```javascript
const fs = require('fs')
const N = fs.readFileSync(0).toString().trim()

let numArray = Array.from(N).map(Number)

numArray.sort((a, b) => b - a)

console.log(numArray.join(''))
```

#### \* 문제 풀이

1.  문제에서 주어진 입력 조건에 따르면, 주어지는 N은 자연수이기 때문에, N을 문자열로 변환하여 각 자릿수를 분리해야 합니다. Array.from(N) 코드는 문자열 N의 각 문자를 배열로 변환합니다. 예를 들어, N이 '1234'라면 Array.from(N)의 결과는 ['1', '2', '3', '4']가 됩니다. .map(Number)은 변환된 배열의 각 요소에 Number 함수를 적용합니다.

```javascript
const N = fs.readFileSync(0).toString().trim()

let numArray = Array.from(N).map(Number)
```

결과 : `성공`

## 단계 7. 좌표 정렬하기 (문제번호 : 11650)

#### \* 문제 : 2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다. (-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.
- 출력 : 첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N = parseInt(inputData[0])

const points = []

for (let i = 1; i <= N; i++) {
  const point = inputData[i].split(' ').map(Number)
  points.push(point)
}

points.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0]
  }
  return a[1] - b[1]
})

console.log(points.map(point => point.join(' ')).join('\n'))
```

#### \* 문제 풀이

1. Array.prototype.sort()메소드에 조건문을 사용한 방법입니다. 이 코드에서는 먼저 두 점의 x 좌표(a[0]와 b[0])를 비교합니다. 만약 두 점의 x 좌표가 다르다면, x 좌표가 작은 순서대로 정렬합니다. 이를 위해 a[0] - b[0]를 반환하는데, 이 값이 음수라면 a가 b보다 앞에 오게 되고, 양수라면 a가 b보다 뒤에 오게 됩니다.
   그러나 만약 두 점의 x 좌표가 같다면, y 좌표(a[1]과 b[1])를 비교합니다. 이 때 y 좌표가 작은 순서대로 정렬합니다.<br/>
   예를 들어, 아래와 같이 입력을 받았다면 points 배열의 각 요소인 [1,2]와 [2,3]가 a와 b에 들어가게 됩니다. a[0] = 1 이고, b[0] = 2 입니다. 그리고 a[1] = 2 이고, b[1] = 3 입니다.<br/>
   1 2<br/>
   2 3

```javascript
points.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0]
  }
  return a[1] - b[1]
})
```

결과 : `성공`

## 단계 8. 좌표 정렬하기 2 (문제번호 : 11651)

#### \* 문제 : 2차원 평면 위의 점 N개가 주어진다. 좌표를 y좌표가 증가하는 순으로, y좌표가 같으면 x좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다. (-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.

- 출력 : 첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N = parseInt(inputData[0])

const points = []

for (let i = 1; i <= N; i++) {
  const point = inputData[i].split(' ').map(Number)
  points.push(point)
}

points.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1]
  }
  return a[0] - b[0]
})

console.log(points.map(point => point.join(' ')).join('\n'))
```

결과 : `성공`

## 단계 9. 단어 정렬 (문제번호 : 1181)

#### \* 문제 : 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.

#### 1. 길이가 짧은 것부터

#### 2. 길이가 같으면 사전 순으로

#### 단, 중복된 단어는 하나만 남기고 제거해야 한다.

- 입력 : 첫째 줄에 단어의 개수 N이 주어진다. (1 ≤ N ≤ 20,000) 둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다. 주어지는 문자열의 길이는 50을 넘지 않는다.
- 출력 : 조건에 따라 정렬하여 단어들을 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N = parseInt(inputData.shift())

let wordSet = new Set(inputData)

let wordArray = Array.from(wordSet).sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length
  }
  if (a < b) return -1
  if (a > b) return 1
  return 0
})

console.log(wordArray.join('\n'))
```

#### \* 문제 풀이

1. shift() 메서드는 JavaScript 배열의 첫 번째 요소를 제거하고 그 요소를 반환합니다. 따라서 const N = parseInt(inputData.shift()) 코드는 inputData 배열의 첫 번째 요소를 제거하고 그 값을 숫자로 변환하여 N에 할당합니다.

```javascript
const N = parseInt(inputData.shift())
```

2. new Set(inputData)는 inputData 배열의 모든 요소를 포함하는 새로운 Set 객체를 생성합니다. Set은 JavaScript의 내장 데이터 구조 중 하나로, 중복된 요소를 포함하지 않는 컬렉션입니다. 즉, 같은 값을 가진 요소가 여러 개 있는 배열을 Set으로 변환하면 중복된 요소가 자동으로 제거됩니다.

```javascript
let wordSet = new Set(inputData)
```

3. if (a.length !== b.length) 구문은 두 문자열의 길이가 다르면 길이에 따라 먼저 정렬하도록 합니다. 그 이후 두 문자열의 길이가 동일한 경우에는 길이로 정렬할 수 없기 때문에 그 이후의 조건인 if (a < b) return -1; if (a > b) return 1; return 0; 구문이 사용됩니다. 이 조건은 길이가 동일한 두 문자열을 사전 순으로 정렬합니다. if (a < b) return -1; 이 구문은 문자열 a가 b보다 사전 순서상 앞에 오는 경우, 즉 a가 b보다 "작은" 경우를 처리합니다. 이 경우 정렬 함수는 -1을 반환하여 a가 b보다 앞에 위치하도록 합니다. if (a > b) return 1; 이 구문은 a가 b보다 "큰" 경우, 즉 a가 사전 순서상 b보다 뒤에 오는 경우를 처리합니다. 정렬 함수는 1을 반환하여 a가 b보다 뒤에 위치하도록 합니다.( JavaScript에서 문자열은 사전식(lexical) 비교를 사용하기 때문에 "<"와 ">"를 통해 비교 가능합니다.)

```javascript
if (a < b) return -1
if (a > b) return 1
return 0
```

결과 : `성공`

## 단계 10. 나이순 정렬 (문제번호 : 10814)

#### \* 문제 : 온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다. 이때, 회원들을 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 온라인 저지 회원의 수 N이 주어진다. (1 ≤ N ≤ 100,000) 둘째 줄부터 N개의 줄에는 각 회원의 나이와 이름이 공백으로 구분되어 주어진다. 나이는 1보다 크거나 같으며, 200보다 작거나 같은 정수이고, 이름은 알파벳 대소문자로 이루어져 있고, 길이가 100보다 작거나 같은 문자열이다. 입력은 가입한 순서로 주어진다.

- 출력 : 첫째 줄부터 총 N개의 줄에 걸쳐 온라인 저지 회원을 나이 순, 나이가 같으면 가입한 순으로 한 줄에 한 명씩 나이와 이름을 공백으로 구분해 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N = parseInt(inputData[0])

const array = []

for (let i = 1; i <= N; i++) {
  const temp = inputData[i].split(' ')
  const age = parseInt(temp[0])
  const name = temp[1]
  array.push([age, name])
}

array.sort((a, b) => {
  return a[0] - b[0]
})

console.log(array.map(point => point.join(' ')).join('\n'))
```

결과 : `성공`

## 단계 11. 좌표 압축 (문제번호 : 18870)

#### \* 문제 : 수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다. Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같아야 한다. X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.

- 입력 : 첫째 줄에 N이 주어진다. 둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.
- 출력 : 첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N = parseInt(inputData.shift())
const array = inputData[0].split(' ').map(Number)

const sortedArray = Array.from(new Set(array.slice())).sort((a, b) => a - b)
const compressObj = {}

for (let i = 0; i < sortedArray.length; i++) {
  compressObj[sortedArray[i]] = i
}

const result = array.map(element => compressObj[element])

console.log(result.join(' '))
```

#### \* 문제 풀이

1. 문제 자체를 해석하는데 어려움을 겪어 먼저 문제를 해석하자면 입력받은 좌표들을 오름차순으로 정렬 했을 때, 해당 값들의 index값 즉, 순서에 대한 숫자를 출력하는 문제입니다.

2. new Set(inputData)는 inputData 배열의 모든 요소를 포함하는 새로운 Set 객체를 생성합니다. Set은 JavaScript의 내장 데이터 구조 중 하나로, 중복된 요소를 포함하지 않는 컬렉션입니다. 즉, 같은 값을 가진 요소가 여러 개 있는 배열을 Set으로 변환하면 중복된 요소가 자동으로 제거됩니다. slice() 메서드를 이렇게 인자 없이 사용하면 원래의 배열을 그대로 복사하는 것입니다. 원본 배열을 변경하지 않고 새로운 배열을 만드는 것 입니다.

```javascript
const sortedArray = Array.from(new Set(array.slice())).sort((a, b) => a - b)
```

3. compressObj는 객체로 객체는 키-값 쌍의 모음입니다. 압축 결과를 매핑하기 위해 객체로 사용했습니다.

```javascript
const compressObj = {}
```

4. sortedArray에 있는 요소의 수 까지 반복되게 루프를 돌게 합니다. sortedArray에 있는 첫번째 요소의 값이 쌍을 이루어 compressObj에 입력되게 합니다. 예를들어, { '-10': 0 } -> { '-10': 0, '-9': 1 } -> { '2': 2, '-10': 0, '-9': 1 } -> { '2': 2, '4': 3, '-10': 0, '-9': 1 }로 추가되게 합니다.

```javascript
for (let i = 0; i < sortedArray.length; i++) {
  compressObj[sortedArray[i]] = i
}
```

5. JavaScript의 map 함수를 이용하여 원래의 배열인 array 배열의 각 요소를 compressObj 객체에 매핑한 결과를 새 배열로 만들어 줍니다.

```javascript
const result = array.map(element => compressObj[element])
```

6. .join(' ')메서드를 사용하여 result 배열의 모든 요소를 문자열로 변환하고, 그 사이에 공백 문자(' ')를 추가한 문자열을 출력되게 합니다.

```javascript
console.log(result.join(' '))
```

결과 : `성공`

<br/>
<br/>
- 백준코딩 단계 별 풀어보기 Step13 배열 링크

[<https://www.acmicpc.net/step/9>](https://www.acmicpc.net/step/9)

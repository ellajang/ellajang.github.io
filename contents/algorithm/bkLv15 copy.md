<!-- ---
date: '2023-08-14'
title: '백준-약수, 배수와 소수 2'
categories: ['algorithm']
summary: '이 게시글은 백준 약수, 배수와 소수 2 단계 중 1번부터 9번에 해당하는 문제를 JavaScript(NodeJS)언어로 풀이 방법에 대한 내용입니다.'
thumbnail: '../baekjoon.jpeg'
---

> 백준 약수, 배수와 소수 2단계 중 1번부터 9번 문제에 대한 풀이입니다. 사용한 언어는 **_JavaScript(NodeJS)_** 입니다. 이전 단계에서는 함수를 사용하지 않고 직접 알고리즘을 코딩하는 방식을 사용하여 직관적으로 알 수 있게 문제를 풀이했었습니다. 이번 단계에서는 함수도 사용하여 문제를 풀이하겠습니다.

## 단계 1. 최소공배수 (문제번호 : 1934)

#### \* 문제 : 두 자연수 A와 B에 대해서, A의 배수이면서 B의 배수인 자연수를 A와 B의 공배수라고 한다. 이런 공배수 중에서 가장 작은 수를 최소공배수라고 한다. 예를 들어, 6과 15의 공배수는 30, 60, 90등이 있으며, 최소 공배수는 30이다. 두 자연수 A와 B가 주어졌을 때, A와 B의 최소공배수를 구하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 둘째 줄부터 T개의 줄에 걸쳐서 A와 B가 주어진다. (1 ≤ A, B ≤ 45,000)

- 출력 : 첫째 줄부터 T개의 줄에 A와 B의 최소공배수를 입력받은 순서대로 한 줄에 하나씩 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const T = parseInt(inputData[0])

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

for (let i = 1; i <= T; i++) {
  const [A, B] = inputData[i].split(' ').map(Number)
  const GCD = gcd(A, B)
  const LCM = (A * B) / GCD
  console.log(LCM)
}
```

<br/>

#### \* 문제 풀이

1. 이 코드는 최대공약수를 찾는 함수입니다. b가 0일 경우 a는 b의 약수이므로 a를 반환합니다. b가 0이 아닐 경우, gcd(b, a % b)를 호출하여 재귀적으로 계산을 진행합니다. 여기서 a % b는 a를 b로 나눈 나머지입니다.재귀 호출을 계속 반복하다 보면 언젠가 b가 0이 되는 시점에 도달합니다. 그 때 a를 반환하고 재귀 호출을 종료합니다.

```javascript
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}
```

2. 이 코드는 A와 b의 최소공배수를 구하는 공식입니다. 최소공배수를 구하는 공식은 최대공배수 = 두 자연수의 곱 나누기 최대공약수를 해주면 됩니다.

```javascript
const LCM = (A * B) / GCD
```

결과 : `성공`

## 단계 2. 최소공배수 (문제번호 : 13241)

#### \* 문제 : 정수 B에 0보다 큰 정수인 N을 곱해 정수 A를 만들 수 있다면, A는 B의 배수이다.

##### 예:

##### - 10은 5의 배수이다 (5\*2 = 10)

##### - 10은 10의 배수이다(10\*1 = 10)

##### - 6은 1의 배수이다(1\*6 = 6)

##### - 20은 1, 2, 4,5,10,20의 배수이다.

##### 다른 예:

##### - 2와 5의 최소공배수는 10이고, 그 이유는 2와 5보다 작은 공배수가 없기 때문이다.

##### - 10과 20의 최소공배수는 20이다.

##### - 5와 3의 최소공배수는 15이다.

#### 당신은 두 수에 대하여 최소공배수를 구하는 프로그램을 작성 하는 것이 목표이다.

- 입력 : 한 줄에 두 정수 A와 B가 공백으로 분리되어 주어진다. 50%의 입력 중 A와 B는 1000(103)보다 작다. 다른 50%의 입력은 1000보다 크고 100000000(108)보다 작다. 추가: 큰 수 입력에 대하여 변수를 64비트 정수로 선언하시오. C/C++에서는 long long int를 사용하고, Java에서는 long을 사용하시오.

- 출력 : A와 B의 최소공배수를 한 줄에 출력한다.

```javascript
const fs = require('fs')
const [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}
const GCD = gcd(A, B)
const LCM = (A * B) / GCD
console.log(LCM)
```

결과 : `성공`
<br/>

## 단계 3. 분수 합 (문제번호 : 1735)

#### \* 문제 : 분수 A/B는 분자가 A, 분모가 B인 분수를 의미한다. A와 B는 모두 자연수라고 하자. 두 분수의 합 또한 분수로 표현할 수 있다. 두 분수가 주어졌을 때, 그 합을 기약분수의 형태로 구하는 프로그램을 작성하시오. 기약분수란 더 이상 약분되지 않는 분수를 의미한다.

- 입력 : 첫째 줄과 둘째 줄에, 각 분수의 분자와 분모를 뜻하는 두 개의 자연수가 순서대로 주어진다. 입력되는 네 자연수는 모두 30,000 이하이다.
- 출력 : 첫째 줄에 구하고자 하는 기약분수의 분자와 분모를 뜻하는 두 개의 자연수를 빈 칸을 사이에 두고 순서대로 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const [A, B] = inputData[0].split(' ').map(Number)
const [C, D] = inputData[1].split(' ').map(Number)

const sumFraction = [A * D + B * C, B * D]

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

const GCD = gcd(sumFraction[0], sumFraction[1])

console.log(sumFraction[0] / GCD, sumFraction[1] / GCD)
```

<br/>

#### \* 문제 풀이

1. 두 분수를 더했을때 결과값을 첫번째 값은 분자로, 두번쨰 값은 분모로 나눴습니다.

```javascript
const sumFraction = [A * D + B * C, B * D]
```

2. 더한 분수의 분모와 분자의 최대공약수를 구했습니다.

```javascript
const GCD = gcd(sumFraction[0], sumFraction[1])
```

3. 각각 분자와 분모에 구한 최대공약수로 나눠, 더이상 나뉘지 않는 값인 기약분수 형태로 출력하게 합니다.

```javascript
console.log(sumFraction[0] / GCD, sumFraction[1] / GCD)
```

결과 : `성공`
<br/>

## 단계 4. 가로수 (문제번호 : 2485)

#### \* 문제 : 직선으로 되어있는 도로의 한 편에 가로수가 임의의 간격으로 심어져있다. KOI 시에서는 가로수들이 모두 같은 간격이 되도록 가로수를 추가로 심는 사업을 추진하고 있다. KOI 시에서는 예산문제로 가능한 한 가장 적은 수의 나무를 심고 싶다. 편의상 가로수의 위치는 기준점으로 부터 떨어져 있는 거리로 표현되며, 가로수의 위치는 모두 양의 정수이다. 예를 들어, 가로수가 (1, 3, 7, 13)의 위치에 있다면 (5, 9, 11)의 위치에 가로수를 더 심으면 모든 가로수들의 간격이 같게 된다. 또한, 가로수가 (2, 6, 12, 18)에 있다면 (4, 8, 10, 14, 16)에 가로수를 더 심어야 한다. 심어져 있는 가로수의 위치가 주어질 때, 모든 가로수가 같은 간격이 되도록 새로 심어야 하는 가로수의 최소수를 구하는 프로그램을 작성하라. 단, 추가되는 나무는 기존의 나무들 사이에만 심을 수 있다.

- 입력 : 첫째 줄에는 이미 심어져 있는 가로수의 수를 나타내는 하나의 정수 N이 주어진다(3 ≤ N ≤ 100,000). 둘째 줄부터 N개의 줄에는 각 줄마다 심어져 있는 가로수의 위치가 양의 정수로 주어지며, 가로수의 위치를 나타내는 정수는 1,000,000,000 이하이다. 가로수의 위치를 나타내는 정수는 모두 다르고, N개의 가로수는 기준점으로부터 떨어진 거리가 가까운 순서대로 주어진다.

- 출력 : 모든 가로수가 같은 간격이 되도록 새로 심어야 하는 가로수의 최소수를 첫 번째 줄에 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N = parseInt(inputData[0])
const positions = inputData.slice(1).map(Number)

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

let distances = []
for (let i = 1; i < N; i++) {
  distances.push(positions[i] - positions[i - 1])
}

let commonGCD = distances[0]
for (let i = 1; i < distances.length; i++) {
  commonGCD = gcd(commonGCD, distances[i])
}

let additionalTrees = 0
for (let distance of distances) {
  additionalTrees += distance / commonGCD - 1
}

console.log(additionalTrees)
```

<br/>

#### \* 문제 풀이

1. 이 부분의 코드는 각 거리마다 새로 심어야 하는 나무의 수를 계산하고, 그 값을 additionalTrees에 더하는 역할을 합니다. 각 거리를 최대공약수로 나눠서 얼마나 많은 나무를 심어야 하는지 계산합니다. -1을 하는 이유는 현재 거리의 구간에서 이미 심어져 있는 나무의 수를 빼야하기 때문입니다.

```javascript
let additionalTrees = 0
for (let distance of distances) {
  additionalTrees += distance / commonGCD - 1
}
```

결과 : `성공`

<!-- ## 단계 5. 다음 소수 (문제번호 : 4134)

#### \* 문제 : 정수 n(0 ≤ n ≤ 4\*109)가 주어졌을 때, n보다 크거나 같은 소수 중 가장 작은 소수 찾는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 정수 n이 주어진다.

- 출력 : 각각의 테스트 케이스에 대해서 n보다 크거나 같은 소수 중 가장 작은 소수를 한 줄에 하나씩 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N = parseInt(inputData[0])
```

#### \* 문제 풀이

1. 초기에는 numberMap이 비어 있기 때문에 numberMap.has(num)는 false를 반환하고, else 블록의 코드가 실행됩니다. 그러면 numberMap.set(num, 1)을 통해 해당 num 값을 key로 가지는 항목이 numberMap에 추가되고, 그 key의 value는 1로 설정됩니다.

```javascript
for (let num of numbersN) {
  if (numberMap.has(num)) {
    numberMap.set(num, numberMap.get(num) + 1)
  } else {
    numberMap.set(num, 1)
  }
}
```

2. numberMap.get(num)은 numberMap에서 해당 num 값의 key에 연결된 value를 반환합니다. 이 value는 상근이가 해당 num 값을 가진 카드를 몇 장 가지고 있는지를 나타냅니다. 이 값을 result 배열에 추가합니다.

```javascript
result.push(numberMap.get(num))
```

결과 : `성공`

## 단계 6. 소수 구하기 (문제번호 : 1929)

#### \* 문제 : M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.
- 출력 : 한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = inputData[0].split(' ').map(Number)
const names = inputData.slice(1, N + 1)
const matchNames = inputData.slice(N + 1, M + N + 1)

const nameSet = new Set(names)

const result = matchNames.filter(name => nameSet.has(name))

console.log(result.length)
console.log(result.sort().join('\n'))
```

#### \* 문제 풀이

1. map() 함수는 새로운 배열을 반환하므로, filter() 함수를 사용하는 것이 더 적합하여 filter() 함수를 사용해줍니다. filter()함수는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열을 반환합니다.

```javascript
const result = matchNames.filter(name => nameSet.has(name))
```

결과 : `성공`

## 단계 7. 베르트랑 공준(문제번호 : 4948)

#### \* 문제 : 자연수를 원소로 갖는 공집합이 아닌 두 집합 A와 B가 있다. 이때, 두 집합의 대칭 차집합의 원소의 개수를 출력하는 프로그램을 작성하시오. 두 집합 A와 B가 있을 때, (A-B)와 (B-A)의 합집합을 A와 B의 대칭 차집합이라고 한다. 예를 들어, A = { 1, 2, 4 } 이고, B = { 2, 3, 4, 5, 6 } 라고 할 때, A-B = { 1 } 이고, B-A = { 3, 5, 6 } 이므로, 대칭 차집합의 원소의 개수는 1 + 3 = 4개이다.

- 입력 : 첫째 줄에 집합 A의 원소의 개수와 집합 B의 원소의 개수가 빈 칸을 사이에 두고 주어진다. 둘째 줄에는 집합 A의 모든 원소가, 셋째 줄에는 집합 B의 모든 원소가 빈 칸을 사이에 두고 각각 주어진다. 각 집합의 원소의 개수는 200,000을 넘지 않으며, 모든 원소의 값은 100,000,000을 넘지 않는다.
- 출력 : 첫째 줄에 대칭 차집합의 원소의 개수를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const [n, m] = inputData[0].split(' ').map(Number)
const dataA = new Set(inputData[1].split(' ').map(Number))
const dataB = new Set(inputData[2].split(' ').map(Number))

for (let a of dataA) {
  if (dataB.has(a)) {
    dataA.delete(a)
    dataB.delete(a)
  }
}

console.log(dataA.size + dataB.size)
```

#### \* 문제 풀이

1. for...of 구문은 반복가능한 객체 (즉, Array, Map, Set, String, TypedArray, arguments 객체 등을 포함한 내장 객체)에 대해 반복하며 각각의 개별 속성 값을 변수에 대입합니다.

```javascript
for (let a of dataA)
```

2. size 속성은 Set의 원소의 수를 반환합니다

```javascript
console.log(dataA.size + dataB.size)
```

결과 : `성공`

## 단계 8. 골드바흐 파티션(문제번호 : 17103)

#### \* 문제 : 문자열 S가 주어졌을 때, S의 서로 다른 부분 문자열의 개수를 구하는 프로그램을 작성하시오. 부분 문자열은 S에서 연속된 일부분을 말하며, 길이가 1보다 크거나 같아야 한다. 예를 들어, ababc의 부분 문자열은 a, b, a, b, c, ab, ba, ab, bc, aba, bab, abc, abab, babc, ababc가 있고, 서로 다른것의 개수는 12개이다.

- 입력 : 첫째 줄에 문자열 S가 주어진다. S는 알파벳 소문자로만 이루어져 있고, 길이는 1,000 이하이다.

- 출력 : 첫째 줄에 S의 서로 다른 부분 문자열의 개수를 출력한다.

```javascript
const fs = require('fs')
const S = fs.readFileSync(0).toString().trim()

const result = new Set()

for (i = 0; i < S.length; i++) {
  for (j = i + 1; j <= S.length; j++) {
    result.add(S.slice(i, j))
  }
}
console.log(result.size)
```

#### \* 문제 풀이

1. 중복을 허용하지 않으므로 서로 다른 부분 문자열만 저장시키기 위해 Set함수를 사용해줍니다.

```javascript
const result = new Set()
```

결과 : `성공`

## 단계 9. 창문 닫기(문제번호 : 13909)

#### \* 문제 : 문자열 S가 주어졌을 때, S의 서로 다른 부분 문자열의 개수를 구하는 프로그램을 작성하시오. 부분 문자열은 S에서 연속된 일부분을 말하며, 길이가 1보다 크거나 같아야 한다. 예를 들어, ababc의 부분 문자열은 a, b, a, b, c, ab, ba, ab, bc, aba, bab, abc, abab, babc, ababc가 있고, 서로 다른것의 개수는 12개이다.

- 입력 : 첫째 줄에 문자열 S가 주어진다. S는 알파벳 소문자로만 이루어져 있고, 길이는 1,000 이하이다.

- 출력 : 첫째 줄에 S의 서로 다른 부분 문자열의 개수를 출력한다.

```javascript
const fs = require('fs')
const S = fs.readFileSync(0).toString().trim()

const result = new Set()

for (i = 0; i < S.length; i++) {
  for (j = i + 1; j <= S.length; j++) {
    result.add(S.slice(i, j))
  }
}
console.log(result.size)
```

#### \* 문제 풀이

1. 중복을 허용하지 않으므로 서로 다른 부분 문자열만 저장시키기 위해 Set함수를 사용해줍니다.

```javascript
const result = new Set()
```

결과 : `성공`
<br/>
<br/> -->

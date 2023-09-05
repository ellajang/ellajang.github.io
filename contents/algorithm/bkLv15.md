---
date: '2023-08-14'
title: '백준-약수, 배수와 소수 2 (단계15)'
categories: ['algorithm']
summary: '이 게시글은 백준 약수, 배수와 소수 2 단계 중 1번부터 9번에 해당하는 문제를 JavaScript(NodeJS)언어로 풀이 방법에 대한 내용입니다.'
thumbnail: '../baekjoon.jpeg'
---

> 백준 약수, 배수와 소수2 중 1번부터 9번 문제에 대한 풀이입니다. 사용한 언어는 **_JavaScript(NodeJS)_** 입니다. 이전 단계에서는 함수를 사용하지 않고 직접 알고리즘을 코딩하는 방식을 사용하여 직관적으로 알 수 있게 문제를 풀이했었습니다. 이번 단계에서는 함수도 사용하여 문제를 풀이하겠습니다.

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

- 백준코딩 단계 별 풀어보기 Step15 약수, 배수와 소수 2 링크

[<https://www.acmicpc.net/step/18>](https://www.acmicpc.net/step/18)

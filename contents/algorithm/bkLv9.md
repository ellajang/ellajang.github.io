---
date: '2023-07-26'
title: '백준-약수, 배수와 소수'
categories: ['algorithm']
summary: '이 게시글은 백준 약수, 배수와 소수 단계 중 1번부터 6번에 해당하는 문제를 JavaScript(NodeJS)언어로 풀이 방법에 대한 내용입니다.	 '
thumbnail: '../baekjoon.jpeg'
---

> 백준 약수, 배수와 소수 단계 중 1번부터 6번 문제에 대한 풀이입니다. 사용한 언어는 **_JavaScript(NodeJS)_** 입니다.

## 단계 1. 배수와 약수 (문제번호 : 5086)

#### \* 문제 : 4 × 3 = 12이다. 이 식을 통해 다음과 같은 사실을 알 수 있다. 3은 12의 약수이고, 12는 3의 배수이다. 4도 12의 약수이고, 12는 4의 배수이다. 두 수가 주어졌을 때, 다음 3가지 중 어떤 관계인지 구하는 프로그램을 작성하시오.

1. 첫 번째 숫자가 두 번째 숫자의 약수이다.
2. 첫 번째 숫자가 두 번째 숫자의 배수이다.
3. 첫 번째 숫자가 두 번째 숫자의 약수와 배수 모두 아니다.

- 입력 : 입력은 여러 테스트 케이스로 이루어져 있다. 각 테스트 케이스는 10,000이 넘지않는 두 자연수로 이루어져 있다. 마지막 줄에는 0이 2개 주어진다. 두 수가 같은 경우는 없다.

- 출력 : 각 테스트 케이스마다 첫 번째 숫자가 두 번째 숫자의 약수라면 factor를, 배수라면 multiple을, 둘 다 아니라면 neither를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')

for (let i = 0; i < inputData.length; i++) {
  const [A, B] = inputData[i].split(' ').map(Number)
  if (A === 0 && B === 0) break

  if (B % A === 0) {
    console.log('factor')
  } else if (A % B === 0) {
    console.log('multiple')
  } else {
    console.log('neither')
  }
}
```

<br/>

#### \* 문제 풀이

1. 반복문과 조건문을 사용해서 문제를 풀었습니다. 입력받은 첫번째 데이터 A와 두번째 데이터 B가 0이 되면 멈추는 조건을 추가해줍니다.

```javascript
if (A === 0 && B === 0) break
```

결과 : `성공`

## 단계 2. 약수 구하기 (문제번호 : 2501)

#### \* 문제 : 어떤 자연수 p와 q가 있을 때, 만일 p를 q로 나누었을 때 나머지가 0이면 q는 p의 약수이다.

#### 6을 예로 들면,

6 ÷ 1 = 6 … 0<br/>
6 ÷ 2 = 3 … 0<br/>
6 ÷ 3 = 2 … 0<br/>
6 ÷ 4 = 1 … 2<br/>
6 ÷ 5 = 1 … 1<br/>
6 ÷ 6 = 1 … 0<br/>

#### 그래서 6의 약수는 1, 2, 3, 6, 총 네 개이다. 두 개의 자연수 N과 K가 주어졌을 때, N의 약수들 중 K번째로 작은 수를 출력하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 N과 K가 빈칸을 사이에 두고 주어진다. N은 1 이상 10,000 이하이다. K는 1 이상 N 이하이다.

- 출력 : 첫째 줄에 N의 약수들 중 K번째로 작은 수를 출력한다. 만일 N의 약수의 개수가 K개보다 적어서 K번째 약수가 존재하지 않을 경우에는 0을 출력하시오.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split(' ')
const [N, K] = inputData.map(input => parseInt(input))

result = []

for (i = 1; i <= N; i++) {
  if (N % i === 0) {
    result.push(i)
  }
}
if (result.length < K) {
  console.log(0)
} else {
  console.log(result[K - 1])
}
```

결과 : `성공`

## 단계 3. 약수들의 합 (문제번호 : 9506)

#### \* 문제 : 어떤 숫자 n이 자신을 제외한 모든 약수들의 합과 같으면, 그 수를 완전수라고 한다. 예를 들어 6은 6 = 1 + 2 + 3 으로 완전수이다. n이 완전수인지 아닌지 판단해주는 프로그램을 작성하라.

- 입력 : 입력은 테스트 케이스마다 한 줄 간격으로 n이 주어진다. (2 < n < 100,000) 입력의 마지막엔 -1이 주어진다.
- 출력 : 테스트케이스 마다 한줄에 하나씩 출력해야 한다. n이 완전수라면, n을 n이 아닌 약수들의 합으로 나타내어 출력한다(예제 출력 참고). 이때, 약수들은 오름차순으로 나열해야 한다. n이 완전수가 아니라면 n is NOT perfect. 를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const numbers = inputData.map(input => parseInt(input))

for (i = 0; i < numbers.length - 1; i++) {
  const N = numbers[i]
  let result = []
  let sum = 0
  for (j = 1; j < N; j++) {
    if (N % j === 0) {
      result.push(j)
    }
  }
  for (let k = 0; k < result.length; k++) {
    sum += result[k]
  }
  if (N === sum) {
    console.log(`${N} = ${result.join(' + ')}`)
  } else {
    console.log(`${N} is NOT perfect.`)
  }
}
```

<br/>

#### \* 문제 풀이

1. 입력 된 수 N 하나 씩 그의 결과 값을 출력해줘야 하기 때문에 반복문 안에서 변수를 초기화해줬습니다.

```javascript
for (i = 0; i < numbers.length - 1; i++) {
const N = numbers[i]
let result = []
let sum = 0
```

결과 : `성공`
<br/>

## 단계 4. 소수 찾기 (문제번호 : 1978)

#### \* 문제 : 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

- 입력 : 첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

- 출력 : 첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N = parseInt(inputData[0])
const numbers = inputData[1].split(' ').map(Number)

let cnt = 0
for (i = 0; i < N; i++) {
  let result = []
  for (j = 1; j <= numbers[i]; j++) {
    if (numbers[i] % j === 0) {
      result.push(j)
    }
  }
  if (result.length === 2) {
    ++cnt
  }
}

console.log(cnt)
```

결과 : `성공`
<br/>

## 단계 5. 소수 (문제번호 : 2581)

#### \* 문제 : 자연수 M과 N이 주어질 때 M이상 N이하의 자연수 중 소수인 것을 모두 골라 이들 소수의 합과 최솟값을 찾는 프로그램을 작성하시오. 예를 들어 M=60, N=100인 경우 60이상 100이하의 자연수 중 소수는 61, 67, 71, 73, 79, 83, 89, 97 총 8개가 있으므로, 이들 소수의 합은 620이고, 최솟값은 61이 된다.

- 입력 : 입력의 첫째 줄에 M이, 둘째 줄에 N이 주어진다. M과 N은 10,000이하의 자연수이며, M은 N보다 작거나 같다.
- 출력 : M이상 N이하의 자연수 중 소수인 것을 모두 찾아 첫째 줄에 그 합을, 둘째 줄에 그 중 최솟값을 출력한다. 단, M이상 N이하의 자연수 중 소수가 없을 경우는 첫째 줄에 -1을 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const M = parseInt(inputData[0])
const N = parseInt(inputData[1])

let decimal = []
let sum = 0
for (i = M; i < N + 1; i++) {
  let result = []
  for (j = 1; j <= i; j++) {
    if (i % j === 0) {
      result.push(j)
    }
  }
  if (result.length === 2) {
    decimal.push(i)
    sum += i
  }
}

if (decimal.length === 0) {
  console.log('-1')
} else {
  console.log(sum)
  console.log(Math.min(...decimal))
}
```

결과 : `성공`

## 단계 6. 소인수분해 (문제번호 : 11653)

#### \* 문제 : 정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 정수 N (1 ≤ N ≤ 10,000,000)이 주어진다.

- 출력 : N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. N이 1인 경우 아무것도 출력하지 않는다.

```javascript
const fs = require('fs')
let N = parseInt(fs.readFileSync(0).toString().trim())

for (let i = 2; i <= N; i++) {
  while (N % i === 0) {
    console.log(i)
    N /= i
  }
}
```

<br/>

#### \* 문제 풀이

1. N /= i는 N = N / i를 축약한 표현입니다. 이러한 축약 표현을 "복합 할당 연산자"라고 부릅니다.<br/>
   N += i는 N = N + i, N -= i는 N = N - i, N \*= i는 N = N \* i와 같이 동작합니다

```javascript
N /= i
```

결과 : `성공`

<br/>
<br/>

- 백준코딩 단계 별 풀어보기 Step9 약수, 배수와 소수 링크

  [<https://www.acmicpc.net/step/10>](https://www.acmicpc.net/step/10)

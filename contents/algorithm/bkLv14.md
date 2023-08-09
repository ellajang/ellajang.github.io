---
date: '2023-08-08'
title: '백준-집합과 맵'
categories: ['algorithm']
summary: '이 게시글은 백준 집합과 맵 단계 중 1번부터 8번에 해당하는 문제를 JavaScript(NodeJS)언어로 풀이 방법에 대한 내용입니다. 특정 원소가 속해 있는지 빠르게 찾거나, 각 원소에 대응되는 원소를 빠르게 찾는 자료구조를 배웁니다.	 '
thumbnail: '../baekjoon.jpeg'
---

> 백준 집합과 맵 단계 중 1번부터 8번 문제에 대한 풀이입니다. 사용한 언어는 **_JavaScript(NodeJS)_** 입니다.

## 단계 1. 숫자 카드 (문제번호 : 10815)

#### \* 문제 : 숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 가지고 있는지 아닌지를 구하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 상근이가 가지고 있는 숫자 카드의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 둘째 줄에는 숫자 카드에 적혀있는 정수가 주어진다. 숫자 카드에 적혀있는 수는 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다. 두 숫자 카드에 같은 수가 적혀있는 경우는 없다. 셋째 줄에는 M(1 ≤ M ≤ 500,000)이 주어진다. 넷째 줄에는 상근이가 가지고 있는 숫자 카드인지 아닌지를 구해야 할 M개의 정수가 주어지며, 이 수는 공백으로 구분되어져 있다. 이 수도 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다

- 출력 : 첫째 줄에 입력으로 주어진 M개의 수에 대해서, 각 수가 적힌 숫자 카드를 상근이가 가지고 있으면 1을, 아니면 0을 공백으로 구분해 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N = parseInt(inputData[0])
const cards = inputData[1].split(' ').map(Number)
const M = parseInt(inputData[2])
const matchCards = inputData[3].split(' ').map(Number)

const cardSet = new Set(cards)

const result = matchCards.map(card => (cardSet.has(card) ? 1 : 0))

console.log(result.join(' '))
```

<br/>

#### \* 문제 풀이

1. has() 메소드를 사용해서 특정 요소에 해당 객체가 존재하는지 확인해줍니다. 단 has()메소드는 Set또는 Map객체에서만 사용이 가능하기 때문에 유의해야합니다.

```javascript
const cardSet = new Set(cards) // 먼제 Set객체로 배열을 만들어줍니다.

const result = matchCards.map(card => (cardSet.has(card) ? 1 : 0)) // 이단계에서 요소가 있는지 아닌지 확인해주는 조건문을 사용해줍니다.
```

결과 : `성공`

## 단계 2. 문자열 집합 (문제번호 : 14425)

#### \* 문제 : 총 N개의 문자열로 이루어진 집합 S가 주어진다. 입력으로 주어지는 M개의 문자열 중에서 집합 S에 포함되어 있는 것이 총 몇 개인지 구하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 문자열의 개수 N과 M (1 ≤ N ≤ 10,000, 1 ≤ M ≤ 10,000)이 주어진다. 다음 N개의 줄에는 집합 S에 포함되어 있는 문자열들이 주어진다. 다음 M개의 줄에는 검사해야 하는 문자열들이 주어진다. 입력으로 주어지는 문자열은 알파벳 소문자로만 이루어져 있으며, 길이는 500을 넘지 않는다. 집합 S에 같은 문자열이 여러 번 주어지는 경우는 없다.

- 출력 : 첫째 줄에 M개의 문자열 중에 총 몇 개가 집합 S에 포함되어 있는지 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = inputData[0].split(' ').map(Number)
const words = inputData.slice(1, N + 1)

const matchWords = inputData.slice(N + 1, M + N + 1)

const wordSet = new Set(words)

let count = 0
const result = matchWords.map(word => (wordSet.has(word) ? ++count : 0))

console.log(count)
```

결과 : `성공`
<br/>

## 단계 3. 회사에 있는 사람 (문제번호 : 7785)

#### \* 문제 : 상근이는 세계적인 소프트웨어 회사 기글에서 일한다. 이 회사의 가장 큰 특징은 자유로운 출퇴근 시간이다. 따라서, 직원들은 반드시 9시부터 6시까지 회사에 있지 않아도 된다. 각 직원은 자기가 원할 때 출근할 수 있고, 아무때나 퇴근할 수 있다. 상근이는 모든 사람의 출입카드 시스템의 로그를 가지고 있다. 이 로그는 어떤 사람이 회사에 들어왔는지, 나갔는지가 기록되어져 있다. 로그가 주어졌을 때, 현재 회사에 있는 모든 사람을 구하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 로그에 기록된 출입 기록의 수 n이 주어진다. (2 ≤ n ≤ 106) 다음 n개의 줄에는 출입 기록이 순서대로 주어지며, 각 사람의 이름이 주어지고 "enter"나 "leave"가 주어진다. "enter"인 경우는 출근, "leave"인 경우는 퇴근이다. 회사에는 동명이인이 없으며, 대소문자가 다른 경우에는 다른 이름이다. 사람들의 이름은 알파벳 대소문자로 구성된 5글자 이하의 문자열이다.
- 출력 : 현재 회사에 있는 사람의 이름을 사전 순의 역순으로 한 줄에 한 명씩 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const n = parseInt(inputData[0])

const currentMembers = new Set()

for (let i = 1; i <= n; i++) {
  const [name, action] = inputData[i].split(' ')
  if (action === 'enter') {
    currentMembers.add(name)
  } else {
    currentMembers.delete(name)
  }
}

const result = [...currentMembers].sort((a, b) => {
  if (a > b) return -1
  else if (a < b) return 1
  else return 0
})
console.log(result.join('\n'))
```

<br/>

#### \* 문제 풀이

1. Array.prototype.sort() 메서드에서 사용되는 콜백 함수는 배열의 두 요소를 인자로 받아, 어느 것이 먼저 오는지를 결정합니다. sort() 함수의 콜백 내에서 문자열을 입력받을 경우, 이들은 사전순으로 비교됩니다.

```javascript
const result = [...currentMembers].sort((a, b) => {
  if (a > b) return -1
  else if (a < b) return 1
  else return 0
})
```

2. return 되는 값 -1, 1, 0은 배열의 순서를 나타냅니다. 반환값이 음수일 경우, a를 b보다 배열에서 앞쪽에 배치합니다. 반환값이 양수일 경우, a를 b보다 배열에서 뒷쪽에 배치합니다. 반환 값이 0일 경우, a와 b의 위치를 변경하지 않습니다.

```javascript
if (a > b) return -1
else if (a < b) return 1
else return 0
```

결과 : `성공`
<br/>

## 단계 4. 나는야 포켓몬 마스터 이다솜 (문제번호 : 1620)

#### \* 문제 : (생략)

- 입력 : 첫째 줄에는 도감에 수록되어 있는 포켓몬의 개수 N이랑 내가 맞춰야 하는 문제의 개수 M이 주어져. N과 M은 1보다 크거나 같고, 100,000보다 작거나 같은 자연수인데, 자연수가 뭔지는 알지? 모르면 물어봐도 괜찮아. 나는 언제든지 질문에 답해줄 준비가 되어있어. 둘째 줄부터 N개의 줄에 포켓몬의 번호가 1번인 포켓몬부터 N번에 해당하는 포켓몬까지 한 줄에 하나씩 입력으로 들어와. 포켓몬의 이름은 모두 영어로만 이루어져있고, 또, 음... 첫 글자만 대문자이고, 나머지 문자는 소문자로만 이루어져 있어. 아참! 일부 포켓몬은 마지막 문자만 대문자일 수도 있어. 포켓몬 이름의 최대 길이는 20, 최소 길이는 2야. 그 다음 줄부터 총 M개의 줄에 내가 맞춰야하는 문제가 입력으로 들어와. 문제가 알파벳으로만 들어오면 포켓몬 번호를 말해야 하고, 숫자로만 들어오면, 포켓몬 번호에 해당하는 문자를 출력해야해. 입력으로 들어오는 숫자는 반드시 1보다 크거나 같고, N보다 작거나 같고, 입력으로 들어오는 문자는 반드시 도감에 있는 포켓몬의 이름만 주어져. 그럼 화이팅!!!
- 출력 : 첫째 줄부터 차례대로 M개의 줄에 각각의 문제에 대한 답을 말해줬으면 좋겠어!!!. 입력으로 숫자가 들어왔다면 그 숫자에 해당하는 포켓몬의 이름을, 문자가 들어왔으면 그 포켓몬의 이름에 해당하는 번호를 출력하면 돼. 그럼 땡큐~ 이게 오박사님이 나에게 새로 주시려고 하는 도감이야. 너무 가지고 싶다ㅠㅜ. 꼭 만점을 받아줬으면 좋겠어!! 파이팅!!!

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = inputData[0].split(' ').map(Number)

const nameToNumber = new Map()
const numberToName = new Map()

for (let i = 0; i < N; i++) {
  const name = inputData[i + 1]
  nameToNumber.set(name, i + 1)
  numberToName.set(i + 1, name)
}

for (let i = 0; i < M; i++) {
  const result = inputData[N + i + 1]

  if (isNaN(result)) {
    console.log(nameToNumber.get(result))
  } else {
    console.log(numberToName.get(Number(result)))
  }
}
```

<br/>

#### \* 문제 풀이

1. Map 객체는 JavaScript에서 제공하는 내장 객체로 키-값 쌍을 저장하게 됩니다. 하나의 Map을 사용하여 키를 출력할땐 키를 값을 출력할땐 값을 출력하게 코드를 작성할 수 있지만 키와 값을 반대로하는 별도의 함수가 추가로 필요하기 때문에 Map을 두 개로 나눴습니다.

```javascript
const nameToNumber = new Map()
const numberToName = new Map()
```

2. nameToNumber.set(name, i + 1)는 nameToNumber 맵에 포켓몬 이름을 키로, 해당 포켓몬의 번호(인덱스 + 1)을 값으로 추가합니다. numberToName.set(i + 1, name)는 numberToName 맵에 포켓몬 번호를 키로, 해당 포켓몬의 이름을 값으로 추가합니다.

```javascript
for (let i = 0; i < N; i++) {
  const name = inputData[i + 1]
  nameToNumber.set(name, i + 1)
  numberToName.set(i + 1, name)
}
```

3. isNaN은 JavaScript 내장 함수로, "is Not a Number"의 약자입니다. 이 함수는 주어진 값이 숫자가 아니라면 true를 반환하고, 숫자라면 false를 반환합니다. 조건문이 문자일 때를 확인해야하므로 isNaN을 사용하였습니다.

```javascript
 if (isNaN(result))
```

결과 : `성공`

## 단계 5. 숫자 카드 2 (문제번호 : 10816)

#### \* 문제 : 숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 상근이가 가지고 있는 숫자 카드의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 둘째 줄에는 숫자 카드에 적혀있는 정수가 주어진다. 숫자 카드에 적혀있는 수는 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다. 셋째 줄에는 M(1 ≤ M ≤ 500,000)이 주어진다. 넷째 줄에는 상근이가 몇 개 가지고 있는 숫자 카드인지 구해야 할 M개의 정수가 주어지며, 이 수는 공백으로 구분되어져 있다. 이 수도 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다.

- 출력 : 첫째 줄에 입력으로 주어진 M개의 수에 대해서, 각 수가 적힌 숫자 카드를 상근이가 몇 개 가지고 있는지를 공백으로 구분해 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N = parseInt(inputData[0])
const numbersN = new Set(inputData[1].split(' ').map(Number))
const M = parseInt(inputData[2])
const numbersM = new Set(inputData[3].split(' ').map(Number))

const numberMap = new Map()

for (let num of numbersN) {
  if (numberMap.has(num)) {
    numberMap.set(num, numberMap.get(num) + 1)
  } else {
    numberMap.set(num, 1)
  }
}
let result = []
for (let num of numbersM) {
  if (numberMap.has(num)) {
    result.push(numberMap.get(num))
  } else {
    result.push(0)
  }
}

console.log(result.join(' '))
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

## 단계 6. 듣보잡 (문제번호 : 1764)

#### \* 문제 : 김진영이 듣도 못한 사람의 명단과, 보도 못한 사람의 명단이 주어질 때, 듣도 보도 못한 사람의 명단을 구하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M이 주어진다. 이어서 둘째 줄부터 N개의 줄에 걸쳐 듣도 못한 사람의 이름과, N+2째 줄부터 보도 못한 사람의 이름이 순서대로 주어진다. 이름은 띄어쓰기 없이 알파벳 소문자로만 이루어지며, 그 길이는 20 이하이다. N, M은 500,000 이하의 자연수이다. 듣도 못한 사람의 명단에는 중복되는 이름이 없으며, 보도 못한 사람의 명단도 마찬가지이다.
- 출력 : 듣보잡의 수와 그 명단을 사전순으로 출력한다.

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

## 단계 7. 대칭 차집합 (문제번호 : 1269)

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

## 단계 8. 서로 다른 부분 문자열의 개수(문제번호 : 11478)

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
<br/>

- 백준코딩 단계 별 풀어보기 Step14 집합과 맵 링크

[<https://www.acmicpc.net/step/49>](https://www.acmicpc.net/step/49)

---
date: '2023-07-19'
title: '백준-1차원 배열'
categories: ['algorithm']
summary: '이 게시글은 백준 1차원 배열 단계 중 1번부터 10번에 해당하는 문제를 JavaScript(NodeJS)언어로 풀이 방법에 대한 내용입니다. map,forEach등 배열에 필요한 메소드를 사용합니다.'
thumbnail: '../baekjoon.jpeg'
---

> 백준 1차원 배열 단계 중 1번부터 10번에 해당하는 문제에 대한 풀이입니다. 사용한 언어는 **_JavaScript(NodeJS)_** 입니다.

## 단계 1. 개수 세기 (문제번호 : 10807)

#### \* 문제 : 총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 정수의 개수 N(1 ≤ N ≤ 100)이 주어진다. 둘째 줄에는 정수가 공백으로 구분되어져있다. 셋째 줄에는 찾으려고 하는 정수 v가 주어진다. 입력으로 주어지는 정수와 v는 -100보다 크거나 같으며, 100보다 작거나 같다.
- 출력 : 첫째 줄에 입력으로 주어진 N개의 정수 중에 v가 몇 개인지 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N = parseInt(inputData[0])

const N_List = inputData[1].split(' ').map(Number)

const v = parseInt(inputData[2])

let count = 0

for (let i = 0; i < N; i++) {
  if (N_List[i] === v) {
    count++
  }
}

console.log(count)
```

<br/>

#### \* 문제 풀이

1. 입력되는 데이터가 총 세 줄로 줄바꿈으로 분리되어 받아지고 있습니다. split('\n')을 사용해서 줄바꿈을 기준으로 분리해서 배열로 만들어 줍니다.<br />
   예를들어,<br />
   11<br />
   1 4 1 2 4 2 4 2 3 4 4<br />
   2<br />
   로 입력이 되었을 때, split('\n')를 사용하게 되면 [ '11', '1 4 1 2 4 2 4 2 3 4 4', '2']
   의 형태의 배열이 나오게 되게 됩니다. trim()은 문자열의 시작과 끝의 공백을 제거하는데 사용되는데, 공백이 없으면 사용하지 않아도 되지만 백준에서 입력데이터에 공백이 들어간 경우가 있기 때문에 사용하는 것이 에러 방지를 위해 사용는 것이 좋다고 생각합니다.

```javascript
const inputData = fs.readFileSync(0).toString().trim().split('\n')
```

2. 배열의 첫번째는 정수의 개수 N, 두번째는 나열 된 정수들 N_List, 세번째는 찾으려는 정수 v를 나타냅니다.
   N_List에서 'map' 함수를 사용해서 inputData에 입력된 데이터의 두번째 데이터들을 호출해 새 배열로 반환하게 됩니다. ()안에는 새 배열로 반환할때 데이터를 어떻게 가공해서 반환하는지에 대한 조건을 입력해주면 됩니다.
   이 문제에서는 숫자 요소로 반환되어야 하기 때문에 Number를 입력해줬습니다.

```javascript
const N = parseInt(inputData[0])

const N_List = inputData[1].split(' ').map(Number)

const v = parseInt(inputData[2])
```

결과 : `성공`

## 단계 2. X보다 작은 수 (문제번호 : 10871)

#### \* 문제 : 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000) 둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

- 출력 : X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const [N, X] = inputData[0].split(' ').map(Number)

const A = inputData[1].split(' ').map(Number)

const result = []

for (let i = 0; i < N; i++) {
  if (A[i] < X) {
    result.push(A[i])
  }
}

console.log(result.join(' '))
```

<br/>

#### \* 문제 풀이

1. 백준 - 반복문단계 단계 8에서 설명한 배열 비구조화 할당을 사용해서 N과 X에 입력 된 데이터를 저장해줍니다.
   아래 두번째 방법으로도 가능하지만 코드 길이가 너무 길어지게 됩니다. 비구조화 할당을 사용하여 한줄로 줄이는 것이 깔끔합니다.

```javascript
const [N, X] = inputData[0].split(' ').map(Number)
```

```javascript
const inputDataSplit = inputData[0].split(' ')
const N = parseInt(inputDataSplit[0])
const X = parseInt(inputDataSplit[1])
```

2.  result로 빈 배열을 생성해줍니다. X보다 작은 수라는 조건과 부합하면 push로 result 배열에 추가해줍니다.

```javascript
const result = []
...
result.push(A[i])
```

3.' join(' ')' 메서드를 사용하여 result 배열의 모든 요소를 공백으로 구분한 문자열로 변환하고, 이를 출력합니다.

```javascript
console.log(result.join(' '))
```

결과 : `성공`

## 단계 3. 최소, 최대 (문제번호 : 10818)

#### \* 문제 : N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.
- 출력 : 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N = parseInt(inputData[0])

const N_List = inputData[1].split(' ').map(Number)

let minNumber = N_List[0]
let maxNumber = N_List[0]

for (let i = 1; i < N; i++) {
  if (N_List[i] < minNumber) {
    minNumber = N_List[i]
  }
  if (N_List[i] > maxNumber) {
    maxNumber = N_List[i]
  }
}

console.log(minNumber, maxNumber)
```

or

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N_List = inputData[1].split(' ').map(Number)

const minNumber = Math.min(...N_List)
const maxNumber = Math.max(...N_List)

console.log(minNumber, maxNumber)
```

<br/>

#### \* 문제 풀이

1. 두 가지 방법으로 풀이했습니다. 입력에서 정수 N을 주어줬기 때문에 이를 활용한 첫번째 방법을 구현했습니다. 우선 N_List의 첫 번째 요소를 최솟값(minNumber)과 최댓값(maxNumber)으로 초기화하고, 그 다음에는 for 루프를 사용하여 나머지 각 요소를 비교해보는 방법으로 코드를 작성했습니다. N_List[0]와 다른 요소들끼리 비교해서 N_List[0]보다 더크면 최댓값으로 저장하고, N_List[0]보다 더 작으면 최소값으로 저장하고 출력해주면 됩니다.

```javascript
if (N_List[i] < minNumber) {
  minNumber = N_List[i]
}
if (N_List[i] > maxNumber) {
  maxNumber = N_List[i]
}
```

2. Math.min과 Math.max을 활용해서 배열 중 최댓값과 최소값을 골라내어 저장시켜줍니다. '...' 연산자(spread operator)는 배열의 모든 요소를 개별적인 매개변수로 펼치는데 사용됩니다. 이를 사용하여 Math.min() 및 Math.max() 함수에 N_List의 모든 요소를 전달합니다.

```javascript
const minNumber = Math.min(...N_List)
const maxNumber = Math.max(...N_List)
```

3. 두가지 방법 중에 첫번째 방법은 for 루프를 통해 배열을 한 번 순회하였기 때문에 최소값과 최댓값을 구함에 있어, 메모리 사용량을 줄일 수 있습니다. 두번째 방법은 Math.min() 및 Math.max()를 각각 한 번씩만 호출해도, 실제로는 배열의 모든 요소를 두 번 순회하게 됩니다. 따라서 메모리 사용량은 첫번째 방법보다 크지만 코드가 간결해진다는 장점이 존재합니다.

결과 : `성공`
<br/>

## 단계 4. 최댓값 (문제번호 : 2562)

#### \* 문제 : 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오. 예를 들어, 서로 다른 9개의 자연수 3, 29, 38, 12, 57, 74, 40, 85, 61 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

- 입력 : 첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.

- 출력 : 첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let maxNumber = inputData[0]
let order = 1

for (let i = 0; i < 9; i++) {
  if (inputData[i] > maxNumber) {
    maxNumber = inputData[i]
    order = i + 1
  }
}

console.log(maxNumber)
console.log(order)
```

<br/>

#### \* 문제 풀이

1. inputData를 만들 때 .map(Number)를 추가하여 문자열 배열을 숫자 배열로 변환했습니다. 그렇지 않으면 숫자를 문자열과 비교하게 될 수 있습니다.

```javascript
const inputData = fs.readFileSync(0).toString().trim().split('\n').map(Number)
```

2.order 변수를 선언할 때 0이 아닌 1로 시작합니다. 문제에서 줄을 count할때 1부터(첫번째) 세기 시작하기 때문입니다.

```javascript
let order = 1
```

3.조건문을 사용하여 최댓값을 저장해주고, i는 0부터 시작하지만 문제에서는 번호를 1부터 부르기 때문에, i+1을 저장합니다.

```javascript
if (inputData[i] > maxNumber) {
  maxNumber = inputData[i]
  order = i + 1
}
```

결과 : `성공`
<br/>

## 단계 5. 공 넣기 (문제번호 : 10810)

#### \* 문제 : 도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 매겨져 있다. 또, 1번부터 N번까지 번호가 적혀있는 공을 매우 많이 가지고 있다. 가장 처음 바구니에는 공이 들어있지 않으며, 바구니에는 공을 1개만 넣을 수 있다. 도현이는 앞으로 M번 공을 넣으려고 한다. 도현이는 한 번 공을 넣을 때, 공을 넣을 바구니 범위를 정하고, 정한 바구니에 모두 같은 번호가 적혀있는 공을 넣는다. 만약, 바구니에 공이 이미 있는 경우에는 들어있는 공을 빼고, 새로 공을 넣는다. 공을 넣을 바구니는 연속되어 있어야 한다. 공을 어떻게 넣을지가 주어졌을 때, M번 공을 넣은 이후에 각 바구니에 어떤 공이 들어 있는지 구하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 N (1 ≤ N ≤ 100)과 M (1 ≤ M ≤ 100)이 주어진다. 둘째 줄부터 M개의 줄에 걸쳐서 공을 넣는 방법이 주어진다. 각 방법은 세 정수 i j k로 이루어져 있으며, i번 바구니부터 j번 바구니까지에 k번 번호가 적혀져 있는 공을 넣는다는 뜻이다. 예를 들어, 2 5 6은 2번 바구니부터 5번 바구니까지에 6번 공을 넣는다는 뜻이다. (1 ≤ i ≤ j ≤ N, 1 ≤ k ≤ N) 도현이는 입력으로 주어진 순서대로 공을 넣는다.

- 출력 : 1번 바구니부터 N번 바구니에 들어있는 공의 번호를 공백으로 구분해 출력한다. 공이 들어있지 않은 바구니는 0을 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = inputData[0].split(' ').map(Number)

const result = Array(N).fill(0)

for (let q = 1; q < M + 1; q++) {
  const [i, j, k] = inputData[q].split(' ').map(Number)
  for (let basket = i - 1; basket < j; basket++) {
    result[basket] = k
  }
}

console.log(result.join(' '))
```

<br/>

#### \* 문제 풀이

1. 먼저 저는 문제를 이해하기까지 시간이 걸렸습니다. 문제에 대해 예시를 들어 설명해보면<br />
   5 2<br />
   1 3 1<br />
   2 4 2<br />
   위와 같은 입력값을 받았을때 초기 상태는 <br />
   0 0 0 0 0<br />로 5(N)개의 모든 바구니가 비어있습니다. <br />
   첫 번째 작업 (1 3 1): 1번 바구니부터 3번 바구니까지 1번 공을 넣습니다. 그 결과는 다음과 같습니다.<br />
   1 1 1 0 0<br />
   두 번째 작업 (2 4 2): 2번 바구니부터 4번 바구니까지 2번 공을 넣습니다. 여기서 중요한 점은 이미 공이 있는 바구니에는 기존의 공을 빼고 새로운 공을 넣는다는 규칙입니다. 따라서, 2번, 3번, 4번 바구니에는 기존에 들어 있던 공(있을 경우)을 빼고 2번 공을 넣습니다. 그 결과는 다음과 같습니다.<br />
   1 2 2 2 0<br />
   최종 결과값은 1 2 2 2 0 가 됩니다.

2. N개의 요소를 갖는 배열을 만들고, 모든 요소를 0으로 초기화합니다.

```javascript
const result = Array(N).fill(0)
```

3. 입력 데이터의 두 번째 줄부터 M개의 줄까지를 순회합니다. [i, j, k]는 현재 줄의 문자열을 공백을 기준으로 분리하여 배열로 만든 후, Number를 사용해 각 요소를 숫자로 변환합니다. 그런 다음 구조 분해 할당을 사용해 i, j, k에 값을 저장합니다.

```javascript
for (let q = 1; q < M + 1; q++) {
  const [i, j, k] = inputData[q].split(' ').map(Number)
```

4. i번 바구니부터 j번 바구니까지를 순회합니다. 결과로 현재 바구니에 k번 공을 넣습니다.

```javascript
for (let basket = i - 1; basket < j; basket++) {
  result[basket] = k
}
```

결과 : `성공`
<br/>

## 단계 6. 공 바꾸기 (문제번호 : 10813)

#### \* 문제 : 도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 매겨져 있다. 바구니에는 공이 1개씩 들어있고, 처음에는 바구니에 적혀있는 번호와 같은 번호가 적힌 공이 들어있다. 도현이는 앞으로 M번 공을 바꾸려고 한다. 도현이는 공을 바꿀 바구니 2개를 선택하고, 두 바구니에 들어있는 공을 서로 교환한다.공을 어떻게 바꿀지가 주어졌을 때, M번 공을 바꾼 이후에 각 바구니에 어떤 공이 들어있는지 구하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 N (1 ≤ N ≤ 100)과 M (1 ≤ M ≤ 100)이 주어진다. 둘째 줄부터 M개의 줄에 걸쳐서 공을 교환할 방법이 주어진다. 각 방법은 두 정수 i j로 이루어져 있으며, i번 바구니와 j번 바구니에 들어있는 공을 교환한다는 뜻이다. (1 ≤ i ≤ j ≤ N) 도현이는 입력으로 주어진 순서대로 공을 교환한다.

- 출력 : 1번 바구니부터 N번 바구니에 들어있는 공의 번호를 공백으로 구분해 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = inputData[0].split(' ').map(Number)

const result = Array.from({ length: N }, (_, index) => index + 1)

for (let q = 1; q < M + 1; q++) {
  const [i, j] = inputData[q].split(' ').map(Number)
  const basket = result[i - 1]
  result[i - 1] = result[j - 1]
  result[j - 1] = basket
}

console.log(result.join(' '))
```

<br/>

#### \* 문제 풀이

1. 이 코드는 빈 배열 {length: N}에 대해 (\_, index) => index + 1 함수를 실행하여, [1, 2, 3, ..., N] 형태의 배열을 생성합니다. 여기서 \_는 현재 요소를 무시하겠다는 의미로, 이 경우에는 현재 요소가 빈 요소이므로 무시하고 인덱스를 활용합니다.

```javascript
const result = Array.from({ length: N }, (_, index) => index + 1)
```

2. result라는 배열에서 i-1번째 값을 가져와 basket라는 변수에 저장합니다. 이 값은 i번 바구니에 들어있는 공의 번호입니다. 배열의 인덱스는 0부터 시작하므로 i-1을 사용합니다.

```javascript
const basket = result[i - 1]
```

3. j번 바구니의 공을 i번 바구니로 옮깁니다. result[j-1]은 j번 바구니에 들어있는 공의 번호이고, 이 값을 result[i-1]에 할당함으로써 i번 바구니의 공을 j번 바구니의 공으로 교체합니다.

```javascript
result[i - 1] = result[j - 1]
```

4. i번 바구니에 원래 있던 공을 j번 바구니로 옮깁니다. basket는 i번 바구니에 원래 있던 공의 번호이고, 이 값을 result[j-1]에 할당함으로써 j번 바구니의 공을 i번 바구니의 공으로 교체합니다.

```javascript
result[j - 1] = basket
```

결과 : `성공`
<br/>

## 단계 7. 과제 안 내신 분..? (문제번호 : 5597)

#### \* 문제 : X대학 M교수님은 프로그래밍 수업을 맡고 있다. 교실엔 학생이 30명이 있는데, 학생 명부엔 각 학생별로 1번부터 30번까지 출석번호가 붙어 있다. 교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 제출 안 한 학생 2명의 출석번호를 구하는 프로그램을 작성하시오.

- 입력 : 입력은 총 28줄로 각 제출자(학생)의 출석번호 n(1 ≤ n ≤ 30)가 한 줄에 하나씩 주어진다. 출석번호에 중복은 없다.
- 출력 : 출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let attendees = new Set(Array.from({ length: 30 }, (_, index) => index + 1))

inputData.forEach(submitted => {
  if (attendees.has(submitted)) {
    attendees.delete(submitted)
  }
})
const minValue = Math.min(...attendees)
const maxValue = Math.max(...attendees)

console.log(minValue)
console.log(maxValue)
```

<br/>

#### \* 문제 풀이

1. 1부터 30까지 출석 번호를 배열로 만들어줍니다. 그 다음 'Set' 객체를 사용해줍니다. Set에는 특정 요소가 집합에 있는지 확인하는데 사용할 수 있는 has 메서드와 요소를 제거하는 delete 메서드가 있습니다.

```javascript
let attendees = new Set(Array.from({ length: 30 }, (_, index) => index + 1))
```

2. forEach 메소드는 배열을 순회하면서 각 요소에 대해 지정된 동작을 수행하며, 배열의 각 요소에 대해 한 번씩 콜백 함수를 호출합니다. submitted는 inputData 배열 내부의 각각의 데이터를 의미합니다. attendees 배열 내부 출석 번호와 submitted가 있는지 확인하고 있으면 해당 번호를 지워줍니다.

```javascript
inputData.forEach(submitted => {
  if (attendees.has(submitted)) {
    attendees.delete(submitted)
  }
})
```

3.  Math.min과 Math.max를 사용하여 최소값과 최대값을 계산할 때에는 배열의 요소들을 개별적인 인수로 전달하기 위해 스프레드 문법(...)을 사용해야 합니다. 예를들어, attendees = [...attendees]를 선언하고 Math.min(attendees)로 선언하게 되면 개별적인 인수를 전달하는 것이 아닌 배열을 전달하는 것이 되어 잘못 된 구문입니다. 또는 attendees = ...attendees로 작성하게 되면 ...attendees를 사용하여 배열을 개별 요소로 분해하고 나서, 해당 요소들을 attendees 변수에 할당하는 것은 문법적으로 잘못된 구문이기 때문에 아래와 같이 사용해줘야 합니다.

```javascript
const minValue = Math.min(...attendees)
const maxValue = Math.max(...attendees)
```

결과 : `성공`
<br/>

## 단계 8. 나머지 (문제번호 : 3052)

#### \* 문제 : 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

- 입력 : 첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.
- 출력 : 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n').map(Number)

const result = new Set()

for (let i = 0; i < 10; i++) {
  const N = inputData[i] % 42
  result.add(N)
}
console.log(result.size)
```

<br/>

#### \* 문제 풀이

1. Set 객체는 중복된 값을 허용하지 않기 때문에, 같은 나머지 값이 여러 번 등장하더라도 한 번만 저장되어 Set객체를 사용해 줍니다.
2. Set 객체는 push() 메서드를 제공하지 않으므로, 요소를 추가할 때는 add() 메서드를 사용해서 나머지 값을 result에 추가해줍니다.

```javascript
result.add(N)
```

3. .size 메서드를 사용하여 서로 다른 나머지의 개수를 구합니다.

```javascript
console.log(result.size)
```

결과 : `성공`
<br/>

## 단계 9. 바구니 뒤집기 (문제번호 : 10811)

#### \* 문제 : 도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 순서대로 적혀져 있다. 바구니는 일렬로 놓여져 있고, 가장 왼쪽 바구니를 1번째 바구니, 그 다음 바구니를 2번째 바구니, ..., 가장 오른쪽 바구니를 N번째 바구니라고 부른다. 도현이는 앞으로 M번 바구니의 순서를 역순으로 만들려고 한다. 도현이는 한 번 순서를 역순으로 바꿀 때, 순서를 역순으로 만들 범위를 정하고, 그 범위에 들어있는 바구니의 순서를 역순으로 만든다.바구니의 순서를 어떻게 바꿀지 주어졌을 때, M번 바구니의 순서를 역순으로 만든 다음, 바구니에 적혀있는 번호를 가장 왼쪽 바구니부터 출력하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 N (1 ≤ N ≤ 100)과 M (1 ≤ M ≤ 100)이 주어진다. 둘째 줄부터 M개의 줄에는 바구니의 순서를 역순으로 만드는 방법이 주어진다. 방법은 i j로 나타내고, 왼쪽으로부터 i번째 바구니부터 j번째 바구니의 순서를 역순으로 만든다는 뜻이다. (1 ≤ i ≤ j ≤ N) 도현이는 입력으로 주어진 순서대로 바구니의 순서를 바꾼다.

- 출력 : 모든 순서를 바꾼 다음에, 가장 왼쪽에 있는 바구니부터 바구니에 적혀있는 순서를 공백으로 구분해 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = inputData[0].split(' ').map(Number)

let result = Array.from({ length: N }, (_, index) => index + 1)

for (let q = 1; q < M + 1; q++) {
  const [i, j] = inputData[q].split(' ').map(Number)
  const reversed = result.slice(i - 1, j).reverse()
  result = [...result.slice(0, i - 1), ...reversed, ...result.slice(j)]
}

console.log(result.join(' '))
```

<br/>

#### \* 문제 풀이

1. JavaScript의 slice와 reverse 함수를 사용하여 역순으로 바꿔주는 조건을 만족시킬 수 있습니다.
2. 이 줄에서는 배열의 slice 메소드를 사용하여 i-1번째 부터 j번째까지의 바구니들을 선택하고, 그 선택된 부분을 reverse 메소드를 사용하여 뒤집습니다. slice(i - 1, j)는 i-1번째 요소부터 시작하여 j번째 요소 직전까지의 배열을 반환합니다. 📍slice 메소드는 시작 인덱스는 포함하고 종료 인덱스는 포함하지 않는 방식으로 작동합니다. 따라서 i-1 부터 j로 입력해주면 됩니다.

```javascript
const reversed = result.slice(i - 1, j).reverse()
```

3. 스프레드 연산자 (...)와 slice 메소드를 사용하여 원래의 배열을 뒤집은 부분을 중심으로 재조합 해줍니다.

- result.slice(0, i - 1)는 원래 배열의 처음부터 i-1번째 직전까지의 요소들을 가져옵니다.
- reversed는 위에서 뒤집은 바구니들입니다.
- result.slice(j)는 원래 배열의 j번째 부터 끝까지의 요소들을 가져옵니다.

```javascript
result = [...result.slice(0, i - 1), ...reversed, ...result.slice(j)]
```

결과 : `성공`
<br/>

## 단계 10. 평균 (문제번호 : 1546)

#### \* 문제 : 세준이는 기말고사를 망쳤다. 세준이는 점수를 조작해서 집에 가져가기로 했다. 일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 점수/M\*100으로 고쳤다.

#### 예를 들어, 세준이의 최고점이 70이고, 수학점수가 50이었으면 수학점수는 50/70\*100이 되어 71.43점이 된다. 세준이의 성적을 위의 방법대로 새로 계산했을 때, 새로운 평균을 구하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 시험 본 과목의 개수 N이 주어진다. 이 값은 1000보다 작거나 같다. 둘째 줄에 세준이의 현재 성적이 주어진다. 이 값은 100보다 작거나 같은 음이 아닌 정수이고, 적어도 하나의 값은 0보다 크다.
- 출력 : 첫째 줄에 새로운 평균을 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-2 이하이면 정답이다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N = parseInt(inputData[0])
const scores = inputData[1].split(' ').map(Number)

const M = Math.max(...scores)
let fixedScore = 0

for (let i = 0; i < N; i++) {
  fixedScore += (scores[i] / M) * 100
}

console.log(fixedScore / N)
```

<br/>

#### \* 문제 풀이

1. spread함수로 scores배열에 있는 데이터들을 나열하고 그 중 가장 큰 값을 M에 저장합니다.

```javascript
const M = Math.max(...scores)
```

2. 0으로 fixedScore를 초기화 해줍니다. 문제에서 요구한 평균값은 변환한 점수들을 합해서 N으로 나누기 때문에 각 점수를 변환한 값을 fixedScore에 바로바로 더해줍니다.

```javascript
let fixedScore = 0
for (let i = 0; i < N; i++) {
  fixedScore += (scores[i] / M) * 100
}
```

3. 결과로 변환된 점수를 모두 더한 fixedScore에 N을 나눠 결과값을 도출합니다.

```javascript
console.log(fixedScore / N)
```

결과 : `성공`
<br/>
<br/>

- 백준코딩 단계 별 풀어보기 Step4 1차원 배열 링크

  [<https://www.acmicpc.net/step/6>](https://www.acmicpc.net/step/6)
